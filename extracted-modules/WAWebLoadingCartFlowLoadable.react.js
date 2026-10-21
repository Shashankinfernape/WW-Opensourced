__d("WAWebLoadingCartFlowLoadable.react", [
    "WAWebLazyLoadLoading.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_error = e.error;
        let a;
        if (t[0] !== e_error) {
            a = <div>{s.jsx(r("WAWebLazyLoadLoading.react"), {
                error: e_error
            })}</div>;
            t[0] = e_error;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    l.default = u;
}, 98);