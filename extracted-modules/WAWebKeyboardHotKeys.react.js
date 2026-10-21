__d("WAWebKeyboardHotKeys.react", [
    "WALogger",
    "WAWebNoop",
    "WAWebUim",
    "cr:23442",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = [
        "ref"
    ];
    const d = [
        "component",
        "handlers",
        "children",
        "xstyle",
        "onFocus",
        "onBlur",
        "focusType",
        "onKeyDown",
        "tabIndex",
        "className"
    ];
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = p.useRef;
    const g = {
        alt: "Alt",
        ctrl: "Control",
        meta: "Meta",
        shift: "Shift"
    };
    const h = Object.values(g);
    const y = "+";
    const C = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        capslock: 20,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        ins: 45,
        del: 46,
        meta: 224
    };
    const b = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
    };
    const v = {
        option: "alt",
        command: "meta",
        return: "enter",
        escape: "esc",
        plus: "+"
    };
    function S(e) {
        const t = o("react-compiler-runtime").c(45);
        let a;
        let i;
        if (t[0] !== e) {
            i = e.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(e, c);
            t[0] = e;
            t[1] = a;
            t[2] = i;
        } else {
            a = t[1];
            i = t[2];
        }
        let l;
        let s;
        let u;
        let p;
        let g;
        let h;
        let y;
        let C;
        let v;
        let S;
        let k;
        if (t[3] !== a) {
            const I = a;
            h = I.component;
            p = I.handlers;
            l = I.children;
            k = I.xstyle;
            y = I.onFocus;
            C = I.onBlur;
            v = I.focusType;
            g = I.onKeyDown;
            S = I.tabIndex;
            s = I.className;
            u = babelHelpers.objectWithoutPropertiesLoose(I, d);
            t[3] = a;
            t[4] = l;
            t[5] = s;
            t[6] = u;
            t[7] = p;
            t[8] = g;
            t[9] = h;
            t[10] = y;
            t[11] = C;
            t[12] = v;
            t[13] = S;
            t[14] = k;
        } else {
            l = t[4];
            s = t[5];
            u = t[6];
            p = t[7];
            g = t[8];
            h = t[9];
            y = t[10];
            C = t[11];
            v = t[12];
            S = t[13];
            k = t[14];
        }
        const T = h === void 0 ? "div" : h;
        const D = y === void 0 ? r("WAWebNoop") : y;
        const x = C === void 0 ? r("WAWebNoop") : C;
        const $ = v === void 0 ? "all" : v;
        const P = f(false);
        const N = n("cr:23442")();
        const M = N[0];
        const w = N[1];
        const A = f(null);
        const F = r("useMergeRefs")(i, A, M);
        let O;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            O = function() {
                if (P.current) {
                    const e = document.activeElement;
                    if (A.current === e) {
                        o("WAWebUim").UIM.Manager.refocusTopUie();
                    }
                }
            };
            t[15] = O;
        } else {
            O = t[15];
        }
        r("useWAWebOnUnmount")(O);
        let B;
        if (t[16] !== p || t[17] !== g) {
            B = function(t) {
                if (g != null) {
                    g(t);
                }
                if (p) {
                    Object.keys(p).forEach((e)=>{
                        const n = p[e];
                        if (n != null) {
                            const r = E(e);
                            const o = r[0];
                            if (b[String(o)] && L(r, t)) {
                                n(t);
                            }
                        }
                    });
                }
            };
            t[16] = p;
            t[17] = g;
            t[18] = B;
        } else {
            B = t[18];
        }
        const W = B;
        let q;
        if (t[19] !== p) {
            q = function(t) {
                if (p) {
                    Object.keys(p).forEach((e)=>{
                        const n = p[e];
                        if (n != null) {
                            const r = E(e);
                            const o = r[0];
                            if (!b[String(o)]) {
                                if (L(r, t)) {
                                    n(t);
                                }
                            }
                        }
                    });
                }
            };
            t[19] = p;
            t[20] = q;
        } else {
            q = t[20];
        }
        const U = q;
        let V;
        if (t[21] !== $ || t[22] !== w || t[23] !== D) {
            V = function(t) {
                P.current = true;
                if (!($ === "keyboardOnly" && w !== true)) {
                    D(t);
                }
            };
            t[21] = $;
            t[22] = w;
            t[23] = D;
            t[24] = V;
        } else {
            V = t[24];
        }
        const H = V;
        let G;
        if (t[25] !== x) {
            G = function(t) {
                P.current = false;
                x(t);
            };
            t[25] = x;
            t[26] = G;
        } else {
            G = t[26];
        }
        const z = G;
        const j = p != null && Object.keys(p).some((e)=>p[e] != null);
        let K = -1;
        if (u["data-tab"] != null) {
            K = 0;
        }
        if (S != null) {
            K = S;
        }
        let Q;
        if (t[27] !== s || t[28] !== k) {
            Q = [];
            if (s != null) {
                Q.push(s);
            }
            if (k != null) {
                let X;
                if (t[30] !== k) {
                    X = (m || (m = r("stylex")))(k);
                    t[30] = k;
                    t[31] = X;
                } else {
                    X = t[31];
                }
                Q.push(X);
            }
            t[27] = s;
            t[28] = k;
            t[29] = Q;
        } else {
            Q = t[29];
        }
        const Y = K;
        const J = j ? U : null;
        const Z = j ? W : null;
        let ee;
        if (t[32] !== Q) {
            ee = Q.map(R);
            t[32] = Q;
            t[33] = ee;
        } else {
            ee = t[33];
        }
        const te = ee.join(" ");
        let ne;
        if (t[34] !== T || t[35] !== l || t[36] !== u || t[37] !== z || t[38] !== H || t[39] !== F || t[40] !== J || t[41] !== Z || t[42] !== te || t[43] !== K) {
            ne = <T {...babelHelpers.extends({
                ref: F,
                tabIndex: Y,
                onKeyPress: J,
                onKeyDown: Z,
                className: te
            }, u, {
                onFocus: H,
                onBlur: z,
                children: l
            })}/>;
            t[34] = T;
            t[35] = l;
            t[36] = u;
            t[37] = z;
            t[38] = H;
            t[39] = F;
            t[40] = J;
            t[41] = Z;
            t[42] = te;
            t[43] = K;
            t[44] = ne;
        } else {
            ne = t[44];
        }
        return ne;
    }
    function R(e) {
        return e;
    }
    function L([n, r], t) {
        if (n !== t.which) {
            return false;
        }
        return h.every((e)=>{
            if (r != null && e === r) {
                return t.getModifierState(r);
            }
            return !t.getModifierState(e);
        });
    }
    function E(t) {
        const n = t.toLowerCase().split(y);
        let r = n[0];
        let a = n[1];
        if (v[r]) {
            r = v[r];
        }
        if (v[a]) {
            a = v[a];
        }
        let i = r;
        let l;
        if (a) {
            i = a;
            l = g[r];
            if (l === void 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid HotKey Modifier: ",
                    ""
                ])), r);
            } else if (i === void 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid HotKey Key: ",
                    ""
                ])), a);
            }
        } else if (i === void 0) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid HotKey Key: ",
                ""
            ])), r);
        }
        return [
            C[i] || i.charCodeAt(0),
            l
        ];
    }
    l.SpecialKeyMap = C;
    l.HotKeys = S;
}, 98);