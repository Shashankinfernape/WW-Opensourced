__d("WAWebHandleMsgReceiptCommon", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebActiveMessageRanges",
    "WAWebApiActiveMessageRanges",
    "WAWebApiChat",
    "WAWebApiOrphanReceipt",
    "WAWebBackendApi",
    "WAWebBotUtils",
    "WAWebChatThreadLogging",
    "WAWebDBBulkGetRootMsgs",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebGetChatRecordByAccountLid",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMessageReceiptUtils",
    "WAWebMsgKey",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDBUtils",
    "WAWebPromiseQueue",
    "WAWebSchemaMessage",
    "WAWebStatusGatingUtils",
    "WAWebThreadId",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    const S = new (o("WAWebPromiseQueue")).PromiseQueue;
    function R(msgs) {
        let t = null;
        for (const n of msgs){
            if (n.pendingReadReceipt != null && n.rowId != null && (t == null || n.rowId > t)) {
                t = n.rowId;
            }
        }
        return t;
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = Array.from(new Set(e.map(String)));
            const n = yield o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(t);
            const r = [];
            const maybeOrphans = [];
            n.forEach((e, n)=>{
                if (e != null) {
                    r.push(e);
                } else {
                    maybeOrphans.push(t[n]);
                }
            });
            return {
                maybeOrphans,
                msgs: r
            };
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.length > 0) {
                const n = r("WAWebMsgKey").fromString(e[0].id).remote;
                if (t.isLid() !== n.isLid()) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "receipt-actualremote: branch=matched-msg receiptRemote=",
                        " receiptIsLid=",
                        " resolved=",
                        " resolvedIsLid=",
                        ""
                    ])), t.toLogString(), t.isLid(), n.toLogString(), n.isLid());
                }
                return n;
            }
            if (t.isLid()) {
                const a = yield o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(t);
                if (a.length > 0) {
                    const i = o("WAWebWidFactory").createWid(a[0].id);
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "receipt-actualremote: branch=account-lid receiptRemote=",
                        " receiptIsLid=true resolved=",
                        " resolvedIsLid=",
                        ""
                    ])), t.toLogString(), i.toLogString(), i.isLid());
                    return i;
                }
            }
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "receipt-actualremote: branch=fallback-raw receiptRemote=",
                " receiptIsLid=",
                ""
            ])), t.toLogString(), t.isLid());
            return t;
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return new Set;
            }
            const t = yield o("WAWebMarkAddOnsAsReadJob").markUnclassifiedAddOnsAsReadJob(e.map((e)=>r("WAWebMsgKey").from(e)));
            const { updatedAddOns, updatedOrphans } = t;
            return new Set([].concat(updatedOrphans, Array.from(updatedAddOns.values()).flat()).map(String));
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length > 0) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "updateChatPeerRead: maybeOrphans ",
                    ""
                ])), e.length);
            }
            const t = yield T(e);
            const n = e.filter((e)=>!t.has(e));
            S.enqueue(function() {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "updateChatPeerRead: storing ",
                    " orphan acks"
                ])), n.length);
                return o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(o("WAWebAck").ACK_STRING.READ, 0, n);
            }).catch((e)=>{
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "updateChatPeerRead: failed to store orphan acks"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("update-chat-peer-read-store-orphan-fail");
            });
        });
        return $.apply(this, arguments);
    }
    function P(msgs) {
        const msgsByThreadId = new Map;
        const msgsWithoutThread = [];
        for (const r of msgs){
            const a = o("WAWebDBMessageUtils").getThreadIdsFromMessage(r);
            if (a.length > 0) {
                for (const i of a){
                    const s = i.toString();
                    const u = msgsByThreadId.get(s) ?? [];
                    u.push(r);
                    msgsByThreadId.set(s, u);
                }
            } else {
                msgsWithoutThread.push(r);
            }
        }
        return {
            msgsByThreadId,
            msgsWithoutThread
        };
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.length > 0) {
                yield o("WAWebBackendApi").frontendSendAndReceive("resetAiThreadUnreadCounts", {
                    chatId: e,
                    threadIds: [].concat(t)
                });
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isNewsletter()) {
                if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                    yield o("WAWebBackendApi").frontendSendAndReceive("updateNewsletterUnreadMsgCount", {
                        id: e
                    });
                }
                return;
            }
            yield o("WAWebBackendApi").frontendSendAndReceive("updateChatUnreadMsgCountAndClearMentions", {
                remote: e
            });
        });
        return A.apply(this, arguments);
    }
    function F(e, t) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e);
            const a = n.filter((e)=>e.action === "markChatAsRead" && e.actionValue.read === false && e.actionValue.messageRange != null);
            if (a.length === 0) {
                return true;
            }
            const i = a[0];
            const l = t.some((e)=>!o("WAWebActiveMessageRanges").rangeContainsMessage(i.actionValue.messageRange, {
                    id: r("WAWebMsgKey").fromString(e.id),
                    t: e.t
                }));
            return l;
        });
        return O.apply(this, arguments);
    }
    function B(e) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, msgKeys, msgs, readAt, threadId }) {
            const u = chatId.toString();
            const lastReadRowId = R(msgs);
            const d = yield F(u, msgs);
            const m = yield (v || (v = n("Promise"))).all([
                o("WAWebApiChat").markMessageAndChatAsRead({
                    lastReadRowId,
                    chatId: u,
                    keepChatUnread: !d,
                    readAt,
                    threadId
                }),
                o("WAWebApiChat").markEditedMessageAndChatAsRead({
                    chatId,
                    readMsgKeys: msgKeys,
                    threadId
                })
            ]);
            const p = m[0];
            const _ = m[1];
            const f = new Set([].concat(p.fullyReadThreadIds.map((e)=>e.toString()), _.fullyReadThreadIds.map((e)=>e.toString())));
            return Array.from(f, function(e) {
                return r("WAWebThreadId").from(e);
            });
        });
        return W.apply(this, arguments);
    }
    function q(e, t, n) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, readAt) {
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "updateChatPeerRead"
            ])));
            const i = yield L(t);
            const { maybeOrphans, msgs } = i;
            const u = o("WAWebMessageReceiptUtils").getUnreadStatusKeysFromOthers(msgs.filter(o("WAWebMessageReceiptUtils").isGroupOrChannelStatusRow));
            if (u.length > 0 && o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()) {
                try {
                    yield V(u, readAt);
                } catch (error) {
                    o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "updateChatPeerRead: failed to mark statuses read"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("update-chat-peer-read-mark-statuses-fail");
                }
            }
            yield x(maybeOrphans);
            const c = yield k(msgs, e);
            let d;
            const m = o("WAWebBotUtils").isMetaAiBot(c);
            const p = m ? P(msgs) : {
                msgsByThreadId: new Map,
                msgsWithoutThread: msgs
            };
            const { msgsByThreadId, msgsWithoutThread } = p;
            if (m && msgsWithoutThread.length === 0 && msgsByThreadId.size > 0) {
                const g = yield (v || (v = n("Promise"))).all(Array.from(msgsByThreadId.entries()).map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n, msgs_1]) {
                        const i = r("WAWebThreadId").from(n);
                        return B({
                            chatId: c,
                            msgs: msgs_1,
                            msgKeys: t,
                            readAt,
                            threadId: i
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                const h = new Set;
                for (const y of g){
                    for (const S of y){
                        h.add(S.toString());
                    }
                }
                d = Array.from(h, function(e) {
                    return r("WAWebThreadId").from(e);
                });
            } else {
                d = yield B({
                    chatId: c,
                    msgs: msgsWithoutThread,
                    msgKeys: t,
                    readAt
                });
            }
            if (t.length > 0) {
                yield o("WAWebApiChat").tightenAfterReadExpirationFromPeerReceipt({
                    msgKeys: t,
                    readAt
                });
            }
            yield N(c, d);
            yield w(c);
        });
        return U.apply(this, arguments);
    }
    function V(e, t) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.length !== 0) {
                o("WAWebBackendApi").frontendFireAndForget("handleReadStatus", {
                    msgKeys: e
                });
                yield o("WAWebBackendApi").frontendSendAndReceive("updateMsgPeerAcks", {
                    msgKeys: e,
                    ack: o("WAWebAck").ACK.READ,
                    t
                });
            }
        });
        return H.apply(this, arguments);
    }
    function G(e, t) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.map((e)=>o("WAWebDBMessageUtils").craftInternalId({
                    chatId: t.toJid(),
                    inChatMsgId: e
                }));
            const a = yield o("WAWebSchemaMessage").getMessageTable().anyOf([
                "internalId"
            ], n);
            const ids = a.map((e)=>r("WAWebMsgKey").fromString(e.id));
            yield o("WAWebNewsletterDBUtils").updateMsgViewReceipt(ids);
            return o("WAWebBackendApi").frontendFireAndForget("updateMsgsViewed", {
                ids
            });
        });
        return z.apply(this, arguments);
    }
    function j(t, n, a) {
        S.enqueue(function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "updateMsgAcks: store ",
                " orphan acks"
            ])), t.length);
            let r = null;
            if (n === o("WAWebAck").ACK.PLAYED) {
                r = o("WAWebAck").ACK_STRING.PLAYED;
            } else if (n === o("WAWebAck").ACK.READ) {
                r = o("WAWebAck").ACK_STRING.READ;
            }
            if (r) {
                return o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(r, a, t.map(String));
            }
        }).catch((e)=>{
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "updateMsgAcks: failed to store orphan acks"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("update-msg-acks-store-orphan-fail");
        });
    }
    function K(e) {
        return S.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebApiOrphanReceipt").getOrphanReceipt(e);
            if (t == null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "processOrphanPeerReceipt: no orphan ack found for incoming ",
                    ""
                ])), e);
                return;
            }
            if (t[o("WAWebAck").ACK_STRING.PLAYED] != null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processOrphanPeerReceipt: orphan played ack for ",
                    ""
                ])), e);
                yield o("WAWebBackendApi").frontendSendAndReceive("updateMsgPeerAcks", {
                    msgKeys: [
                        e
                    ],
                    ack: o("WAWebAck").ACK.PLAYED,
                    t: t[o("WAWebAck").ACK_STRING.PLAYED]
                });
            }
            if (t[o("WAWebAck").ACK_STRING.READ] != null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "processOrphanPeerReceipt: orphan read ack for ",
                    ""
                ])), e);
                q(e.remote, [
                    e
                ], t[o("WAWebAck").ACK_STRING.READ]).catch((e)=>{
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "processOrphanPeerReceipt: failed to process orphan read ack"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("process-orphan-peer-receipt-read-fail");
                });
            }
            yield o("WAWebApiOrphanReceipt").removeOrphanReceipt(t.msgKey);
        }));
    }
    function Q(e) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map(String);
            const n = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(t, false);
            o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging(n.filter(Boolean).map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)).filter((e)=>e.isViewOnce).map((e)=>({
                    activityType: "viewOnceOpen",
                    ts: e.t ?? o("WATimeUtils").unixTime(),
                    chatId: e.id.remote
                })));
        });
        return X.apply(this, arguments);
    }
    l.updateChatPeerRead = q;
    l.markStatusesReadFromPeer = V;
    l.updateMsgViewed = G;
    l.updateOrphanPeerReceipt = j;
    l.processOrphanPeerReceipt = K;
    l.handleViewOnceOpenedIfNecessary = Q;
}, 98);