__d("WAWebInteractiveMessageSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCurrentUser",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdResolveMessages",
    "WAWebSyncdUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            e.chatJidIndex = 1;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getMessageKey = function([, e, n, r, a]) {
            if (!(!e || !n || !r || !a)) {
                return o("WAWebSyncdIndexUtils").syncKeyToMsgKey(e, n, r, a);
            }
        };
        a_prototype.getVersion = function() {
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.InteractiveMessageAction;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: start apply interactive message"
                    ])));
                }
                const i = yield o("WAWebSyncdResolveMessages").resolveMessagesForMutations(t);
                const { incomingRemoteToLocalChatId, messagesInDB } = i;
                let _ = 0;
                let f = 0;
                let g = 0;
                const h = [];
                let y = 0;
                const C = [];
                let b = 0;
                const v = yield (m || (m = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const { indexParts, value } = e;
                                const i = indexParts[1];
                                const s = indexParts[2];
                                const u = indexParts[3];
                                const c = indexParts[4];
                                const d = indexParts[5];
                                if (!i || !s || !u || !c || !d) {
                                    return a.malformedActionIndex();
                                }
                                const m = value.interactiveMessageAction;
                                if (m == null) {
                                    _++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                                }
                                const v = incomingRemoteToLocalChatId.get(i);
                                const S = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(i, s, u, c);
                                if (S == null) {
                                    return a.malformedActionIndex();
                                }
                                if (v == null) {
                                    if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                                        const R = yield o("WAWebSchemaChat").getChatTable().get(S.remote.toString());
                                        if (R != null) {
                                            f++;
                                        }
                                    }
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: S.toString(),
                                            modelType: o("WAWebSyncdConst").SyncModelType.Msg
                                        }
                                    };
                                }
                                const L = r("nullthrows")(o("WAWebSyncdIndexUtils").syncKeyToMsgKey(v, s, u, c));
                                const E = messagesInDB.find((e)=>e.startsWith(o("WAWebSyncdIndexUtils").msgKeyToDbIdWithoutFromMeParticipant(L)));
                                const agmId = m.agmId;
                                if (agmId != null && v != null) {
                                    o("WAWebBackendApi").frontendFireAndForget("addGalaxyDisableCTAByAgmId", {
                                        agmId,
                                        chatId: v
                                    });
                                }
                                if (E == null) {
                                    if (agmId != null && v != null) {
                                        return {
                                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                                        };
                                    }
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: S.toString(),
                                            modelType: o("WAWebSyncdConst").SyncModelType.Msg
                                        }
                                    };
                                }
                                const I = o("WAWebMsgCollection").MsgCollection.get(E);
                                if (I && m.type === o("WAWebProtobufSyncAction.pb").SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode.DISABLE_CTA) {
                                    o("WAWebBackendApi").frontendFireAndForget("addGalaxyDisableCTAMessageId", {
                                        messageId: I.id.toString()
                                    });
                                    g++;
                                    if (h.length < 3) {
                                        h.push(L.toString());
                                    }
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                }
                                y++;
                                if (C.length < 3) {
                                    C.push(L.toString());
                                }
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                                };
                            }
                            b++;
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
                if (_ > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "interactive message sync: ",
                        " malformed mutations"
                    ])), _);
                }
                if (f > 0) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] interactive msg sync: ",
                        " chats via fallback"
                    ])), f);
                }
                if (y > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[star_msg_sync] ",
                        " msgs in storage not collection => ",
                        ""
                    ])), y, C);
                }
                if (b > 0) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "interactive message sync: ",
                        " operations not supported"
                    ])), b);
                }
                return v;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.$InteractiveMessageSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ actionType, agmId, flowId, msgKey }) {
                const l = o("WATimeUtils").unixTimeMs();
                const interactiveMessageAction = babelHelpers.extends({
                    type: actionType
                }, agmId != null ? {
                    agmId
                } : {});
                const u = {
                    interactiveMessageAction
                };
                const c = new (r("WAWebMsgKey"))({
                    fromMe: msgKey.fromMe,
                    participant: msgKey.participant,
                    remote: o("WAWebWidFactory").createWid((yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(msgKey.remote, o("WAWebSyncdConst").Actions.InteractiveMessageAction))),
                    id: msgKey.id
                });
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [].concat(o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(msgKey), [
                        flowId
                    ]),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    version: this.getVersion(),
                    value: u,
                    timestamp: l,
                    action: this.getAction()
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.sendDisableCTAMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, flowId, agmId) {
                const a = yield this.$InteractiveMessageSync$p_1({
                    actionType: o("WAWebProtobufSyncAction.pb").SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode.DISABLE_CTA,
                    agmId,
                    flowId,
                    msgKey: e
                });
                yield o("WAWebSyncdCoreApi").lockForSync([], [
                    a
                ], function() {
                    return (m || (m = n("Promise"))).resolve();
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").MessageSyncdActionBase);
    const _ = new p;
    l.default = _;
}, 98);