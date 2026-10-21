__d("useWAWebHistorySyncProgressValues", [
    "WAWebHistorySyncProgressModel",
    "react-compiler-runtime",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(1);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = o("WAWebHistorySyncProgressModel").getHistorySyncProgressModel();
            t[0] = n;
        } else {
            n = t[0];
        }
        return o("useWAWebCollectionValues").useModelGetterValues(n, e);
    }
    l.useHistorySyncProgressValues = e;
}, 98);