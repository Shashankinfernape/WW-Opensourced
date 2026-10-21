__d("WAWebStarMessageSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebCurrentUser",
    "WAWebDBProcessMessage",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebStarredMsgCollection",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
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
    let p;
    let _;
    let f;
    const g = ((t)=>{
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
            return 2;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.Star;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                const i = [];
                const l = [];
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: start apply star message"
                    ])));
                }
                const g = yield o("WAWebSyncdResolveMessages").resolveMessagesForMutations(t);
                const { incomingRemoteToLocalChatId, messagesInDB } = g;
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: after gather cache for star message"
                    ])));
                }
                let C = 0;
                let b = 0;
                const v = [];
                let S = 0;
                let R = 0;
                const L = yield (f || (f = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const { indexParts, value } = e;
                                const u = indexParts[1];
                                const c = indexParts[2];
                                const d = indexParts[3];
                                const m = indexParts[4];
                                if (!u || !c || !d || !m) {
                                    return a.malformedActionIndex();
                                }
                                const p = value.starAction?.starred;
                                const _ = incomingRemoteToLocalChatId.get(u);
                                if (p == null) {
                                    C++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                                }
                                const f = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(u, c, d, m);
                                if (f == null) {
                                    return a.malformedActionIndex();
                                }
                                if (_ == null) {
                                    if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                                        const g = yield o("WAWebSchemaChat").getChatTable().get(f.remote.toString());
                                        if (g != null) {
                                            b++;
                                        }
                                    }
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: f.toString(),
                                            modelType: o("WAWebSyncdConst").SyncModelType.Msg
                                        }
                                    };
                                }
                                const L = r("nullthrows")(o("WAWebSyncdIndexUtils").syncKeyToMsgKey(_, c, d, m));
                                const E = messagesInDB.find((e)=>e.startsWith(o("WAWebSyncdIndexUtils").msgKeyToDbIdWithoutFromMeParticipant(L)));
                                if (E == null) {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: f.toString(),
                                            modelType: o("WAWebSyncdConst").SyncModelType.Msg
                                        }
                                    };
                                }
                                if (p) {
                                    i.push(E.toString());
                                } else {
                                    l.push(E.toString());
                                }
                                const k = o("WAWebMsgCollection").MsgCollection.get(E);
                                if (k) {
                                    const I = k.associationType;
                                    if (I != null) {
                                        const T = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(I);
                                        if (T?.processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages) {
                                            k.detachAssociatedMsg();
                                        }
                                    }
                                    k.star = p;
                                    if (k.star) {
                                        o("WAWebStarredMsgCollection").addStarredMsgs([
                                            k
                                        ]);
                                    } else {
                                        o("WAWebStarredMsgCollection").removeStarredMsgs([
                                            k
                                        ]);
                                    }
                                } else {
                                    S++;
                                    if (v.length < 3) {
                                        v.push(L);
                                    }
                                }
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            }
                            R++;
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
                if (C > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "star message sync: ",
                        " malformed mutations"
                    ])), C);
                }
                if (b > 0) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "star message sync: found chat via fallback ",
                        " times"
                    ])), b).sendLogs("star-message-sync-found-chat-via-fallback", {
                        sampling: 0.01
                    });
                }
                if (S > 0) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[star_msg_sync] ",
                        " msgs in db not in collection => ",
                        ""
                    ])), S, v);
                }
                if (R > 0) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "star message sync: ",
                        " operations not supported"
                    ])), R);
                }
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: before persist stars"
                    ])));
                }
                yield f.all([
                    o("WAWebDBProcessMessage").starMessages(i),
                    o("WAWebDBProcessMessage").unstarMessages(l)
                ]);
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: after persist stars"
                    ])));
                }
                return L;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getStarMessageMutations = function(t, starred) {
            const e = this;
            const i = o("WATimeUtils").unixTimeMs();
            return (f || (f = n("Promise"))).all(t.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const n = {
                        starAction: {
                            starred
                        }
                    };
                    const l = new (r("WAWebMsgKey"))({
                        fromMe: t.fromMe,
                        participant: t.participant,
                        remote: o("WAWebWidFactory").createWid((yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(t.remote, o("WAWebSyncdConst").Actions.Star))),
                        id: t.id
                    });
                    return o("WAWebSyncdActionUtils").buildPendingMutation({
                        collection: e.collectionName,
                        indexArgs: o("WAWebSyncdUtils").constructMsgKeySegmentsFromMsgKey(l),
                        operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                        version: e.getVersion(),
                        value: n,
                        timestamp: i,
                        action: e.getAction()
                    });
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
        };
        return a;
    })(o("WAWebSyncdAction").MessageSyncdActionBase);
    const h = new g;
    l.default = h;
}, 98);