__d("useWAWebMaxVisibleFilters", [
    "WAWebMaxVisiblePillCount",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useRef, useState } = s;
    const p = 20;
    const _ = 10;
    const f = 8;
    const g = 40;
    const h = 2;
    const y = 1;
    const C = 100;
    const b = 50;
    function useV(e, t, n) {
        const r = o("react-compiler-runtime").c(19);
        const a = useState(h);
        const maxVisibleCount = a[0];
        const l = a[1];
        const sRef = useRef(null);
        let u;
        if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [];
            r[0] = u;
        } else {
            u = r[0];
        }
        const vRef = useRef(u);
        const SRef = useRef(null);
        const RRef = useRef(0);
        const LRef = useRef(t);
        let E;
        let k;
        if (r[1] !== t) {
            E = function() {
                LRef.current = t;
            };
            k = [
                t
            ];
            r[1] = t;
            r[2] = E;
            r[3] = k;
        } else {
            E = r[2];
            k = r[3];
        }
        useEffect(E, k);
        let I;
        if (r[4] !== n || r[5] !== e) {
            I = function() {
                const e_current = e.current;
                const sRef_current = sRef.current;
                if (!(e_current == null || sRef_current == null)) {
                    const a = e_current.offsetWidth;
                    if (!(a < C)) {
                        const i = n?.current;
                        const u = i == null ? 0 : i.offsetWidth + f;
                        const c = a - p - _ - g - f - u;
                        const d = [];
                        for(let m = 0; m < vRef.current.length; m++){
                            const h = vRef.current[m];
                            const b = LRef.current[m];
                            if (!(h == null || b == null)) {
                                d.push({
                                    filter: b.filter,
                                    listId: b.listId,
                                    width: h.offsetWidth
                                });
                            }
                        }
                        const S = o("WAWebMaxVisiblePillCount").computeMaxVisiblePillCount(d, c, f);
                        const R = Math.max(S, y);
                        l(R);
                    }
                }
            };
            r[4] = n;
            r[5] = e;
            r[6] = I;
        } else {
            I = r[6];
        }
        const T = I;
        let D;
        let x;
        if (r[7] !== T || r[8] !== e) {
            D = function() {
                const e_current = e.current;
                if (e_current != null) {
                    const n = function() {
                        const e = Date.now();
                        const t = e - RRef.current;
                        if (SRef.current != null) {
                            window.clearTimeout(SRef.current);
                        }
                        if (t >= b) {
                            RRef.current = e;
                            T();
                        }
                        SRef.current = window.setTimeout(function() {
                            RRef.current = Date.now();
                            T();
                        }, b);
                    };
                    const r = new ResizeObserver(n);
                    r.observe(e_current);
                    const o = window.requestAnimationFrame(function() {
                        T();
                    });
                    return function() {
                        r.disconnect();
                        if (SRef.current != null) {
                            window.clearTimeout(SRef.current);
                        }
                        window.cancelAnimationFrame(o);
                    };
                }
            };
            x = [
                e,
                T
            ];
            r[7] = T;
            r[8] = e;
            r[9] = D;
            r[10] = x;
        } else {
            D = r[9];
            x = r[10];
        }
        useEffect(D, x);
        let $;
        if (r[11] !== T || r[12] !== t.length) {
            $ = function() {
                vRef.current = vRef.current.slice(0, t.length);
                const e = window.requestAnimationFrame(function() {
                    T();
                });
                return function() {
                    window.cancelAnimationFrame(e);
                };
            };
            r[11] = T;
            r[12] = t.length;
            r[13] = $;
        } else {
            $ = r[13];
        }
        let P;
        if (r[14] !== T || r[15] !== t) {
            P = [
                t,
                T
            ];
            r[14] = T;
            r[15] = t;
            r[16] = P;
        } else {
            P = r[16];
        }
        useEffect($, P);
        let N;
        if (r[17] !== maxVisibleCount) {
            N = {
                maxVisibleCount,
                measurementContainerRef: sRef,
                pillRefs: vRef
            };
            r[17] = maxVisibleCount;
            r[18] = N;
        } else {
            N = r[18];
        }
        return N;
    }
    l.default = useV;
}, 98);