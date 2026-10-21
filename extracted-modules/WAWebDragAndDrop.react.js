__d("WAWebDragAndDrop.react", [
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect: d, useImperativeHandle: m, useRef: p, useState: _ } = c;
    function f(e) {
        if (e.dataTransfer) {
            try {
                if (!e.dataTransfer.dropEffect) {
                    return;
                }
            } catch (e) {
                return;
            }
        }
    }
    function g(t) {
        const n = o("react-compiler-runtime").c(36);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        const i = r;
        const { disableFromWithin: l, onDragChange: s, onDrop: c } = i;
        const g = _(false);
        const h = g[0];
        const y = g[1];
        const C = _(false);
        const b = C[0];
        const v = C[1];
        const S = _(false);
        const R = S[0];
        const L = S[1];
        let E;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                v(false);
                L(false);
            };
            n[3] = E;
        } else {
            E = n[3];
        }
        const k = o("useWAWebTimeout").useTimeout(E, 250);
        const I = k[0];
        const T = k[1];
        const D = p(null);
        let x;
        if (n[4] !== l) {
            x = function(t) {
                if (l) {
                    y(true);
                }
            };
            n[4] = l;
            n[5] = x;
        } else {
            x = n[5];
        }
        const $ = x;
        let P;
        if (n[6] !== l) {
            P = function(t) {
                if (l) {
                    y(false);
                }
            };
            n[6] = l;
            n[7] = P;
        } else {
            P = n[7];
        }
        const N = P;
        let M;
        if (n[8] !== h || n[9] !== c) {
            M = function(t) {
                t.preventDefault();
                t.stopPropagation();
                v(false);
                L(true);
                if (!h) {
                    c(t);
                }
            };
            n[8] = h;
            n[9] = c;
            n[10] = M;
        } else {
            M = n[10];
        }
        const w = M;
        let A;
        if (n[11] !== h || n[12] !== T || n[13] !== b) {
            A = function(t) {
                t.preventDefault();
                t.stopPropagation();
                T();
                if (!(b || h)) {
                    v(true);
                    L(false);
                    f(t);
                }
            };
            n[11] = h;
            n[12] = T;
            n[13] = b;
            n[14] = A;
        } else {
            A = n[14];
        }
        const F = A;
        let O;
        if (n[15] !== b) {
            O = function(t) {
                t.preventDefault();
                t.stopPropagation();
                if (b) {
                    v(false);
                    L(false);
                }
            };
            n[15] = b;
            n[16] = O;
        } else {
            O = n[16];
        }
        const B = O;
        let W;
        if (n[17] !== I) {
            W = function(t) {
                I();
                t.preventDefault();
                t.stopPropagation();
            };
            n[17] = I;
            n[18] = W;
        } else {
            W = n[18];
        }
        const q = W;
        let U;
        let V;
        if (n[19] !== R || n[20] !== b || n[21] !== s) {
            U = function() {
                const e = D.current;
                D.current = b;
                if (!(e == null || e === b || !s)) {
                    s(b, R);
                }
            };
            V = [
                R,
                b,
                s
            ];
            n[19] = R;
            n[20] = b;
            n[21] = s;
            n[22] = U;
            n[23] = V;
        } else {
            U = n[22];
            V = n[23];
        }
        d(U, V);
        let H;
        if (n[24] !== N || n[25] !== F || n[26] !== $ || n[27] !== q) {
            H = function() {
                return {
                    onDragStart: $,
                    onDragEnd: N,
                    onDragOver: F,
                    onDragLeave: q
                };
            };
            n[24] = N;
            n[25] = F;
            n[26] = $;
            n[27] = q;
            n[28] = H;
        } else {
            H = n[28];
        }
        m(a, H);
        let G;
        if (n[29] === Symbol.for("react.memo_cache_sentinel")) {
            G = "x10l6tqk x13vifvy x1o0tod x1wvqwft xh8yej3 x5yr21d";
            n[29] = G;
        } else {
            G = n[29];
        }
        let z;
        if (n[30] !== b) {
            z = b ? {} : {
                display: "none"
            };
            n[30] = b;
            n[31] = z;
        } else {
            z = n[31];
        }
        let j;
        if (n[32] !== B || n[33] !== w || n[34] !== z) {
            j = <div key="mask" className={G} style={z} onDrop={w} onDragLeave={B}/>;
            n[32] = B;
            n[33] = w;
            n[34] = z;
            n[35] = j;
        } else {
            j = n[35];
        }
        return j;
    }
    l.default = g;
}, 98);