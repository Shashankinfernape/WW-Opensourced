__d("WAWebDBMessageRange", [
    "Promise",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufMsgKeyUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 1000;
    function m(e) {
        return o("WAWebSchemaMessage").getMessageTable().between([
            "messageRangeIndex"
        ], o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, o("WAWebDBMessageRangeIndex").MessagePropertyType.IncomingChatMessage), o("WAWebDBMessageStoreUtils").endOfMessageRange(e, o("WAWebDBMessageRangeIndex").MessagePropertyType.IncomingChatMessage), {
            lowerInclusive: true,
            reverse: true,
            limit: 1,
            shouldDecrypt: false
        }).then((e)=>o("WAWebDBMessageStoreUtils").extractC2STimestampFromMessageRangeIndex(e[0]?.messageRangeIndex));
    }
    function p(e) {
        return o("WAWebSchemaMessage").getMessageTable().between([
            "messageRangeIndex"
        ], o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage), o("WAWebDBMessageStoreUtils").endOfMessageRange(e, o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage), {
            lowerInclusive: true,
            reverse: true,
            limit: 1,
            shouldDecrypt: false
        }).then((e)=>o("WAWebDBMessageStoreUtils").extractC2STimestampFromMessageRangeIndex(e[0]?.messageRangeIndex));
    }
    function _(e) {
        return o("WAWebSchemaMessage").getMessageTable().between([
            "messageRangeIndex"
        ], o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage), o("WAWebDBMessageStoreUtils").endOfMessageRange(e, o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage), {
            lowerInclusive: true,
            reverse: false,
            limit: 1,
            shouldDecrypt: false
        }).then((e)=>o("WAWebDBMessageStoreUtils").extractC2STimestampFromMessageRangeIndex(e[0]?.messageRangeIndex));
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let a;
            let i;
            const l = o("WAWebSchemaMessage").getMessageTable().between([
                "messageRangeIndex"
            ], (a = o("WAWebDBMessageStoreUtils")).beginningOfMessageRange(e, (i = o("WAWebDBMessageRangeIndex")).MessagePropertyType.Outgoing, t), a.endOfMessageRange(e, i.MessagePropertyType.Outgoing), {
                reverse: true,
                shouldDecrypt: false
            });
            const s = o("WAWebSchemaMessage").getMessageTable().anyOf([
                "messageRangeIndex"
            ], [
                a.beginningOfMessageRange(e, i.MessagePropertyType.IncomingChatMessage, t),
                a.beginningOfMessageRange(e, i.MessagePropertyType.Outgoing, t),
                a.beginningOfMessageRange(e, i.MessagePropertyType.Outgoing)
            ], {
                reverse: true,
                shouldDecrypt: false
            });
            const u = yield (c || (c = n("Promise"))).all([
                l,
                s
            ]).then(([t, n])=>{
                const a = function(t) {
                    return !(t.ack === -1 && t.isSendFailure === true || t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE);
                };
                const i = t.concat(n).filter(a);
                const l = function(t) {
                    const n = r("WAWebMsgKey").fromString(t.id);
                    const a = o("WAWebDBMessageStoreUtils").extractC2STimestampFromMessageRangeIndex(t.messageRangeIndex) ?? undefined;
                    const i = {
                        key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(n),
                        timestamp: a
                    };
                    return i;
                };
                return i.map(l);
            });
            const m = limitAdditionalMessages(u, d);
            const { messages, newLastMessageTimestamp } = m;
            return {
                messages,
                newLastMessageTimestamp
            };
        });
        return g.apply(this, arguments);
    }
    function limitAdditionalMessages(e, t) {
        const n = [];
        const a = [];
        e.forEach((e)=>{
            if (e.timestamp != null) {
                n.push(e);
            } else {
                a.push(e);
            }
        });
        if (n.length < t) {
            return {
                messages: e
            };
        }
        const i = n.sort(y).slice(0, t);
        const l = i[i.length - 1];
        I(l.timestamp, "smallestTimestampMessage");
        return {
            messages: i.concat(a),
            newLastMessageTimestamp: o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(l.timestamp))
        };
    }
    function y(e, t) {
        const n = [
            e,
            t
        ].map((e)=>o("WALongInt").numberOrThrowIfTooLarge(r("nullthrows")(e.timestamp)));
        const a = n[0];
        const i = n[1];
        return i - a;
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, lastMessageTimestamp, messagePropertyType, options }) {
            let i = yield o("WAWebSchemaMessage").getMessageTable().between([
                "messageRangeIndex"
            ], o("WAWebDBMessageStoreUtils").beginningOfMessageRange(chatId, messagePropertyType), o("WAWebDBMessageStoreUtils").beginningOfMessageRange(chatId, messagePropertyType, o("WALongInt").numberOrThrowIfTooLarge(lastMessageTimestamp)), {
                lowerInclusive: true,
                upperInclusive: true,
                shouldDecrypt: false
            });
            if (messagePropertyType === o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage) {
                i = i.filter((e)=>!o("WAWebDBMessageStoreUtils").isInitialEncryptionMessage(e));
            }
            if (options?.forceDeleteAllMessagesExceptInitialEncryption === true) {
                return i.map((e)=>e.id);
            }
            if (messagePropertyType === o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage && options?.skipRecentSystemMessages !== false) {
                i = i.filter((e)=>!(o("WAWebDBMessageStoreUtils").isSecuritySensitiveMessage(e) && e.t > o("WATimeUtils").unixTime() - o("WATimeUtils").DAY_SECONDS));
            }
            if (options?.skipStarred !== false) {
                i = i.filter((e)=>e.isStarred === undefined);
            }
            if (options?.skipScheduledMessages === true) {
                i = i.filter((e)=>e.viewMode !== o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE);
            }
            if (messagePropertyType === o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage) {
                let l;
                for(let s = i.length - 1; s >= 0; s--){
                    if (o("WAWebDBMessageStoreUtils").isBotSystemMessageToPreserveOnClear(i[s])) {
                        l = i[s].id;
                        break;
                    }
                }
                if (l != null) {
                    i = i.filter((e)=>e.id !== l);
                }
            }
            return i.map((e)=>e.id);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebDBMessageUtils").beginningOfChat(e);
            const n = o("WAWebDBMessageUtils").endOfChat(e);
            const r = yield o("WAWebSchemaMessage").getMessageTable().between([
                "messageRangeIndex"
            ], t, n, {
                lowerInclusive: true,
                shouldDecrypt: false
            });
            return r.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE).map((e)=>e.id);
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, messages, options }) {
            const i = messages.map((e)=>o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(r("nullthrows")(e.key)).toString());
            const l = [];
            if (chatId.isGroup()) {
                i.forEach((e)=>{
                    const t = r("WAWebMsgKey").fromString(e);
                    if (t.fromMe) {
                        const n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
                        if (n) {
                            l.push(n.toString());
                        }
                    }
                });
            }
            const s = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(i.concat(l));
            const u = [];
            s.forEach((e)=>{
                if (e != null) {
                    if (options?.skipStarred !== false && e.isStarred != null || options?.skipScheduledMessages === true && e.viewMode === o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE) {
                        return;
                    }
                    u.push(e.id);
                }
            });
            return u;
        });
        return L.apply(this, arguments);
    }
    function E({ chatId, options, range }) {
        const { lastMessageTimestamp, lastSystemMessageTimestamp, messages } = range;
        return o("WAWebModelStorageUtils").getStorage().lock([
            "message",
            "message-association"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([u]) {
                let d = [];
                const m = [];
                if (lastMessageTimestamp != null) {
                    m.push(C({
                        chatId,
                        lastMessageTimestamp,
                        messagePropertyType: o("WAWebDBMessageRangeIndex").MessagePropertyType.IncomingChatMessage,
                        options
                    }));
                    m.push(C({
                        chatId,
                        lastMessageTimestamp,
                        messagePropertyType: o("WAWebDBMessageRangeIndex").MessagePropertyType.Outgoing,
                        options
                    }));
                }
                const lastMessageTimestamp_1 = lastSystemMessageTimestamp ?? lastMessageTimestamp;
                if (lastMessageTimestamp_1 != null) {
                    m.push(C({
                        chatId,
                        lastMessageTimestamp: lastMessageTimestamp_1,
                        messagePropertyType: o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
                        options
                    }));
                }
                m.push(R({
                    chatId,
                    messages,
                    options
                }));
                if (options?.deleteAutomatedGreetingMessages === true) {
                    m.push(v(chatId));
                }
                const _ = yield (c || (c = n("Promise"))).all(m);
                d = d.concat(..._);
                const f = options?.skipMessages;
                if (f) {
                    d = d.filter((e)=>!f.has(e));
                }
                yield c.all([
                    u.bulkRemove(d),
                    o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeys(d)
                ]);
                return d;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function k(t) {
        const t_messages = t.messages;
        const i = {
            messages: t_messages,
            lastMessageTimestamp: t.lastMessageTimestamp
        };
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: additionalMessages length: ",
            ""
        ])), t_messages.length);
        if (t_messages.length > d) {
            const l = limitAdditionalMessages(t_messages, d);
            const { messages, newLastMessageTimestamp } = l;
            if (newLastMessageTimestamp != null) {
                i.lastMessageTimestamp = newLastMessageTimestamp;
                I(i.lastMessageTimestamp, "resultantRange");
            }
            i.messages = messages;
        }
        if (o("WALongInt").numberOrThrowIfTooLarge(t.lastSystemMessageTimestamp ?? 0) > o("WALongInt").numberOrThrowIfTooLarge(i.lastMessageTimestamp ?? 0)) {
            i.lastSystemMessageTimestamp = t.lastSystemMessageTimestamp;
        }
        return i;
    }
    function I(e, t) {
        try {
            if (o("WALongInt").numberOrThrowIfTooLarge(e ?? 0) / o("WATimeUtils").unixTime() > 10) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: large timestamp: ",
                    " returned a large timestamp: ",
                    ""
                ])), t, e).sendLogs(`syncd: ${t} returned a large timestamp`);
            }
        } catch (error) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: error reporting logMaybeMillisecondTimestamp for ",
                ": ",
                ""
            ])), e, error);
        }
    }
    const T = {
        limitAdditionalMessages
    };
    l.getLastMessageTimestamp = m;
    l.getLastSystemMessageTimestamp = p;
    l.getFirstSystemMessageTimestamp = _;
    l.getAdditionalMessages = f;
    l.timestampComparison = y;
    l.deleteMessagesInMessageRange = E;
    l.fixMessageRange = k;
    l.logMaybeMillisecondTimestamp = I;
    l._test = T;
}, 98);