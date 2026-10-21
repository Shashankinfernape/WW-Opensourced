__d("useMutationStableChecker", [
    "react",
    "useMutationObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useRef, useState } = s;
    function p(e, t) {
        const n = [];
        e.forEach((e)=>{
            if (e instanceof HTMLElement) {
                if (e.matches(t)) {
                    n.push(e);
                }
                n.push(...Array.from(e.querySelectorAll(t)));
            }
        });
        return n;
    }
    function _(e, t, n, r = false) {
        const o = p(t, n);
        if (o.length === 0) {
            return e;
        }
        if (r) {
            return new Set([].concat(Array.from(e).filter((e)=>!o.includes(e))));
        }
        return new Set([].concat(Array.from(e), o));
    }
    const f = {
        childList: true,
        subtree: true
    };
    function useG(e, t, n) {
        const o = useState(true);
        const a = o[0];
        const i = o[1];
        const lRef = useRef();
        const sRef = useRef(new Set);
        const p = r("useMutationObserver")(function(t) {
            t.forEach((e)=>{
                if (e.type === "childList") {
                    const { addedNodes, removedNodes } = e;
                    if (n != null) {
                        sRef.current = _(_(sRef.current, addedNodes, n, false), removedNodes, n, true);
                    }
                }
            });
            g(e);
        }, f);
        var g = useCallback(function(e) {
            if (lRef.current != null) {
                window.clearTimeout(lRef.current);
            }
            lRef.current = window.setTimeout(function() {
                if (sRef.current.size > 0) {
                    g(e);
                } else {
                    i(true);
                    p(null);
                }
            }, e);
        }, [
            p
        ]);
        useEffect(function() {
            if (e > 0) {
                p(t.current ?? null);
                i(false);
            } else {
                p(null);
            }
            return function() {
                if (lRef.current != null) {
                    window.clearTimeout(lRef.current);
                }
                p(null);
            };
        }, [
            e,
            p,
            t
        ]);
        return a;
    }
    l.default = useG;
}, 98);