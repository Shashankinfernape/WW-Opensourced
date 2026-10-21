__d("useWAWebHover", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = useState(false);
        const r = n[0];
        const a = n[1];
        let i;
        let l;
        if (t[0] !== e) {
            i = function() {
                const e_current = e.current;
                if (e_current) {
                    const n = function() {
                        a(true);
                    };
                    const r = function() {
                        a(false);
                    };
                    e_current.addEventListener("mouseenter", n);
                    e_current.addEventListener("mouseleave", r);
                    return function() {
                        e_current.removeEventListener("mouseenter", n);
                        e_current.removeEventListener("mouseleave", r);
                    };
                }
            };
            l = [
                e
            ];
            t[0] = e;
            t[1] = i;
            t[2] = l;
        } else {
            i = t[1];
            l = t[2];
        }
        useEffect(i, l);
        return r;
    }
    l.useWAWebHover = d;
}, 98);