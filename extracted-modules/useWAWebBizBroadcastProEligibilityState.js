__d("useWAWebBizBroadcastProEligibilityState", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBusinessBroadcastsGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const { useCallback, useEffect, useState } = c;
    const _ = r("JSResourceForInteraction")("WAWebRefreshBusinessEligibility").__setRef("useWAWebBizBroadcastProEligibilityState");
    const f = 30 * 1000;
    let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    let h = null;
    let y = null;
    function C(e) {
        const t = Date.now();
        if (h != null) {
            if (e?.bypassThrottle !== true) {
                return h;
            }
            if (y == null) {
                const r = function() {
                    return C({
                        bypassThrottle: true
                    });
                };
                y = h.then(r, r).finally(()=>{
                    y = null;
                });
            }
            return y;
        }
        if (!E() || e?.bypassThrottle !== true && t - Number_NEGATIVE_INFINITY < f) {
            return (s || (s = n("Promise"))).resolve(b().isEntrypointEnabled);
        }
        Number_NEGATIVE_INFINITY = t;
        h = R(true).then(()=>b().isEntrypointEnabled).finally(()=>{
            h = null;
        });
        return h;
    }
    function b() {
        const onboardingStatus = o("WAWebBizBroadcastProOnboardingStatus").getBizBroadcastProNuxOnboardingStatus();
        return {
            isEntrypointEnabled: o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastProEntrypointEnabledForStatus(onboardingStatus),
            onboardingStatus
        };
    }
    function v() {
        const e = o("react-compiler-runtime").c(2);
        const t = useState(b);
        const n = t[0];
        const r = t[1];
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                return r(b());
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        o("useWAWebListener").useListener(o("WAWebBizBroadcastProOnboardingStatus").bizBroadcastProNuxStateEmitter, "change", a);
        let l;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = [];
            e[1] = l;
        } else {
            l = e[1];
        }
        useEffect(S, l);
        return n;
    }
    function S() {
        if (!o("WAWebBizBroadcastProOnboardingStatus").isBizBroadcastProNuxOnboardingStatusResolved()) {
            R(false);
        }
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (E()) {
                try {
                    const n = yield _.load();
                    const a = n.refreshBusinessEligibilityIfNeeded;
                    if (t) {
                        yield a({
                            force: true,
                            rethrowOnFailure: true
                        });
                    } else {
                        yield a();
                    }
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to refresh BB Pro eligibility"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("bb-pro-eligibility-refresh-error");
                    if (t) {
                        Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
                    }
                }
            }
        });
        return L.apply(this, arguments);
    }
    function E() {
        return o("WAWebBizBroadcastDeviceCapabilityCommon").getPrimarySupportsBusinessBroadcastPro() && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled();
    }
    l.forceRefreshWAWebBizBroadcastProEligibility = C;
    l.useWAWebBizBroadcastProEligibilityState = v;
}, 98);