__d("WAWebPipOverlay.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { children, icon } = e;
        let a;
        if (t[0] !== icon) {
            a = icon ? <div className="x17t9dm2 xyorhqc x1rdy4ex">{icon}</div> : null;
            t[0] = icon;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "x6s0dn4 xjpg5jv x1ey2m1c x9f619 x78zum5 xdt5ytf xl56j7k x1o0tod x1xpjyb3 xyo0t3i xk85y76 xb0esv5 x10l6tqk xtijo5x x13vifvy xeut3pp"
            };
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "x1riek7e xt0e3qv x1c4vz4f x2lah0s xdl72j9 x1nxh6w3 x1iikomf x1u7k74 x2b8uid x1kkjihi"
            };
            t[3] = u;
        } else {
            u = t[3];
        }
        let c;
        if (t[4] !== children) {
            c = <div {...babelHelpers.extends({}, u, {
                children
            })}/>;
            t[4] = children;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== i || t[7] !== c) {
            d = <div {...babelHelpers.extends({}, l, {
                children: [
                    i,
                    c
                ]
            })}/>;
            t[6] = i;
            t[7] = c;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    l.default = u;
}, 98);