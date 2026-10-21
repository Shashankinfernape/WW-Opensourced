__d("WAWebAuthAgentFeatureControlLifecycle", [
    "WALogger",
    "WATimeUtils",
    "WAWebAgentTransitionUtils",
    "WAWebAuthAgentFeaturePolicyQuery",
    "WAWebBackendEventBus",
    "WAWebBizCoexGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebFeatureControlCache",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p = false;
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled()) {
                let t;
                try {
                    t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
                } catch (e) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[AAFC] getMeUser() failed at stream-ready"
                    ])));
                    return;
                }
                let n;
                try {
                    n = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(t);
                } catch (e) {
                    const a = e instanceof Error ? e.message : String(e);
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[AAFC] BusinessProfileCollection.find err ",
                        ""
                    ])), a);
                    return;
                }
                if (n?.isAuthorizedAgent === true) {
                    if (o("WAWebBizCoexGatingUtils").agentSmbOffboardingEnabled()) {
                        if (o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage()) {
                            try {
                                yield o("WAWebAgentTransitionUtils").clearMeSmbOffboardingState();
                            } catch (e) {
                                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AAFC] clear stale SMB offboarding state failed at startup"
                                ]))).catching(r("getErrorSafe")(e)).sendLogs("aa-smb-offboarding-clear-startup-fail");
                            }
                        } else {
                            try {
                                yield o("WAWebAgentTransitionUtils").storeMeSmbParentCompanyName(n.parentCompanyName ?? "");
                                yield o("WAWebAgentTransitionUtils").storeMeSmbOffboardingState();
                            } catch (e) {
                                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AAFC] failed to store SMB offboarding state at startup"
                                ]))).catching(r("getErrorSafe")(e)).sendLogs("aa-smb-offboarding-store-startup-fail");
                            }
                        }
                    }
                    yield o("WAWebFeatureControlCache").markUserAsAA();
                    const l = o("WAWebFeatureControlCache").getPolicyLastFetchedAt();
                    if (!(l != null && o("WATimeUtils").unixTimeMs() - l < o("WATimeUtils").WEEK_MILLISECONDS)) {
                        const p = yield o("WAWebAuthAgentFeaturePolicyQuery").fetchAndCacheAuthAgentFeaturePolicy();
                        switch(p.type){
                            case "success":
                                break;
                            case "not_authorized_agent":
                                break;
                            case "error":
                                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AAFC] policy fetch failed (",
                                    ")"
                                ])), p.error.message);
                                break;
                        }
                    }
                }
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        if (!p) {
            p = true;
            o("WAWebBackendEventBus").BackendEventBus.onMainStreamModeReady(function() {
                _().catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "AuthAgentFeatureControl: unexpected error"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("aa-fc-lifecycle-error");
                });
            });
        }
    }
    l.startAuthAgentFeatureControlLifecycle = g;
}, 98);