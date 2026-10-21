__d("VersionRange", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = /\./;
    const u = /\|\|/;
    const c = /\s+\-\s+/;
    const d = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
    const m = /^(\d*)(.*)/;
    function p(e, t) {
        const n = e.split(u);
        if (n.length > 1) {
            return n.some((e)=>x.contains(e, t));
        }
        return _(n[0].trim(), t);
    }
    function _(e, t) {
        const n = e.split(c);
        if (!(n.length > 0 && n.length <= 2)) {
            s(0, 11800);
        }
        if (n.length === 1) {
            return f(n[0], t);
        }
        const r = n[0];
        const o = n[1];
        if (!(L(r) && L(o))) {
            s(0, 11801);
        }
        return f(`>=${r}`, t) && f(`<=${o}`, t);
    }
    function f(t, n) {
        const r = t.trim();
        if (r === "") {
            return true;
        }
        const o = n.split(e);
        const a = S(r);
        const { modifier, rangeComponents } = a;
        switch(modifier){
            case "<":
                return g(o, rangeComponents);
            case "<=":
                return h(o, rangeComponents);
            case ">=":
                return C(o, rangeComponents);
            case ">":
                return b(o, rangeComponents);
            case "~":
            case "~>":
                return v(o, rangeComponents);
            default:
                return y(o, rangeComponents);
        }
    }
    function g(e, t) {
        return D(e, t) === -1;
    }
    function h(e, rangeComponents) {
        const n = D(e, rangeComponents);
        return n === -1 || n === 0;
    }
    function y(e, rangeComponents) {
        return D(e, rangeComponents) === 0;
    }
    function C(e, t) {
        const n = D(e, t);
        return n === 1 || n === 0;
    }
    function b(e, rangeComponents) {
        return D(e, rangeComponents) === 1;
    }
    function v(e, rangeComponents) {
        const n = rangeComponents.slice();
        const r = rangeComponents.slice();
        if (r.length > 1) {
            r.pop();
        }
        const o = r.length - 1;
        const a = parseInt(r[o], 10);
        if (R(a)) {
            r[o] = `${a + 1}`;
        }
        return C(e, n) && g(e, r);
    }
    function S(t) {
        const n = t.split(e);
        const r = n[0].match(d);
        if (!r) {
            s(0, 3074);
        }
        return {
            modifier: r[1],
            rangeComponents: [
                r[2]
            ].concat(n.slice(1))
        };
    }
    function R(e) {
        return !isNaN(e) && isFinite(e);
    }
    function L(e) {
        return !S(e).modifier;
    }
    function E(e, t) {
        for(let n = e.length; n < t; n++){
            e[n] = "0";
        }
    }
    function k(e, t) {
        const n = e.slice();
        const r = t.slice();
        E(n, r.length);
        for(let o = 0; o < r.length; o++){
            const a = r[o].match(/^[x*]$/i);
            if (a && (r[o] = n[o] = "0", a[0] === "*" && o === r.length - 1)) {
                for(let i = o; i < n.length; i++){
                    n[i] = "0";
                }
            }
        }
        E(r, n.length);
        return [
            n,
            r
        ];
    }
    function I(e, t) {
        const n = e.match(m);
        const r = t.match(m);
        const o = n && n[1];
        const a = r && r[1];
        const i = parseInt(o, 10);
        const l = parseInt(a, 10);
        if (R(i) && R(l) && i !== l) {
            return T(i, l);
        }
        return T(e, t);
    }
    function T(e, t) {
        if (typeof e != typeof t) {
            s(0, 11802);
        }
        if (typeof e === "string" && typeof t === "string" || typeof e === "number" && typeof t === "number") {
            if (e > t) {
                return 1;
            }
            if (e < t) {
                return -1;
            }
            return 0;
        }
        if (typeof e != typeof t) {
            s(0, 11802);
        }
        return 0;
    }
    function D(e, t) {
        const n = k(e, t);
        const r = n[0];
        for(let o = n[1], a = 0; a < o.length; a++){
            const i = I(r[a], o[a]);
            if (i) {
                return i;
            }
        }
        return 0;
    }
    var x = {
        contains: function(t, n) {
            return p(t.trim(), n.trim());
        }
    };
    l.default = x;
}, 98);