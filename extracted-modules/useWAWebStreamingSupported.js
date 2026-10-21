__d("useWAWebStreamingSupported", [
    "WAWebFeatureDetectionSwSupport",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useSyncExternalStore } = s;
    function d(e) {
        return r("WAWebFeatureDetectionSwSupport").subscribe(e);
    }
    function m() {
        return r("WAWebFeatureDetectionSwSupport").getStreamingSupported();
    }
    function p() {
        const e = o("react-compiler-runtime").c(1);
        const t = useSyncExternalStore(d, m);
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [];
            e[0] = n;
        } else {
            n = e[0];
        }
        useEffect(_, n);
        return t;
    }
    function _() {
        r("WAWebFeatureDetectionSwSupport").refreshStreamingSupport();
    }
    l.default = p;
}, 98);