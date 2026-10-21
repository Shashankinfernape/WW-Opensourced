__d("dom-helpers-5.2.0", [
    "babel-runtime-7.11.2",
    "babel-runtime-7.4.4"
], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e && typeof e === "object" && "default" in e) {
            return e.default;
        }
        return e;
    }
    const l = e(n("babel-runtime-7.11.2"));
    const s = e(n("babel-runtime-7.4.4"));
    const u = {};
    const c = {
        exports: u
    };
    function d() {
        u.__esModule = true;
        u.default = e;
        function e(e) {
            return e && e.ownerDocument || document;
        }
        c.exports = u.default;
    }
    let m = false;
    function p() {
        if (!m) {
            m = true;
            d();
        }
        return c.exports;
    }
    const _ = {};
    const f = {
        exports: _
    };
    function g() {
        const e = l("/helpers/interopRequireDefault");
        _.__esModule = true;
        _.default = n;
        var t = e(p());
        function n(e = t.default()) {
            try {
                const n = e.activeElement;
                if (!n || !n.nodeName) {
                    return null;
                }
                return n;
            } catch (t) {
                return e.body;
            }
        }
        f.exports = _.default;
    }
    let h = false;
    function y() {
        if (!h) {
            h = true;
            g();
        }
        return f.exports;
    }
    const C = {};
    const b = {
        exports: C
    };
    function v() {
        C.__esModule = true;
        C.default = e;
        function e(e, t) {
            if (e.classList) {
                return !!t && e.classList.contains(t);
            }
            return ` ${e.className.baseVal || e.className} `.indexOf(` ${t} `) !== -1;
        }
        b.exports = C.default;
    }
    let S = false;
    function R() {
        if (!S) {
            S = true;
            v();
        }
        return b.exports;
    }
    const L = {};
    const E = {
        exports: L
    };
    function k() {
        const e = l("/helpers/interopRequireDefault");
        L.__esModule = true;
        L.default = n;
        var t = e(R());
        function n(e, n) {
            if (e.classList) {
                e.classList.add(n);
            } else {
                if (!t.default(e, n)) {
                    if (typeof e.className === "string") {
                        e.className = `${e.className} ${n}`;
                    } else {
                        e.setAttribute("class", `${e.className && e.className.baseVal || ""} ${n}`);
                    }
                }
            }
        }
        E.exports = L.default;
    }
    let I = false;
    function T() {
        if (!I) {
            I = true;
            k();
        }
        return E.exports;
    }
    const D = {};
    const x = {
        exports: D
    };
    function $() {
        D.__esModule = true;
        D.default = void 0;
        const e = !!(typeof window !== "undefined" && window.document && window.document.createElement);
        D.default = e;
        x.exports = D.default;
    }
    let P = false;
    function N() {
        if (!P) {
            P = true;
            $();
        }
        return x.exports;
    }
    const M = {};
    const w = {
        exports: M
    };
    function A() {
        const e = l("/helpers/interopRequireDefault");
        M.__esModule = true;
        M.default = M.onceSupported = M.optionsSupported = void 0;
        const t = e(N());
        let n = false;
        M.optionsSupported = n;
        let r = false;
        M.onceSupported = r;
        try {
            const o = {
                get passive () {
                    return M.optionsSupported = n = true;
                },
                get once () {
                    return M.onceSupported = r = M.optionsSupported = n = true;
                }
            };
            if (t.default) {
                window.addEventListener("test", o, o);
                window.removeEventListener("test", o, true);
            }
        } catch (e) {}
        function a(e, t, o, a) {
            if (a && typeof a !== "boolean" && !r) {
                const { once: i, capture: l } = a;
                let s = o;
                if (!r && i) {
                    s = o.__once || function e(n) {
                        this.removeEventListener(t, e, l);
                        o.call(this, n);
                    };
                    o.__once = s;
                }
                e.addEventListener(t, s, n ? a : l);
            }
            e.addEventListener(t, o, a);
        }
        M.default = a;
    }
    let F = false;
    function O() {
        if (!F) {
            F = true;
            A();
        }
        return w.exports;
    }
    const B = {};
    const W = {
        exports: B
    };
    function q() {
        const e = l("/helpers/interopRequireDefault");
        B.__esModule = true;
        B.default = n;
        var t = e(p());
        function n(e) {
            const n = t.default(e);
            return n && n.defaultView || window;
        }
        W.exports = B.default;
    }
    let U = false;
    function V() {
        if (!U) {
            U = true;
            q();
        }
        return W.exports;
    }
    const H = {};
    const G = {
        exports: H
    };
    function z() {
        const e = l("/helpers/interopRequireDefault");
        H.__esModule = true;
        H.default = n;
        var t = e(V());
        function n(e, n) {
            return t.default(e).getComputedStyle(e, n);
        }
        G.exports = H.default;
    }
    let j = false;
    function K() {
        if (!j) {
            j = true;
            z();
        }
        return G.exports;
    }
    const Q = {};
    const X = {
        exports: Q
    };
    function Y() {
        Q.__esModule = true;
        Q.default = t;
        var e = /([A-Z])/g;
        function t(t) {
            return t.replace(e, "-$1").toLowerCase();
        }
        X.exports = Q.default;
    }
    let J = false;
    function Z() {
        if (!J) {
            J = true;
            Y();
        }
        return X.exports;
    }
    const ee = {};
    const te = {
        exports: ee
    };
    function ne() {
        const e = l("/helpers/interopRequireDefault");
        ee.__esModule = true;
        ee.default = r;
        var t = e(Z());
        var n = /^ms-/;
        function r(e) {
            return t.default(e).replace(n, "-ms-");
        }
        te.exports = ee.default;
    }
    let re = false;
    function oe() {
        if (!re) {
            re = true;
            ne();
        }
        return te.exports;
    }
    const ae = {};
    const ie = {
        exports: ae
    };
    function le() {
        ae.__esModule = true;
        ae.default = t;
        var e = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        function t(t) {
            return !!(t && e.test(t));
        }
        ie.exports = ae.default;
    }
    let se = false;
    function ue() {
        if (!se) {
            se = true;
            le();
        }
        return ie.exports;
    }
    const ce = {};
    const de = {
        exports: ce
    };
    function me() {
        const e = l("/helpers/interopRequireDefault");
        ce.__esModule = true;
        ce.default = void 0;
        const t = e(K());
        const n = e(oe());
        const r = e(ue());
        function o(e, o) {
            let a = "";
            let i = "";
            if (typeof o === "string") {
                return e.style.getPropertyValue(n.default(o)) || t.default(e).getPropertyValue(n.default(o));
            }
            Object.keys(o).forEach((t)=>{
                const l = o[t];
                if (!l && l !== 0) {
                    e.style.removeProperty(n.default(t));
                } else if (r.default(t)) {
                    i += `${t}(${l}) `;
                } else {
                    a += `${n.default(t)}: ${l};`;
                }
            });
            if (i) {
                a += `transform: ${i};`;
            }
            e.style.cssText += `;${a}`;
        }
        ce.default = o;
        de.exports = ce.default;
    }
    let pe = false;
    function _e() {
        if (!pe) {
            pe = true;
            me();
        }
        return de.exports;
    }
    const fe = {};
    const ge = {
        exports: fe
    };
    function he() {
        fe.__esModule = true;
        fe.default = void 0;
        function e(e, t, n, r) {
            const o = r && typeof r !== "boolean" ? r.capture : r;
            e.removeEventListener(t, n, o);
            if (n.__once) {
                e.removeEventListener(t, n.__once, o);
            }
        }
        fe.default = e;
        ge.exports = fe.default;
    }
    let ye = false;
    function Ce() {
        if (!ye) {
            ye = true;
            he();
        }
        return ge.exports;
    }
    const be = {};
    const ve = {
        exports: be
    };
    function Se() {
        const e = l("/helpers/interopRequireDefault");
        be.__esModule = true;
        be.default = void 0;
        const t = e(O());
        const n = e(Ce());
        function r(e, r, o, a) {
            t.default(e, r, o, a);
            return function() {
                n.default(e, r, o, a);
            };
        }
        be.default = r;
        ve.exports = be.default;
    }
    let Re = false;
    function Le() {
        if (!Re) {
            Re = true;
            Se();
        }
        return ve.exports;
    }
    const Ee = {};
    const ke = {
        exports: Ee
    };
    function Ie() {
        const e = l("/helpers/interopRequireDefault");
        Ee.__esModule = true;
        Ee.default = i;
        var t = e(_e());
        var n = e(Le());
        function r(e) {
            const n = t.default(e, "transitionDuration") || "";
            const r = n.indexOf("ms") === -1 ? 1000 : 1;
            return parseFloat(n) * r;
        }
        function o(e) {
            const t = document.createEvent("HTMLEvents");
            t.initEvent("transitionend", true, true);
            e.dispatchEvent(t);
        }
        function a(e, t, r = 5) {
            let a = false;
            const i = setTimeout(()=>{
                if (!a) {
                    o(e);
                }
            }, t + r);
            const l = n.default(e, "transitionend", function() {
                a = true;
            }, {
                once: true
            });
            return function() {
                clearTimeout(i);
                l();
            };
        }
        function i(e, t, o, i) {
            if (o == null) {
                o = r(e) || 0;
            }
            const l = a(e, o, i);
            const s = n.default(e, "transitionend", t);
            return function() {
                l();
                s();
            };
        }
        ke.exports = Ee.default;
    }
    let Te = false;
    function De() {
        if (!Te) {
            Te = true;
            Ie();
        }
        return ke.exports;
    }
    const xe = {};
    const $e = {
        exports: xe
    };
    function Pe() {
        const e = l("/helpers/interopRequireDefault");
        xe.__esModule = true;
        xe.default = void 0;
        const t = e(_e());
        const n = e(Z());
        const r = e(ue());
        const o = e(De());
        const a = {
            transition: "",
            "transition-duration": "",
            "transition-delay": "",
            "transition-timing-function": ""
        };
        function i({ node: i, properties: l, duration: u = 200, easing: c, callback: d }) {
            const m = [];
            const p = {};
            let _ = "";
            Object.keys(l).forEach((e)=>{
                const t = l[e];
                if (r.default(e)) {
                    _ += `${e}(${t}) `;
                } else {
                    p[e] = t;
                    m.push(n.default(e));
                }
            });
            if (_) {
                p.transform = _;
                m.push("transform");
            }
            function f(e) {
                if (e.target === e.currentTarget) {
                    t.default(i, a);
                    if (d) {
                        d.call(this, e);
                    }
                }
            }
            if (u > 0) {
                p.transition = m.join(", ");
                p["transition-duration"] = `${u / 1000}s`;
                p["transition-delay"] = "0s";
                p["transition-timing-function"] = c || "linear";
            }
            const g = o.default(i, f, u);
            i.clientLeft;
            t.default(i, p);
            return {
                cancel: function() {
                    g();
                    t.default(i, a);
                }
            };
        }
        function s(e, t, n, r, o) {
            if (!("nodeType" in e)) {
                return i(e);
            }
            if (!t) {
                throw new Error("must include properties to animate");
            }
            if (typeof r === "function") {
                o = r;
                r = "";
            }
            return i({
                node: e,
                properties: t,
                duration: n,
                easing: r,
                callback: o
            });
        }
        xe.default = s;
        $e.exports = xe.default;
    }
    let Ne = false;
    function Me() {
        if (!Ne) {
            Ne = true;
            Pe();
        }
        return $e.exports;
    }
    const we = {};
    const Ae = {
        exports: we
    };
    function Fe() {
        const e = l("/helpers/interopRequireDefault");
        we.__esModule = true;
        we.request = we.cancel = void 0;
        const t = e(N());
        let n = new Date().getTime();
        function r(e) {
            const t = new Date().getTime();
            const r = Math.max(0, 16 - (t - n));
            const o = setTimeout(e, r);
            n = t;
            return o;
        }
        const o = [
            "",
            "webkit",
            "moz",
            "o",
            "ms"
        ];
        let a = "clearTimeout";
        let i = r;
        const s = function(t, n) {
            return `${t + (t ? n[0].toUpperCase() + n.substr(1) : n)}AnimationFrame`;
        };
        if (t.default) {
            o.some((e)=>{
                const t = s(e, "request");
                if (t in window) {
                    a = s(e, "cancel");
                    i = function(n) {
                        return window[t](n);
                    };
                }
                return !!i;
            });
        }
        const u = function(t) {
            if (typeof window[a] === "function") {
                window[a](t);
            }
        };
        we.cancel = u;
        const c = i;
        we.request = c;
    }
    let Oe = false;
    function Be() {
        if (!Oe) {
            Oe = true;
            Fe();
        }
        return Ae.exports;
    }
    const We = {};
    const qe = {
        exports: We
    };
    function Ue() {
        We.__esModule = true;
        We.default = t;
        var e;
        function t(t, n) {
            if (!e) {
                const r = document.body;
                const o = r.matches || r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector;
                e = function(t, n) {
                    return o.call(t, n);
                };
            }
            return e(t, n);
        }
        qe.exports = We.default;
    }
    let Ve = false;
    function He() {
        if (!Ve) {
            Ve = true;
            Ue();
        }
        return qe.exports;
    }
    const Ge = {};
    const ze = {
        exports: Ge
    };
    function je() {
        const e = l("/helpers/interopRequireDefault");
        Ge.__esModule = true;
        Ge.default = n;
        var t = e(He());
        function n(e, n, r) {
            if (e.closest && !r) {
                e.closest(n);
            }
            let o = e;
            do {
                if (t.default(o, n)) {
                    return o;
                }
                o = o.parentElement;
            }while (o && o !== r && o.nodeType === document.ELEMENT_NODE)
            return null;
        }
        ze.exports = Ge.default;
    }
    let Ke = false;
    function Qe() {
        if (!Ke) {
            Ke = true;
            je();
        }
        return ze.exports;
    }
    const Xe = {};
    const Ye = {
        exports: Xe
    };
    function Je() {
        Xe.__esModule = true;
        Xe.default = e;
        function e(e, t) {
            if (e.contains) {
                return e.contains(t);
            }
            if (e.compareDocumentPosition) {
                return e === t || !!(e.compareDocumentPosition(t) & 16);
            }
        }
        Ye.exports = Xe.default;
    }
    let Ze = false;
    function et() {
        if (!Ze) {
            Ze = true;
            Je();
        }
        return Ye.exports;
    }
    const tt = {};
    const nt = {
        exports: tt
    };
    function rt() {
        tt.__esModule = true;
        tt.default = t;
        var e = Function.prototype.bind.call(Function.prototype.call, [].slice);
        function t(t, n) {
            return e(t.querySelectorAll(n));
        }
        nt.exports = tt.default;
    }
    let ot = false;
    function at() {
        if (!ot) {
            ot = true;
            rt();
        }
        return nt.exports;
    }
    const it = {};
    const lt = {
        exports: it
    };
    function st() {
        const e = l("/helpers/interopRequireDefault");
        it.__esModule = true;
        it.default = r;
        var t = e(et());
        var n = e(at());
        function r(e, r) {
            return function(a) {
                const { currentTarget: o, target: i } = a;
                const l = n.default(o, e);
                if (l.some((e)=>t.default(e, i))) {
                    r.call(this, a);
                }
            };
        }
        lt.exports = it.default;
    }
    let ut = false;
    function ct() {
        if (!ut) {
            ut = true;
            st();
        }
        return lt.exports;
    }
    const dt = {};
    const mt = {
        exports: dt
    };
    function pt() {
        dt.__esModule = true;
        dt.default = e;
        function e(e) {
            return "nodeType" in e && e.nodeType === document.DOCUMENT_NODE;
        }
        mt.exports = dt.default;
    }
    let _t = false;
    function ft() {
        if (!_t) {
            _t = true;
            pt();
        }
        return mt.exports;
    }
    const gt = {};
    const ht = {
        exports: gt
    };
    function yt() {
        const e = l("/helpers/interopRequireDefault");
        gt.__esModule = true;
        gt.default = n;
        var t = e(ft());
        function n(e) {
            if ("window" in e && e.window === e) {
                return e;
            }
            return t.default(e) && e.defaultView || false;
        }
        ht.exports = gt.default;
    }
    let Ct = false;
    function bt() {
        if (!Ct) {
            Ct = true;
            yt();
        }
        return ht.exports;
    }
    const vt = {};
    const St = {
        exports: vt
    };
    function Rt() {
        const e = l("/helpers/interopRequireDefault");
        vt.__esModule = true;
        vt.default = n;
        var t = e(bt());
        function n(e) {
            const n = e === "pageXOffset" ? "scrollLeft" : "scrollTop";
            function r(r, o) {
                const a = t.default(r);
                if (o === void 0) {
                    if (a) {
                        return a[e];
                    }
                    return r[n];
                }
                if (a) {
                    a.scrollTo(a[e], o);
                } else {
                    r[n] = o;
                }
            }
            return r;
        }
        St.exports = vt.default;
    }
    let Lt = false;
    function Et() {
        if (!Lt) {
            Lt = true;
            Rt();
        }
        return St.exports;
    }
    const kt = {};
    const It = {
        exports: kt
    };
    function Tt() {
        const e = l("/helpers/interopRequireDefault");
        kt.__esModule = true;
        kt.default = void 0;
        const t = e(Et());
        const n = t.default("pageXOffset");
        kt.default = n;
        It.exports = kt.default;
    }
    let Dt = false;
    function xt() {
        if (!Dt) {
            Dt = true;
            Tt();
        }
        return It.exports;
    }
    const $t = {};
    const Pt = {
        exports: $t
    };
    function Nt() {
        const e = l("/helpers/interopRequireDefault");
        $t.__esModule = true;
        $t.default = void 0;
        const t = e(Et());
        const n = t.default("pageYOffset");
        $t.default = n;
        Pt.exports = $t.default;
    }
    let Mt = false;
    function wt() {
        if (!Mt) {
            Mt = true;
            Nt();
        }
        return Pt.exports;
    }
    const At = {};
    const Ft = {
        exports: At
    };
    function Ot() {
        const e = l("/helpers/interopRequireDefault");
        At.__esModule = true;
        At.default = a;
        var t = e(et());
        var n = e(p());
        var r = e(xt());
        var o = e(wt());
        function a(e) {
            const a = n.default(e);
            let i = {
                top: 0,
                left: 0,
                height: 0,
                width: 0
            };
            const l = a && a.documentElement;
            if (!(!l || !t.default(l, e))) {
                if (e.getBoundingClientRect !== void 0) {
                    i = e.getBoundingClientRect();
                }
                i = {
                    top: i.top + o.default(l) - (l.clientTop || 0),
                    left: i.left + r.default(l) - (l.clientLeft || 0),
                    width: i.width,
                    height: i.height
                };
            }
            return i;
        }
        Ft.exports = At.default;
    }
    let Bt = false;
    function Wt() {
        if (!Bt) {
            Bt = true;
            Ot();
        }
        return Ft.exports;
    }
    const qt = {};
    const Ut = {
        exports: qt
    };
    function Vt() {
        const e = l("/helpers/interopRequireDefault");
        qt.__esModule = true;
        qt.default = r;
        var t = e(bt());
        var n = e(Wt());
        function r(e, r) {
            const o = t.default(e);
            if (o) {
                return o.innerHeight;
            }
            if (r) {
                return e.clientHeight;
            }
            return n.default(e).height;
        }
        Ut.exports = qt.default;
    }
    let Ht = false;
    function Gt() {
        if (!Ht) {
            Ht = true;
            Vt();
        }
        return Ut.exports;
    }
    const zt = {};
    const jt = {
        exports: zt
    };
    function Kt() {
        const e = l("/helpers/interopRequireDefault");
        zt.__esModule = true;
        zt.default = o;
        var t = e(_e());
        var n = e(p());
        var r = function(t) {
            return !!t && "offsetParent" in t;
        };
        function o(e) {
            const o = n.default(e);
            for(var a = e && e.offsetParent; r(a) && a.nodeName !== "HTML" && t.default(a, "position") === "static";){
                a = a.offsetParent;
            }
            return a || o.documentElement;
        }
        jt.exports = zt.default;
    }
    let Qt = false;
    function Xt() {
        if (!Qt) {
            Qt = true;
            Kt();
        }
        return jt.exports;
    }
    const Yt = {};
    const Jt = {
        exports: Yt
    };
    function Zt() {
        const e = l("/helpers/interopRequireDefault");
        Yt.__esModule = true;
        Yt.default = u;
        var t = e(l("/helpers/extends"));
        var n = e(_e());
        var r = e(Wt());
        var o = e(Xt());
        var a = e(xt());
        var i = e(wt());
        var s = function(t) {
            return t.nodeName && t.nodeName.toLowerCase();
        };
        function u(e, l) {
            let u = {
                top: 0,
                left: 0
            };
            let c;
            if (n.default(e, "position") === "fixed") {
                c = e.getBoundingClientRect();
            } else {
                const d = l || o.default(e);
                c = r.default(e);
                if (s(d) !== "html") {
                    u = r.default(d);
                }
                const m = String(n.default(d, "borderTopWidth") || 0);
                u.top += parseInt(m, 10) - i.default(d) || 0;
                const p = String(n.default(d, "borderLeftWidth") || 0);
                u.left += parseInt(p, 10) - a.default(d) || 0;
            }
            const _ = String(n.default(e, "marginTop") || 0);
            const f = String(n.default(e, "marginLeft") || 0);
            return t.default({}, c, {
                top: c.top - u.top - (parseInt(_, 10) || 0),
                left: c.left - u.left - (parseInt(f, 10) || 0)
            });
        }
        Jt.exports = Yt.default;
    }
    let en = false;
    function tn() {
        if (!en) {
            en = true;
            Zt();
        }
        return Jt.exports;
    }
    const nn = {};
    const rn = {
        exports: nn
    };
    function on() {
        nn.__esModule = true;
        nn.default = t;
        function e(e, t) {
            return e.replace(new RegExp(`(^|\\s)${t}(?:\\s|\$)`, "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
        }
        function t(t, n) {
            if (t.classList) {
                t.classList.remove(n);
            } else if (typeof t.className === "string") {
                t.className = e(t.className, n);
            } else {
                t.setAttribute("class", e(t.className && t.className.baseVal || "", n));
            }
        }
        rn.exports = nn.default;
    }
    let an = false;
    function ln() {
        if (!an) {
            an = true;
            on();
        }
        return rn.exports;
    }
    const sn = {};
    const un = {
        exports: sn
    };
    function cn() {
        const e = l("/helpers/interopRequireDefault");
        sn.__esModule = true;
        sn.default = r;
        var t = e(N());
        var n;
        function r(e) {
            if ((!n && n !== 0 || e) && t.default) {
                const r = document.createElement("div");
                r.style.position = "absolute";
                r.style.top = "-9999px";
                r.style.width = "50px";
                r.style.height = "50px";
                r.style.overflow = "scroll";
                document.body.appendChild(r);
                n = r.offsetWidth - r.clientWidth;
                document.body.removeChild(r);
            }
            return n;
        }
        un.exports = sn.default;
    }
    let dn = false;
    function mn() {
        if (!dn) {
            dn = true;
            cn();
        }
        return un.exports;
    }
    const pn = {};
    const _n = {
        exports: pn
    };
    function fn() {
        const e = l("/helpers/interopRequireDefault");
        pn.__esModule = true;
        pn.default = o;
        var t = e(_e());
        var n = e(Gt());
        var r = e(ft());
        function o(e, o) {
            const a = t.default(e, "position");
            const i = a === "absolute";
            const l = e.ownerDocument;
            if (a === "fixed") {
                return l || document;
            }
            while((e = e.parentNode) && !r.default(e)){
                const s = i && t.default(e, "position") === "static";
                const u = (t.default(e, "overflow") || "") + (t.default(e, "overflow-y") || "") + t.default(e, "overflow-x");
                if (!s && /(auto|scroll)/.test(u) && (o || n.default(e) < e.scrollHeight)) {
                    return e;
                }
            }
            return l || document;
        }
        _n.exports = pn.default;
    }
    let gn = false;
    function hn() {
        if (!gn) {
            gn = true;
            fn();
        }
        return _n.exports;
    }
    const yn = {};
    const Cn = {
        exports: yn
    };
    function bn() {
        const e = l("/helpers/interopRequireDefault");
        yn.__esModule = true;
        yn.default = s;
        var t = Be();
        var n = e(Gt());
        var r = e(bt());
        var o = e(Wt());
        var a = e(hn());
        var i = e(wt());
        function s(e, l) {
            let s = o.default(e);
            let u = {
                top: 0,
                left: 0
            };
            if (e) {
                const c = l || a.default(e);
                const d = r.default(c);
                let m = i.default(c);
                const p = n.default(c, true);
                if (!d) {
                    u = o.default(c);
                }
                s = {
                    top: s.top - u.top,
                    left: s.left - u.left,
                    height: s.height,
                    width: s.width
                };
                const _ = s.height;
                const f = s.top + (d ? 0 : m);
                const g = f + _;
                m = m > f ? f : g > m + p ? g - p : m;
                const h = t.request(function() {
                    return i.default(c, m);
                });
                return function() {
                    return t.cancel(h);
                };
            }
        }
        Cn.exports = yn.default;
    }
    let vn = false;
    function Sn() {
        if (!vn) {
            vn = true;
            bn();
        }
        return Cn.exports;
    }
    const Rn = {};
    const Ln = {
        exports: Rn
    };
    function En() {
        const e = l("/helpers/interopRequireDefault");
        Rn.__esModule = true;
        Rn.default = o;
        var t = e(T());
        var n = e(R());
        var r = e(ln());
        function o(e, o) {
            if (e.classList) {
                e.classList.toggle(o);
            } else if (n.default(e, o)) {
                r.default(e, o);
            } else {
                t.default(e, o);
            }
        }
        Ln.exports = Rn.default;
    }
    let kn = false;
    function In() {
        if (!kn) {
            kn = true;
            En();
        }
        return Ln.exports;
    }
    const Tn = {};
    const Dn = {
        exports: Tn
    };
    function xn() {
        const e = l("/helpers/interopRequireDefault");
        Tn.__esModule = true;
        Tn.default = r;
        var t = e(bt());
        var n = e(Wt());
        function r(e, r) {
            const o = t.default(e);
            if (o) {
                return o.innerWidth;
            }
            if (r) {
                return e.clientWidth;
            }
            return n.default(e).width;
        }
        Dn.exports = Tn.default;
    }
    let $n = false;
    function Pn() {
        if (!$n) {
            $n = true;
            xn();
        }
        return Dn.exports;
    }
    const Nn = {};
    const Mn = {
        exports: Nn
    };
    function wn() {
        const e = l("/helpers/interopRequireDefault");
        Nn.__esModule = true;
        Nn.default = void 0;
        const t = e(y());
        Nn.activeElement = t.default;
        const n = e(T());
        Nn.addClass = n.default;
        const r = e(O());
        Nn.addEventListener = r.default;
        const o = e(Me());
        Nn.animate = o.default;
        const a = Be();
        Nn.cancelAnimationFrame = a.cancel;
        Nn.requestAnimationFrame = a.request;
        const i = e(Qe());
        Nn.closest = i.default;
        const s = e(et());
        Nn.contains = s.default;
        const u = e(_e());
        Nn.style = u.default;
        const c = e(ct());
        Nn.filter = c.default;
        const d = e(K());
        Nn.getComputedStyle = d.default;
        const m = e(R());
        Nn.hasClass = m.default;
        const _ = e(Gt());
        Nn.height = _.default;
        const f = e(Le());
        Nn.listen = f.default;
        const g = e(He());
        Nn.matches = g.default;
        const h = e(Wt());
        Nn.offset = h.default;
        const C = e(Xt());
        Nn.offsetParent = C.default;
        const b = e(p());
        Nn.ownerDocument = b.default;
        const v = e(V());
        Nn.ownerWindow = v.default;
        const S = e(tn());
        Nn.position = S.default;
        const L = e(at());
        Nn.querySelectorAll = L.default;
        const E = e(ln());
        Nn.removeClass = E.default;
        const k = e(Ce());
        Nn.removeEventListener = k.default;
        const I = e(mn());
        Nn.scrollbarSize = I.default;
        const D = e(xt());
        Nn.scrollLeft = D.default;
        const x = e(hn());
        Nn.scrollParent = x.default;
        const $ = e(Sn());
        Nn.scrollTo = $.default;
        const P = e(wt());
        Nn.scrollTop = P.default;
        const N = e(In());
        Nn.toggleClass = N.default;
        const M = e(De());
        Nn.transitionEnd = M.default;
        const w = e(Pn());
        Nn.width = w.default;
        const A = {
            addEventListener: r.default,
            removeEventListener: k.default,
            animate: o.default,
            filter: c.default,
            listen: f.default,
            style: u.default,
            getComputedStyle: d.default,
            activeElement: t.default,
            ownerDocument: b.default,
            ownerWindow: v.default,
            requestAnimationFrame: a.request,
            cancelAnimationFrame: a.cancel,
            matches: g.default,
            height: _.default,
            width: w.default,
            offset: h.default,
            offsetParent: C.default,
            position: S.default,
            contains: s.default,
            scrollbarSize: I.default,
            scrollLeft: D.default,
            scrollParent: x.default,
            scrollTo: $.default,
            scrollTop: P.default,
            querySelectorAll: L.default,
            closest: i.default,
            addClass: n.default,
            removeClass: E.default,
            hasClass: m.default,
            toggleClass: N.default,
            transitionEnd: M.default
        };
        Nn.default = A;
    }
    let An = false;
    function Fn() {
        if (!An) {
            An = true;
            wn();
        }
        return Mn.exports;
    }
    const On = {};
    const Bn = {
        exports: On
    };
    function Wn() {
        On.__esModule = true;
        On.default = e;
        function e(e, t) {
            if (e.classList) {
                return !!t && e.classList.contains(t);
            }
            return ` ${e.className.baseVal || e.className} `.indexOf(` ${t} `) !== -1;
        }
        Bn.exports = On.default;
    }
    let qn = false;
    function Un() {
        if (!qn) {
            qn = true;
            Wn();
        }
        return Bn.exports;
    }
    const Vn = {};
    const Hn = {
        exports: Vn
    };
    function Gn() {
        const e = s("/helpers/interopRequireDefault");
        Vn.__esModule = true;
        Vn.default = n;
        var t = e(Un());
        function n(e, n) {
            if (e.classList) {
                e.classList.add(n);
            } else {
                if (!t.default(e, n)) {
                    if (typeof e.className === "string") {
                        e.className = `${e.className} ${n}`;
                    } else {
                        e.setAttribute("class", `${e.className && e.className.baseVal || ""} ${n}`);
                    }
                }
            }
        }
        Hn.exports = Vn.default;
    }
    let zn = false;
    function jn() {
        if (!zn) {
            zn = true;
            Gn();
        }
        return Hn.exports;
    }
    const Kn = {};
    const Qn = {
        exports: Kn
    };
    function Xn() {
        function e(e, t) {
            return e.replace(new RegExp(`(^|\\s)${t}(?:\\s|\$)`, "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
        }
        Qn.exports = function(n, r) {
            if (n.classList) {
                n.classList.remove(r);
            } else if (typeof n.className === "string") {
                n.className = e(n.className, r);
            } else {
                n.setAttribute("class", e(n.className && n.className.baseVal || "", r));
            }
        };
    }
    let Yn = false;
    function Jn() {
        if (!Yn) {
            Yn = true;
            Xn();
        }
        return Qn.exports;
    }
    const Zn = {};
    const er = {
        exports: Zn
    };
    function tr() {
        const e = s("/helpers/interopRequireDefault");
        Zn.__esModule = true;
        Zn.default = void 0;
        const t = e(jn());
        Zn.addClass = t.default;
        const n = e(Jn());
        Zn.removeClass = n.default;
        const r = e(Un());
        Zn.hasClass = r.default;
        const o = {
            addClass: t.default,
            removeClass: n.default,
            hasClass: r.default
        };
        Zn.default = o;
    }
    let nr = false;
    function rr() {
        if (!nr) {
            nr = true;
            tr();
        }
        return er.exports;
    }
    const or = {};
    const ar = {
        exports: or
    };
    function ir() {
        or.__esModule = true;
        or.default = void 0;
        const e = !!(typeof window !== "undefined" && window.document && window.document.createElement);
        or.default = e;
        ar.exports = or.default;
    }
    let lr = false;
    function sr() {
        if (!lr) {
            lr = true;
            ir();
        }
        return ar.exports;
    }
    const ur = {};
    const cr = {
        exports: ur
    };
    function dr() {
        const e = s("/helpers/interopRequireDefault");
        ur.__esModule = true;
        ur.default = void 0;
        const t = e(sr());
        let n = function() {};
        if (t.default) {
            n = (()=>{
                if (document.addEventListener) {
                    return function(e, t, n, r) {
                        return e.addEventListener(t, n, r || false);
                    };
                }
                if (document.attachEvent) {
                    return function(e, t, n) {
                        return e.attachEvent(`on${t}`, function(t) {
                            t = t || window.event;
                            t.target = t.target || t.srcElement;
                            t.currentTarget = e;
                            n.call(e, t);
                        });
                    };
                }
            })();
        }
        ur.default = n;
        cr.exports = ur.default;
    }
    let mr = false;
    function pr() {
        if (!mr) {
            mr = true;
            dr();
        }
        return cr.exports;
    }
    const _r = {};
    const fr = {
        exports: _r
    };
    function gr() {
        const e = s("/helpers/interopRequireDefault");
        _r.__esModule = true;
        _r.default = void 0;
        const t = e(sr());
        let n = function() {};
        if (t.default) {
            n = (()=>{
                if (document.addEventListener) {
                    return function(e, t, n, r) {
                        return e.removeEventListener(t, n, r || false);
                    };
                }
                if (document.attachEvent) {
                    return function(e, t, n) {
                        return e.detachEvent(`on${t}`, n);
                    };
                }
            })();
        }
        _r.default = n;
        fr.exports = _r.default;
    }
    let hr = false;
    function yr() {
        if (!hr) {
            hr = true;
            gr();
        }
        return fr.exports;
    }
    const Cr = {};
    const br = {
        exports: Cr
    };
    function vr() {
        const e = s("/helpers/interopRequireDefault");
        Cr.__esModule = true;
        Cr.default = void 0;
        const t = e(sr());
        const n = (()=>{
            if (t.default) {
                return function(e, t) {
                    if (e.contains) {
                        return e.contains(t);
                    }
                    if (e.compareDocumentPosition) {
                        return e === t || !!(e.compareDocumentPosition(t) & 16);
                    }
                    return r(e, t);
                };
            }
            return r;
        })();
        Cr.default = n;
        function r(e, t) {
            if (t) {
                do {
                    if (t === e) {
                        return true;
                    }
                }while (t = t.parentNode)
            }
            return false;
        }
        br.exports = Cr.default;
    }
    let Sr = false;
    function Rr() {
        if (!Sr) {
            Sr = true;
            vr();
        }
        return br.exports;
    }
    const Lr = {};
    const Er = {
        exports: Lr
    };
    function kr() {
        Lr.__esModule = true;
        Lr.default = n;
        var e = /^[\w-]*$/;
        var t = Function.prototype.bind.call(Function.prototype.call, [].slice);
        function n(n, r) {
            const o = r[0] === "#";
            const a = r[0] === ".";
            const i = o || a ? r.slice(1) : r;
            const l = e.test(i);
            let s;
            if (l) {
                if (o) {
                    n = n.getElementById ? n : document;
                    if (s = n.getElementById(i)) {
                        return [
                            s
                        ];
                    }
                    return [];
                }
                if (n.getElementsByClassName && a) {
                    return t(n.getElementsByClassName(i));
                }
                return t(n.getElementsByTagName(r));
            }
            return t(n.querySelectorAll(r));
        }
        Er.exports = Lr.default;
    }
    let Ir = false;
    function Tr() {
        if (!Ir) {
            Ir = true;
            kr();
        }
        return Er.exports;
    }
    const Dr = {};
    const xr = {
        exports: Dr
    };
    function $r() {
        const e = s("/helpers/interopRequireDefault");
        Dr.__esModule = true;
        Dr.default = r;
        var t = e(Rr());
        var n = e(Tr());
        function r(e, r) {
            return function(a) {
                const { currentTarget: o, target: i } = a;
                const l = n.default(o, e);
                if (l.some((e)=>t.default(e, i))) {
                    r.call(this, a);
                }
            };
        }
        xr.exports = Dr.default;
    }
    let Pr = false;
    function Nr() {
        if (!Pr) {
            Pr = true;
            $r();
        }
        return xr.exports;
    }
    const Mr = {};
    const wr = {
        exports: Mr
    };
    function Ar() {
        const e = s("/helpers/interopRequireDefault");
        Mr.__esModule = true;
        Mr.default = void 0;
        const t = e(sr());
        const n = e(pr());
        const r = e(yr());
        let o = function() {};
        if (t.default) {
            o = function(t, o, a, i) {
                n.default(t, o, a, i);
                return function() {
                    r.default(t, o, a, i);
                };
            };
        }
        Mr.default = o;
        wr.exports = Mr.default;
    }
    let Fr = false;
    function Or() {
        if (!Fr) {
            Fr = true;
            Ar();
        }
        return wr.exports;
    }
    const Br = {};
    const Wr = {
        exports: Br
    };
    function qr() {
        const e = s("/helpers/interopRequireDefault");
        Br.__esModule = true;
        Br.default = void 0;
        const t = e(pr());
        Br.on = t.default;
        const n = e(yr());
        Br.off = n.default;
        const r = e(Nr());
        Br.filter = r.default;
        const o = e(Or());
        Br.listen = o.default;
        const a = {
            on: t.default,
            off: n.default,
            filter: r.default,
            listen: o.default
        };
        Br.default = a;
    }
    let Ur = false;
    function Vr() {
        if (!Ur) {
            Ur = true;
            qr();
        }
        return Wr.exports;
    }
    const Hr = {};
    const Gr = {
        exports: Hr
    };
    function zr() {
        Hr.__esModule = true;
        Hr.default = e;
        function e(e) {
            if (e === e.window) {
                return e;
            }
            if (e.nodeType === 9) {
                return e.defaultView || e.parentWindow;
            }
            return false;
        }
        Gr.exports = Hr.default;
    }
    let jr = false;
    function Kr() {
        if (!jr) {
            jr = true;
            zr();
        }
        return Gr.exports;
    }
    const Qr = {};
    const Xr = {
        exports: Qr
    };
    function Yr() {
        Qr.__esModule = true;
        Qr.default = e;
        function e(e) {
            return e && e.ownerDocument || document;
        }
        Xr.exports = Qr.default;
    }
    let Jr = false;
    function Zr() {
        if (!Jr) {
            Jr = true;
            Yr();
        }
        return Xr.exports;
    }
    const eo = {};
    const to = {
        exports: eo
    };
    function no() {
        const e = s("/helpers/interopRequireDefault");
        eo.__esModule = true;
        eo.default = o;
        var t = e(Rr());
        var n = e(Kr());
        var r = e(Zr());
        function o(e) {
            const o = r.default(e);
            const a = n.default(o);
            const i = o && o.documentElement;
            let l = {
                top: 0,
                left: 0,
                height: 0,
                width: 0
            };
            if (o) {
                if (t.default(i, e)) {
                    if (e.getBoundingClientRect !== void 0) {
                        l = e.getBoundingClientRect();
                    }
                    l = {
                        top: l.top + (a.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                        left: l.left + (a.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                        width: (l.width ?? e.offsetWidth) || 0,
                        height: (l.height ?? e.offsetHeight) || 0
                    };
                }
                return l;
            }
        }
        to.exports = eo.default;
    }
    let ro = false;
    function oo() {
        if (!ro) {
            ro = true;
            no();
        }
        return to.exports;
    }
    const ao = {};
    const io = {
        exports: ao
    };
    function lo() {
        const e = s("/helpers/interopRequireDefault");
        ao.__esModule = true;
        ao.default = r;
        var t = e(oo());
        var n = e(Kr());
        function r(e, r) {
            const o = n.default(e);
            if (o) {
                return o.innerHeight;
            }
            if (r) {
                return e.clientHeight;
            }
            return t.default(e).height;
        }
        io.exports = ao.default;
    }
    let so = false;
    function uo() {
        if (!so) {
            so = true;
            lo();
        }
        return io.exports;
    }
    const co = {};
    const mo = {
        exports: co
    };
    function po() {
        co.__esModule = true;
        co.default = t;
        var e = /-(.)/g;
        function t(t) {
            return t.replace(e, (e, t)=>t.toUpperCase());
        }
        mo.exports = co.default;
    }
    let _o = false;
    function fo() {
        if (!_o) {
            _o = true;
            po();
        }
        return mo.exports;
    }
    const go = {};
    const ho = {
        exports: go
    };
    function yo() {
        const e = s("/helpers/interopRequireDefault");
        go.__esModule = true;
        go.default = r;
        var t = e(fo());
        var n = /^-ms-/;
        function r(e) {
            return t.default(e.replace(n, "ms-"));
        }
        ho.exports = go.default;
    }
    let Co = false;
    function bo() {
        if (!Co) {
            Co = true;
            yo();
        }
        return ho.exports;
    }
    const vo = {};
    const So = {
        exports: vo
    };
    function Ro() {
        vo.__esModule = true;
        vo.default = t;
        var e = /([A-Z])/g;
        function t(t) {
            return t.replace(e, "-$1").toLowerCase();
        }
        So.exports = vo.default;
    }
    let Lo = false;
    function Eo() {
        if (!Lo) {
            Lo = true;
            Ro();
        }
        return So.exports;
    }
    const ko = {};
    const Io = {
        exports: ko
    };
    function To() {
        const e = s("/helpers/interopRequireDefault");
        ko.__esModule = true;
        ko.default = r;
        var t = e(Eo());
        var n = /^ms-/;
        function r(e) {
            return t.default(e).replace(n, "-ms-");
        }
        Io.exports = ko.default;
    }
    let Do = false;
    function xo() {
        if (!Do) {
            Do = true;
            To();
        }
        return Io.exports;
    }
    const $o = {};
    const Po = {
        exports: $o
    };
    function No() {
        const e = s("/helpers/interopRequireDefault");
        $o.__esModule = true;
        $o.default = o;
        var t = e(bo());
        var n = /^(top|right|bottom|left)$/;
        var r = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
        function o(e) {
            if (!e) {
                throw new TypeError("No Element passed to `getComputedStyle()`");
            }
            const o = e.ownerDocument;
            if ("defaultView" in o) {
                if (o.defaultView.opener) {
                    return e.ownerDocument.defaultView.getComputedStyle(e, null);
                }
                return window.getComputedStyle(e, null);
            }
            return {
                getPropertyValue: function(a) {
                    const o = e.style;
                    a = t.default(a);
                    if (a == "float") {
                        a = "styleFloat";
                    }
                    let i = e.currentStyle[a] || null;
                    if (i == null && o && o[a]) {
                        i = o[a];
                    }
                    if (r.test(i) && !n.test(a)) {
                        const l = o.left;
                        const s = e.runtimeStyle;
                        const u = s && s.left;
                        if (u) {
                            s.left = e.currentStyle.left;
                        }
                        o.left = a === "fontSize" ? "1em" : i;
                        i = `${o.pixelLeft}px`;
                        o.left = l;
                        if (u) {
                            s.left = u;
                        }
                    }
                    return i;
                }
            };
        }
        Po.exports = $o.default;
    }
    let Mo = false;
    function wo() {
        if (!Mo) {
            Mo = true;
            No();
        }
        return Po.exports;
    }
    const Ao = {};
    const Fo = {
        exports: Ao
    };
    function Oo() {
        Ao.__esModule = true;
        Ao.default = e;
        function e(e, t) {
            if ("removeProperty" in e.style) {
                return e.style.removeProperty(t);
            }
            return e.style.removeAttribute(t);
        }
        Fo.exports = Ao.default;
    }
    let Bo = false;
    function Wo() {
        if (!Bo) {
            Bo = true;
            Oo();
        }
        return Fo.exports;
    }
    const qo = {};
    const Uo = {
        exports: qo
    };
    function Vo() {
        const e = s("/helpers/interopRequireDefault");
        qo.__esModule = true;
        qo.default = qo.animationEnd = qo.animationDelay = qo.animationTiming = qo.animationDuration = qo.animationName = qo.transitionEnd = qo.transitionDuration = qo.transitionDelay = qo.transitionTiming = qo.transitionProperty = qo.transform = void 0;
        const t = e(sr());
        let n = "transform";
        qo.transform = n;
        let r;
        let o;
        let a;
        qo.animationEnd = a;
        qo.transitionEnd = o;
        let i;
        let l;
        let u;
        let c;
        qo.transitionDelay = c;
        qo.transitionTiming = u;
        qo.transitionDuration = l;
        qo.transitionProperty = i;
        let d;
        let m;
        let p;
        let _;
        qo.animationDelay = _;
        qo.animationTiming = p;
        qo.animationDuration = m;
        qo.animationName = d;
        if (t.default) {
            const f = h();
            r = f.prefix;
            qo.transitionEnd = o = f.transitionEnd;
            qo.animationEnd = a = f.animationEnd;
            qo.transform = n = `${r}-${n}`;
            qo.transitionProperty = i = `${r}-transition-property`;
            qo.transitionDuration = l = `${r}-transition-duration`;
            qo.transitionDelay = c = `${r}-transition-delay`;
            qo.transitionTiming = u = `${r}-transition-timing-function`;
            qo.animationName = d = `${r}-animation-name`;
            qo.animationDuration = m = `${r}-animation-duration`;
            qo.animationTiming = p = `${r}-animation-delay`;
            qo.animationDelay = _ = `${r}-animation-timing-function`;
        }
        const g = {
            transform: n,
            end: o,
            property: i,
            timing: u,
            delay: c,
            duration: l
        };
        qo.default = g;
        function h() {
            let e = document.createElement("div").style;
            const t = {
                O: function(t) {
                    return `o${t.toLowerCase()}`;
                },
                Moz: function(t) {
                    return t.toLowerCase();
                },
                Webkit: function(t) {
                    return `webkit${t}`;
                },
                ms: function(t) {
                    return `MS${t}`;
                }
            };
            let r;
            let o;
            for(var n = Object.keys(t), a = "", i = 0; i < n.length; i++){
                const l = n[i];
                if (`${l}TransitionProperty` in e) {
                    a = `-${l.toLowerCase()}`;
                    r = t[l]("TransitionEnd");
                    o = t[l]("AnimationEnd");
                    break;
                }
            }
            if (!r && "transitionProperty" in e) {
                r = "transitionend";
            }
            if (!o && "animationName" in e) {
                o = "animationend";
            }
            e = null;
            return {
                animationEnd: o,
                transitionEnd: r,
                prefix: a
            };
        }
    }
    let Ho = false;
    function Go() {
        if (!Ho) {
            Ho = true;
            Vo();
        }
        return Uo.exports;
    }
    const zo = {};
    const jo = {
        exports: zo
    };
    function Ko() {
        zo.__esModule = true;
        zo.default = t;
        var e = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        function t(t) {
            return !!(t && e.test(t));
        }
        jo.exports = zo.default;
    }
    let Qo = false;
    function Xo() {
        if (!Qo) {
            Qo = true;
            Ko();
        }
        return jo.exports;
    }
    const Yo = {};
    const Jo = {
        exports: Yo
    };
    function Zo() {
        const e = s("/helpers/interopRequireDefault");
        Yo.__esModule = true;
        Yo.default = l;
        var t = e(bo());
        var n = e(xo());
        var r = e(wo());
        var o = e(Wo());
        var a = Go();
        var i = e(Xo());
        function l(e, l, s) {
            let u = "";
            let c = "";
            let d = l;
            if (typeof l === "string") {
                if (s === void 0) {
                    return e.style[t.default(l)] || r.default(e).getPropertyValue(n.default(l));
                }
                d = {};
                d[l] = s;
            }
            Object.keys(d).forEach((t)=>{
                const r = d[t];
                if (!r && r !== 0) {
                    o.default(e, n.default(t));
                } else if (i.default(t)) {
                    c += `${t}(${r}) `;
                } else {
                    u += `${n.default(t)}: ${r};`;
                }
            });
            if (c) {
                u += `${a.transform}: ${c};`;
            }
            e.style.cssText += `;${u}`;
        }
        Jo.exports = Yo.default;
    }
    let ea = false;
    function ta() {
        if (!ea) {
            ea = true;
            Zo();
        }
        return Jo.exports;
    }
    const na = {};
    const ra = {
        exports: na
    };
    function oa() {
        const e = s("/helpers/interopRequireDefault");
        na.__esModule = true;
        na.default = o;
        var t = e(Zr());
        var n = e(ta());
        function r(e) {
            return e.nodeName && e.nodeName.toLowerCase();
        }
        function o(e) {
            const o = t.default(e);
            for(var a = e && e.offsetParent; a && r(e) !== "html" && n.default(a, "position") === "static";){
                a = a.offsetParent;
            }
            return a || o.documentElement;
        }
        ra.exports = na.default;
    }
    let aa = false;
    function ia() {
        if (!aa) {
            aa = true;
            oa();
        }
        return ra.exports;
    }
    const la = {};
    const sa = {
        exports: la
    };
    function ua() {
        const e = s("/helpers/interopRequireDefault");
        la.__esModule = true;
        la.default = n;
        var t = e(Kr());
        function n(e, n) {
            const r = t.default(e);
            if (n === void 0) {
                if (r) {
                    if ("pageYOffset" in r) {
                        return r.pageYOffset;
                    }
                    return r.document.documentElement.scrollTop;
                }
                return e.scrollTop;
            }
            if (r) {
                r.scrollTo("pageXOffset" in r ? r.pageXOffset : r.document.documentElement.scrollLeft, n);
            } else {
                e.scrollTop = n;
            }
        }
        sa.exports = la.default;
    }
    let ca = false;
    function da() {
        if (!ca) {
            ca = true;
            ua();
        }
        return sa.exports;
    }
    const ma = {};
    const pa = {
        exports: ma
    };
    function _a() {
        const e = s("/helpers/interopRequireDefault");
        ma.__esModule = true;
        ma.default = n;
        var t = e(Kr());
        function n(e, n) {
            const r = t.default(e);
            if (n === void 0) {
                if (r) {
                    if ("pageXOffset" in r) {
                        return r.pageXOffset;
                    }
                    return r.document.documentElement.scrollLeft;
                }
                return e.scrollLeft;
            }
            if (r) {
                r.scrollTo(n, "pageYOffset" in r ? r.pageYOffset : r.document.documentElement.scrollTop);
            } else {
                e.scrollLeft = n;
            }
        }
        pa.exports = ma.default;
    }
    let fa = false;
    function ga() {
        if (!fa) {
            fa = true;
            _a();
        }
        return pa.exports;
    }
    const ha = {};
    const ya = {
        exports: ha
    };
    function Ca() {
        const e = s("/helpers/interopRequireDefault");
        ha.__esModule = true;
        ha.default = u;
        var t = e(s("/helpers/extends"));
        var n = e(oo());
        var r = e(ia());
        var o = e(da());
        var a = e(ga());
        var i = e(ta());
        function l(e) {
            return e.nodeName && e.nodeName.toLowerCase();
        }
        function u(e, s) {
            let u = {
                top: 0,
                left: 0
            };
            let c;
            if (i.default(e, "position") === "fixed") {
                c = e.getBoundingClientRect();
            } else {
                s = s || r.default(e);
                c = n.default(e);
                if (l(s) !== "html") {
                    u = n.default(s);
                }
                u.top += parseInt(i.default(s, "borderTopWidth"), 10) - o.default(s) || 0;
                u.left += parseInt(i.default(s, "borderLeftWidth"), 10) - a.default(s) || 0;
            }
            return t.default({}, c, {
                top: c.top - u.top - (parseInt(i.default(e, "marginTop"), 10) || 0),
                left: c.left - u.left - (parseInt(i.default(e, "marginLeft"), 10) || 0)
            });
        }
        ya.exports = ha.default;
    }
    let ba = false;
    function va() {
        if (!ba) {
            ba = true;
            Ca();
        }
        return ya.exports;
    }
    const Sa = {};
    const Ra = {
        exports: Sa
    };
    function La() {
        const e = s("/helpers/interopRequireDefault");
        Sa.__esModule = true;
        Sa.default = void 0;
        const t = e(Go());
        const n = e(ta());
        function r(e, n, r) {
            const o = {
                target: e,
                currentTarget: e
            };
            let i;
            if (t.default.end) {
                if (r == null) {
                    r = a(e) || 0;
                }
            } else {
                r = 0;
            }
            if (t.default.end) {
                e.addEventListener(t.default.end, l, false);
                i = setTimeout(()=>l(o), (r || 100) * 1.5);
            } else {
                setTimeout(l.bind(null, o), 0);
            }
            function l(e) {
                if (e.target === e.currentTarget) {
                    clearTimeout(i);
                    e.target.removeEventListener(t.default.end, l);
                    n.call(this);
                }
            }
        }
        r._parseDuration = a;
        Sa.default = r;
        function a(e) {
            const r = n.default(e, t.default.duration);
            const o = r.indexOf("ms") === -1 ? 1000 : 1;
            return parseFloat(r) * o;
        }
        Ra.exports = Sa.default;
    }
    let Ea = false;
    function ka() {
        if (!Ea) {
            Ea = true;
            La();
        }
        return Ra.exports;
    }
    const Ia = {};
    const Ta = {
        exports: Ia
    };
    function Da() {
        const e = s("/helpers/interopRequireDefault");
        Ia.__esModule = true;
        Ia.default = void 0;
        const t = e(ka());
        Ia.end = t.default;
        const n = e(Go());
        Ia.properties = n.default;
        const r = {
            end: t.default,
            properties: n.default
        };
        Ia.default = r;
    }
    let xa = false;
    function $a() {
        if (!xa) {
            xa = true;
            Da();
        }
        return Ta.exports;
    }
    const Pa = {};
    const Na = {
        exports: Pa
    };
    function Ma() {
        const e = s("/helpers/interopRequireDefault");
        Pa.__esModule = true;
        Pa.default = void 0;
        const t = e(sr());
        const n = [
            "",
            "webkit",
            "moz",
            "o",
            "ms"
        ];
        let r = "clearTimeout";
        let o = u;
        let a;
        const i = function(t, n) {
            return `${t + (t ? n[0].toUpperCase() + n.substr(1) : n)}AnimationFrame`;
        };
        if (t.default) {
            n.some((e)=>{
                const t = i(e, "request");
                if (t in window) {
                    r = i(e, "cancel");
                    return o = function(n) {
                        return window[t](n);
                    };
                }
            });
        }
        var l = new Date().getTime();
        function u(e) {
            const t = new Date().getTime();
            const n = Math.max(0, 16 - (t - l));
            const r = setTimeout(e, n);
            l = t;
            return r;
        }
        a = function(t) {
            return o(t);
        };
        a.cancel = function(e) {
            if (window[r] && typeof window[r] === "function") {
                window[r](e);
            }
        };
        Pa.default = a;
        Na.exports = Pa.default;
    }
    let wa = false;
    function Aa() {
        if (!wa) {
            wa = true;
            Ma();
        }
        return Na.exports;
    }
    const Fa = {};
    const Oa = {
        exports: Fa
    };
    function Ba() {
        const e = s("/helpers/interopRequireDefault");
        Fa.__esModule = true;
        Fa.default = r;
        var t = e(sr());
        var n;
        function r(e) {
            if ((!n && n !== 0 || e) && t.default) {
                const r = document.createElement("div");
                r.style.position = "absolute";
                r.style.top = "-9999px";
                r.style.width = "50px";
                r.style.height = "50px";
                r.style.overflow = "scroll";
                document.body.appendChild(r);
                n = r.offsetWidth - r.clientWidth;
                document.body.removeChild(r);
            }
            return n;
        }
        Oa.exports = Fa.default;
    }
    let Wa = false;
    function qa() {
        if (!Wa) {
            Wa = true;
            Ba();
        }
        return Oa.exports;
    }
    function Ua(e) {
        switch(e){
            case void 0:
                return Fn();
            case "/activeElement":
                return y();
            case "/class":
                return rr();
            case "/class/addClass":
                return jn();
            case "/class/removeClass":
                return Jn();
            case "/events":
                return Vr();
            case "/events/off":
                return yr();
            case "/events/on":
                return pr();
            case "/ownerDocument":
                return p();
            case "/ownerWindow":
                return V();
            case "/query/contains":
                return Rr();
            case "/query/height":
                return uo();
            case "/query/isWindow":
                return Kr();
            case "/query/offset":
                return oo();
            case "/query/offsetParent":
                return ia();
            case "/query/position":
                return va();
            case "/query/scrollTop":
                return da();
            case "/style":
                return ta();
            case "/transition":
                return $a();
            case "/util/inDOM":
                return sr();
            case "/util/requestAnimationFrame":
                return Aa();
            case "/util/scrollbarSize":
                return qa();
        }
    }
    a.exports = Ua;
}, null);