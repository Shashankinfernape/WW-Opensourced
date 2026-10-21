__d("WAWebGroupInfoSeparator.react", [
    "WAWebDrawerSectionAnimation.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const d = {
        separator: {
            background: "xsm26vf",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(7);
        const { animation, padding, transparentBackground } = t;
        const s = animation === undefined ? true : animation;
        const m = padding === undefined ? true : padding;
        const p = transparentBackground === undefined ? false : transparentBackground;
        let _;
        if (n[0] !== s || n[1] !== m || n[2] !== p) {
            _ = (e || (e = r("stylex"))).props([
                s && o("WAWebDrawerSectionAnimation.stylex").animateStyle.animate,
                !p && d.separator,
                m && o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
                c.paddingBlock10
            ]);
            n[0] = s;
            n[1] = m;
            n[2] = p;
            n[3] = _;
        } else {
            _ = n[3];
        }
        let f;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = <div className="xh8yej3 xjm9jq1 x2ed6v8"/>;
            n[4] = f;
        } else {
            f = n[4];
        }
        let g;
        if (n[5] !== _) {
            g = <div {...babelHelpers.extends({}, _, {
                children: f
            })}/>;
            n[5] = _;
            n[6] = g;
        } else {
            g = n[6];
        }
        return g;
    }
    l.default = m;
}, 98);