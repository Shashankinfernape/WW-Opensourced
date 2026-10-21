__d("WAWebPttOocMarquee", [
    "WAWebL10N",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = "x2xxoma-B";
    const c = "x9rxolt-B";
    function d(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_children = e.children;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = ({
                0: {
                    className: "x1n2onr6 xeq5yr9 x18ebdri xa4qsjk x1esw782 xhcjfi7"
                },
                1: {
                    className: "x1n2onr6 xeq5yr9 x18ebdri xa4qsjk x1esw782 x2xl3gs"
                }
            })[!!r("WAWebL10N").isRTL() << 0];
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = <span className="x1rg5ohu x1849jeq x5yr21d"/>;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = <span className="x1rg5ohu x1849jeq x5yr21d"/>;
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== e_children) {
            u = <div {...babelHelpers.extends({}, a, {
                children: [
                    e_children,
                    i,
                    e_children,
                    l
                ]
            })}/>;
            t[3] = e_children;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    l.default = d;
}, 98);