__d("WAWebSendReadReceiptJob", [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebApiChat",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebCoexV2SendReceipt",
    "WAWebDBMessageUtils",
    "WAWebDBPendingReadReceiptQueries",
    "WAWebHandlePlaceholderWam",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterStatusViewReceiptUtils",
    "WAWebPrivacySettings",
    "WAWebQbmMessageReadLogEvent",
    "WAWebSchemaMessage",
    "WAWebSendReceiptJobCommon",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumReadSource",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
    function _(serverStoreTimeMicros) {
        if (serverStoreTimeMicros == null || serverStoreTimeMicros <= 0) {
            return null;
        }
        return serverStoreTimeMicros;
    }
    function f(e, t) {
        if (e.isNewsletter() || e.isStatus() && t != null && t.isPSA() || r("WAWebWid").isPSA(e)) {
            return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
        }
        if (e.isGroup()) {
            return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ;
        }
        if (o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts === o("WAWebPrivacySettings").ALL_NONE.none) {
            return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
        }
        return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ;
    }
    function g(e) {
        if (e.isGroup() && o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts !== o("WAWebPrivacySettings").ALL_NONE.none && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ;
        }
        return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
    }
    function h({ botEditType, chat, sender }) {
        return (botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST || botEditType === o("WAWebBotTypes").BotMsgEditType.INNER) && chat.isGroup() && sender.isBot() && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "markChatRead"
            ])));
            const i = Date.now().toString();
            const l = String(e.id);
            const u = yield o("WAWebDBPendingReadReceiptQueries").queryPendingReadReceiptMsgRows(l, a);
            u.sort((e, t)=>{
                const n = e.rowId || 0;
                const r = t.rowId || 0;
                return n - r;
            });
            const c = t ? String(t) : null;
            let d = u.length - 1;
            if (c) {
                for(d; d >= 0 && u[d].id !== c; d--);
                if (d < 0) {
                    d = u.length - 1;
                }
            }
            let lastReadRowId = null;
            const y = [];
            for(d; d >= 0; d--){
                const C = u[d];
                const b = e.msgs.get(C.id);
                if (b && r("WAWebWid").isPSA(e.id)) {
                    o("WAWebWamChatPSALogger").logChatPSARead(b);
                }
                if (b) {
                    o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
                        msg: b,
                        chat: e,
                        readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT
                    });
                }
                if (C.rowId != null && (lastReadRowId == null || C.rowId > lastReadRowId)) {
                    lastReadRowId = C.rowId;
                }
                const v = r("WAWebMsgKey").fromString(C.id);
                if (C.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                    o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([
                        C
                    ]);
                    continue;
                }
                if (C.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
                    const S = C.broadcastId || C.from;
                    const R = C.author || C.from;
                    y.push({
                        id: v.id,
                        sender: o("WAWebWidFactory").createWidFromWidLike(R),
                        senderWithDevice: C.senderWithDevice != null ? o("WAWebWidFactory").createWidFromWidLike(C.senderWithDevice) : null,
                        metaFrom: C.metaFrom != null ? o("WAWebWidFactory").createWidFromWidLike(C.metaFrom) : null,
                        chat: o("WAWebWidFactory").createWidFromWidLike(S),
                        serverStoreTimeMicros: _(C.serverStoreTimeMicros),
                        botEditType: C.botEditType
                    });
                }
            }
            const L = x(e.id, y.filter((e)=>!h(e)));
            const { coexV2Reads, coexV2Recipient, regularReads } = L;
            const D = E(regularReads);
            const P = D[0];
            const N = D[1];
            const M = D[2];
            const w = D[3];
            yield (m || (m = n("Promise"))).all([].concat(Array.from(P.keys(), function(t) {
                const n = P.get(t);
                if (n) {
                    let r;
                    if (e.trusted) {
                        r = f(e.id);
                    } else {
                        r = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
                    }
                    return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: t,
                        type: r,
                        t: i,
                        groupedReceipt: n,
                        threadId: o("WAWebBotUtils").isMetaAiBot(e.id) ? a : undefined,
                        maxStsByAuthor: M.get(t)
                    });
                }
            }), Array.from(N.keys(), function(e) {
                const t = N.get(e);
                if (t) {
                    return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: e,
                        type: g(e),
                        t: i,
                        groupedReceipt: t,
                        maxStsByAuthor: w.get(e)
                    });
                }
            })));
            yield $({
                chatId: e.id,
                coexV2Reads,
                coexV2Recipient,
                t: i,
                trusted: e.trusted
            });
            return o("WAWebApiChat").markMessageAndChatAsRead({
                lastReadRowId,
                chatId: l,
                keepChatUnread: false,
                threadId: a
            });
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = e.id;
            if (!o("WAWebMsgGetters").getIsStatus(e)) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "markStatusRead: message is not a status."
                ])));
                return;
            }
            const i = o("WAWebMsgGetters").getIsNewsletterStatus(e);
            const l = o("WAWebMsgGetters").getIsGroupStatus(e) || i ? e.id.remote : p;
            const s = a.fromMe && !S(l);
            const d = (n == null || n.sendReceipt === true) && !s;
            if (d) {
                const m = i ? l : r("nullthrows")(a.participant);
                yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: l,
                    type: a.fromMe ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF : f(l, i ? undefined : m),
                    t: String(t),
                    receiptClass: i ? "status" : undefined,
                    isStatusReceipt: true,
                    groupedReceipt: new Map([
                        [
                            m,
                            [
                                a.id
                            ]
                        ]
                    ])
                });
                if (i) {
                    const _ = e.serverId;
                    if (_ != null) {
                        o("WAWebNewsletterStatusViewReceiptUtils").sendNewsletterStatusViewReceipt(l, a, _).catch((e)=>{
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[newsletter][status] view receipt send failed"
                            ]))).sendLogs("newsletter-status-view-receipt-fail");
                        });
                    }
                }
            }
            const g = {
                ack: o("WAWebAck").ACK.READ
            };
            if (a.participant && a.participant.isPSA()) {
                g.statusPSAReadTimestamp = t;
            }
            const h = [
                babelHelpers.extends({
                    id: a.toString()
                }, g)
            ];
            const y = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
            if (y) {
                h.push(babelHelpers.extends({
                    id: y.toString()
                }, g));
            }
            yield o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(h);
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return e.isStatus() && o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled();
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = String(o("WATimeUtils").unixTime());
            const r = E(e.filter((e)=>!o("WAWebUserPrefsMeUser").isSerializedWidMe(e.sender)).map((e)=>({
                    chat: e.msgKey.remote,
                    sender: o("WAWebWidFactory").createWidFromWidLike(e.sender),
                    id: e.msgKey.id
                })));
            const a = r[0];
            yield (m || (m = n("Promise"))).all(Array.from(a.keys(), function(e) {
                const n = a.get(e);
                if (n) {
                    return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: e,
                        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
                        t,
                        groupedReceipt: n
                    });
                }
            }));
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        const t = new Map;
        const n = new Map;
        const r = new Map;
        const o = new Map;
        e.forEach(({ chat, id, sender, serverStoreTimeMicros })=>{
            const d = !chat.isBot() && sender.isBot();
            const m = d ? n : t;
            const p = d ? o : r;
            const _ = m.get(chat) ?? new Map;
            const f = _.get(sender) ?? [];
            f.push(id);
            _.set(sender, f);
            m.set(chat, _);
            if (serverStoreTimeMicros != null && serverStoreTimeMicros > 0) {
                const y = p.get(chat) ?? new Map;
                const C = y.get(sender) ?? 0;
                if (serverStoreTimeMicros > C) {
                    y.set(sender, serverStoreTimeMicros);
                }
                p.set(chat, y);
            }
        });
        return [
            t,
            n,
            r,
            o
        ];
    }
    function k(e, t, n) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = String(e);
            const i = o("WAWebBotUtils").isMetaAiBot(e);
            const l = yield o("WAWebDBPendingReadReceiptQueries").queryUnreadEditedMsgRows(a, i ? n : undefined);
            if (!l.length) {
                return {
                    fullyReadThreadIds: []
                };
            }
            const s = new Set;
            const u = l.map((t)=>{
                const a = r("WAWebMsgKey").fromString(t.latestEditMsgKey);
                const i = t.author || t.from;
                if (n == null) {
                    for (const l of o("WAWebDBMessageUtils").getThreadIdsFromMessage(t)){
                        s.add(l.toString());
                    }
                } else {
                    s.add(n.toString());
                }
                return {
                    id: a.id,
                    sender: o("WAWebWidFactory").createWidFromWidLike(i),
                    senderWithDevice: t.senderWithDevice != null ? o("WAWebWidFactory").createWidFromWidLike(t.senderWithDevice) : null,
                    metaFrom: t.metaFrom != null ? o("WAWebWidFactory").createWidFromWidLike(t.metaFrom) : null,
                    chat: o("WAWebWidFactory").createWidFromWidLike(e),
                    serverStoreTimeMicros: _(t.serverStoreTimeMicros),
                    botEditType: t.botEditType
                };
            });
            const c = x(e, u.filter((e)=>!h(e)));
            const { coexV2Reads, coexV2Recipient, regularReads } = c;
            const y = E(regularReads);
            const C = y[0];
            const b = y[1];
            const v = y[2];
            const S = y[3];
            const R = C.get(e);
            const L = b.get(e);
            const k = Date.now().toString();
            if (R) {
                let I;
                if (t.trusted) {
                    I = f(e);
                } else {
                    I = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
                }
                yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: e,
                    type: I,
                    t: k,
                    groupedReceipt: R,
                    threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : undefined,
                    maxStsByAuthor: v.get(e)
                });
            }
            if (L) {
                yield o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: e,
                    type: g(e),
                    t: k,
                    groupedReceipt: L,
                    maxStsByAuthor: S.get(e)
                });
            }
            yield $({
                chatId: e,
                coexV2Reads,
                coexV2Recipient,
                t: k,
                trusted: t.trusted
            });
            const readMsgKeys = l.map((e)=>r("WAWebMsgKey").fromString(e.latestEditMsgKey));
            const D = yield o("WAWebApiChat").markEditedMessageAndChatAsRead({
                chatId: e,
                readMsgKeys,
                threadId: n
            });
            return D;
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return e.senderWithDevice != null && e.senderWithDevice.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && e.metaFrom != null && !o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom);
    }
    function D(coexV2Reads) {
        let t = null;
        for (const n of coexV2Reads){
            const r = n.serverStoreTimeMicros;
            if (r != null && (t == null || r > t)) {
                t = r;
            }
        }
        return t;
    }
    function x(t, n) {
        const a = {
            coexV2Reads: [],
            coexV2Recipient: null,
            regularReads: n
        };
        if (!n.some(T) || !t.isUser() || t.isBot() || o("WAWebUserPrefsMeUser").isSerializedWidMe(String(t)) || !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()) {
            return a;
        }
        let coexV2Recipient;
        try {
            coexV2Recipient = r("nullthrows")(o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(t));
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] no represented LID for the read receipt"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-read-receipt-lid-unresolved");
            return a;
        }
        const coexV2Reads = [];
        const s = [];
        for (const u of n){
            if (T(u)) {
                coexV2Reads.push(u);
            } else {
                s.push(u);
            }
        }
        return {
            coexV2Reads,
            coexV2Recipient,
            regularReads: s
        };
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, coexV2Reads, coexV2Recipient, t: t_1, trusted }) {
            if (!(coexV2Recipient == null || coexV2Reads.length === 0)) {
                try {
                    yield o("WAWebCoexV2SendReceipt").sendCoexV2ReadReceipt({
                        externalIds: coexV2Reads.map((e)=>e.id),
                        isReadSelf: !trusted || f(chatId) === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
                        maxSts: D(coexV2Reads),
                        recipient: coexV2Recipient,
                        t: t_1
                    });
                } catch (error) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] failed to send read receipt"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-read-receipt-error");
                }
            }
        });
        return P.apply(this, arguments);
    }
    l.getReadReceiptType = f;
    l.getAgentReadReceiptType = g;
    l.markChatRead = y;
    l.markStatusRead = b;
    l.sendAddOnReadReceipts = R;
    l.groupMsgIdsByChatThenSender = E;
    l.markEditedMsgsRead = k;
}, 98);