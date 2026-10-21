__d("WAWebRegister.react", [
    "WAWebEventEmitter",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createContext, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef } = u;
    function h(e, t) {
        if (e.length !== t.length) {
            return false;
        }
        return e.every((e, n)=>e === t[n]);
    }
    function y() {
        const EContext = createContext();
        function TComponent(t) {
            const n = o("react-compiler-runtime").c(3);
            let r;
            if (n[0] !== t.children || n[1] !== t.registerRef) {
                r = <EContext.Provider value={t.registerRef}>{t.children}</EContext.Provider>;
                n[0] = t.children;
                n[1] = t.registerRef;
                n[2] = r;
            } else {
                r = n[2];
            }
            return r;
        }
        function useRegister(e) {
            const t = useMemo(function() {
                return new (r("WAWebEventEmitter"));
            }, []);
            const items = new Map;
            const aRef = useRef({
                items,
                events: t
            });
            if (aRef.current != null) {
                aRef.current.items = new Map;
            }
            const iRef = useRef(null);
            useEffect(function() {
                const iRef_current = iRef.current;
                iRef.current = aRef.current?.items;
                const aRef_current = aRef.current;
                if (aRef_current != null) {
                    const o = Array.from(iRef_current?.keys() || []);
                    const l = Array.from(aRef_current == null ? undefined : aRef_current.items.keys());
                    const s = !h(o, l);
                    if (s) {
                        if (!(e == null || e.onOrderChange == null)) {
                            e.onOrderChange(aRef_current?.items);
                        }
                    }
                }
            }, undefined);
            useEffect(function() {
                if (aRef.current != null) {
                    if (!(e == null || e.onRegister == null)) {
                        e.onRegister(aRef.current.items);
                    }
                }
            }, undefined);
            const l = e?.onChange;
            o("useWAWebListener").useListener(t, "change", useCallback(function() {
                if (aRef.current != null) {
                    if (l != null) {
                        l(aRef.current.items);
                    }
                }
            }, [
                l
            ]));
            return aRef;
        }
        function useRegisterItem(t, n) {
            const a = useContext(EContext);
            const i = a;
            if (a == null || i == null) {
                throw r("err")("[Register] `useRegisterItem` must be used in a `Register` tree");
            }
            const lRef = useRef(null);
            useImperativeHandle(lRef, function() {
                return n;
            });
            i.current?.items.set(t, lRef);
            useEffect(function() {
                const i_current = i.current;
                if (i_current != null) {
                    i_current.items.set(t, lRef);
                }
                if (i_current != null) {
                    i_current.events.trigger("change");
                }
                return function() {
                    if (i_current != null) {
                        i_current.items.delete(t);
                    }
                    if (i_current != null) {
                        i_current.events.trigger("change");
                    }
                };
            }, [
                t
            ]);
        }
        return {
            Register: TComponent,
            useRegister,
            useRegisterItem
        };
    }
    l.createRegister = y;
}, 98);