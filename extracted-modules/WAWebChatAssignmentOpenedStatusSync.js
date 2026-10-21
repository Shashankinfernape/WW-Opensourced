__d("WAWebChatAssignmentOpenedStatusSync", [
    "Promise",
    "WATimeUtils",
    "WAWebBizChatAssignmentOpenedAction",
    "WAWebChatAssignmentCollection",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 1;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.ChatAssignmentOpenedStatus;
        };
        r_prototype.createChatOpenedMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                const a = o("WATimeUtils").unixTimeMs();
                const i = yield (e || (e = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ agentId, chatId, chatOpenedByAgent }) {
                        const l = {
                            chatAssignmentOpenedStatus: {
                                chatOpened: chatOpenedByAgent
                            }
                        };
                        return o("WAWebSyncdActionUtils").buildPendingMutation({
                            timestamp: a,
                            collection: r.collectionName,
                            operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                            indexArgs: [
                                (yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(o("WAWebWidFactory").createWid(chatId), o("WAWebSyncdConst").Actions.ChatAssignmentOpenedStatus)),
                                agentId
                            ],
                            value: l,
                            action: o("WAWebSyncdConst").Actions.ChatAssignmentOpenedStatus,
                            version: o("WAWebSyncdConst").CHAT_ASSIGNMENT_SYNC_VERSION
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                return i;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                const a = [];
                const i = yield (e || (e = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            const t = e.indexParts;
                            const n = t[1];
                            const i = t[2];
                            if (n == null || i == null) {
                                return r.malformedActionIndex();
                            }
                            if (e.operation === "set") {
                                const l = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(n));
                                if (!l.success) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: l.orphanModel
                                    };
                                }
                                const s = o("WAWebWidFactory").createWid(l.chat.id);
                                const u = e.value.chatAssignmentOpenedStatus;
                                if (!u) {
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                const chatOpenedByAgent = u.chatOpened;
                                if (chatOpenedByAgent == null) {
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                const d = `${s.toJid()}_${i}`;
                                const m = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.get(d);
                                if (m == null) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: d,
                                            modelType: o("WAWebSyncdConst").SyncModelType.ChatAssignment
                                        }
                                    };
                                }
                                a.push({
                                    id: d,
                                    chatId: s.toJid(),
                                    agentId: i,
                                    chatOpenedByAgent
                                });
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
                yield o("WAWebBizChatAssignmentOpenedAction").updateLocalOpenedState(a);
                return i;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    const u = new s;
    l.default = u;
}, 98);