__d("WAWebActiveAccountInfoContext.react", [
    "FBLogger",
    "WALogger",
    "WAWebAdvertiseEntryPointQplHelpers",
    "WAWebAuthAgentFeatureControlGateKeeper",
    "WAWebBizNativeAdsWamLogger",
    "WAWebLinkedAccountsJob",
    "WAWebMobilePlatforms",
    "err",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useSyncExternalStore } = c;
    let p;
    const _ = new Set;
    function f(e) {
        _.add(e);
        return function() {
            _.delete(e);
        };
    }
    function g() {
        _.forEach((e)=>e());
    }
    function h(e) {
        p = e;
        g();
    }
    function y() {
        return p;
    }
    function C() {
        if (!o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("CTW_ADS")) {
            o("WAWebBizNativeAdsWamLogger").logAdCreationEntryPointSuppressed(o("WAWebBizNativeAdsWamLogger").AdCreationEntryPointSuppressionReason.LINKED_ACCOUNTS_THREW);
        }
    }
    function b(e) {
        const t = o("react-compiler-runtime").c(1);
        const e_children = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [];
            t[0] = r;
        } else {
            r = t[0];
        }
        useEffect(v, r);
        return e_children;
    }
    function v() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            if (p === undefined && !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("CTW_ADS")) {
                o("WAWebAdvertiseEntryPointQplHelpers").startAdvertiseEntryPointQpl();
            }
            const t = new AbortController;
            o("WAWebLinkedAccountsJob").queryActiveLinkedAccountInfo(t.signal).then((e)=>{
                if (!t.signal.aborted) {
                    o("WAWebAdvertiseEntryPointQplHelpers").advertiseEntryPointQplAddPoint(o("WAWebAdvertiseEntryPointQplHelpers").AdvertiseEntryPointQplPoint.ACCOUNT_INFO_SET);
                    h(e);
                }
            }).catch((n)=>{
                if (!t.signal.aborted) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebActiveAccountInfoContext: linked accounts fetch failed"
                    ])));
                    const a = n instanceof Error ? n : r("err")(String(n));
                    r("FBLogger")("wa_ctwa_web").catching(a).mustfix("ActiveAccountInfoProvider: linked accounts fetch failed — entry points may be hidden");
                    C();
                    o("WAWebAdvertiseEntryPointQplHelpers").endAdvertiseEntryPointQplSuppressed(o("WAWebBizNativeAdsWamLogger").AdCreationEntryPointSuppressionReason.LINKED_ACCOUNTS_THREW);
                }
            });
            return function() {
                return t.abort();
            };
        }
    }
    function S() {
        return useSyncExternalStore(f, y);
    }
    l.setActiveAccountInfo = h;
    l.getActiveAccountInfo = y;
    l.ActiveAccountInfoProvider = b;
    l.useActiveAccountInfo = S;
}, 98);