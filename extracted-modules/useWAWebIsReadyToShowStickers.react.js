__d("useWAWebIsReadyToShowStickers.react", [
    "WAWebPanelsDisplayLocation",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = useState(e !== o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel);
        const r = n[0];
        const a = n[1];
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                return a(true);
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                immediate: true
            };
            t[1] = l;
        } else {
            l = t[1];
        }
        o("useWAWebTimeout").useTimeout(i, 250, l);
        return r;
    }
    l.useIsReadyToShowStickers = u;
}, 98);