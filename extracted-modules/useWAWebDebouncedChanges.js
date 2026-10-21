__d("useWAWebDebouncedChanges", [
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const { debounceMs, shouldDebounce, value } = e;
        const l = useState(value);
        const s = l[0];
        const d = l[1];
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = function(t) {
                d(t);
            };
            t[0] = m;
        } else {
            m = t[0];
        }
        const p = r("useWAWebDebouncedCallback")(m, debounceMs);
        if (!shouldDebounce && s !== value) {
            d(value);
        }
        let _;
        let f;
        if (t[1] !== p || t[2] !== value || t[3] !== shouldDebounce) {
            _ = function() {
                if (shouldDebounce) {
                    p(value);
                } else {
                    p.cancel();
                }
            };
            f = [
                value,
                shouldDebounce,
                p
            ];
            t[1] = p;
            t[2] = value;
            t[3] = shouldDebounce;
            t[4] = _;
            t[5] = f;
        } else {
            _ = t[4];
            f = t[5];
        }
        useEffect(_, f);
        return s;
    }
    l.useDebouncedChanges = d;
}, 98);