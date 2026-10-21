__d("WAWebAiThreadRenameSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBackendApi",
    "WAWebBotBaseGating",
    "WAWebBulkCreateOrUpdateThreadsMetadata",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdGetThread",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNotNullAndNotWhitespaceOnly",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 1;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 7;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.AiThreadRename;
        };
        a_prototype.getIndexParts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const remote = e.key.remote;
                const n = yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(remote, o("WAWebSyncdConst").Actions.AiThreadRename);
                const r = e.key.id;
                return [
                    n,
                    r
                ];
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.validateSyncActionValue = function({ aiThreadRenameAction }) {
            if (aiThreadRenameAction == null) {
                return false;
            }
            const aiThreadRenameAction_newTitle = aiThreadRenameAction.newTitle;
            return r("isStringNotNullAndNotWhitespaceOnly")(aiThreadRenameAction_newTitle);
        };
        a_prototype.applyMutations = function(a) {
            const t = this;
            let i = 0;
            let l = 0;
            return (u || (u = n("Promise"))).all(a.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        if (e.operation !== "set") {
                            i++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        }
                        const { indexParts, value } = e;
                        const s = indexParts[1];
                        const u = indexParts[2];
                        if (!s || !u || !r("WAWebWid").isWid(s) || !r("isStringNotNullAndNotWhitespaceOnly")(u)) {
                            return t.malformedActionIndex();
                        }
                        if (!t.validateSyncActionValue(value)) {
                            l++;
                            return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                        }
                        const c = o("WAWebWidFactory").createWid(s);
                        if (!c.isBot()) {
                            return t.malformedActionIndex();
                        }
                        const d = o("WAWebWidFactory").asBotWidOrThrow(c);
                        if (!o("WAWebBotBaseGating").isBotEnabled() || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        }
                        const m = o("WAWebAiThreadCreationUtils").createAiThreadFromMutationIndex(d, u);
                        const p = yield o("WAWebSyncdGetThread").resolveThreadForMutationIndex(m);
                        if (p.success) {
                            return t.$AiThreadRenameSync$p_1(m, p.thread, value);
                        }
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                            orphanModel: p.orphanModel
                        };
                    } catch (e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })())).then((t)=>{
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-rename] ",
                        " operations not supported"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-rename]: ",
                        " malformed mutations"
                    ])), l);
                }
                return t;
            });
        };
        a_prototype.$AiThreadRenameSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
                const s = r("nullthrows")(a.aiThreadRenameAction?.newTitle);
                const lastMessageTimestamp = o("WATimeUtils").castToUnixTime(r("nullthrows")(t.lastMessageTimestamp));
                const creationTimestamp = o("WATimeUtils").castToUnixTime(r("nullthrows")(t.creationTimestamp));
                const m = r("nullthrows")(t.aiThreadInfo?.aiThreadType);
                const p = {
                    threadId: e,
                    chatId: e.key.remote,
                    lastMessageTimestamp,
                    creationTimestamp,
                    aiThreadInfo: o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(s, m)
                };
                yield o("WAWebBulkCreateOrUpdateThreadsMetadata").bulkCreateOrUpdateThreadsMetadata([
                    p
                ]);
                o("WAWebBackendApi").frontendFireAndForget("updateChatAiThreads", {
                    aiThreads: [
                        p
                    ]
                });
                return (u || (u = n("Promise"))).resolve({
                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.sendMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = yield this.buildMutation(e, t, o("WATimeUtils").unixTimeMs());
                yield o("WAWebSyncdCoreApi").lockForSync([], [
                    r
                ], function() {
                    return (u || (u = n("Promise"))).resolve();
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.buildMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, newTitle, n) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: yield this.getIndexParts(e),
                    value: {
                        aiThreadRenameAction: {
                            newTitle
                        }
                    },
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: n,
                    action: this.getAction()
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    const d = new c;
    l.default = d;
}, 98);