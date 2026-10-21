__d("WAWebApiChat", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebBotUtils",
    "WAWebBusinessHSMTypes",
    "WAWebChatThreadLogging",
    "WAWebCompactSet",
    "WAWebDBChatSerialization",
    "WAWebDBChatValidation",
    "WAWebDBMessageUtils",
    "WAWebDBPendingReadReceiptQueries",
    "WAWebDbErrors",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralityUtils",
    "WAWebGetChatRecordByAccountLid",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterValidationUtils",
    "WAWebSchemaChat",
    "WAWebThreadId",
    "WAWebThreadMetadataBulkJob",
    "WAWebTrustedContactsUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
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
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    const $ = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "CreateChatDuplicateError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "createChatRecord ",
                ""
            ])), e.toLogString());
            o("WAWebDBChatValidation").validateAccountLidInChatRow(t, "createChatRecord");
            try {
                yield o("WAWebSchemaChat").getChatTable().create(babelHelpers.extends({
                    id: e.toString()
                }, t));
            } catch (error) {
                throw error instanceof o("WAWebDbErrors").DbOnLogoutAbort ? error : (o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "createChatRecord: create chat table failed"
                ]))).verbose(), error instanceof r("WAWeb-dexie").ConstraintError ? (yield J(e, t), new $) : r("err")("create chat table failed"));
            }
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaChat").getChatTable().get(e.toString(), false);
            if (t) {
                return {
                    unreadCount: t.unreadCount,
                    timestamp: t.t
                };
            }
            o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "chat with id ",
                " is not found"
            ])), e.toString());
            return (x || (x = n("Promise"))).reject(r("err")("Failed to find row in chat table"));
        });
        return w.apply(this, arguments);
    }
    function A(t) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "updateChatForMarkAsReadSync"
        ])));
        return o("WAWebModelStorageUtils").getStorage().lock([
            "chat"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = yield n.get(t);
                if (r == null) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "updateMarkChatAsReadSync: could not find chat with id ",
                        ""
                    ])), t);
                    return;
                }
                if (r.unreadCount === -1) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "updateMarkChatAsReadSync: createOrMerge"
                    ])));
                    return n.createOrMerge(t, {
                        id: t,
                        unreadCount: 0,
                        unreadMentionsOfMe: [],
                        unreadMentionCount: 0
                    });
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, keepChatUnread, lastReadRowId, readAt, threadId }) {
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "markMessageAndChatAsRead: "
            ])));
            const u = o("WAWebWidFactory").createWid(chatId);
            const c = o("WAWebBotUtils").isMetaAiBot(u);
            const d = c ? [
                "message",
                "chat",
                "thread-metadata"
            ] : [
                "message",
                "chat"
            ];
            const m = u.isNewsletter() && o("WAWebABProps").getABPropConfigValue("thread_interactions_channel_reads_aligned_web_enabled") === true;
            const p = m && (yield W(chatId));
            return o("WAWebModelStorageUtils").getStorage().lock(d, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([d, _, f]) {
                    const g = yield o("WAWebDBPendingReadReceiptQueries").queryPendingReadReceiptMsgRowsWithTable(d, chatId, c ? threadId : undefined);
                    const h = m ? B(p, (yield _.get(chatId))?.unreadCount) : null;
                    const y = [];
                    const C = [];
                    let b = 0;
                    const R = [];
                    const L = new Set;
                    const E = [];
                    let k = 0;
                    g.forEach((msgRow)=>{
                        if (msgRow.hsmTag === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION) {
                            o("WAWebBackendApi").frontendFireAndForget("logOTPMessageReadActions", {
                                msgRow
                            });
                        }
                        const t = lastReadRowId == null || msgRow.rowId != null && msgRow.rowId > lastReadRowId;
                        if (t) {
                            b++;
                            if (o("WAWebMsgGetters").getIsImportantMessage(msgRow)) {
                                const n = {
                                    id: msgRow.id,
                                    timestamp: msgRow.t
                                };
                                R.push(n);
                            }
                            return;
                        }
                        const e_ack = msgRow.ack;
                        y.push({
                            id: msgRow.id,
                            ack: Math.max(e_ack, o("WAWebAck").ACK.READ),
                            pendingReadReceipt: null
                        });
                        const e_afterReadDuration = msgRow.afterReadDuration;
                        if (e_afterReadDuration != null && e_afterReadDuration > 0 && (e_ack == null || e_ack < o("WAWebAck").ACK.READ) && !o("WAWebEphemeralKeepInChatUtils").isKept(msgRow.kicState)) {
                            const u = readAt ?? o("WATimeUtils").unixTime();
                            C.push({
                                id: msgRow.id,
                                expiredTimestamp: u + e_afterReadDuration
                            });
                            k++;
                            if (E.length < 3) {
                                E.push(msgRow?.id?.toString());
                            }
                        }
                        if (c) {
                            for (const m of o("WAWebDBMessageUtils").getThreadIdsFromMessage(msgRow)){
                                if (threadId == null || m.equals(threadId)) {
                                    L.add(m.toString());
                                }
                            }
                        }
                    });
                    if (k > 0) {
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[markMessageAndChatAsRead] expiry set ",
                            " msgs => ",
                            " (source: ",
                            ")"
                        ])), k, E, readAt != null ? "peer-read" : "local-read").tags("after-read");
                    }
                    const I = [];
                    let T = null;
                    const D = c && threadId != null;
                    if (D) {
                        if (y.length > 0) {
                            const $ = r("WAWebCompactSet")(y, function(e) {
                                return e.id;
                            });
                            T = yield o("WAWebDBPendingReadReceiptQueries").updateChatUnreadCountForReadMessages(_, chatId, $);
                        }
                    } else {
                        const P = b === 0 && keepChatUnread ? -1 : b;
                        I.push(_.merge(chatId, {
                            id: chatId,
                            unreadCount: P,
                            unreadDividerOffset: 0,
                            unreadMentionsOfMe: R,
                            unreadMentionCount: 0
                        }));
                    }
                    if (y.length > 0) {
                        o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "markMessageAndChatAsRead: bulkCreateOrMerge"
                        ]))).tags("missing-lid");
                        I.push(d.bulkCreateOrMerge(y).then(()=>o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                                {
                                    activityType: "msgRead",
                                    ts: o("WATimeUtils").unixTime(),
                                    chatId: o("WAWebWidFactory").createWid(chatId),
                                    readCount: h == null ? y.length : Math.min(y.length, h)
                                }
                            ])));
                        if (C.length > 0) {
                            I.push(d.bulkCreateOrMerge(C).then(()=>{
                                const e = C.map((e)=>({
                                        id: r("WAWebMsgKey").fromString(e.id),
                                        expiredTimestamp: e.expiredTimestamp
                                    }));
                                o("WAWebBackendApi").frontendFireAndForget("updateMsgExpiredTimestamps", {
                                    updates: e
                                });
                            }));
                        }
                    }
                    yield (x || (x = n("Promise"))).all(I);
                    if (c && threadId != null) {
                        L.add(threadId.toString());
                    }
                    if (L.size === 0) {
                        return {
                            fullyReadThreadIds: []
                        };
                    }
                    const N = Array.from(L).map((e)=>r("WAWebThreadId").from(e));
                    yield o("WAWebThreadMetadataBulkJob").bulkUpdateThreadUnreadCountWithTable(f, N.map((e)=>({
                            threadId: e,
                            unreadCount: 0
                        })));
                    return {
                        fullyReadThreadIds: N,
                        chatUnreadUpdate: T ?? undefined
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        });
        return O.apply(this, arguments);
    }
    function B(e, t) {
        if (e) {
            return 0;
        }
        return Math.max(t ?? 0, 0);
    }
    function W(e) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return yield o("WAWebNewsletterDBUtils").isPreviewNewsletter(o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e));
            } catch (e) {
                o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "markMessageAndChatAsRead: newsletter membership lookup failed"
                ])));
                return false;
            }
        });
        return q.apply(this, arguments);
    }
    function U({ chatId, readMsgKeys, threadId }) {
        const l = chatId.toString();
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "markEditedMessageAndChatAsRead: "
        ])));
        const s = new Set(readMsgKeys.map((e)=>e.id));
        const u = o("WAWebBotUtils").isMetaAiBot(chatId);
        const m = u ? [
            "message",
            "chat",
            "thread-metadata"
        ] : [
            "message"
        ];
        return o("WAWebModelStorageUtils").getStorage().lock(m, (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n, a]) {
                const c = yield o("WAWebDBPendingReadReceiptQueries").queryUnreadEditedMsgRowsWithTable(t, l, u ? threadId : undefined);
                const m = c.filter((e)=>{
                    const t = r("WAWebMsgKey").fromString(e.latestEditMsgKey).id;
                    return s.has(t);
                });
                if (m.length === 0) {
                    return {
                        fullyReadThreadIds: []
                    };
                }
                const p = new Set;
                if (u) {
                    for (const _ of m){
                        for (const f of o("WAWebDBMessageUtils").getThreadIdsFromMessage(_)){
                            if (threadId == null || f.equals(threadId)) {
                                p.add(f.toString());
                            }
                        }
                    }
                }
                const g = m.map((e)=>({
                        id: e.id,
                        pendingReadReceipt: null
                    }));
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "markEditedMessageAndChatAsRead: bulkCreateOrMerge"
                ]))).tags("missing-lid");
                yield t.bulkCreateOrMerge(g);
                let h = null;
                if (u && threadId != null && g.length > 0) {
                    const y = r("WAWebCompactSet")(g, function(e) {
                        return e.id;
                    });
                    h = yield o("WAWebDBPendingReadReceiptQueries").updateChatUnreadCountForReadMessages(n, l, y);
                }
                if (u && threadId != null) {
                    p.add(threadId.toString());
                }
                if (p.size === 0) {
                    return {
                        fullyReadThreadIds: []
                    };
                }
                const C = Array.from(p).map((e)=>r("WAWebThreadId").from(e));
                yield o("WAWebThreadMetadataBulkJob").bulkUpdateThreadUnreadCountWithTable(a, C.map((e)=>({
                        threadId: e,
                        unreadCount: 0
                    })));
                yield o("WAWebThreadMetadataBulkJob").bulkUpdateThreadUnreadEditTimestampWithTable(a, C.map((e)=>({
                        threadId: e,
                        unreadEditTimestampMs: null
                    })));
                return {
                    fullyReadThreadIds: C,
                    chatUnreadUpdate: h ?? undefined
                };
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgKeys, readAt }) {
            const i = yield o("WAWebModelStorageUtils").getStorage().lock([
                "message"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const r = yield n.bulkGet(msgKeys.map((e)=>e.toString()));
                    const i = [];
                    for (const l of r){
                        if (l != null) {
                            const s = l.afterReadDuration;
                            if (!(s == null || s <= 0) && l.expiredTimestamp != null) {
                                const expiredTimestamp = readAt + s;
                                if (!(expiredTimestamp >= l.expiredTimestamp)) {
                                    i.push({
                                        id: l.id,
                                        expiredTimestamp
                                    });
                                }
                            }
                        }
                    }
                    if (i.length !== 0) {
                        o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[tightenAfterReadExpirationFromPeerReceipt] ",
                            " msgs tightened"
                        ])), i.length).tags("after-read");
                        yield n.bulkMergeOnly(i);
                    }
                    return i;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (i.length !== 0) {
                const l = i.map((e)=>({
                        id: r("WAWebMsgKey").fromString(e.id),
                        expiredTimestamp: e.expiredTimestamp
                    }));
                o("WAWebBackendApi").frontendFireAndForget("updateMsgExpiredTimestamps", {
                    updates: l
                });
            }
        });
        return H.apply(this, arguments);
    }
    function G(e) {
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "updateChatArchiveDrawer"
        ])));
        return o("WAWebModelStorageUtils").getStorage().lock([
            "chat"
        ], function([r]) {
            const a = Array.from(e.keys());
            if (a.length === 0) {
                return (x || (x = n("Promise"))).resolve();
            }
            const i = a.map((t)=>{
                const archiveAtMentionViewedInDrawer = e.get(t) ?? false;
                return {
                    id: t,
                    archiveAtMentionViewedInDrawer
                };
            });
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "updateChatArchiveDrawer: bulkCreateOrMerge"
            ]))).tags("missing-lid");
            return r.bulkCreateOrMerge(i);
        });
    }
    function z(e, t = 1, r = true) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "chat"
        ], (()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*([i]) {
                const l = yield i.get(e);
                if (l == null) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "reduceChatUnreadCount: could not find chat with id ",
                        ""
                    ])), e);
                    return;
                }
                const s = Math.max(l.unreadCount - t, 0);
                let unreadDividerOffset = l.unreadDividerOffset ?? 0;
                if (r) {
                    unreadDividerOffset += t;
                }
                return i.merge(e, {
                    unreadCount: s,
                    unreadDividerOffset
                });
            });
            return function(e) {
                return a.apply(this, arguments);
            };
        })());
    }
    function j() {
        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
            "pruneExpiredTcTokens"
        ])));
        const e = o("WAWebTrustedContactsUtils").tokenExpirationCutoff(o("WAWebTrustedContactsUtils").TcTokenMode.Receiver);
        return o("WAWebModelStorageUtils").getStorage().lock([
            "chat"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = yield n.lessThan([
                    "tcTokenTimestamp"
                ], e);
                if (!(!r || r.length === 0)) {
                    const a = r.map((e)=>({
                            id: e.id,
                            tcToken: null,
                            tcTokenTimestamp: null
                        }));
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "pruneExpiredTcTokens: bulkCreateOrMerge"
                    ]))).tags("missing-lid");
                    return n.bulkCreateOrMerge(a);
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function K() {
        const e = o("WAWebTrustedContactsUtils").tokenExpirationCutoff(o("WAWebTrustedContactsUtils").TcTokenMode.Receiver);
        const t = [];
        return o("WAWebModelStorageUtils").getStorage().lock([
            "orphan-tc-token"
        ], (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                const o = yield r.all();
                o.forEach((n)=>{
                    const n_tcTokenTimestamp = n.tcTokenTimestamp;
                    if (n_tcTokenTimestamp != null && n_tcTokenTimestamp < e) {
                        t.push(n.chatId);
                    }
                });
                return r.bulkRemove(t);
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })());
    }
    function Q() {
        return o("WAWebSchemaChat").getChatTable().all().then((e)=>e.map((e)=>o("WAWebDBChatSerialization").deserializeChat(e)));
    }
    function X(e) {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>e.id.toString());
            const n = yield o("WAWebSchemaChat").getChatTable().bulkGet(t);
            const r = e.map((e, t)=>{
                let r = e;
                if (n[t] != null) {
                    const a = n[t];
                    const { disappearingModeInitiatedByMe, disappearingModeTrigger } = a;
                    if (disappearingModeInitiatedByMe != null) {
                        r = babelHelpers.extends({}, r, {
                            disappearingModeInitiatedByMe
                        });
                    }
                    if (disappearingModeTrigger != null) {
                        r = babelHelpers.extends({}, r, {
                            disappearingModeTrigger: o("WAWebEphemeralityUtils").getDisappearingModeTriggerFromString(disappearingModeTrigger)
                        });
                    }
                }
                return r;
            });
            return r;
        });
        return Y.apply(this, arguments);
    }
    function J(e, t) {
        return Z.apply(this, arguments);
    }
    function Z() {
        Z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(e)) {
                    o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "createChatRecord: tried to create chat ",
                        ""
                    ])), e.toLogString()).tags("missing-lid");
                    if (t.accountLid != null) {
                        const n = o("WAWebWidFactory").createUserLidOrThrow(t.accountLid);
                        const r = yield o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(n);
                        if (r.length === 0) {
                            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                                "createChatRecord: no chat with the same accountLid ",
                                ""
                            ])), n.toLogString()).tags("missing-lid");
                        } else {
                            const a = o("WAWebWidFactory").createWid(r[0].id).toLogString();
                            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                                "createChatRecord: dup accountLid ",
                                " chatId=",
                                ""
                            ])), n.toLogString(), a).tags("missing-lid");
                        }
                    }
                } else {
                    o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "createChatRecord: no account lid provided"
                    ]))).tags("missing-lid");
                }
            } catch (e) {
                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "createChatRecord: failed debugging duplicate record"
                ]))).tags("missing-lid");
            }
        });
        return Z.apply(this, arguments);
    }
    l.CreateChatDuplicateError = $;
    l.createChatRecord = P;
    l.getChatMeta = M;
    l.updateChatForMarkAsReadSync = A;
    l.markMessageAndChatAsRead = F;
    l.markEditedMessageAndChatAsRead = U;
    l.tightenAfterReadExpirationFromPeerReceipt = V;
    l.updateChatArchiveDrawer = G;
    l.reduceChatUnreadCount = z;
    l.pruneExpiredTcTokens = j;
    l.pruneExpiredOrphanTcTokens = K;
    l.getAllChatsDeserialized = Q;
    l.injectAdditionalEphemeralInfoFromDB = X;
}, 98);