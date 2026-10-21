__d("WAWebBotWelcomeRequestSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBUpdateChatTable",
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
    let s;
    let u;
    const c = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 1;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 2;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.BotWelcomeRequest;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                let i = 0;
                const l = yield (u || (u = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            e: {
                                const t = e;
                                if ((typeof t === "object" && t !== null || typeof t === "function") && t.operation === "set" && "indexParts" in t && "value" in t) {
                                    const { indexParts, value } = t;
                                    const u = indexParts[1];
                                    if (!u) {
                                        return r.malformedActionIndex();
                                    }
                                    const hasRequestedWelcomeMsg = value.botWelcomeRequestAction?.isSent;
                                    if (hasRequestedWelcomeMsg == null) {
                                        a++;
                                        return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                    }
                                    const d = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(u));
                                    if (!d.success) {
                                        return {
                                            actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                            orphanModel: d.orphanModel
                                        };
                                    }
                                    const m = o("WAWebWidFactory").createWid(d.chat.id);
                                    yield o("WAWebDBUpdateChatTable").updateChatTable(m, {
                                        hasRequestedWelcomeMsg
                                    });
                                    o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
                                        updates: [
                                            {
                                                id: m,
                                                hasRequestedWelcomeMsg
                                            }
                                        ]
                                    });
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                if ((typeof t === "object" && t !== null || typeof t === "function") && t.operation === "remove") {
                                    i++;
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                    };
                                    break e;
                                }
                                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
                            }
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
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[BotWelcomeRequestSync] ",
                        " malformed: isSent not bool"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[BotWelcomeRequestSync] ",
                        " operations not supported"
                    ])), i);
                }
                return l;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getBotWelcomeRequestSetMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, isSent) {
                const n = {
                    botWelcomeRequestAction: {
                        isSent
                    }
                };
                const r = o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        (yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(e, o("WAWebSyncdConst").Actions.BotWelcomeRequest))
                    ],
                    value: n,
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: o("WATimeUtils").unixTime(),
                    action: this.getAction()
                });
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    const d = new c;
    l.default = d;
}, 98);