__d("WAWebDBStoreEncryptedMsgs", [
    "Promise",
    "WALogger",
    "WAPromiseMap",
    "WAWeb-dexie",
    "WAWebDBExperienceIdStore",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessage",
    "WAWebDBStoreMessageAssociations",
    "WAWebDBStoreMsgsUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebPostIncomingMessageDropDBOperationFailedForMsgRows",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:375",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
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
    const k = n("cr:375") ?? {};
    const k_ftsLightClient = k.ftsLightClient;
    function T(e, t, isHistory = false, i = false, groupHistoryAnchor) {
        const b = [
            "message",
            "message-association"
        ];
        if (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e.map(([t])=>t))) {
            b.push("experience-id");
        }
        return o("WAWebModelStorageUtils").getStorage().lock(b, (()=>{
            const y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(y) {
                if (isHistory) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "storeEncryptedDBMessages: storing ",
                        " messages: lock acquired"
                    ])), e.length);
                }
                const messageTable = y[0];
                const b = y[1];
                let v = e;
                if (i) {
                    const S = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(e.map(([t])=>t.id.toString()));
                    v = e.filter((e, t)=>!S[t]);
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[storeEncryptedDBMessages] fallback ",
                        "/",
                        " msgs"
                    ])), v.length, e.length);
                    if (v.length === 0) {
                        return;
                    }
                }
                const R = yield o("WAWebDBStoreMsgsUtils").getLastRowId(messageTable, isHistory);
                if (isHistory) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "storeEncryptedDBMessages: storing ",
                        " messages: got last row id ",
                        ""
                    ])), e.length, R);
                }
                const chatWids = t.map((e)=>o("WAWebWidFactory").createWid(e));
                const output = new Map;
                yield P({
                    chatWids,
                    groupHistoryAnchor,
                    internalIdPrefix: o("WAWebDBMessageUtils").InternalIdPrefix.Default,
                    isHistory,
                    messageTable,
                    output
                });
                if (isHistory) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "storeEncryptedDBMessages: storing ",
                        " messages: chat map built"
                    ])), e.length);
                }
                if (v.some(([t, n])=>t.isGroupStatus === true)) {
                    yield P({
                        chatWids: chatWids.filter((e)=>e.isGroup()),
                        groupHistoryAnchor,
                        internalIdPrefix: o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus,
                        isHistory,
                        messageTable,
                        output
                    });
                    if (isHistory) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[storeEncryptedDBMessages] ",
                            " msgs: group status map built"
                        ])), e.length);
                    }
                }
                const k = groupHistoryAnchor != null;
                const I = isHistory ? -1 : 1;
                const T = isHistory || k ? -1 : 1;
                const N = [];
                const w = (yield o("WAPromiseMap").promiseMap(v, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n, i], t) {
                        if (isHistory) {
                            n.isMdHistoryMsg = true;
                        }
                        const l = r("WAWebMsgKey").fromString(n.id);
                        const s = l.remote.toString();
                        const rowId = R + I * (t + 1);
                        const mapKey = M(s, o("WAWebDBMessageUtils").getPrefixForInternalId(n));
                        const d = output.get(mapKey);
                        if (d == null || Number.isNaN(d)) {
                            if (N.length < 3) {
                                N.push({
                                    error: d == null ? "null" : "nan",
                                    msgType: n.type,
                                    msgSubtype: n.subtype,
                                    mapKey
                                });
                            }
                            return;
                        }
                        const m = d + T * 1;
                        output.set(mapKey, m);
                        const p = !isHistory && o("WAWebDBStoreMessage").isPendingUnreadReceipt(l, n);
                        const _ = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                            msg: n,
                            chatId: s,
                            hasLink: i,
                            rowId,
                            inChatMsgId: m,
                            pendingReadReceipt: p
                        });
                        return _;
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                })())).filter(Boolean);
                if (N.length > 0) {
                    const A = isHistory ? "history-sync-" : "";
                    const F = N.map((e)=>e.error);
                    const O = F.includes("null");
                    const B = F.includes("nan");
                    let W = "nan";
                    if (O && B) {
                        W = "null-and-nan";
                    } else if (O) {
                        W = "null";
                    }
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[storeEncryptedMessage] lastChatMsgId invalid=",
                        " ",
                        ""
                    ])), N.length, N.map((e)=>`err=${e.error},t=${String(e.msgType)},st=${String(e.msgSubtype)}`)).sendLogs(`${A}${W}-error-check-lastinchatmsgidmap-lastChatMsgId`, {
                        sampling: 0.1
                    });
                }
                if (isHistory) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[storeEncryptedDBMessages] ",
                        " msgs: ",
                        " hydrated"
                    ])), e.length, w.length);
                }
                try {
                    yield o("WAWebDBStoreMessageAssociations").bulkStoreMessageAssociations(w, true);
                    if (isHistory) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "storeEncryptedDBMessages: storing ",
                            " messages: associations stored"
                        ])), e.length);
                    }
                    yield messageTable.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(w, !!isHistory);
                    if (isHistory) {
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "storeEncryptedDBMessages: storing ",
                            " messages: stored"
                        ])), e.length);
                    }
                } catch (error) {
                    const q = r("getErrorSafe")(error);
                    if (isHistory && q instanceof r("WAWeb-dexie").BulkError) {
                        o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[storeEncryptedDBMessages] BulkError, retrying bulkCreateOrReplace"
                        ])));
                        yield messageTable.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(w);
                    } else {
                        if (i || !D(e.length, q)) {
                            x(w, q);
                            $(w);
                        }
                        throw q;
                    }
                }
                yield o("WAWebDBExperienceIdStore").recordReceivedExperienceIds(w);
                return w;
            });
            return function(e) {
                return y.apply(this, arguments);
            };
        })()).then((t)=>{
            if (t && t.length > 0) {
                r("WAWeb-dexie").ignoreTransaction(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (isHistory) {
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[storeEncryptedDBMessages] ",
                            " msgs: +",
                            " to index"
                        ])), e.length, t.length);
                    }
                    yield k_ftsLightClient?.addToIndexingTable(r("compactMap")(t, function(e) {
                        if (e.rowId != null) {
                            return String(e.rowId);
                        }
                        return null;
                    }));
                    if (isHistory) {
                        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[storeEncryptedDBMessages] ",
                            " msgs: fts index ",
                            ""
                        ])), e.length, t.length);
                    }
                    if (k_ftsLightClient != null) {
                        k_ftsLightClient.index().catch(r("WAWebNoop"));
                    }
                }));
            }
        });
    }
    function D(e, t) {
        return e > 1 && t instanceof r("WAWeb-dexie").BulkError;
    }
    function x(e, t) {
        r("WAWeb-dexie").ignoreTransaction(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let n = e;
            if (t instanceof r("WAWeb-dexie").BulkError) {
                const a = e.map(({ id })=>id.toString());
                const i = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(a);
                n = e.filter((e, t)=>!i[t]);
            }
            if (n.length > 0) {
                o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[storeEncryptedDBMessages] dropped ",
                    " with failed/all msgs ratio ",
                    "/",
                    " err=",
                    ""
                ])), n.length, n.length, e.length, t).sendLogs("incoming-message-drop-db-operation-failed", {
                    sampling: 0.01
                });
                o("WAWebPostIncomingMessageDropDBOperationFailedForMsgRows").postIncomingMessageDropDBOperationFailedForMsgRows(n);
            } else {
                o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedDBMessages: all ",
                    " message(s) are already in the DB"
                ])), e.length);
            }
        })).catch((e)=>{
            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "storeEncryptedDBMessages: failed to post db error metrics: ",
                ""
            ])), e).sendLogs("failed-to-post-db-error-metrics");
        });
    }
    function $(e) {
        if (!r("gkx")("26258")) {
            const t = [];
            const n = function(n) {
                const e = new Set;
                const r = (o, a)=>{
                    Object.entries(o).forEach(([o, i])=>{
                        if (typeof i === "function") {
                            const path = [].concat(a, [
                                o
                            ]).join(".");
                            if (t.length < 3) {
                                t.push({
                                    path,
                                    value: i
                                });
                            }
                        } else if (i != null && typeof i === "object") {
                            if (e.has(i)) {
                                return;
                            }
                            e.add(i);
                            r(i, [].concat(a, [
                                o
                            ]));
                        }
                    });
                };
                r(n, []);
            };
            try {
                e.forEach(n);
            } catch (error) {
                o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedDBMessages: failed to log bad message properties: ",
                    ""
                ])), error);
            }
            if (t.length > 0) {
                o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[storeEncryptedDBMessages] ",
                    " fn props can't clone: ",
                    ""
                ])), t.length, t.map((e)=>`'${e.path}'=${String(e.value)}`));
            }
        }
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWids, groupHistoryAnchor = null, internalIdPrefix = o("WAWebDBMessageUtils").InternalIdPrefix.Default, isHistory, messageTable, output }) {
            if (chatWids.length === 0) {
                return (E || (E = n("Promise"))).resolve();
            }
            const d = internalIdPrefix;
            yield (E || (E = n("Promise"))).all(chatWids.map((e)=>{
                if (!(internalIdPrefix === o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus && !e.isGroup())) {
                    if (groupHistoryAnchor != null && groupHistoryAnchor.chatId.equals(e)) {
                        output.set(M(e.toString(), d), groupHistoryAnchor.anchorInChatMsgId);
                        return;
                    }
                    const t = d + o("WAWebDBMessageUtils").beginningOfChat(e);
                    const n = d + o("WAWebDBMessageUtils").endOfChat(e);
                    return messageTable.between([
                        "internalId"
                    ], t, n, {
                        limit: 1,
                        reverse: !isHistory,
                        returnKeyType: "keys"
                    }).then((t)=>{
                        let INLINE_MESSAGE_STARTING_INDEX = o("WAWebDBStoreMsgsUtils").INLINE_MESSAGE_STARTING_INDEX;
                        if (t.length > 0 && t[0] != null) {
                            INLINE_MESSAGE_STARTING_INDEX = o("WAWebDBMessageUtils").getInChatMsgId(t[0]);
                        }
                        output.set(M(e.toString(), d), INLINE_MESSAGE_STARTING_INDEX);
                    });
                }
            }));
        });
        return N.apply(this, arguments);
    }
    function M(e, t = "") {
        return t + e;
    }
    l.storeEncryptedDBMessages = T;
    l.isEligibleForFallback = D;
    l.buildLastInChatMsgIdMap = P;
}, 98);