__d("WAWebVoipRelayAllCallsSettingSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 1;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.VoipRelayAllCalls;
        };
        r_prototype.applyMutations = function(r) {
            const t = this;
            let a = 0;
            let i = 0;
            let l = 0;
            const d = (c || (c = n("Promise"))).all(r.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        if (e.operation === "set") {
                            const n = e.value;
                            const r = n.privacySettingRelayAllCalls;
                            if (!r) {
                                a++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            const s = r.isEnabled;
                            if (s == null) {
                                i++;
                            } else {
                                yield o("WAWebBackendApi").frontendSendAndReceive("setRelayAllCallsToUserPrefs", {
                                    disallowAllP2p: s
                                });
                            }
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
            })()));
            return d.then((t)=>{
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip-relay] ",
                        " malformed muts"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip-relay] ",
                        " muts w/ null value"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip-relay] ",
                        " unsupported ops"
                    ])), l);
                }
                return t;
            });
        };
        r_prototype.getMutation = function(t, isEnabled) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [],
                value: {
                    privacySettingRelayAllCalls: {
                        isEnabled
                    }
                },
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: t,
                action: this.getAction()
            });
        };
        r_prototype.sendMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebSyncdCoreApi").lockForSync([], [
                    this.getMutation(o("WATimeUtils").unixTimeMs(), e)
                ], function() {
                    return (c || (c = n("Promise"))).resolve();
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);