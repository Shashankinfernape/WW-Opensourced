__d("WAWebAnimationGroupItem.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const { children, ref } = e;
        let a;
        if (t[0] !== children || t[1] !== ref) {
            a = <div ref={ref}>{children}</div>;
            t[0] = children;
            t[1] = ref;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = u;
}, 98);