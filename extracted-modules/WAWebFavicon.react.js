__d("WAWebFavicon.react", [
    "WAWebNotificationIcon",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(1);
        const n = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [];
            t[0] = r;
        } else {
            r = t[0];
        }
        s(c, r);
        return n;
    }
    function c() {
        o("WAWebNotificationIcon").setTitleAndIcon(0);
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(1);
        const n = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [];
            t[0] = r;
        } else {
            r = t[0];
        }
        s(m, r);
        return n;
    }
    function m() {
        o("WAWebNotificationIcon").setTitleAndIcon(-1);
    }
    l.DefaultFavicon = u;
    l.ErrorFavicon = d;
}, 98);