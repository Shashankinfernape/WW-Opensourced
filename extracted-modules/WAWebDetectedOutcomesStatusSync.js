__d("WAWebDetectedOutcomesStatusSync", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
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
            return o("WAWebSyncdConst").Actions.DetectedOutcomeStatus;
        };
        r_prototype.applyMutations = function(r) {
            const t = this;
            let a = 0;
            let i = 0;
            const l = (c || (c = n("Promise"))).all(r.map((()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    try {
                        if (n.operation === "set") {
                            const r = n.value;
                            const l = r.detectedOutcomesStatusAction;
                            if (l?.isEnabled == null) {
                                a++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            yield o("WAWebBackendApi").frontendSendAndReceive("ctwaDetectedOutcomeOnboardingStatusUpdate", {
                                onboardingStatus: l.isEnabled
                            });
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        i++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (t) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[DetectedOutcomesStatusSync] set status failed"
                        ])));
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })()));
            return l.then((e)=>{
                if (a > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "detected outcome status sync: ",
                        " malformed mutations"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "detected outcome status sync: ",
                        " operations not supported"
                    ])), i);
                }
                return e;
            });
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);