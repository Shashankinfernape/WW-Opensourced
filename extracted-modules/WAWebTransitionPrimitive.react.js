__d("WAWebTransitionPrimitive.react", [
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffectEvent: u, useLayoutEffect: c, useRef: d, useState: m } = s;
    function p(e) {
        const t = o("react-compiler-runtime").c(38);
        const { addEndListener: n, appear: r, children: a, enter: i, exit: l, in: s, mountOnEnter: p, onEnter: f, onEntered: g, onEntering: h, onExit: y, onExited: C, onExiting: b, resolveNode: v, timeout: S, unmountOnExit: R } = e;
        const L = r === void 0 ? false : r;
        const E = i === void 0 ? true : i;
        const k = l === void 0 ? true : l;
        const I = s === void 0 ? false : s;
        const T = p === void 0 ? false : p;
        const D = R === void 0 ? false : R;
        let x;
        if (t[0] !== I || t[1] !== T || t[2] !== D) {
            x = function() {
                return _(I, T, D);
            };
            t[0] = I;
            t[1] = T;
            t[2] = D;
            t[3] = x;
        } else {
            x = t[3];
        }
        const $ = m(x);
        const P = $[0];
        const N = $[1];
        const M = d(true);
        const w = d(0);
        const A = d(false);
        const F = d(I);
        const O = d(0);
        const B = d(null);
        const W = d(null);
        let q;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            q = function() {
                const e = B.current;
                B.current = null;
                W.current = null;
                e?.();
            };
            t[4] = q;
        } else {
            q = t[4];
        }
        const U = o("useWAWebTimeout").useManualTimeout(q);
        const V = U[0];
        const H = U[1];
        let G;
        let z;
        if (t[5] !== V) {
            z = function() {
                w.current = w.current + 1;
                const e = w.current;
                M.current = true;
                const t = W.current;
                if (t != null) {
                    V(Math.max(0, t - Date.now()));
                }
                return function() {
                    M.current = false;
                    queueMicrotask(()=>{
                        if (w.current === e && !M.current) {
                            O.current = O.current + 1;
                            B.current = null;
                            W.current = null;
                        }
                    });
                };
            };
            G = [
                V
            ];
            t[5] = V;
            t[6] = G;
            t[7] = z;
        } else {
            G = t[6];
            z = t[7];
        }
        c(z, G);
        if (I && P === "unmounted") {
            N("mounted");
        }
        let j;
        if (t[8] !== n || t[9] !== H || t[10] !== V || t[11] !== S) {
            j = function(t, r) {
                H();
                B.current = null;
                W.current = null;
                O.current = O.current + 1;
                const e = O.current;
                const o = function() {
                    if (!(!M.current || e !== O.current)) {
                        O.current = O.current + 1;
                        H();
                        B.current = null;
                        W.current = null;
                        r();
                    }
                };
                if (t == null || S == null && n == null) {
                    B.current = o;
                    W.current = Date.now();
                    V(0);
                    return;
                }
                if (n != null) {
                    n(t, o);
                }
                if (S != null && e === O.current) {
                    B.current = o;
                    W.current = Date.now() + S;
                    V(S);
                }
            };
            t[8] = n;
            t[9] = H;
            t[10] = V;
            t[11] = S;
            t[12] = j;
        } else {
            j = t[12];
        }
        const K = u(j);
        let Q;
        if (t[13] !== H || t[14] !== E || t[15] !== f || t[16] !== g || t[17] !== h || t[18] !== v || t[19] !== K) {
            Q = function(t) {
                O.current = O.current + 1;
                H();
                B.current = null;
                W.current = null;
                const e = v();
                if (!t && !E) {
                    g?.();
                    return;
                }
                if (e != null) {
                    if (f != null) {
                        f(e, t);
                    }
                }
                h?.();
                K(e, function() {
                    g?.();
                });
            };
            t[13] = H;
            t[14] = E;
            t[15] = f;
            t[16] = g;
            t[17] = h;
            t[18] = v;
            t[19] = K;
            t[20] = Q;
        } else {
            Q = t[20];
        }
        const X = u(Q);
        let Y;
        if (t[21] !== H || t[22] !== k || t[23] !== y || t[24] !== C || t[25] !== b || t[26] !== v || t[27] !== K || t[28] !== D) {
            Y = function() {
                O.current = O.current + 1;
                H();
                B.current = null;
                W.current = null;
                if (!k) {
                    if (D) {
                        N("unmounted");
                    }
                    C?.();
                    return;
                }
                const e = v();
                if (e != null) {
                    if (y != null) {
                        y(e);
                    }
                }
                b?.();
                K(e, function() {
                    if (D) {
                        N("unmounted");
                    }
                    C?.();
                });
            };
            t[21] = H;
            t[22] = k;
            t[23] = y;
            t[24] = C;
            t[25] = b;
            t[26] = v;
            t[27] = K;
            t[28] = D;
            t[29] = Y;
        } else {
            Y = t[29];
        }
        const J = u(Y);
        let Z;
        if (t[30] !== L || t[31] !== I || t[32] !== X || t[33] !== J) {
            Z = function() {
                const e = !A.current;
                A.current = true;
                const t = F.current;
                F.current = I;
                if (e) {
                    if (I && L) {
                        X(true);
                    }
                    return;
                }
                if (I && !t) {
                    X(false);
                } else if (!I && t) {
                    J();
                }
            };
            t[30] = L;
            t[31] = I;
            t[32] = X;
            t[33] = J;
            t[34] = Z;
        } else {
            Z = t[34];
        }
        let ee;
        if (t[35] !== L || t[36] !== I) {
            ee = [
                I,
                L
            ];
            t[35] = L;
            t[36] = I;
            t[37] = ee;
        } else {
            ee = t[37];
        }
        c(Z, ee);
        if (P === "unmounted" || !I && !k && D) {
            return null;
        }
        return a ?? null;
    }
    function _(e, t, n) {
        if (!e && (t || n)) {
            return "unmounted";
        }
        return "mounted";
    }
    l.default = p;
}, 98);