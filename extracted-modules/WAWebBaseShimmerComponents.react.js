__d("WAWebBaseShimmerComponents.react", [
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = "x9hsi78-B";
    function D9Component() {
        const e = o("react-compiler-runtime").c(4);
        const t = o("WAWebThemeContext").useIsDarkTheme();
        let n;
        if (e[0] !== t) {
            n = ({
                0: {
                    className: "x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xoukr5u"
                },
                1: {
                    className: "x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl x152wzaz"
                }
            })[!!t << 0];
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        let r;
        if (e[2] !== n) {
            r = <div {...babelHelpers.extends({}, n)}/>;
            e[2] = n;
            e[3] = r;
        } else {
            r = e[3];
        }
        return r;
    }
    const m = {
        background: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        container: {
            position: "x1n2onr6",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        }
    };
    const p = {
        container: {
            position: "x1n2onr6",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            backgroundColor: "x4wrhlh",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(9);
        const { diameter, xstyle } = t;
        let l;
        if (n[0] !== xstyle) {
            l = (e || (e = r("stylex")))([
                m.container,
                m.background,
                xstyle
            ]);
            n[0] = xstyle;
            n[1] = l;
        } else {
            l = n[1];
        }
        const s = `${diameter}px`;
        const c = `${diameter}px`;
        let p;
        if (n[2] !== s || n[3] !== c) {
            p = {
                height: s,
                width: c
            };
            n[2] = s;
            n[3] = c;
            n[4] = p;
        } else {
            p = n[4];
        }
        let _;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = <D9Component/>;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== l || n[7] !== p) {
            f = <div className={l} style={p}>{_}</div>;
            n[6] = l;
            n[7] = p;
            n[8] = f;
        } else {
            f = n[8];
        }
        return f;
    }
    function f(t) {
        const n = o("react-compiler-runtime").c(9);
        const { height, width, xstyle } = t;
        const s = `${height}px`;
        const c = width === "100%" ? width : `${width}px`;
        let m;
        if (n[0] !== s || n[1] !== c) {
            m = {
                height: s,
                width: c
            };
            n[0] = s;
            n[1] = c;
            n[2] = m;
        } else {
            m = n[2];
        }
        const _ = m;
        let f;
        if (n[3] !== xstyle) {
            f = (e || (e = r("stylex")))([
                p.container,
                xstyle
            ]);
            n[3] = xstyle;
            n[4] = f;
        } else {
            f = n[4];
        }
        let g;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            g = <D9Component/>;
            n[5] = g;
        } else {
            g = n[5];
        }
        let h;
        if (n[6] !== _ || n[7] !== f) {
            h = <div className={f} style={_}>{g}</div>;
            n[6] = _;
            n[7] = f;
            n[8] = h;
        } else {
            h = n[8];
        }
        return h;
    }
    function g(e, t) {
        return Array(t).fill(null).map((t, n)=>u.jsx(e, {}, n));
    }
    l.CircleShimmer = _;
    l.RectangleShimmer = f;
    l.times = g;
}, 98);