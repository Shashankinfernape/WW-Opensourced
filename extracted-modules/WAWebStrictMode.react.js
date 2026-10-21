__d("WAWebStrictMode.react", [
    "StrictMode",
    "gkx",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_children = e.children;
        if (r("gkx")("18530")) {
            let a;
            if (t[0] !== e_children) {
                const Component = r("StrictMode");
                a = <Component>{e_children}</Component>;
                t[0] = e_children;
                t[1] = a;
            } else {
                a = t[1];
            }
            return a;
        }
        return e_children;
    }
    l.default = u;
}, 98);