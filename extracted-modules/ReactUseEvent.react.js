__d("ReactUseEvent.react", [
    "ReactDOM",
    "react",
    "useUnsafeRef_DEPRECATED"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const useLayoutEffect = (s || (s = o("react"))).useLayoutEffect;
    function useC(t, n) {
        const a = (e || (e = r("useUnsafeRef_DEPRECATED")))(null);
        let a_current = a.current;
        if (n) {
            n.passive = undefined;
        }
        if (a_current === null) {
            const l = o("ReactDOM").unstable_createEventHandle(t, n);
            const s = new Map;
            a_current = {
                setListener: function(t, n) {
                    let e = s.get(t);
                    if (e !== undefined) {
                        e();
                    }
                    if (n === null) {
                        s.delete(t);
                        return;
                    }
                    e = l(t, n);
                    s.set(t, e);
                },
                clear: function() {
                    for(let e = Array.from(s.values()), t = 0; t < e.length; t++){
                        e[t]();
                    }
                    s.clear();
                }
            };
            a.current = a_current;
        }
        useLayoutEffect(function() {
            return function() {
                if (a_current !== null) {
                    a_current.clear();
                }
                a.current = null;
            };
        }, [
            a,
            a_current
        ]);
        return a_current;
    }
    l.default = useC;
}, 98);