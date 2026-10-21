__d("useLazyRef", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = o("react"))).useRef;
    const u = {};
    function c(e) {
        const t = s(u);
        if (t.current === u) {
            t.current = e();
        }
        return t;
    }
    l.default = c;
}, 98);