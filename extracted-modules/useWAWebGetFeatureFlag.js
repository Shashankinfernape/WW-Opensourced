__d("useWAWebGetFeatureFlag", [
    "WAWebFeatureFlagCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    const u = {
        enabled: false,
        expirationTime: null,
        limit: null
    };
    function useC(e) {
        const t = o("react-compiler-runtime").c(3);
        const nRef = useRef(u);
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                "add",
                "remove",
                "change:enabled",
                "reset"
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e) {
            i = function() {
                const a = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(e);
                if (a == null) {
                    return u;
                }
                const i = {
                    enabled: a.enabled === true,
                    expirationTime: a.expirationTime ?? null,
                    limit: a.limit ?? null
                };
                const nRef_current = nRef.current;
                if (nRef_current.enabled === i.enabled && nRef_current.expirationTime === i.expirationTime && nRef_current.limit === i.limit) {
                    return nRef_current;
                }
                nRef.current = i;
                return i;
            };
            t[1] = e;
            t[2] = i;
        } else {
            i = t[2];
        }
        return r("useWAWebEventTargetValue")(o("WAWebFeatureFlagCollection").FeatureFlagCollection, a, i);
    }
    l.default = useC;
}, 98);