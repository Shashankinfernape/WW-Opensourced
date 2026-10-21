__d("WAWebRestoreChatsAndMessages", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChat",
    "WAWebApiHydrateWidsUtil",
    "WAWebAppTracker",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatMsgsCollection",
    "WAWebChatViewMode.flow",
    "WAWebCmd",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebDBQueryChatVisibleMessageHelper",
    "WAWebDbEncryptionKey",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFrontendChatGetters",
    "WAWebModelStorageInitialize",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPromiseQueue",
    "WAWebRegionReadinessSignals",
    "WAWebRestoreBusinessInfo",
    "WAWebRestoreGroupParticipantsAction",
    "WAWebSchemaMessage",
    "WAWebThreadMetadata",
    "WAWebThreadMetadataUtil",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:11133",
    "getErrorSafe",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = [
        "id"
    ];
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
    const b = 20;
    const count = 5;
    const S = 100;
    function R(e, chatTimestamp) {
        return e.reduce((acc, item)=>{
            const i = o("WAWebApiHydrateWidsUtil").hydrateWids(babelHelpers.extends({}, item, {
                pendingInitialLoading: true,
                isReadOnly: item.isReadOnly ?? false,
                chatViewMode: item.chatViewMode ?? o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE
            }));
            const l = o("WAWebThreadMetadataUtil").getOfflineMetaPreviewForChat({
                chatTimestamp,
                chatId: i.id,
                accountLid: i.accountLid
            });
            if (l != null) {
                i.previewT = l;
            }
            if (i.id.isNewsletter()) {
                acc.newsletters.push(i);
            } else {
                acc.chats.push(i);
            }
            return acc;
        }, {
            chats: [],
            newsletters: []
        });
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebApiChat").getAllChatsDeserialized();
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        const n = R(e, t);
        const { chats, newsletters } = n;
        chats.sort(r("WAWebChatComparator"));
        o("WAWebChatCollection").ChatCollection.add(chats, {
            merge: true
        });
        return {
            chats,
            newsletters
        };
    }
    function I() {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const length = o("WAWebChatCollection").ChatCollection.filter(o("WAWebFrontendChatGetters").getShouldAppearInList).length;
            const t = length > 0;
            o("WAWebRegionReadinessSignals").markChatlistRowsReady(t);
            yield o("WAWebRegionReadinessSignals").waitForChatlistRowsPaint(t && (n("cr:11133") == null ? undefined : n("cr:11133")()) === true);
        });
        return T.apply(this, arguments);
    }
    let D = null;
    let x = false;
    let $ = null;
    let P = false;
    function N(e) {
        if ((n("cr:11133") == null ? undefined : n("cr:11133")()) !== true || P || x || o("WAWebCmd").Cmd.isMainStreamReadyMd) {
            return (C || (C = n("Promise"))).resolve();
        }
        $ = e;
        if (D == null) {
            D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
                yield o("WAWebModelStorageInitialize").initializeWithoutGKs();
                if (!(P || x || o("WAWebCmd").Cmd.isMainStreamReadyMd)) {
                    const e = yield L();
                    k(e, $);
                    x = true;
                    yield I();
                }
            })().catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] provisional chat row restore failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("provisional-chat-row-restore-failed");
            }).finally(()=>{
                D = null;
            });
        }
        return D;
    }
    function M() {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            P = true;
            let e = false;
            try {
                if (D != null) {
                    yield D;
                }
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessages_start");
                yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] load DbEncKeyStore key"
                ])));
                o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.InitialChatLoad);
                e = true;
                return yield o("WAWebModelStorageInitialize").initializeWithoutGKs().then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    let e;
                    (e = o("WAWebWamOfflineResumeReporter")).OfflineResumeReporter.qpl.addPoint("RestoreChats_start");
                    e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_start");
                    const t = yield L();
                    e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_end");
                    e.OfflineResumeReporter.qpl.addPoint("RCMPopulateMatCache_start");
                    e.OfflineResumeReporter.qpl.addPoint("RCMPopulateMatCache_end");
                    e.OfflineResumeReporter.qpl.addPoint("RCMFilterChats_start");
                    const n = o("WAWebThreadMetadata").getOfflineThreadMetaPreview();
                    const a = k(t, n?.chatTimestamp);
                    const { chats, newsletters } = a;
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineChatThreadCount(t.length);
                    yield I();
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMFilterChats_end");
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChats_end");
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessagesFirstChunk_start");
                    const web_init_chat_batch_size = o("WAWebABProps").getABPropConfigValue("web_init_chat_batch_size") || S;
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addAnnotations({
                        int: {
                            web_init_chat_batch_size
                        }
                    });
                    if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                        newsletters.sort(r("WAWebChatComparator"));
                        if (r("WAWebNewsletterCollection") != null) {
                            r("WAWebNewsletterCollection").add(newsletters, {
                                merge: true
                            });
                        }
                        A(X(newsletters), web_init_chat_batch_size).catch((e)=>{
                            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[init-from-storage] newsletter chunked restore failed"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("newsletter-chunked-restore-failed");
                        });
                    }
                    const u = yield A(X(chats), web_init_chat_batch_size);
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessagesFirstChunk_end");
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMUpdateDuplicatedLidThread_start");
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMUpdateDuplicatedLidThread_end");
                    return u;
                })).then(o("WAWebRestoreBusinessInfo").restoreBusinessInfo).then(()=>{
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessages_end");
                }).catch((e)=>{
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "restoreChatsAndMessages: failed with error"
                    ]))).catching(r("getErrorSafe")(e));
                    throw e;
                });
            } finally{
                P = false;
                if (e) {
                    o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.InitialChatLoad);
                }
            }
        });
        return w.apply(this, arguments);
    }
    function A(e, web_init_chat_batch_size) {
        let a = (C || (C = n("Promise"))).resolve();
        const i = new (o("WAWebPromiseQueue")).PromiseQueue;
        const l = (s)=>{
            const l = e.slice(s, s + web_init_chat_batch_size);
            const u = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = self.performance.now();
                    if (s === 0) {
                        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMChatMetadata_start");
                    }
                    const t = yield F(l);
                    if (s === 0) {
                        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMChatMetadata_end");
                    }
                    if (s === 0) {
                        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMRestoreMessages_start");
                    }
                    yield O(t);
                    if (s === 0) {
                        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMRestoreMessages_end");
                    }
                    const n = [];
                    t.forEach(({ chat })=>{
                        const i = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled != null && o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() ? o("WAWebChatCollection").ChatCollection.get(chat.id) ?? (r("WAWebNewsletterCollection") == null ? undefined : r("WAWebNewsletterCollection").get(chat.id)) : o("WAWebChatCollection").ChatCollection.get(chat.id);
                        if (i) {
                            i.set({
                                pendingInitialLoading: false
                            });
                            if (o("WAWebChatGetters").getIsGroup(i)) {
                                n.push(String(chat.id));
                            }
                        }
                    });
                    yield o("WAWebRestoreGroupParticipantsAction").restoreGroupParticipantsForChats(n);
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            if (s === 0) {
                a = i.enqueue(function() {
                    return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("initialChatLoad", u, {
                        priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
                    }).waitUntilCompleted();
                });
            } else {
                i.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
                    return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("initialChatLoad", u).waitUntilCompleted();
                }));
            }
        };
        for(let s = 0; s < e.length; s += web_init_chat_batch_size){
            l(s);
        }
        return a;
    }
    function F(e) {
        return (C || (C = n("Promise"))).all(e.map((e)=>{
            const t = B(e);
            return o("WAWebDBMessageStoreUtils").getKeyMsgsFromChatHistory(e, t).then(({ anchor, lastReceivedKey, previewMsg })=>{
                const i = babelHelpers.extends({}, e, {
                    unreadMsgAnchorId: t ? anchor : undefined
                });
                return {
                    chat: i,
                    previewMsg,
                    lastReceivedKey
                };
            });
        }));
    }
    function O(e) {
        const t = W(e);
        const { lastMessageKeys, missingAnchorCount, missingAnchorIds, tasks } = t;
        tasks.push(j(lastMessageKeys));
        return (C || (C = n("Promise"))).all(tasks).then(()=>{
            if (missingAnchorCount > 0) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " unread anchor messages not in message collection => ",
                    ""
                ])), missingAnchorCount, missingAnchorIds);
            }
        });
    }
    function B(e) {
        return e.t != null && o("WATimeUtils").happenedWithin(o("WATimeUtils").castToUnixTime(e.t), o("WATimeUtils").DAY_SECONDS) || e.pin != null && e.pin > 0;
    }
    function W(e) {
        const tasks = [];
        const lastMessageKeys = [];
        const missingAnchorIds = [];
        let missingAnchorCount = 0;
        e.forEach(({ chat, lastReceivedKey, previewMsg })=>{
            if (B(chat) || previewMsg && previewMsg.id !== lastReceivedKey) {
                const c = self.performance.now();
                tasks.push(q(chat, previewMsg).then(()=>{
                    const chat_unreadMsgAnchorId = chat.unreadMsgAnchorId;
                    if (!r("isStringNullOrEmpty")(chat_unreadMsgAnchorId)) {
                        const t = r("WAWebMsgKey").fromString(chat_unreadMsgAnchorId);
                        const n = o("WAWebMsgCollection").MsgCollection.get(t);
                        if (!n) {
                            missingAnchorCount++;
                            if (missingAnchorIds.length < 3) {
                                missingAnchorIds.push(chat_unreadMsgAnchorId);
                            }
                            return;
                        }
                        const s = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWidFromWidLike(chat.id));
                        if (s) {
                            s.unreadMsgAnchor = n;
                        }
                    }
                }));
            } else {
                lastMessageKeys.push(String(lastReceivedKey));
            }
        });
        return {
            tasks,
            lastMessageKeys,
            missingAnchorIds,
            missingAnchorCount
        };
    }
    function q(e, t) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!B(e) || e.unreadCount === 0) {
                return V(e, t);
            }
            if (e.unreadCount >= b) {
                yield V(e, t);
                return G(e);
            }
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "restoreMessagesForChat: restoring last ",
                " messages."
            ])), e.unreadCount + count);
            const n = [];
            if (t) {
                const r = o("WAWebDBMessageSerialization").messageFromDbRow(t);
                const a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(r);
                if (a != null && a.canRenderInUi(r)) {
                    n.push(t.id.toString());
                }
            }
            const i = yield o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
                lowerBound: `${e.id}_/`,
                upperBound: `${e.id}_g`,
                options: {
                    reverse: true
                },
                count: e.unreadCount + count,
                addOnReparseExclusionList: n
            });
            yield o("WAWebMsgCollection").MsgCollection.processMultipleMessages(o("WAWebWidFactory").createWidFromWidLike(e.id), i.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)).reverse(), {
                pendingMsgsDone: true,
                resume: false,
                add: "last",
                isHistory: true
            }, "restoreMessagesForChat");
        });
        return U.apply(this, arguments);
    }
    function V(e, t) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            const a = [];
            if (t != null && t.internalId != null) {
                const i = t.internalId;
                const l = o("WAWebDBMessageSerialization").messageFromDbRow(t);
                const s = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(l);
                if (t && s != null && s.canRenderInUi(l)) {
                    a.push(t.id.toString());
                }
                n = yield o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
                    lowerBound: i,
                    upperBound: `${e.id}_g`,
                    options: {
                        lowerInclusive: true
                    },
                    addOnReparseExclusionList: a
                });
            } else {
                const count = 1;
                n = yield o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
                    lowerBound: `${e.id}_/`,
                    upperBound: `${e.id}_g`,
                    options: {
                        reverse: true
                    },
                    count
                });
            }
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "processPreviewMessageInChat: restoring ",
                " message."
            ])), n.length);
            o("WAWebMsgCollection").MsgCollection.processMultipleMessages(o("WAWebWidFactory").createWidFromWidLike(e.id), n.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e, function(e) {
                    e.invis = true;
                })), {
                pendingMsgsDone: false,
                resume: false,
                add: "last",
                isHistory: true
            }, "processPreviewMessageInChat").catch((e)=>{
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "processPreviewMessageInChat: processMultipleMessages failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("restore-preview-msg-process-failed");
            });
        });
        return H.apply(this, arguments);
    }
    function G(e) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const e_unreadMsgAnchorId = e.unreadMsgAnchorId;
            if (r("isStringNullOrEmpty")(e_unreadMsgAnchorId)) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "unreadMsgAnchorId is not defined"
                ])));
                return (C || (C = n("Promise"))).resolve();
            }
            yield o("WAWebSchemaMessage").getMessageTable().equals([
                "id"
            ], e_unreadMsgAnchorId).then((t)=>{
                if (t.length === 0) {
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Unread anchor message does not exist in message table"
                    ])));
                    return;
                }
                const a = o("WAWebDBMessageUtils").getInChatMsgId(t[0].internalId || "");
                const i = K(e, a, count);
                const l = Q(e, a, count);
                const s = (C || (C = n("Promise"))).all([
                    i,
                    l
                ]).then(([t, n])=>[].concat(t, n));
                return s.then((t)=>{
                    const n = t.length - count;
                    if (!(n < 0)) {
                        const a = t[t.length - count].id;
                        const i = t.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e, function(e) {
                                e.invis = true;
                            }));
                        return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(o("WAWebWidFactory").createWidFromWidLike(e.id), i, {
                            pendingMsgsDone: true,
                            resume: false,
                            add: "unread",
                            isHistory: true,
                            firstUnreadKey: r("WAWebMsgKey").fromString(a)
                        }, "processUnreadMessage", new (o("WAWebChatMsgsCollection")).ChatMsgsCollection);
                    }
                });
            });
        });
        return z.apply(this, arguments);
    }
    function j(lastMessageKeys) {
        const t = self.performance.now();
        return o("WAWebSchemaMessage").getMessageTable().bulkGet(lastMessageKeys).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield (C || (C = n("Promise"))).all(e.map((e)=>{
                    if (!e) {
                        return (C || (C = n("Promise"))).resolve();
                    }
                    const t = o("WAWebDBMessageSerialization").messageFromDbRow(e, function(e) {
                        e.invis = true;
                    });
                    return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(t.id.remote, [
                        t
                    ], {
                        pendingMsgsDone: false,
                        resume: false,
                        add: "last",
                        isHistory: true
                    }, "loadLastMessagesFromDb");
                }));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).catch((e)=>{
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "loadLastMessagesFromDB: failed with error"
            ]))).catching(r("getErrorSafe")(e));
            throw e;
        });
    }
    function K(e, t, n) {
        const r = {
            lowerInclusive: true,
            upperInclusive: false
        };
        const a = o("WAWebDBMessageUtils").beginningOfChat(o("WAWebWidFactory").createWid(e.id));
        const upperBound = o("WAWebDBMessageUtils").craftInternalId({
            chatId: e.id,
            inChatMsgId: t
        });
        return o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
            lowerBound: a,
            upperBound,
            options: babelHelpers.extends({}, r, {
                reverse: true
            }),
            count
        }).then((e)=>e.reverse());
    }
    function Q(e, t, n) {
        const options = {
            lowerInclusive: true,
            upperInclusive: false
        };
        return o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
            lowerBound: o("WAWebDBMessageUtils").craftInternalId({
                chatId: e.id,
                inChatMsgId: t
            }),
            upperBound: o("WAWebDBMessageUtils").endOfChat(o("WAWebWidFactory").createWid(e.id)),
            options,
            count
        });
    }
    function X(t) {
        return t.map((t)=>{
            const n = t.id;
            const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return babelHelpers.extends({}, r, {
                id: n.toString()
            });
        });
    }
    l.restoreChatRowsForDisplay = N;
    l.restoreChatsAndMessages = M;
}, 98);