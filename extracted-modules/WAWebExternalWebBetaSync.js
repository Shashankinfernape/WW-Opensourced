__d("WAWebExternalWebBetaSync", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebExternalBetaApi",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 3;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.ExternalWebBeta;
        };
        r_prototype.applyMutations = function(r) {
            const t = this;
            if (o("WAWebABProps").getABPropConfigValue("external_beta_can_join") !== true) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: action not enabled"
                ])));
                return (d || (d = n("Promise"))).resolve(r.map(()=>({
                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                    })));
            }
            return (d || (d = n("Promise"))).all(r.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        if (e.operation === "set") {
                            const n = e.value;
                            const r = n.externalWebBetaAction;
                            if (!r) {
                                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "beta setting sync: malformed mutation"
                                ])));
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            if (r.isOptIn !== undefined) {
                                yield o("WAWebExternalBetaApi").changeOptInStatusForExternalWebBeta(r.isOptIn);
                            } else {
                                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "beta setting sync: malformed mutation value"
                                ])));
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "external beta opt in sync: operation not supported"
                        ])));
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
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const p = new m;
    l.default = p;
}, 98);