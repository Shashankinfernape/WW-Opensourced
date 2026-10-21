__d("WAWebCometRoot", [
    "WAWebAppWrapper.react",
    "buildWAWebCometRoot",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s.jsx(r("WAWebAppWrapper.react"), {});
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function c(e) {
        r("buildWAWebCometRoot")(u, e);
    }
    l.init = c;
}, 98);