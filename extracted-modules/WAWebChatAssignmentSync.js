__d("WAWebChatAssignmentSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebBizChatAssignmentAction",
    "WAWebChatAssignmentCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChatAssignment",
    "WAWebSyncBootstrap",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 1;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.ChatAssignment;
        };
        a_prototype.createChatAssignmentMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const r = o("WATimeUtils").unixTimeMs();
                const a = yield (s || (s = n("Promise"))).all(e.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ agentId, chatId }) {
                        const i = {
                            chatAssignment: {
                                deviceAgentId: agentId
                            }
                        };
                        return o("WAWebSyncdActionUtils").buildPendingMutation({
                            timestamp: r,
                            collection: t.collectionName,
                            operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                            indexArgs: [
                                (yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(o("WAWebWidFactory").createWid(chatId), o("WAWebSyncdConst").Actions.ChatAssignment))
                            ],
                            value: i,
                            action: o("WAWebSyncdConst").Actions.ChatAssignment,
                            version: o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                return a;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                const i = [];
                const l = [];
                const u = [];
                const c = yield (s || (s = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const t = e.indexParts;
                            const n = t[1];
                            if (!n) {
                                return a.malformedActionIndex();
                            }
                            if (e.operation === "set") {
                                const c = e.value.chatAssignment;
                                if (!c) {
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                                }
                                const d = c.deviceAgentId ?? "";
                                const agent = o("WAWebAgentCollection").AgentCollection.get(d);
                                if (d !== "" && agent == null) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: d,
                                            modelType: o("WAWebSyncdConst").SyncModelType.Agent
                                        }
                                    };
                                }
                                const p = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(n));
                                if (!p.success) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: p.orphanModel
                                    };
                                }
                                const _ = o("WAWebWidFactory").createWid(p.chat.id);
                                o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(_).filter((e)=>e.id !== d).forEach((e)=>l.push(`${_.toJid()}_${e.id}`));
                                if (d !== "") {
                                    i.push({
                                        id: `${_.toJid()}_${d}`,
                                        chatId: _.toJid(),
                                        agentId: d,
                                        chatOpenedByAgent: false
                                    });
                                }
                                if (!r("WAWebSyncBootstrap").isSyncDBootstrapInProcess()) {
                                    u.push({
                                        chatId: _,
                                        agent,
                                        timestamp: Math.floor(e.timestamp / 1000)
                                    });
                                }
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
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
                yield o("WAWebSchemaChatAssignment").getChatAssignmentTable().bulkCreateOrMerge(i);
                o("WAWebChatAssignmentCollection").ChatAssignmentCollection.processChatAssignments(i);
                yield o("WAWebSchemaChatAssignment").getChatAssignmentTable().bulkRemove(l);
                o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(l);
                o("WAWebBizChatAssignmentAction").createChatAssignmentSystemMsgs(u);
                o("WAWebBizChatAssignmentAction").triggerChatAssignmentNotification(i, t.map((e)=>e.timestamp).join("-"));
                const d = i.map((e)=>e.id.toString());
                o("WAWebSyncdOrphan").checkOrphanChatAssignments(d).catch(()=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] chat_assignment: orphan chat assignments check failed"
                    ]))).sendLogs("failed-to-check-orphan-chat-assignments");
                });
                return c;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    const c = new u;
    l.default = c;
}, 98);