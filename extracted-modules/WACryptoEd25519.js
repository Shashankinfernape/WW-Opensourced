__d("WACryptoEd25519", [
    "WACryptoPrimitives",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s(t) {
        const n = e;
        e = [];
        try {
            return t();
        } finally{
            (e ?? []).forEach((e)=>void e.fill(0));
            e = n;
        }
    }
    function u(t, n) {
        if (e == null) {
            throw r("err")("allocate called outside of active scope");
        }
        return new t(n);
    }
    function c(e, t, n) {
        o("WACryptoPrimitives").lowlevel.crypto_hash(e, t, n);
    }
    function d(e, t) {
        for(let n = 0; n < 64; ++n){
            t[n] = e[n];
            e[n] = 0;
        }
        _(e, t);
        t.fill(0);
    }
    function m(e, t) {
        const n = [
            p(),
            p(),
            p(),
            p()
        ];
        o("WACryptoPrimitives").lowlevel.scalarbase(n, t);
        j(e, n);
    }
    function p(e) {
        const t = u(Float64Array, 16);
        if (e) {
            if (e.length > 16) {
                throw r("err")("Incorrect initialiser array provided to the fieldElement");
            }
            for(let n = 0; n < e.length; n++){
                t[n] = e[n];
            }
        }
        return t;
    }
    function _(e, t) {
        o("WACryptoPrimitives").lowlevel.modL(e, t);
    }
    const f = function() {
        return p([
            0
        ]);
    };
    const g = function() {
        return p([
            1
        ]);
    };
    const h = function() {
        return p([
            2
        ]);
    };
    const y = function() {
        return p([
            41136,
            18958,
            6951,
            50414,
            58488,
            44335,
            6150,
            12099,
            55207,
            15867,
            153,
            11085,
            57099,
            20417,
            9344,
            11139
        ]);
    };
    function C() {
        return [
            p(),
            p(),
            p(),
            p()
        ];
    }
    function b() {
        return [
            p(),
            p(),
            p(),
            p()
        ];
    }
    function v() {
        return [
            p(),
            p(),
            p()
        ];
    }
    function S(e, t) {
        let n = 0;
        for(let r = t; r > 0;){
            const o = r % 65536;
            e[n] = o;
            r = (r - o) / 65536;
            n++;
        }
    }
    function R(e, t) {
        if (Q(e, t)) {
            return 0;
        }
        return 1;
    }
    function L(e) {
        const t = o("WACryptoPrimitives").lowlevel.pack25519;
        const n = u(Uint8Array, 32);
        t(n, e);
        return n[0] & 1;
    }
    function E(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.M;
        const r = o("WACryptoPrimitives").lowlevel.S;
        const a = h();
        const i = p();
        r(i, t);
        n(e, a, i);
    }
    function k(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.A;
        const r = o("WACryptoPrimitives").lowlevel.M;
        const a = o("WACryptoPrimitives").lowlevel.S;
        const i = f();
        const l = g();
        const s = p();
        const u = p();
        const c = p();
        const d = p();
        S(i, 486662);
        a(s, t);
        r(u, i, t);
        n(c, s, u);
        n(d, c, l);
        r(e, t, d);
    }
    function I(e, t, n) {
        if (n === 1) {
            e.set(t);
        }
    }
    const T = new Uint8Array([
        176,
        160,
        14,
        74,
        39,
        27,
        238,
        196,
        120,
        228,
        47,
        173,
        6,
        24,
        67,
        47,
        167,
        215,
        251,
        61,
        153,
        0,
        77,
        43,
        11,
        223,
        193,
        79,
        128,
        36,
        131,
        43
    ]);
    function D(e, t) {
        let n;
        const r = (n = o("WACryptoPrimitives")).lowlevel.M;
        const a = n.lowlevel.S;
        const i = n.lowlevel.pow2523;
        const l = n.lowlevel.unpack25519;
        const s = p();
        l(s, T);
        const u = p();
        i(u, t);
        const c = p();
        r(c, t, u);
        const d = p();
        a(d, c);
        const m = p();
        r(m, c, s);
        I(c, m, 1 ^ R(d, t));
        e.set(c);
    }
    function x(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.A;
        const r = o("WACryptoPrimitives").lowlevel.M;
        const a = o("WACryptoPrimitives").lowlevel.Z;
        const i = g();
        const l = p();
        const s = p();
        const u = p();
        a(l, t, i);
        n(s, t, i);
        K(u, s);
        r(e, l, u);
    }
    function $(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.Z;
        const r = f();
        n(e, r, t);
    }
    function P(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.M;
        n(e[0], t[0], t[3]);
        n(e[1], t[1], t[2]);
        n(e[2], t[2], t[3]);
    }
    function N(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.M;
        n(e[0], t[0], t[3]);
        n(e[1], t[1], t[2]);
        n(e[2], t[2], t[3]);
        n(e[3], t[0], t[1]);
    }
    function M(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.A;
        const r = o("WACryptoPrimitives").lowlevel.S;
        const a = o("WACryptoPrimitives").lowlevel.Z;
        r(e[0], t[0]);
        r(e[2], t[1]);
        E(e[3], t[2]);
        n(e[1], t[0], t[1]);
        const i = p();
        r(i, e[1]);
        n(e[1], e[2], e[0]);
        a(e[2], e[2], e[0]);
        a(e[0], i, e[1]);
        a(e[3], e[3], e[2]);
    }
    const w = new Uint8Array([
        6,
        126,
        69,
        255,
        170,
        4,
        110,
        204,
        130,
        26,
        125,
        75,
        209,
        211,
        161,
        197,
        126,
        79,
        252,
        3,
        220,
        8,
        123,
        210,
        187,
        6,
        160,
        96,
        244,
        237,
        38,
        15
    ]);
    function A(e, t, n) {
        const r = o("WACryptoPrimitives").lowlevel.M;
        const a = o("WACryptoPrimitives").lowlevel.unpack25519;
        const i = p();
        a(i, w);
        const l = p();
        x(l, t);
        const s = p();
        k(s, t);
        const u = p();
        D(u, s);
        const c = p();
        r(c, t, i);
        const d = p();
        K(d, u);
        const m = p();
        r(m, c, d);
        const _ = p();
        $(_, m);
        I(m, _, L(m) ^ n);
        e[0].set(m);
        e[1].set(l);
        e[2].set(g());
        r(e[3], e[0], e[1]);
    }
    function F(e, t) {
        e[0].set(t[0]);
        e[1].set(t[1]);
        e[2].set(t[2]);
    }
    function O(e, t) {
        const n = v();
        F(n, t);
        M(e, n);
    }
    function B(e, t) {
        const n = b();
        const r = v();
        O(n, t);
        P(r, n);
        M(n, r);
        P(r, n);
        M(n, r);
        N(e, n);
    }
    function W(e) {
        let t;
        const n = (t = o("WACryptoPrimitives")).lowlevel.M;
        const r = t.lowlevel.S;
        const a = t.lowlevel.pack25519;
        const i = t.lowlevel.pow2523;
        const l = p();
        const s = p();
        const u = p();
        const c = p();
        const d = p();
        i(l, e);
        r(s, l);
        r(u, s);
        n(c, u, e);
        n(d, c, e);
        const m = new Uint8Array(32);
        a(m, d);
        return 1 & m[31];
    }
    function q(e, t) {
        $(e[0], t[0]);
        e[1].set(t[1]);
        e[2].set(t[2]);
        $(e[3], t[3]);
    }
    function U(e, t) {
        const n = C();
        const r = X(n, t);
        if (r !== 0) {
            return -1;
        }
        q(e, n);
        return 0;
    }
    function V(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.A;
        const r = o("WACryptoPrimitives").lowlevel.M;
        const a = t;
        const i = g();
        const l = f();
        S(l, 486662);
        const s = p();
        E(s, a);
        const u = p();
        n(u, s, i);
        const c = p();
        K(c, u);
        const d = p();
        r(d, c, l);
        const m = p();
        $(m, d);
        const _ = p();
        k(_, m);
        const h = W(_);
        const y = p([
            0
        ]);
        I(y, l, h);
        const C = p();
        n(C, m, y);
        const b = p();
        $(b, C);
        I(C, b, h);
        e.set(C);
    }
    function H(e) {
        const t = o("WACryptoPrimitives").lowlevel.unpack25519;
        const n = o("WACryptoPrimitives").hash(e);
        const r = (n[31] & 128) >> 7;
        n[31] &= 127;
        const a = p();
        t(a, n);
        const i = p();
        G(i, a);
        const l = C();
        A(l, i, r);
        const s = C();
        B(s, l);
        return s;
    }
    function G(e, t) {
        return s(function() {
            return V(e, t);
        });
    }
    function z(e) {
        return s(function() {
            return H(e);
        });
    }
    function j(e, t) {
        const n = p();
        const r = p();
        const a = p();
        const i = o("WACryptoPrimitives").lowlevel.M;
        const l = o("WACryptoPrimitives").lowlevel.pack25519;
        K(a, t[2]);
        i(n, t[0], a);
        i(r, t[1], a);
        l(e, r);
        const s = new Uint8Array(32);
        l(s, n);
        e[31] ^= (s[0] & 1) << 7;
    }
    function K(e, t) {
        const n = p();
        n.set(t);
        const r = o("WACryptoPrimitives").lowlevel.M;
        const a = o("WACryptoPrimitives").lowlevel.S;
        for(let i = 253; i >= 0; --i){
            a(n, n);
            if (i !== 2 && i !== 4) {
                r(n, n, t);
            }
        }
        e.set(n);
    }
    function Q(e, t) {
        const n = o("WACryptoPrimitives").lowlevel.crypto_verify_32;
        const r = o("WACryptoPrimitives").lowlevel.pack25519;
        const a = new Uint8Array(32);
        const i = new Uint8Array(32);
        r(a, e);
        r(i, t);
        return n(a, 0, i, 0);
    }
    function X(e, t) {
        let n;
        const r = (n = o("WACryptoPrimitives")).lowlevel.A;
        const a = n.lowlevel.D;
        const i = n.lowlevel.M;
        const l = n.lowlevel.S;
        const s = n.lowlevel.Z;
        const u = n.lowlevel.pow2523;
        const c = n.lowlevel.set25519;
        const d = n.lowlevel.unpack25519;
        const m = p();
        const _ = p();
        const h = p();
        const C = p();
        const b = p();
        const v = p();
        const S = p();
        c(e[2], g());
        d(e[1], t);
        l(h, e[1]);
        i(C, h, a);
        s(h, h, e[2]);
        r(C, e[2], C);
        l(b, C);
        l(v, b);
        i(S, v, b);
        i(m, S, h);
        i(m, m, C);
        u(m, m);
        i(m, m, h);
        i(m, m, C);
        i(m, m, C);
        i(e[0], m, C);
        l(_, e[0]);
        i(_, _, C);
        if (Q(_, h)) {
            i(e[0], e[0], y());
        }
        l(_, e[0]);
        i(_, _, C);
        if (Q(_, h)) {
            return -1;
        }
        if (Y(e[0]) === t[31] >> 7) {
            s(e[0], f(), e[0]);
        }
        i(e[3], e[0], e[1]);
        return 0;
    }
    function Y(e) {
        const t = o("WACryptoPrimitives").lowlevel.pack25519;
        const n = new Uint8Array(32);
        t(n, e);
        return n[0] & 1;
    }
    l.runInAllocationScope = s;
    l.allocate = u;
    l.hashSha512 = c;
    l.reduce = d;
    l.scalarmultBase = m;
    l.fieldElement = p;
    l.modL = _;
    l.p3Element = C;
    l.unpack = U;
    l.elligator = G;
    l.hashToPoint = z;
    l.pack = j;
    l.inv25519 = K;
    l.unpackneg = X;
}, 98);