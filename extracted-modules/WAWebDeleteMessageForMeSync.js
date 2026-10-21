__d("WAWebDeleteMessageForMeSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAddonProcessDeleteForMe",
    "WAWebBackendApi",
    "WAWebCurrentUser",
    "WAWebDBMessageDelete",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebRequestDeleteAddOns",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdResolveMessages",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = [
        "deleteMedia",
        "messageTimestamp",
        "timestamp"
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
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isNewsletter()) {
                return o("WAWebWidToJid").widToNewsletterJid(e);
            }
            if (e.isBroadcast()) {
                return o("WAWebWidToJid").widToBroadcastJid(e);
            }
            return o("WAWebWidToJid").widToChatJid(o("WAWebWidFactory").createWid((yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(e, o("WAWebSyncdConst").Actions.DeleteMessageForMe))));
        });
        return b.apply(this, arguments);
    }
    const v = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
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
            return 3;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.DeleteMessageForMe;
        };
        a_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: after apply delete message for me"
                    ])));
                }
                const a = [];
                const i = yield o("WAWebSyncdResolveMessages").resolveMessagesForMutations(e);
                const { incomingRemoteToLocalChatId, messagesInDB } = i;
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: after cache for delete message for me"
                    ])));
                }
                let b = 0;
                const v = yield (y || (y = n("Promise"))).all(e.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const n = e.indexParts;
                                const i = n[1];
                                const s = n[2];
                                const u = n[3];
                                const f = n[4];
                                if (!i || !s || !u || !f) {
                                    if (o("WAWebCurrentUser").isEmployee()) {
                                        const g = i ? "" : "remote";
                                        const h = s ? "" : "externalID";
                                        const y = u ? "" : "fromMe";
                                        const v = f ? "" : "participant";
                                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                            "[syncd] deleteForMe bad index: ",
                                            " ",
                                            " ",
                                            " ",
                                            ""
                                        ])), g, h, y, v).sendLogs("missing-index-props-delete-for-me");
                                    }
                                    return t.malformedActionIndex();
                                }
                                const S = incomingRemoteToLocalChatId.get(i);
                                const R = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(i, s, u, f);
                                if (!R) {
                                    if (o("WAWebCurrentUser").isEmployee()) {
                                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                            "syncd: malformed index for delete message for me sync."
                                        ]))).sendLogs("invalid-index-delete-for-me");
                                    }
                                    return t.malformedActionIndex();
                                }
                                if (S == null) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: R.toString(),
                                            modelType: o("WAWebSyncdConst").SyncModelType.Msg
                                        }
                                    };
                                }
                                const L = r("nullthrows")(o("WAWebSyncdIndexUtils").syncKeyToMsgKey(S, s, u, f));
                                const E = messagesInDB.find((e)=>e.startsWith(o("WAWebSyncdIndexUtils").msgKeyToDbIdWithoutFromMeParticipant(L)));
                                if (E == null) {
                                    if (o("WAWebCurrentUser").isEmployee()) {
                                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                            "syncd: no direct msg found. Trying to match addon"
                                        ])));
                                    }
                                    let k = yield o("WAWebAddonProcessDeleteForMe").hasDeleteAddonForMe(L);
                                    if (k == null) {
                                        const I = o("WAWebLidMigrationUtils").getAlternateMsgKey(L);
                                        if (I != null) {
                                            k = yield o("WAWebAddonProcessDeleteForMe").hasDeleteAddonForMe(I);
                                        }
                                    }
                                    if (k != null) {
                                        if (o("WAWebCurrentUser").isEmployee()) {
                                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                                "syncd: addon found for deleteForMe. Applying mutation"
                                            ])));
                                        }
                                        try {
                                            yield o("WAWebAddonProcessDeleteForMe").processDeleteForMeSingle(k);
                                            return {
                                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                                            };
                                        } catch (e) {}
                                    }
                                    if (o("WAWebCurrentUser").isEmployee()) {
                                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                            "syncd: no message or addon found for deleteForMe"
                                        ])));
                                    }
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: R.toString(),
                                            modelType: o("WAWebSyncdConst").SyncModelType.Msg
                                        }
                                    };
                                }
                                a.push(E);
                                yield o("WAWebBackendApi").frontendSendAndReceive("deleteMessageFromCollectionForSync", {
                                    msgKey: E
                                });
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
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
                if (b > 0) {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "delete_message_for_me_sync: ",
                        " operations not supported"
                    ])), b);
                }
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: before deleting messages"
                    ])));
                }
                if (a.length > 0) {
                    yield o("WAWebDBMessageDelete").removeMessagesFromHistory(a);
                    const S = new Set;
                    a.forEach((e)=>S.add(r("WAWebMsgKey").fromString(e).remote.toString()));
                    const R = Array.from(S.values()).join(",").toString();
                    o("WAWebBackendApi").frontendFireAndForget("deleteModelsForLastAddOnPreview", {
                        messagesIds: a
                    });
                    yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(R, a);
                }
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: after deleting messages"
                    ])));
                }
                return v;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.resolveConflicts = function(t, a) {
            const l = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, t.binarySyncAction);
            const value = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, a.binarySyncData).value;
            const u = r("nullthrows")(l.deleteMessageForMeAction?.deleteMedia);
            const c = r("nullthrows")(value?.deleteMessageForMeAction?.deleteMedia);
            if (!c && u) {
                return (y || (y = n("Promise"))).resolve(o("WAWebSyncdConst").ConflictResolutionState.SkipRemote);
            }
            return (y || (y = n("Promise"))).resolve(o("WAWebSyncdConst").ConflictResolutionState.SkipRemoteAndDropLocal);
        };
        a_prototype.buildDeleteForMeMutation = function(n) {
            const { deleteMedia, messageTimestamp, timestamp } = n;
            const i = babelHelpers.objectWithoutPropertiesLoose(n, e);
            const l = {
                deleteMessageForMeAction: {
                    deleteMedia,
                    messageTimestamp
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: o("WAWebSyncdActionUtils").buildMessageKey(i),
                value: l,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp,
                action: this.getAction()
            });
        };
        a_prototype.getDeleteForMeMutations = function(t, r) {
            const e = this;
            const a = o("WATimeUtils").unixTimeMs();
            return (y || (y = n("Promise"))).all(t.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const remote = t.id.remote;
                    const i = o("WAWebMsgGetters").getSender(t);
                    const l = i ? o("WAWebWidToJid").widToUserJid(i) : null;
                    const remoteJid = yield C(remote);
                    return e.buildDeleteForMeMutation({
                        timestamp: a,
                        deleteMedia: r,
                        messageTimestamp: o("WAWebMsgGetters").getT(t),
                        remoteJid,
                        id: t.id.id,
                        fromMe: t.id.fromMe,
                        participant: o("WAWebMsgGetters").getIsGroupMsg(t) && !t.id.fromMe ? l : null
                    });
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
        };
        return a;
    })(o("WAWebSyncdAction").MessageSyncdActionBase);
    const S = new v;
    l.default = S;
}, 98);