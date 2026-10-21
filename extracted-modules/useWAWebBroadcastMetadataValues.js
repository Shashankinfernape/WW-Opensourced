__d("useWAWebBroadcastMetadataValues", [
    "WAWebBroadcastMetadataCollection",
    "react-compiler-runtime",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("react-compiler-runtime").c(1);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                isStrong: true
            };
            n[0] = a;
        } else {
            a = n[0];
        }
        return o("useWAWebCollectionValues").useOptionalCollectionValues(r("WAWebBroadcastMetadataCollection"), e, t, a);
    }
    l.useOptionalBroadcastMetadataValues = e;
}, 98);