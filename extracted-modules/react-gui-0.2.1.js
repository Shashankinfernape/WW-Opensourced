__d("react-gui-0.2.1", [
    "react-0.0.0"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("react-0.0.0");
    const l = {};
    const s = {
        exports: l
    };
    function u() {
        l.__esModule = true;
        l.default = e;
        function e() {
            return !!(typeof window !== "undefined" && window.document && window.document.createElement);
        }
        s.exports = l.default;
    }
    let c = false;
    function d() {
        if (!c) {
            c = true;
            u();
        }
        return s.exports;
    }
    const m = {};
    const p = {
        exports: m
    };
    function _() {
        m.__esModule = true;
        m.default = r;
        const e = t(d());
        function t(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        var n = e.default();
        function r() {
            let e = false;
            if (n) {
                try {
                    const t = document.createElement("div");
                    const r = {};
                    Object.defineProperty(r, "preventScroll", {
                        get: function() {
                            e = true;
                            return false;
                        }
                    });
                    t.focus(r);
                } catch (e) {}
            }
            return e;
        }
        p.exports = m.default;
    }
    let f = false;
    function g() {
        if (!f) {
            f = true;
            _();
        }
        return p.exports;
    }
    const h = {};
    const y = {
        exports: h
    };
    function C() {
        h.__esModule = true;
        h.default = a;
        const e = t(g());
        function t(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        var n = e.default();
        function r(e) {
            const t = [];
            for(var n = document.documentElement, r = e.parentElement; r != null && r !== n;){
                if (r.offsetHeight < r.scrollHeight || r.offsetWidth < r.scrollWidth) {
                    t.push([
                        r,
                        r.scrollTop,
                        r.scrollLeft
                    ]);
                }
                r = r.parentElement;
            }
            if (n != null) {
                t.push([
                    n,
                    n.scrollTop,
                    n.scrollLeft
                ]);
            }
            return t;
        }
        function o(e) {
            for (const [r, o, a] of e){
                r.scrollTop = o;
                r.scrollLeft = a;
            }
        }
        function a(e, t) {
            if (n) {
                e.focus(t);
            } else {
                let a;
                if (t != null && t.preventScroll === true) {
                    a = r(e);
                }
                e.focus();
                if (a != null) {
                    o(a);
                }
            }
        }
        y.exports = h.default;
    }
    let b = false;
    function v() {
        if (!b) {
            b = true;
            C();
        }
        return y.exports;
    }
    const S = {};
    const R = {
        exports: S
    };
    function L() {
        S.__esModule = true;
        S.default = r;
        const e = t(d());
        function t(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        var n = e.default();
        function r() {
            let e = false;
            if (n) {
                try {
                    const t = {};
                    Object.defineProperty(t, "passive", {
                        get: function() {
                            e = true;
                            return false;
                        }
                    });
                    window.addEventListener("test", null, t);
                    window.removeEventListener("test", null, t);
                } catch (e) {}
            }
            return e;
        }
        R.exports = S.default;
    }
    let E = false;
    function k() {
        if (!E) {
            E = true;
            L();
        }
        return R.exports;
    }
    const I = {};
    const T = {
        exports: I
    };
    function D() {
        I.__esModule = true;
        I.addEvent = i;
        I.removeEvent = l;
        const e = t(k());
        function t(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        var n = e.default();
        var r = function() {};
        var o = {
            touchstart: true,
            touchmove: true,
            scroll: true
        };
        function a(e, t) {
            if (t != null) {
                const { capture: r, passive: a } = t;
                if (n) {
                    if (a == null || o[e] === true) {
                        return {
                            capture: r,
                            passive: true
                        };
                    }
                    return t;
                }
                return !!r;
            }
            return false;
        }
        function i(e, t, n, o) {
            const i = a(t, o);
            if (typeof n === "function") {
                const l = e;
                l.addEventListener(t, n, i);
                return function() {
                    if (l != null) {
                        l.removeEventListener(t, n, i);
                    }
                };
            } else {
                return r;
            }
        }
        function l(e, t, n, r) {
            const o = a(t, r);
            if (typeof n === "function") {
                e.removeEventListener(t, n, o);
            }
        }
    }
    let x = false;
    function $() {
        if (!x) {
            x = true;
            D();
        }
        return T.exports;
    }
    const P = {};
    const N = {
        exports: P
    };
    function M() {
        P.__esModule = true;
        P.default = void 0;
        const e = function() {
            return typeof window !== "undefined" && window.PointerEvent != null;
        };
        P.default = e;
        N.exports = P.default;
    }
    let w = false;
    function A() {
        if (!w) {
            w = true;
            M();
        }
        return N.exports;
    }
    const F = {};
    const O = {
        exports: F
    };
    function B() {
        F.__esModule = true;
        F.getActiveModality = U;
        F.getModality = V;
        F.addModalityListener = H;
        F.testOnly_resetActiveModality = G;
        const e = $();
        const t = r(d());
        const n = r(A());
        function r(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        var o = "keyboard";
        var a = "keyboard";
        let i;
        let l;
        var s = false;
        var u = new Set;
        var c = "keyboard";
        const m = "mouse";
        const p = "touch";
        const _ = "blur";
        const f = "contextmenu";
        const g = "focus";
        const h = "keydown";
        const y = "mousedown";
        const C = "mousemove";
        const b = "mouseover";
        const v = "mouseup";
        const S = "pointerdown";
        const R = "pointermove";
        const L = "pointerover";
        const E = "scroll";
        const k = "selectionchange";
        const I = "touchcancel";
        const T = "touchmove";
        const D = "touchstart";
        const x = "visibilitychange";
        const P = {
            capture: true,
            passive: true
        };
        function N() {
            if (i != null || l != null) {
                if (i != null) {
                    a = i;
                    i = null;
                }
                if (l != null) {
                    o = l;
                    l = null;
                }
                q();
            }
        }
        function M() {
            i = a;
            l = o;
            o = c;
            a = c;
            q();
            s = false;
        }
        function w() {
            N();
        }
        function O(e) {
            if (!(e.metaKey || e.altKey || e.ctrlKey)) {
                if (a !== c) {
                    a = c;
                    o = c;
                    q();
                }
            }
        }
        function B() {
            if (document.visibilityState !== "hidden") {
                N();
            }
        }
        function W(e) {
            const t = e.type;
            if (n.default()) {
                if (t === S) {
                    if (o !== e.pointerType) {
                        a = e.pointerType;
                        o = e.pointerType;
                        q();
                    }
                    return;
                }
                if (t === R || t === L) {
                    if (a !== e.pointerType) {
                        a = e.pointerType;
                        q();
                    }
                    return;
                }
            } else {
                if (!s) {
                    if (t === y && o !== m) {
                        a = m;
                        o = m;
                        q();
                    }
                    if ((t === C || t === b) && a !== m) {
                        a = m;
                        q();
                    }
                }
                if (t === D) {
                    s = true;
                    if (e.touches && e.touches.length > 1) {
                        s = false;
                    }
                    if (o !== p) {
                        a = p;
                        o = p;
                        q();
                    }
                    return;
                }
                if (t === f || t === v || t === k || t === E || t === I || t === T) {
                    s = false;
                }
            }
        }
        if (t.default()) {
            e.addEvent(window, _, M);
            e.addEvent(window, g, w);
            e.addEvent(document, h, O, P);
            e.addEvent(document, x, B, P);
            [
                S,
                R,
                L,
                f,
                y,
                C,
                b,
                v,
                E,
                k,
                I,
                T,
                D
            ].forEach((t)=>{
                e.addEvent(document, t, W, P);
            });
        }
        function q() {
            const e = {
                activeModality: o,
                modality: a
            };
            u.forEach((t)=>{
                t(e);
            });
        }
        function U() {
            return o;
        }
        function V() {
            return a;
        }
        function H(e) {
            u.add(e);
            return function() {
                u.delete(e);
            };
        }
        function G() {
            s = false;
            o = c;
            a = c;
        }
    }
    let W = false;
    function q() {
        if (!W) {
            W = true;
            B();
        }
        return O.exports;
    }
    const U = {};
    const V = {
        exports: U
    };
    function H() {
        U.__esModule = true;
        U.blur = o;
        U.clear = a;
        U.focus = i;
        U.getLayoutRect = l;
        var e = n(v());
        const t = q();
        U.getActiveModality = t.getActiveModality;
        U.getModality = t.getModality;
        function n(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        var r = {
            A: true,
            BUTTON: true,
            INPUT: true,
            SELECT: true,
            TEXTAREA: true
        };
        function o(e) {
            if (e != null) {
                try {
                    e.blur();
                } catch (e) {}
            }
        }
        function a(e) {
            if (e != null && typeof e.value === "string") {
                e.value = "";
            }
        }
        function i(t, n) {
            if (t != null) {
                try {
                    const o = t.nodeName;
                    if (r[o] == null && t.getAttribute("tabIndex") == null) {
                        t.setAttribute("tabIndex", "-1");
                    }
                    e.default(t, n);
                } catch (e) {}
            }
        }
        function l(e, t) {
            if (e != null) {
                return e.getBoundingClientRect();
            }
        }
    }
    let G = false;
    function z() {
        if (!G) {
            G = true;
            H();
        }
        return V.exports;
    }
    const j = {};
    const K = {
        exports: j
    };
    function Q() {
        j.__esModule = true;
        j.useRefCallback = n;
        var t = e();
        function n(e) {
            const n = t.useRef(void 0);
            return t.useCallback(function(t) {
                if (n.current) {
                    n.current();
                    n.current = void 0;
                }
                if (t != null) {
                    n.current = e(t);
                }
            }, [
                e
            ]);
        }
    }
    let X = false;
    function Y() {
        if (!X) {
            X = true;
            Q();
        }
        return K.exports;
    }
    const J = {};
    const Z = {
        exports: J
    };
    function ee() {
        J.__esModule = true;
        J.useFocus = i;
        var t = e();
        var n = $();
        var r = Y();
        var o = {
            passive: true
        };
        var a = {
            capture: true,
            passive: true
        };
        function i({ disabled: i, onBlur: l, onBlurCapture: s, onFocus: u, onFocusCapture: c, onFocusChange: d }) {
            const m = t.useCallback(function(e) {
                function t(e) {
                    if (!i) {
                        if (l != null) {
                            l(e);
                        }
                        if (d != null) {
                            d(false, e);
                        }
                    }
                }
                function r(e) {
                    if (!i) {
                        if (u != null) {
                            u(e);
                        }
                        if (d != null) {
                            d(true, e);
                        }
                    }
                }
                const m = [
                    n.addEvent(e, "blur", t, o),
                    n.addEvent(e, "focus", r, o),
                    n.addEvent(e, "blur", i ? null : s, a),
                    n.addEvent(e, "focus", i ? null : c, a)
                ];
                return function() {
                    m.forEach((e)=>{
                        e();
                    });
                };
            }, [
                i,
                l,
                s,
                u,
                c,
                d
            ]);
            return r.useRefCallback(m);
        }
    }
    let te = false;
    function ne() {
        if (!te) {
            te = true;
            ee();
        }
        return Z.exports;
    }
    const re = {};
    const oe = {
        exports: re
    };
    function ae() {
        oe.exports = ne();
    }
    let ie = false;
    function le() {
        if (!ie) {
            ie = true;
            ae();
        }
        return oe.exports;
    }
    const se = {};
    const ue = {
        exports: se
    };
    function ce() {
        se.__esModule = true;
        se.default = void 0;
        const t = e();
        const n = r(d());
        function r(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        const o = n.default() ? t.useLayoutEffect : t.useEffect;
        se.default = o;
        ue.exports = se.default;
    }
    let de = false;
    function me() {
        if (!de) {
            de = true;
            ce();
        }
        return ue.exports;
    }
    const pe = {};
    const _e = {
        exports: pe
    };
    function fe() {
        pe.__esModule = true;
        pe.useModality = a;
        var t = o(e());
        var n = q();
        var r = o(me());
        function o(e) {
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        }
        function a() {
            const [o, a] = t.default.useState({
                activeModality: n.getActiveModality(),
                modality: n.getModality()
            });
            r.default(function() {
                const e = n.addModalityListener(function(e) {
                    a(e);
                });
                return e;
            }, []);
            return o;
        }
    }
    let ge = false;
    function he() {
        if (!ge) {
            ge = true;
            fe();
        }
        return _e.exports;
    }
    const ye = {};
    const Ce = {
        exports: ye
    };
    function be() {
        ye.__esModule = true;
        ye.useFocusVisibility = t;
        var e = he();
        function t() {
            const t = e.useModality();
            const n = t.activeModality;
            return n === "keyboard";
        }
    }
    let ve = false;
    function Se() {
        if (!ve) {
            ve = true;
            be();
        }
        return Ce.exports;
    }
    const Re = {};
    const Le = {
        exports: Re
    };
    function Ee() {
        Le.exports = Se();
    }
    let ke = false;
    function Ie() {
        if (!ke) {
            ke = true;
            Ee();
        }
        return Le.exports;
    }
    function Te(e) {
        switch(e){
            case void 0:
                return z();
            case "/use-focus":
                return le();
            case "/use-focus-visibility":
                return Ie();
        }
    }
    a.exports = Te;
}, null);