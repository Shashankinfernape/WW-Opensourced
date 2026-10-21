__d("WAWebAiThreadDeleteSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebBackendApi",
    "WAWebBotBaseGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdGetThread",
    "WAWebThreadMetadataBulkJob",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNotNullAndNotWhitespaceOnly"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 1;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 7;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.AiThreadDelete;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                let i = 0;
                const l = yield (s || (s = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation !== "set") {
                                i++;
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                };
                            }
                            const t = e.indexParts;
                            const n = t[1];
                            const l = t[2];
                            if (!n || !l || !r("WAWebWid").isWid(n) || !r("isStringNotNullAndNotWhitespaceOnly")(l)) {
                                return a.malformedActionIndex();
                            }
                            const s = o("WAWebWidFactory").createWid(n);
                            if (!s.isBot()) {
                                return a.malformedActionIndex();
                            }
                            const u = o("WAWebWidFactory").asBotWidOrThrow(s);
                            if (!o("WAWebBotBaseGating").isBotEnabled() || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()) {
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                };
                            }
                            const c = o("WAWebAiThreadCreationUtils").createAiThreadFromMutationIndex(u, l);
                            const d = yield o("WAWebSyncdGetThread").resolveThreadForMutationIndex(c);
                            if (d.success) {
                                return a.$AiThreadDeleteSync$p_1(u, c, d.thread);
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                orphanModel: d.orphanModel
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
                })()));
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-delete] ",
                        " operations not supported"
                    ])), i);
                }
                return l;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.$AiThreadDeleteSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
                const msgIds = yield o("WAWebThreadMetadataBulkJob").bulkDeleteThreads(e, [
                    t
                ]);
                o("WAWebBackendApi").frontendFireAndForget("deleteChatAiThreads", {
                    chatId: e,
                    threadIds: [
                        t
                    ],
                    msgIds
                });
                return (s || (s = n("Promise"))).resolve({
                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getIndexParts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const remote = e.key.remote;
                const n = yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(remote, o("WAWebSyncdConst").Actions.AiThreadDelete);
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
        a_prototype.sendMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const r = o("WATimeUtils").unixTimeMs();
                const a = yield (s || (s = n("Promise"))).all(e.map((e)=>t.buildMutation(e, r)));
                yield o("WAWebSyncdCoreApi").lockForSync([], a, function() {
                    return (s || (s = n("Promise"))).resolve();
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.buildMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: yield this.getIndexParts(e),
                    value: {},
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: t,
                    action: this.getAction()
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    const c = new u;
    l.default = c;
}, 98);