__d("useWAWebMessageRenderQpl", [
    "WAWebMessageRenderQpl",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e) {
            n = e.toString();
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = n;
        let a;
        let i;
        if (t[2] !== r) {
            a = function() {
                o("WAWebMessageRenderQpl").endMessageRenderFlow(r);
            };
            i = [
                r
            ];
            t[2] = r;
            t[3] = a;
            t[4] = i;
        } else {
            a = t[3];
            i = t[4];
        }
        useEffect(a, i);
    }
    l.default = u;
}, 98);