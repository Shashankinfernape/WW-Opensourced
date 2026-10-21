__d("WAWebStatusLoadingRingOverlay.react", [
    "WAWebStatusGetters",
    "WAWebStatusImageRing.react",
    "react",
    "react-compiler-runtime",
    "useWAWebStatusValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = "status_loading_ring_overlay";
    const c = {
        spinner: {
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            top: "x13vifvy",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children, customUnreadRingColor, id, size, stroke } = e;
        const customUnreadRingColor_1 = customUnreadRingColor === undefined ? null : customUnreadRingColor;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebStatusGetters").getIsLoading,
                o("WAWebStatusGetters").getUnreadCount
            ];
            t[0] = m;
        } else {
            m = t[0];
        }
        const p = o("useWAWebStatusValues").useStatusValues(id, m);
        const _ = p[0];
        const f = p[1];
        let g;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                className: "x3nfvp2 x1n2onr6"
            };
            t[1] = g;
        } else {
            g = t[1];
        }
        let h;
        if (t[2] !== customUnreadRingColor_1 || t[3] !== _ || t[4] !== size || t[5] !== stroke || t[6] !== f) {
            h = _ ? s.jsx(o("WAWebStatusImageRing.react").StatusLoadingRingSpinner, {
                customUnreadRingColor: customUnreadRingColor_1,
                positioning: c.spinner,
                respectAppTheme: true,
                size,
                stroke,
                testid: u,
                unreadCount: f
            }) : null;
            t[2] = customUnreadRingColor_1;
            t[3] = _;
            t[4] = size;
            t[5] = stroke;
            t[6] = f;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== children || t[9] !== h) {
            y = <div {...babelHelpers.extends({}, g, {
                children: [
                    children,
                    h
                ]
            })}/>;
            t[8] = children;
            t[9] = h;
            t[10] = y;
        } else {
            y = t[10];
        }
        return y;
    }
    l.default = d;
}, 98);