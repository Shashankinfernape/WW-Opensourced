__d("WAWebAiThreadPinSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadPinSyncUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdGetThread",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNotNullAndNotWhitespaceOnly"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.AiThreadPin;
        };
        a_prototype.getIndexParts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const remote = e.key.remote;
                const n = yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(remote, o("WAWebSyncdConst").Actions.AiThreadPin);
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
        a_prototype.validateSyncActionValue = function({ threadPinAction }) {
            if (threadPinAction == null) {
                return false;
            }
            return threadPinAction.pinned != null;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                let i = 0;
                let l = 0;
                const u = yield (d || (d = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, index) {
                        try {
                            if (e.operation !== "set") {
                                i++;
                                return {
                                    index,
                                    result: {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                    }
                                };
                            }
                            const { indexParts, value } = e;
                            const u = indexParts[1];
                            const c = indexParts[2];
                            if (!u || !c) {
                                return {
                                    index,
                                    result: a.malformedActionIndex()
                                };
                            }
                            if (!r("WAWebWid").isWid(u) || !r("isStringNotNullAndNotWhitespaceOnly")(c)) {
                                return {
                                    index,
                                    result: a.malformedActionIndex()
                                };
                            }
                            if (!a.validateSyncActionValue(value)) {
                                l++;
                                return {
                                    index,
                                    result: o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName)
                                };
                            }
                            const d = o("WAWebWidFactory").createWid(u);
                            if (!d.isBot()) {
                                return {
                                    index,
                                    result: a.malformedActionIndex()
                                };
                            }
                            const m = o("WAWebWidFactory").asBotWidOrThrow(d);
                            if (!o("WAWebBotBaseGating").isBotEnabled() || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()) {
                                return {
                                    index,
                                    result: {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                    }
                                };
                            }
                            const p = o("WAWebAiThreadCreationUtils").createAiThreadFromMutationIndex(m, c);
                            const _ = yield o("WAWebSyncdGetThread").resolveThreadForMutationIndex(p);
                            if (_.success) {
                                return {
                                    index,
                                    threadId: p,
                                    thread: _.thread,
                                    value,
                                    timestamp: e.timestamp
                                };
                            }
                            return {
                                index,
                                result: {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                    orphanModel: _.orphanModel
                                }
                            };
                        } catch (e) {
                            return {
                                index,
                                result: {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Failed
                                }
                            };
                        }
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                })()));
                const c = [];
                for (const m of u){
                    if (m.result != null) {
                        c.push(m.result);
                    } else {
                        try {
                            const p = yield this.$AiThreadPinSync$p_1({
                                incomingTimestamp: m.timestamp,
                                threadDbRow: m.thread,
                                threadId: m.threadId,
                                value: m.value
                            });
                            c.push(p);
                        } catch (e) {
                            c.push({
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            });
                        }
                    }
                }
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-pin] ",
                        " operations not supported"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-pin]: ",
                        " malformed mutations"
                    ])), l);
                }
                return c;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.$AiThreadPinSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ incomingTimestamp, threadDbRow, threadId, value }) {
                const l = value.threadPinAction?.pinned === true;
                if (!l) {
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(threadId, threadDbRow, undefined);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                }
                const threadDbRow_pinThreadTimestamp = threadDbRow.pinThreadTimestamp;
                if (threadDbRow_pinThreadTimestamp != null && threadDbRow_pinThreadTimestamp > 0) {
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(threadId, threadDbRow, incomingTimestamp);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                }
                const c = threadId.key.remote.toString();
                const d = yield o("WAWebAiThreadPinSyncUtils").getLocalThreadPins(c);
                const m = o("WAWebBotGating").getAiThreadPinMaxCount();
                if (d.length < m) {
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(threadId, threadDbRow, incomingTimestamp);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                }
                const p = d.filter((e)=>e.isOrphan !== true);
                if (p.length === 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-pin] all pins orphan, drop incoming ",
                        ""
                    ])), threadId.toString());
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                }
                const _ = p.reduce((acc, item)=>{
                    if (item.timestamp < acc.timestamp) {
                        return item;
                    }
                    return acc;
                });
                if (incomingTimestamp > _.timestamp) {
                    yield this.$AiThreadPinSync$p_2(_.threadId, _.dbRow, incomingTimestamp);
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(threadId, threadDbRow, incomingTimestamp);
                }
                return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$AiThreadPinSync$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (t != null) {
                    yield o("WAWebAiThreadPinSyncUtils").updatePinState(e, t, undefined);
                } else {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][ai-thread-pin] evict pin, no DB row ",
                        ""
                    ])), e.toString());
                }
                yield o("WAWebSyncdDb").appendPendingMutationsRows([
                    (yield this.buildMutation(e, false, n))
                ]);
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
                    return (d || (d = n("Promise"))).resolve();
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.buildMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, pinned, n) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: yield this.getIndexParts(e),
                    value: {
                        threadPinAction: {
                            pinned
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
    const p = new m;
    l.default = p;
}, 98);