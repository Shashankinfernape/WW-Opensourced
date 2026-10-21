__d("WDSToast.react", [
    "ReactDOM",
    "WDSToastListDeferred.react",
    "emptyFunction",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext, useEffect, useMemo, useRef, useState } = u;
    const g = 30000;
    function h(e, t) {
        const n = t.dedupId == null ? -1 : e.findIndex((e)=>e.dedupId === t.dedupId);
        if (n === -1) {
            return [].concat(e, [
                t
            ]);
        }
        return e.map((e, r)=>{
            if (r === n) {
                return t;
            }
            return e;
        });
    }
    function y(e, t, targetWindow) {
        for (const r of e){
            for (const o of r.addedNodes){
                if (o instanceof targetWindow.HTMLElement) {
                    if (o.matches(t)) {
                        return o;
                    }
                    const a = o.querySelector(t);
                    if (a != null) {
                        return a;
                    }
                }
            }
        }
        return null;
    }
    const CContext = s.createContext({
        showToast: r("emptyFunction")
    });
    function BComponent({ children, target, targetWindow = window }) {
        const l = useState(null);
        const u = l[0];
        const d = l[1];
        useEffect(function() {
            const t = ()=>((target_1)=>{
                    if ((typeof target_1 === "object" && target_1 !== null || typeof target_1 === "function") && "nodeName" in target_1) {
                        const t = target_1.nodeName;
                        if (target instanceof HTMLElement || target instanceof targetWindow.HTMLElement) {
                            return target;
                        }
                        return null;
                    }
                    if ((typeof target_1 === "object" && target_1 !== null || typeof target_1 === "function") && "current" in target_1) {
                        const r = target_1.current;
                        return r;
                    }
                    {
                        return targetWindow.document.querySelector(target_1);
                    }
                })(target);
            const r = t();
            if (r != null) {
                d(r);
                return;
            }
            d(null);
            const o = typeof target === "string" ? target : null;
            var a = new targetWindow.MutationObserver(function(e) {
                const n = o == null ? t() : y(e, o, targetWindow);
                if (n != null) {
                    a.disconnect();
                    targetWindow.clearTimeout(l);
                    d(n);
                }
            });
            a.observe(targetWindow.document.body ?? targetWindow.document.documentElement, {
                childList: true,
                subtree: true
            });
            var l = targetWindow.setTimeout(function() {
                a.disconnect();
            }, g);
            return function() {
                a.disconnect();
                targetWindow.clearTimeout(l);
            };
        }, [
            target,
            targetWindow
        ]);
        const bRef = useRef(null);
        const vRef = useRef([]);
        const S = useCallback(function(e) {
            bRef.current = e;
            if (e != null) {
                const t = vRef.current;
                vRef.current = [];
                t.forEach((t)=>e.showToast(t));
            }
        }, []);
        const R = useMemo(function() {
            return {
                showToast: function(t) {
                    const bRef_current = bRef.current;
                    if (bRef_current == null) {
                        vRef.current = h(vRef.current, t);
                        return;
                    }
                    bRef_current.showToast(t);
                }
            };
        }, []);
        const Component = r("WDSToastListDeferred.react");
        return <CContext.Provider value={R}>{children}{u && o("ReactDOM").createPortal(<Component ref={S} targetWindow={targetWindow}/>, u)}</CContext.Provider>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    function useV() {
        return useContext(CContext);
    }
    l.useWDSToast = useV;
    l.WDSToastProvider = BComponent;
}, 98);