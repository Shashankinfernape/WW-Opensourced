__d("useWAWebVideoAvatarVariants", [
    "WAWebAIHatchIdentityStore",
    "WAWebBotUtils",
    "WAWebCmd",
    "WAWebHatchFrontendGating",
    "WAWebNoop",
    "WAWebPrimaryFeaturesModel",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebPrefersReducedMotion"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useSyncExternalStore } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(12);
        let n;
        if (t[0] !== e) {
            n = o("WAWebBotUtils").isHatchBot(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = n;
        let i;
        if (t[2] !== a) {
            i = function(t) {
                if (a) {
                    return o("WAWebAIHatchIdentityStore").subscribeToIdentityChanges(t);
                }
                return r("WAWebNoop");
            };
            t[2] = a;
            t[3] = i;
        } else {
            i = t[3];
        }
        const l = i;
        let s;
        if (t[4] !== a) {
            s = function() {
                if (a) {
                    return o("WAWebAIHatchIdentityStore").getCachedHatchIdentity();
                }
                return null;
            };
            t[4] = a;
            t[5] = s;
        } else {
            s = t[5];
        }
        const d = useSyncExternalStore(l, s);
        const m = r("useWAWebPrefersReducedMotion")();
        let p;
        let _;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebCmd").Cmd,
                o("WAWebPrimaryFeaturesModel").PrimaryFeatures
            ];
            _ = [
                "on_ab_props_update_from_bridge",
                "change:features",
                "change:aiHatchIntegrationEnabled"
            ];
            t[6] = p;
            t[7] = _;
        } else {
            p = t[6];
            _ = t[7];
        }
        let f;
        let g;
        if (t[8] !== a || t[9] !== m) {
            f = function() {
                return a && !m && o("WAWebHatchFrontendGating").isHatchVideoAvatarsEnabled();
            };
            g = [
                a,
                m
            ];
            t[8] = a;
            t[9] = m;
            t[10] = f;
            t[11] = g;
        } else {
            f = t[10];
            g = t[11];
        }
        const h = r("useWAWebEventTargetValue")(p, _, f, g);
        if (h) {
            return d?.secureVideoVariants;
        }
        return null;
    }
    l.default = d;
}, 98);