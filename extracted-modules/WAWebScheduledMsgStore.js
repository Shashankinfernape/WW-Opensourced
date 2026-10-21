__d("WAWebScheduledMsgStore", [
    "Promise",
    "WATimeUtils",
    "WAWebBuildScheduledMsgModel",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgRevealKeyStore",
    "asyncToGeneratorRuntime",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isAssociationChild !== true && (yield b(e.chatId))) {
                return false;
            }
            yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                chatId: e.chatId,
                encIv: e.encIv,
                encPayload: e.encPayload,
                msgId: e.msgId,
                revealKey: e.revealKey,
                revealKeyId: e.revealKeyId,
                scheduledTimestampS: e.scheduledTimestampS,
                status: "PENDING",
                createdAt: o("WATimeUtils").unixTime(),
                senderJid: null,
                isAssociationChild: e.isAssociationChild === true ? true : void 0
            });
            return true;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.revealKey.byteLength === 0) {
                return null;
            }
            const t = yield o("WAWebScheduledMsgDecryptInnerProto").decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
            if (t == null) {
                return null;
            }
            return o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.revealKey.byteLength === 0) {
                return {
                    body: null,
                    isImage: false,
                    mentionedJidList: null
                };
            }
            const t = yield o("WAWebScheduledMsgDecryptInnerProto").decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
            if (t == null) {
                return {
                    body: null,
                    isImage: false,
                    mentionedJidList: null
                };
            }
            const n = o("WAWebExtractMentionFieldsFromScheduledMsg").extractMentionFieldsFromScheduledMsg(t);
            const r = n.mentionedJidList;
            const a = t.imageMessage;
            const i = a != null ? a.caption : o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
            return {
                body: i,
                isImage: a != null,
                mentionedJidList: r ?? null
            };
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeysForChat(e);
            return t.filter((e)=>(e.status === "PENDING" || e.status === "FAILED") && e.scheduledTimestampS > 0 && e.isAssociationChild !== true).sort((e, t)=>e.scheduledTimestampS - t.scheduledTimestampS);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = yield _(t);
            const a = yield (e || (e = n("Promise"))).all(r.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (e.revealKey.byteLength === 0) {
                        return null;
                    }
                    const t = yield o("WAWebScheduledMsgDecryptInnerProto").decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
                    if (t == null) {
                        return null;
                    }
                    const n = o("WAWebBuildScheduledMsgModel").buildScheduledMsgDataFromRecord(e, t);
                    if (n == null) {
                        return null;
                    }
                    return {
                        msgData: n,
                        msgId: e.msgId,
                        status: e.status,
                        scheduledTimestampS: e.scheduledTimestampS
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const i = [];
            for (const l of a){
                if (l != null) {
                    i.push(l);
                }
            }
            return i;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeysForChat(e);
            return r("countWhere")(t, function(e) {
                return e.status === "PENDING" && e.scheduledTimestampS > 0 && e.isAssociationChild !== true;
            });
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield y(e);
            return t >= o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT;
        });
        return v.apply(this, arguments);
    }
    l.storeScheduledMessage = s;
    l.decryptScheduledMsgBody = c;
    l.decryptScheduledMsgPreview = m;
    l.getScheduledMessagesForChat = _;
    l.getScheduledMsgDataForChat = g;
    l.getScheduledMessageCount = y;
    l.isChatAtScheduleLimit = b;
}, 98);