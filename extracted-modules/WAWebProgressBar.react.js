__d("WAWebProgressBar.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        progress: {
            appearance: "xjyslct",
            width: "xh8yej3",
            color: "x1v5yvga",
            backgroundColor: "x151df2",
            verticalAlign: "x5jf7z8",
            "::-webkit-progress-bar_backgroundColor": "xnoatus",
            "::-webkit-progress-value_backgroundColor": "x1pfndiv",
            "::-webkit-progress-value_transitionProperty": "x1mil1q",
            "::-webkit-progress-value_transitionDuration": "x1yicwq7",
            "::-webkit-progress-value_transitionTimingFunction": "x15e8anl",
            "::-moz-progress-bar_backgroundColor": "x1xy4dik",
            "::-moz-progress-bar_transitionProperty": "x12wcalf",
            "::-moz-progress-bar_transitionDuration": "x18uf0o4",
            "::-moz-progress-bar_transitionTimingFunction": "x174ylx0",
            $$css: true
        }
    };
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(7);
        const { ariaLabel, max, value, xstyle } = t;
        const max_1 = max === undefined ? 100 : max;
        let m;
        if (n[0] !== xstyle) {
            m = (e || (e = r("stylex"))).props(c.progress, xstyle);
            n[0] = xstyle;
            n[1] = m;
        } else {
            m = n[1];
        }
        let p;
        if (n[2] !== ariaLabel || n[3] !== max_1 || n[4] !== m || n[5] !== value) {
            p = <progress {...babelHelpers.extends({
                "aria-label": ariaLabel,
                value,
                max: max_1
            }, m)}/>;
            n[2] = ariaLabel;
            n[3] = max_1;
            n[4] = m;
            n[5] = value;
            n[6] = p;
        } else {
            p = n[6];
        }
        return p;
    }
    l.default = DComponent;
}, 98);