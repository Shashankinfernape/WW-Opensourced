__d("WAWebWindowSizeContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = o("react"))).createContext;
    function u() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
    const c = s(u());
    l.default = c;
}, 98);