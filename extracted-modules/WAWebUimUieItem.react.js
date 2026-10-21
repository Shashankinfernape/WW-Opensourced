__d("WAWebUimUieItem.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useImperativeHandle, useRef } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(3);
        const { children, ref } = e;
        const aRef = useRef();
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                return {
                    getElement: function() {
                        return aRef.current;
                    }
                };
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        useImperativeHandle(ref, i);
        let l;
        if (t[1] !== children) {
            l = <div ref={aRef}>{children}</div>;
            t[1] = children;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.default = m;
}, 98);