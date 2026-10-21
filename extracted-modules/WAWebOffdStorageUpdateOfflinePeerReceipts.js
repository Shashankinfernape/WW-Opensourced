__d("WAWebOffdStorageUpdateOfflinePeerReceipts", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebDBBulkGetRootMsgs",
    "WAWebDBChatValidation",
    "WAWebDBMsgUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMessageReceiptUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebQplFlowWrapper",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSchemaPeerReadReceipt",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx",
    "qpl"
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
    const h = r("qpl")._(891431279, "3267");
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || t.length === 0) {
                return t;
            }
            const n = [];
            const r = [];
            const a = new Map;
            for (const chatUpdate of t){
                if (chatUpdate.id != null) {
                    const chatWid = o("WAWebWidFactory").createWid(chatUpdate.id);
                    if (chatWid != null) {
                        if (!chatWid.isRegularUser()) {
                            n.push(chatUpdate);
                            continue;
                        }
                        const c = chatUpdate.id;
                        if (c != null) {
                            r.push(c);
                            const lid = o("WAWebLidMigrationUtils").toLid(chatWid);
                            a.set(c, {
                                chatUpdate,
                                lid,
                                chatWid
                            });
                        }
                    }
                }
            }
            const m = [];
            let p = 0;
            const _ = [];
            let f = 0;
            if (r.length > 0) {
                const g = yield o("WAWebSchemaChat").getChatTable().bulkGet(r);
                for(let h = 0; h < r.length; h++){
                    const y = r[h];
                    const C = g[h];
                    const b = a.get(y);
                    if (b != null) {
                        const { chatUpdate, chatWid, lid } = b;
                        if (C != null) {
                            n.push(chatUpdate);
                        } else if (lid != null) {
                            p++;
                            if (m.length < 3) {
                                m.push(`${chatWid.toLogString()}, ${lid.toLogString()}`);
                            }
                            const L = babelHelpers.extends({}, chatUpdate, {
                                accountLid: lid.toString()
                            });
                            if (chatWid.isLid()) {
                                L.lidOriginType = o("WAWebUsernameTypes").LidOriginType.GENERAL;
                            }
                            n.push(L);
                        } else {
                            f++;
                            if (_.length < 3) {
                                _.push(chatWid.toLogString());
                            }
                        }
                    }
                }
            }
            if (p > 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "addAccountLidToUpdates: added account_lid to ",
                    " chats => ",
                    ""
                ])), p, m);
            }
            if (f > 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "addAccountLidToUpdates: no Lid for ",
                    " chats => ",
                    ""
                ])), f, _);
            }
            return n;
        });
        return C.apply(this, arguments);
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebQplFlowWrapper").QPL.markerPoint(h, "UpdatePeerReceipts_start");
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] updatePeerReceipts start"
            ])));
            const e = self.performance.now();
            const t = yield o("WAWebSchemaPeerReadReceipt").getTable().all();
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] updatePeerReceipts: ",
                " peer receipt rows"
            ])), t.length);
            o("WAWebQplFlowWrapper").QPL.markerAnnotate(h, {
                int: {
                    peerReceiptRowCount: t.length
                }
            });
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                const a = self.performance.now();
                yield S(t);
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] updatePeerReceipts: chat lookup took ",
                    "ms"
                ])), Math.round(self.performance.now() - a));
            } else {
                const i = [];
                const l = [];
                for (const s of t){
                    for (const f of s.msgKeys){
                        const C = r("WAWebMsgKey").fromString(f);
                        if (C.remote.isLid()) {
                            if (s.ack === o("WAWebAck").ACK.READ) {
                                i.push(C);
                            } else if (s.ack === o("WAWebAck").ACK.PLAYED) {
                                l.push(C);
                            }
                        }
                    }
                }
                if (i.length > 0) {
                    t.push({
                        ack: o("WAWebAck").ACK.READ,
                        msgKeys: o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithPnMapping(i).map(String)
                    });
                }
                if (l.length > 0) {
                    t.push({
                        ack: o("WAWebAck").ACK.PLAYED,
                        msgKeys: Array.from(l, String)
                    });
                }
            }
            const b = [];
            const v = [];
            const R = [];
            let E = 0;
            t.forEach((e)=>{
                if (e.ack === o("WAWebAck").ACK.READ) {
                    b.push(e);
                } else if (e.ack === o("WAWebAck").ACK.PLAYED) {
                    v.push(e);
                } else {
                    E++;
                    if (R.length < 3) {
                        R.push(e.ack);
                    }
                }
            });
            if (E > 0) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePeerReceipts: ",
                    " unknown ack types => ",
                    ""
                ])), E, R);
            }
            const k = yield L(b);
            const { chatAckUpdates, chatUpdates, statusAckUpdates } = k;
            const P = chatAckUpdates.concat(statusAckUpdates);
            const N = new Map(statusAckUpdates.map((e)=>[
                    e.id,
                    e
                ]));
            const M = new Map(P.map((e)=>[
                    e.id,
                    e
                ]));
            const w = x(v);
            w.forEach((e)=>{
                const t = M.get(e.id);
                if (t == null) {
                    M.set(e.id, e);
                } else {
                    M.set(e.id, babelHelpers.extends({}, t, {
                        ack: e.ack
                    }));
                }
            });
            const A = Array.from(M.values());
            o("WAWebBackendApi").frontendFireAndForget("updateOfflinePeerReceipt", {
                chatUpdates: chatUpdates.map((e)=>({
                        chatId: e.id,
                        unreadCount: e.unreadCount,
                        unreadMentionsOfMe: e.unreadMentionsOfMe ?? []
                    })),
                ackUpdates: A.map((e)=>{
                    let t = e.id;
                    if (N.has(e.id)) {
                        t = o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(r("WAWebMsgKey").fromString(t)).toString();
                    }
                    return {
                        msgKey: t,
                        ack: e.ack
                    };
                })
            });
            const F = yield y(chatUpdates);
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "updatePeerReceipts: bulkCreateOrMerge ",
                ""
            ])), F.slice(-15).map((e)=>e.id).join(",")).tags("missing-lid");
            o("WAWebDBChatValidation").validateAccountLidInChatRows(F, "updatePeerReceipts");
            yield (g || (g = n("Promise"))).all([
                o("WAWebModelStorageUtils").getStorage().lock([
                    "message",
                    "chat"
                ], function([t, r]) {
                    return (g || (g = n("Promise"))).all([
                        t.bulkCreateOrMerge(A),
                        r.bulkCreateOrMerge(F)
                    ]);
                }).then(()=>{}),
                o("WAWebMarkAddOnsAsReadJob").markUnclassifiedAddOnsAsReadJob(Array.from(D(b), function(e) {
                    return r("WAWebMsgKey").from(e);
                })).then(()=>{})
            ]);
            return o("WAWebSchemaPeerReadReceipt").getTable().clear().then(()=>{
                o("WAWebQplFlowWrapper").QPL.markerPoint(h, "UpdatePeerReceipts_end");
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] updatePeerReceipts: processed ",
                    " peer receipt rows in ",
                    "ms"
                ])), t.length, Math.round(self.performance.now() - e));
            });
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!r("gkx")("5598")) {
                yield (g || (g = n("Promise"))).all(e.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        e.msgKeys = yield o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithChatId(e.msgKeys);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                return;
            }
            const t = yield o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithChatId(e.flatMap((e)=>e.msgKeys));
            let a = 0;
            for (const i of e){
                const l = a + i.msgKeys.length;
                i.msgKeys = t.slice(a, l);
                a = l;
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "getUpdatesForPeerReadReceipts"
            ])));
            const t = D(e);
            const a = yield m(e);
            const i = Array.from(a.keys());
            const l = i.reduce((acc, item)=>{
                acc.push([
                    item,
                    o("WAWebDBMsgUtils").PendingReadReceiptType.Message
                ]);
                acc.push([
                    item,
                    o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit
                ]);
                return acc;
            }, []);
            const s = yield o("WAWebSchemaMessage").getMessageTable().anyOf([
                "from",
                "pendingReadReceipt"
            ], l, {
                shouldDecrypt: false
            });
            s.forEach((e)=>_(a.get(e.from), e));
            s.forEach((e)=>g(a.get(e.from), e));
            const chatAckUpdates = h();
            const statusAckUpdates = yield I(t);
            const chatUpdates = r("compactMap")(i, function(e) {
                const t = a.get(e);
                if (t != null && t.lastUnreadMsgRowId != null) {
                    return {
                        id: e,
                        unreadCount: t.unreadCount,
                        unreadMentionsOfMe: t.unreadMentionsOfMe
                    };
                }
                return null;
            });
            return {
                chatUpdates,
                chatAckUpdates,
                statusAckUpdates
            };
            function m(e) {
                return p.apply(this, arguments);
            }
            function p() {
                p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    return new Map(e.flatMap((e)=>e.msgKeys).map(k).filter((e)=>e !== o("WAJids").STATUS_JID).map((e)=>[
                            e,
                            {
                                unreadCount: 0,
                                lastUnreadMsgRowId: undefined,
                                unreadMentionsOfMe: [],
                                unreadMentionCount: 0
                            }
                        ]));
                });
                return p.apply(this, arguments);
            }
            function _(e, t) {
                const t_rowId = t.rowId;
                if (!(e == null || t_rowId == null)) {
                    if (C(t) && (e.lastUnreadMsgRowId == null || t_rowId > e.lastUnreadMsgRowId)) {
                        e.lastUnreadMsgRowId = t_rowId;
                    }
                }
            }
            function g(e, t) {
                const t_rowId = t.rowId;
                if (!(e == null || t_rowId == null || e.lastUnreadMsgRowId == null) && t_rowId > e.lastUnreadMsgRowId && (e.unreadCount += 1, o("WAWebMsgGetters").getIsImportantMessage(t))) {
                    const r = {
                        id: t.id,
                        timestamp: t.t
                    };
                    e.unreadMentionsOfMe.push(r);
                }
            }
            function h() {
                return r("compactMap")(s, function(e) {
                    const e_rowId = e.rowId;
                    const n = a.get(e.from);
                    if (n == null || e_rowId == null || n.lastUnreadMsgRowId == null) {
                        return null;
                    }
                    if (e_rowId <= n.lastUnreadMsgRowId) {
                        if (e.pendingReadReceipt === o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit && !y(e)) {
                            return null;
                        }
                        return {
                            id: e.id,
                            ack: o("WAWebAck").ACK.READ,
                            pendingReadReceipt: null
                        };
                    }
                    return null;
                });
            }
            function y(e) {
                return e.latestEditMsgKey != null && t.has(e.latestEditMsgKey);
            }
            function C(e) {
                return t.has(e.id) || y(e);
            }
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return r("WAWebMsgKey").fromString(e).remote.toString();
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = Array.from(e).filter((e)=>k(e) === o("WAJids").STATUS_JID).map((e)=>r("WAWebMsgKey").fromString(e));
            const n = yield o("WAWebMessageReceiptUtils").fixStatusReceiptKeys(t);
            return n.map((e)=>({
                    id: e.toString(),
                    ack: o("WAWebAck").ACK.READ
                }));
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return new Set(e.flatMap((e)=>e.msgKeys));
    }
    function x(e) {
        const t = new Set;
        e.forEach((e)=>{
            if (e.ack === o("WAWebAck").ACK.PLAYED) {
                e.msgKeys.forEach((e)=>t.add(e));
            }
        });
        return Array.from(t, function(e) {
            return {
                id: e,
                ack: o("WAWebAck").ACK.PLAYED,
                pendingReadReceipt: null
            };
        });
    }
    l.addAccountLidToUpdates = y;
    l.updatePeerReceipts = b;
    l.getStatusMsgAckUpdates = I;
}, 98);