__d("StrictMode", [
    "ShowAllReactWarnings",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_children = e.children;
        let a;
        if (t[0] !== e_children) {
            const Component = r("ShowAllReactWarnings");
            a = <Component><s.StrictMode>{e_children}</s.StrictMode></Component>;
            t[0] = e_children;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    l.default = UComponent;
}, 98);