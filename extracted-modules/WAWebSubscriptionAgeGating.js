__d("WAWebSubscriptionAgeGating", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebMexGetWoasAgeSignal",
    "WAWebSubscriptionAgeGatingPrefs",
    "WAWebSubscriptionWaffleAgeCheck",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = 86400;
    const m = 120;
    const p = 1440 * 60;
    let _ = null;
    let f = 0;
    let g = 0;
    let h = 0;
    function y() {
        return Math.min(m * 2 ** g++, p);
    }
    function C() {
        return o("WAWebABProps").getABPropConfigValue("wa_consumer_subscription_u18_gating_enabled");
    }
    function b() {
        if (!C()) {
            return true;
        }
        const e = o("WAWebSubscriptionAgeGatingPrefs").getSubscriptionAgeVerdict();
        if (e == null || e.expiresAtSec <= o("WATimeUtils").unixTime()) {
            v();
            return false;
        }
        return e.isEligible;
    }
    function v(t = {}) {
        if (_ != null && t.force !== true) {
            return _;
        }
        if (t.force !== true && o("WATimeUtils").unixTime() < f) {
            return (c || (c = n("Promise"))).resolve();
        }
        const a = ++h;
        var i = S().then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (a === h) {
                    if (e == null) {
                        f = o("WATimeUtils").unixTime() + y();
                        return;
                    }
                    f = 0;
                    g = 0;
                    yield o("WAWebSubscriptionAgeGatingPrefs").setSubscriptionAgeVerdict(e);
                    if (a !== h) {
                        yield o("WAWebSubscriptionAgeGatingPrefs").clearSubscriptionAgeVerdict();
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).catch((t)=>{
            if (a === h) {
                f = o("WATimeUtils").unixTime() + y();
            }
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[age-gating] verdict refresh failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("subscription-age-gating-refresh-failed", {
                sampling: 0.01
            });
        }).finally(()=>{
            if (_ === i) {
                _ = null;
            }
        });
        _ = i;
        return i;
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!C()) {
                return null;
            }
            yield o("WAWebSubscriptionAgeGatingPrefs").initSubscriptionAgeVerdictStore();
            const e = yield o("WAWebSubscriptionWaffleAgeCheck").getSubscriptionAgeBranch();
            if (e === "pending") {
                return null;
            }
            if (e === "waffle") {
                const isEligible = yield o("WAWebSubscriptionWaffleAgeCheck").fetchWaffleAgeCheck();
                if (isEligible == null) {
                    return null;
                }
                return {
                    expiresAtSec: o("WATimeUtils").unixTime() + d,
                    isEligible,
                    source: "waffle"
                };
            }
            const n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
            if (n == null) {
                return null;
            }
            const r = yield o("WAWebMexGetWoasAgeSignal").fetchWoasAgeSignal(n);
            if (r == null) {
                return null;
            }
            return {
                expiresAtSec: o("WATimeUtils").unixTime() + r.ttlSec,
                isEligible: r.value === o("WAWebMexGetWoasAgeSignal").WOAS_OVER_18_VALUE,
                source: "woas"
            };
        });
        return R.apply(this, arguments);
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!(!o("WAWebBotBaseGating").isAiSubscriptionEnabled() || !C())) {
                try {
                    yield o("WAWebSubscriptionAgeGatingPrefs").initSubscriptionAgeVerdictStore();
                    const e = o("WAWebSubscriptionAgeGatingPrefs").getSubscriptionAgeVerdict();
                    if (e != null && e.expiresAtSec > o("WATimeUtils").unixTime()) {
                        return;
                    }
                    yield v();
                } catch (error) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[age-gating] verdict warm failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("subscription-age-gating-warm-failed", {
                        sampling: 0.01
                    });
                }
            }
        });
        return E.apply(this, arguments);
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            h++;
            f = 0;
            g = 0;
            _ = null;
            try {
                yield o("WAWebSubscriptionAgeGatingPrefs").clearSubscriptionAgeVerdict();
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[age-gating] verdict invalidation failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("subscription-age-gating-invalidate-failed", {
                    sampling: 0.01
                });
            }
        });
        return I.apply(this, arguments);
    }
    l.isInGatedCountry = C;
    l.isEligibleForSubscriptionsByAge = b;
    l.refreshSubscriptionAgeVerdict = v;
    l.maybeWarmSubscriptionAgeVerdict = L;
    l.invalidateSubscriptionAgeVerdict = k;
}, 98);