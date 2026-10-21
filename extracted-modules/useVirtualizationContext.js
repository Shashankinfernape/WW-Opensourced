__d("useVirtualizationContext", [
    "VirtualizationContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useContext, useMemo, useRef } = s;
    function p() {
        const e = o("react-compiler-runtime").c(11);
        const t = useContext(r("VirtualizationContext"));
        const nRef = useRef(0);
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = new Set;
            e[0] = a;
        } else {
            a = e[0];
        }
        const iRef = useRef(a);
        const lRef = useRef(false);
        const sRef = useRef(null);
        if (sRef.current == null) {
            let u;
            if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                u = new Map;
                e[1] = u;
            } else {
                u = e[1];
            }
            sRef.current = u;
        }
        let d;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = function(t) {
                nRef.current = nRef.current + 1;
                const nRef_current = nRef.current;
                sRef.current?.set(nRef_current, t);
                return function() {
                    sRef.current?.delete(nRef_current);
                };
            };
            e[2] = d;
        } else {
            d = e[2];
        }
        const createPin = d;
        let _;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            _ = function() {
                if (sRef.current == null) {
                    return false;
                }
                return sRef.current.size > 0;
            };
            e[3] = _;
        } else {
            _ = e[3];
        }
        const hasPin = _;
        const gRef = useRef(null);
        if (gRef.current == null) {
            let h;
            if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
                h = new Map;
                e[4] = h;
            } else {
                h = e[4];
            }
            gRef.current = h;
        }
        let y;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            y = function(t, r) {
                nRef.current = nRef.current + 1;
                const nRef_current = nRef.current;
                let o = null;
                const gRef_current = gRef.current;
                if (gRef_current != null) {
                    if (!gRef_current.has(t)) {
                        gRef_current.set(t, new Map);
                    }
                    o = gRef_current.get(t);
                    o?.set(nRef_current, r);
                }
                return function() {
                    o?.delete(nRef_current);
                    if (o?.size === 0) {
                        if (gRef_current != null) {
                            gRef_current.delete(t);
                        }
                    }
                };
            };
            e[5] = y;
        } else {
            y = e[5];
        }
        const createFlag = y;
        let b;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            b = function(t) {
                return gRef.current?.has(t) ?? false;
            };
            e[6] = b;
        } else {
            b = e[6];
        }
        const hasFlag = b;
        let S;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            S = function(t) {
                iRef.current.add(t);
                t(lRef.current);
                return function() {
                    iRef.current.delete(t);
                };
            };
            e[7] = S;
        } else {
            S = e[7];
        }
        const subscribeToVirtualizationStatus = S;
        let L;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            L = function(t) {
                lRef.current = t;
                iRef.current.forEach((e)=>{
                    e(t);
                });
            };
            e[8] = L;
        } else {
            L = e[8];
        }
        const onVirtualizationChange = L;
        const kRef = useRef(null);
        let I;
        if (e[9] !== t) {
            I = t ?? {
                contentWrapperRef: kRef,
                createFlag,
                createPin,
                hasFlag,
                hasPin,
                onVirtualizationChange,
                subscribeToVirtualizationStatus
            };
            e[9] = t;
            e[10] = I;
        } else {
            I = e[10];
        }
        return I;
    }
    l.default = p;
}, 98);