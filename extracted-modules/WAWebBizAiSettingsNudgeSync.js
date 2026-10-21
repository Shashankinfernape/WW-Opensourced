__d("WAWebBizAiSettingsNudgeSync", [
    "Promise",
    "WALogger",
    "WALongInt",
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
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 1;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.BizAiSettingsNudge;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                let i = 0;
                const l = yield (c || (c = n("Promise"))).all(t.map((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        try {
                            if (t.operation === "set") {
                                const s = t.value.bizAiSettingsNudgeAction;
                                if (s?.category == null || s?.version == null) {
                                    a++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                o("WAWebBackendApi").frontendFireAndForget("handleBizAiSettingsNudge", {
                                    category: s.category,
                                    version: o("WALongInt").maybeNumberOrThrowIfTooLarge(s.version) ?? 0,
                                    updatedAtMs: o("WALongInt").maybeNumberOrThrowIfTooLarge(s.updatedAtMs) ?? 0
                                });
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            }
                            i++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        } catch (error) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "biz ai settings nudge sync: failed to apply mutation: ",
                                ""
                            ])), error);
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })()));
                if (a > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "biz ai settings nudge sync: ",
                        " malformed mutations"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "biz ai settings nudge sync: ",
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
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);