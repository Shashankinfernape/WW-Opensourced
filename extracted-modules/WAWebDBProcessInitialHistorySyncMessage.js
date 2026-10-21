__d("WAWebDBProcessInitialHistorySyncMessage", [
    "MetaConfig",
    "Promise",
    "WALogger",
    "WAPromiseReduce",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebApiChatUnreadMention",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebChatCollection",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreMessage",
    "WAWebDbEncryptionKey",
    "WAWebFtsClient",
    "WAWebGroupUnreadMessageType",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebQuarantineDataStore",
    "WAWebSchemaChat",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageAssociation",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadMsgUtils",
    "WAWebUnreadMentionModel",
    "WAWebUserPrefsBot",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "sumBy"
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
    const y = 1000000000;
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] database record preparation started, ",
                ""
            ])), a).tags("history-sync");
            yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
            let i = 0;
            Object.keys(t).forEach((e)=>{
                i += t[e].msgs.length;
            });
            const unreadMentionsToAdd = new Map;
            const pendingUnreadMentionsMap = new Map;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start storing initial sync messages."
            ])));
            const b = yield o("WAPromiseReduce").promiseReduce(Object.keys(t), (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                    let e_nextRowId = e.nextRowId;
                    const i = R(t, n);
                    const s = yield v(t[n].chatInfo.unreadCount || 0, t[n].msgs);
                    const { pendingUnreadIds, unreadMentions } = s;
                    if (unreadMentions.length) {
                        unreadMentionsToAdd.set(n, unreadMentions);
                    }
                    const p = [];
                    let _ = i;
                    for(let f = 0; f < t[n].msgs.length; f++){
                        const g = t[n].msgs[f];
                        try {
                            const h = yield o("WAWebDBEncryptMultipleMsgs").processAndEncryptSingleMsgRow(g);
                            e_nextRowId++;
                            _ = _ + 1 + o("WAWebDBGroupHistoryPreProcessor").getBumpIdCountForGroupJoin(g);
                            g.isMdHistoryMsg = true;
                            const y = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                                msg: h[0],
                                chatId: o("WAWebWidFactory").createWid(n).toString(),
                                hasLink: o("WAWebLinkify").hasHttpLink(g),
                                rowId: e_nextRowId,
                                inChatMsgId: _,
                                pendingReadReceipt: pendingUnreadIds.has(String(g.id))
                            });
                            p.push(y);
                        } catch (error) {
                            if (error instanceof o("WAWebDBEncryptMultipleMsgs").DroppingMsgRowDueToLogout) {
                                throw error;
                            }
                            const S = r("getErrorSafe")(error);
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "storeInitialSyncMessages failed for msg: ",
                                " from ",
                                ""
                            ])), g.id?.id, g.id?.remote).tags("message-store-optimized");
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "storeInitialSyncMessages"
                            ]))).catching(S).tags("message-store-optimized");
                        }
                    }
                    return {
                        nextRowId: e_nextRowId,
                        messages: e.messages.concat(p)
                    };
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })(), {
                nextRowId: y - i,
                messages: []
            });
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] database record preparation completed, ",
                ""
            ])), a).tags("history-sync");
            const S = [];
            const L = [];
            const E = [
                o("WAWebSchemaMessage").getMessageTable().bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(b.messages)
            ];
            b.messages.forEach((e)=>{
                if (e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) {
                    E.push(o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msg(e.id.toString(), {
                        id: e.id.toString(),
                        from: e.from.toString(),
                        to: e.to.toString(),
                        groupId: e.inviteGrp,
                        expiration: parseInt(e.inviteCodeExp, 10),
                        expired: o("WATimeUtils").unixTime() >= parseInt(e.inviteCodeExp, 10)
                    }));
                }
                if (e.associationType != null) {
                    S.push({
                        msgKey: e.id.toString(),
                        parentMsgKey: e.parentMsgKey.toString(),
                        associationType: e.associationType,
                        msgKeyInternalId: e.internalId
                    });
                }
                if (o("WAWebThreadMsgUtils").isThreadMsg(e)) {
                    L.push(e);
                }
            });
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][initial bootstrap] storage started, ",
                ""
            ])), a).tags("history-sync");
            if (S.length) {
                E.push(o("WAWebSchemaMessageAssociation").getMessageAssociationTable().bulkCreate(S));
            }
            if (L.length) {
                const k = o("WAWebThreadCommonModelUtils").getAggregatedThreadDetailUpdatesFromMessages(L);
                E.push(o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata(k));
                if (k.some(o("WAWebThreadCommonModelUtils").isAiThreadNonHistoricalMetaAiThread)) {
                    E.push(o("WAWebUserPrefsBot").markMetaAIThreadMigrationStateAsComplete());
                }
            }
            o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(b.messages);
            const I = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(function*() {
                for (const e of Object.values(t)){
                    const n = e.msgs;
                    yield* n;
                }
            }());
            E.push(o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(I));
            if (unreadMentionsToAdd.size) {
                if (r("MetaConfig")._("470")) {
                    const T = Array.from(unreadMentionsToAdd.keys());
                    const D = yield o("WAWebSchemaChat").getChatTable().bulkGet(T);
                    const x = new Map;
                    D.forEach((e)=>{
                        if (e && e.id) {
                            x.set(e.id.toString(), e.unreadMentionCount ?? 0);
                        }
                    });
                    unreadMentionsToAdd.forEach((e, t)=>{
                        const r = x.get(t) ?? 0;
                        if (r > 0) {
                            pendingUnreadMentionsMap.set(t, Math.max(r - e.length, 0));
                        }
                    });
                    o("WAWebApiChatUnreadMention").addUnreadMentionChat(unreadMentionsToAdd, pendingUnreadMentionsMap);
                    o("WAWebBackendApi").frontendFireAndForget("updateUnreadMentionsFromInitialHistorySync", {
                        unreadMentionsToAdd,
                        pendingUnreadMentionsMap
                    });
                } else {
                    unreadMentionsToAdd.forEach((e, t)=>{
                        const a = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(t));
                        const i = e.map(({ id, timestamp })=>new (r("WAWebUnreadMentionModel"))({
                                id,
                                timestamp
                            }));
                        const l = a?.unreadMentionMetadata;
                        const s = l?.pendingUnreadMentionCount ?? 0;
                        if (l != null && l.pendingUnreadMentionCount) {
                            l.pendingUnreadMentionCount = Math.max(s - i.length, 0);
                            pendingUnreadMentionsMap.set(t, l.pendingUnreadMentionCount);
                        }
                        l?.addUnreadMentions(i, o("WAWebGroupUnreadMessageType").UnreadMessageType.HISTORYC_SYNC_CHUNK);
                    });
                    o("WAWebApiChatUnreadMention").addUnreadMentionChat(unreadMentionsToAdd, pendingUnreadMentionsMap);
                }
            }
            return (h || (h = n("Promise"))).all(E).catch((e)=>{
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] store initial msgs err (optimized) ",
                    ""
                ])), e);
                if (e instanceof r("WAWeb-dexie").BulkError || e instanceof r("WAWeb-dexie").ConstraintError) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] Retrying initial sync bulk add on error"
                    ]))).tags("history-sync-initial-sync-optimized");
                    return o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(b.messages);
                }
                throw e;
            }).then(()=>{
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][initial bootstrap] storage completed, ",
                    ""
                ])), a).tags("history-sync");
                r("WAWeb-dexie").ignoreTransaction(function() {
                    o("WAWebSchemaFtsIndexingQueue").getFtsIndexingQueueTable().bulkCreateOrReplace(b.messages.map((e)=>({
                            id: String(e.rowId)
                        }))).then(()=>{
                        o("WAWebFtsClient").ftsClient.index().catch(r("WAWebNoop"));
                    });
                });
            }).catch((e)=>{
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] store initial msgs err (retry) ",
                    ""
                ])), e);
                const t = b.messages.map((e)=>e.id.toString());
            });
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            for(var n = e, pendingUnreadIds = new Set, unreadMentions = [], i = t.length - 1; i >= 0 && !(n <= 0); i--){
                const l = t[i];
                const s = o("WAWebDBStoreMessage").isPendingUnreadReceipt(l.id, l);
                if (s && (n--, pendingUnreadIds.add(String(l.id)), o("WAWebMsgGetters").getIsImportantMessage(l))) {
                    const u = {
                        id: String(l.id),
                        timestamp: l.t
                    };
                    unreadMentions.push(u);
                }
            }
            return {
                pendingUnreadIds,
                unreadMentions
            };
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        const n = r("sumBy")(e[t].msgs, function(e) {
            return o("WAWebDBGroupHistoryPreProcessor").getBumpIdCountForGroupJoin(e);
        });
        return y - e[t].msgs.length - n;
    }
    l.storeInitialSyncMessages = C;
}, 98);