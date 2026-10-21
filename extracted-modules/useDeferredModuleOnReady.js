__d("useDeferredModuleOnReady", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        if (t[0] !== e) {
            n = function() {
                return e.getModuleIfRequireable();
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = useState(n);
        const a = r[0];
        const i = r[1];
        let l;
        let s;
        if (t[2] !== e || t[3] !== a) {
            l = function() {
                if (a == null) {
                    const t = e.onReady(function(e) {
                        i(function() {
                            return e;
                        });
                    });
                    return function() {
                        t.remove();
                    };
                }
            };
            s = [
                e,
                a
            ];
            t[2] = e;
            t[3] = a;
            t[4] = l;
            t[5] = s;
        } else {
            l = t[4];
            s = t[5];
        }
        useEffect(l, s);
        return a;
    }
    l.default = useD;
}, 98);