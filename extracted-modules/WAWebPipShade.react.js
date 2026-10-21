__d("WAWebPipShade.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(12);
        const { ref, theme } = e;
        let a = null;
        e: switch(theme){
            case "upper":
                {
                    let i;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        i = {
                            className: "x1o0tod x47corl x10l6tqk xh8yej3 xwzfr38 x1xw4htp x13vifvy"
                        };
                        t[0] = i;
                    } else {
                        i = t[0];
                    }
                    let l;
                    if (t[1] !== ref) {
                        l = <div key="upper-shade" {...babelHelpers.extends({
                            ref
                        }, i)}/>;
                        t[1] = ref;
                        t[2] = l;
                    } else {
                        l = t[2];
                    }
                    a = l;
                    break e;
                }
            case "lower":
                {
                    let u;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        u = {
                            className: "x1o0tod x47corl x10l6tqk xh8yej3 xwzfr38 x1osfgkz x1ey2m1c"
                        };
                        t[3] = u;
                    } else {
                        u = t[3];
                    }
                    let c;
                    if (t[4] !== ref) {
                        c = <div key="lower-shade" {...babelHelpers.extends({
                            ref
                        }, u)}/>;
                        t[4] = ref;
                        t[5] = c;
                    } else {
                        c = t[5];
                    }
                    a = c;
                    break e;
                }
            case "full-rounded":
                {
                    let d;
                    if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                        d = {
                            className: "x1o0tod x47corl x10l6tqk xh8yej3 xmihuf0 x5yr21d x13vifvy xrxyp3c xv0oops x1isl5vh xn8zj9a"
                        };
                        t[6] = d;
                    } else {
                        d = t[6];
                    }
                    let m;
                    if (t[7] !== ref) {
                        m = <div key="full-rounded-shade" {...babelHelpers.extends({
                            ref
                        }, d)}/>;
                        t[7] = ref;
                        t[8] = m;
                    } else {
                        m = t[8];
                    }
                    a = m;
                    break e;
                }
            case "full-sharp":
                {
                    let p;
                    if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                        p = {
                            className: "x1o0tod x47corl x10l6tqk xh8yej3 xmihuf0 x5yr21d x13vifvy"
                        };
                        t[9] = p;
                    } else {
                        p = t[9];
                    }
                    let _;
                    if (t[10] !== ref) {
                        _ = <div key="full-sharp-shade" {...babelHelpers.extends({
                            ref
                        }, p)}/>;
                        t[10] = ref;
                        t[11] = _;
                    } else {
                        _ = t[11];
                    }
                    a = _;
                }
        }
        return a;
    }
    l.default = u;
}, 98);