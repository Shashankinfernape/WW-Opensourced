__d("WAWebMuteChatSync", [
    "Promise",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaChat",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = -1;
    const d = ((t)=>{
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
            return 2;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.Mute;
        };
        a_prototype.applyMutations = function(a) {
            const t = this;
            let i = 0;
            let l = 0;
            return (u || (u = n("Promise"))).all(a.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        if (e.operation === "set") {
                            const { indexParts, value } = e;
                            const u = indexParts[1];
                            if (!u || !r("WAWebWid").isWid(u)) {
                                return t.malformedActionIndex();
                            }
                            const c = value.muteAction;
                            const d = value.muteAction?.muted;
                            const m = o("WALongInt").maybeNumberOrThrowIfTooLarge(c?.muteEndTimestamp);
                            if (d == null || d && m == null) {
                                i++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            const p = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(u));
                            if (!p.success) {
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                    orphanModel: p.orphanModel
                                };
                            }
                            const _ = p.chat.id;
                            const f = m ?? 0;
                            const g = f > 0 && f < o("WATimeUtils").unixTimeMs() ? 0 : Math.floor(f / 1000);
                            const h = o("WALongInt").maybeNumberOrThrowIfTooLarge(c?.muteEveryoneMentionEndTimestamp);
                            let y;
                            if (h != null) {
                                if (h > o("WATimeUtils").unixTimeMs()) {
                                    y = Math.floor(h / 1000);
                                } else if (h > 0) {
                                    y = 0;
                                } else {
                                    y = h;
                                }
                            }
                            const C = {
                                muteExpiration: g
                            };
                            if (r("WAWebWid").isGroup(o("WAWebWidFactory").createWid(_)) && y != null) {
                                C.mentionAllMuteExpiration = y;
                            }
                            yield o("WAWebSchemaChat").getChatTable().merge(_, C);
                            const muteData = {
                                id: _,
                                expiration: g
                            };
                            if (r("WAWebWid").isGroup(o("WAWebWidFactory").createWid(_)) && y != null) {
                                muteData.mentionAllMuteExpiration = y;
                            }
                            o("WAWebBackendApi").frontendFireAndForget("muteCollectionAdd", {
                                muteData
                            });
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        l++;
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
            })())).then((t)=>{
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "mute chat sync: ",
                        " malformed mutations"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "mute chat sync: ",
                        " operations not supported"
                    ])), l);
                }
                return t;
            });
        };
        a_prototype.generateMuteMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const muted = t !== undefined && t !== 0;
                const i = o("WATimeUtils").unixTimeMs();
                let muteEndTimestamp = t;
                if (muteEndTimestamp !== c) {
                    muteEndTimestamp *= 1000;
                }
                const muteAction = {
                    muted,
                    muteEndTimestamp
                };
                if (r("WAWebWid").isGroup(e) && n != null) {
                    if (n > 0) {
                        muteAction.muteEveryoneMentionEndTimestamp = n * 1000;
                    } else {
                        muteAction.muteEveryoneMentionEndTimestamp = n;
                    }
                }
                const u = {
                    muteAction
                };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        (yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(e, o("WAWebSyncdConst").Actions.Mute))
                    ],
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    version: this.getVersion(),
                    value: u,
                    timestamp: i,
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
    const m = new d;
    l.default = m;
}, 98);