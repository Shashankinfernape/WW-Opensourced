__d("WAWebWASARootSecretSync", [
    "Promise",
    "WALogger",
    "WALongInt",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWasaRootSecretDb",
    "WAWebWasaUserPrefs",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = [];
            let r = null;
            let a = -1;
            for (const i of t){
                const { id, rootSecret } = i;
                if (id == null || id === "" || rootSecret == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WASARootSecretSync] skipping malformed entry for ",
                        ""
                    ])), e).sendLogs("wasa-root-secret-sync-malformed");
                    continue;
                }
                n.push({
                    stanzaId: id,
                    secret: new Uint8Array(rootSecret)
                });
                if (i.status === o("WAWebProtobufSyncAction.pb").SyncActionValue$WASARootSecretAction$RootSecretEntry$Status.ACTIVE) {
                    const d = o("WALongInt").maybeNumber(i.epoch) ?? 0;
                    if (r == null || d > a) {
                        r = id;
                        a = d;
                    }
                }
            }
            yield o("WAWebWasaRootSecretDb").upsertWasaRootSecretsForIds(e, n);
            yield p(e, r);
            return new Set(n.map((e)=>e.stanzaId));
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t != null) {
                yield o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t);
                return;
            }
            const n = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
            if (n != null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WASARootSecretSync] no ACTIVE entry for ",
                    "; clearing send key ",
                    ""
                ])), e, n).sendLogs("wasa-root-secret-sync-no-active");
                yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user);
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = yield o("WAWebSyncdDb").getSyncAction(JSON.stringify(t));
            const i = a?.binarySyncData != null ? o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, a.binarySyncData).value?.wasaRootSecretAction?.secrets : null;
            const l = [];
            for (const s of i ?? []){
                const u = s.id;
                if (u != null && u !== "" && !n.has(u)) {
                    l.push(u);
                }
            }
            if (l.length !== 0) {
                yield o("WAWebWasaRootSecretDb").removeWasaRootSecretsForIds(e, l);
                const c = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
                if (c != null && l.includes(c)) {
                    yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user);
                }
            }
        });
        return g.apply(this, arguments);
    }
    const h = ((t)=>{
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
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.WasaRootSecret;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                return (c || (c = n("Promise"))).all(t.map((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        try {
                            e: {
                                const n = t;
                                if ((typeof n === "object" && n !== null || typeof n === "function") && n.operation === "set" && "indexParts" in n && "value" in n) {
                                    const { indexParts, value } = n;
                                    const u = indexParts[1];
                                    if (!u) {
                                        return a.malformedActionIndex();
                                    }
                                    const c = value.wasaRootSecretAction;
                                    if (c == null) {
                                        return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                                    }
                                    const m = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(u));
                                    if (!m.success) {
                                        return {
                                            actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                            orphanModel: m.orphanModel
                                        };
                                    }
                                    const p = o("WAWebWidFactory").createWid(m.chat.id);
                                    const _ = yield d(p, c.secrets ?? []);
                                    yield f(p, indexParts, _);
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                    break e;
                                }
                                if ((typeof n === "object" && n !== null || typeof n === "function") && n.operation === "remove") {
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                    };
                                }
                                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
                            }
                        } catch (error) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[WASARootSecretSync] apply failed"
                            ]))).catching(r("getErrorSafe")(error)).sendLogs("wasa-root-secret-sync-failed");
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })()));
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    const y = new h;
    l.default = y;
}, 98);