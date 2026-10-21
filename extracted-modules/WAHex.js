__d("WAHex", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 16;
    const s = [
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        65,
        66,
        67,
        68,
        69,
        70
    ];
    const u = [
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        97,
        98,
        99,
        100,
        101,
        102
    ];
    function c(e) {
        const t = [];
        for (const r of e){
            t.push(s[r >> 4], s[r & 15]);
        }
        return String.fromCharCode(...t);
    }
    function d(e) {
        const t = [];
        for (const r of e){
            t.push(u[r >> 4], u[r & 15]);
        }
        return String.fromCharCode(...t);
    }
    function m(e) {
        const t = _(e);
        if (t.length % 2 !== 0) {
            throw r("err")(`parseHex given hex "${t}" which is not a multiple of 8-bits.`);
        }
        const n = new Uint8Array(t.length >> 1);
        for(let o = 0, a = 0; o < t.length; o += 2, a++){
            n[a] = p(t, o) << 4 | p(t, o + 1);
        }
        return n.buffer;
    }
    function p(e, t) {
        const n = e.charCodeAt(t);
        if (n <= 57) {
            return n - 48;
        }
        if (n <= 70) {
            return 10 + n - 65;
        }
        return 10 + n - 97;
    }
    function _(e) {
        if (/[^0-9a-fA-F]/.test(e)) {
            throw r("err")(`"${e}" is not a valid hex`);
        }
        return e;
    }
    function f(e) {
        const t = e.buffer;
        if (e.byteOffset === 0 && e.length === t.byteLength) {
            return t;
        }
        return t.slice(e.byteOffset, e.byteOffset + e.length);
    }
    function g(e) {
        for(var t = true, n = e.length; t && n;){
            const r = e[--n];
            t = r >= 32 && r < 127;
        }
        if (t) {
            return JSON.stringify(String.fromCharCode(...e));
        }
        return c(e);
    }
    function h(t, n = false) {
        const r = _(t);
        E(r, e);
        return `${n ? "-" : ""}0x${C(r, e)}`;
    }
    function y(e, t, n = false) {
        const r = k(e);
        const o = k(t);
        return `${n ? "-" : ""}0x${r}${o}`;
    }
    function C(e, t) {
        for(var n = t - e.length, r = e, o = 0; o < n; o++){
            r = `0${r}`;
        }
        return r;
    }
    function b(e) {
        const t = e < 0;
        const n = t ? (-e).toString(16) : e.toString(16);
        return h(n, t);
    }
    function v(e) {
        return e.substring(e.indexOf("0x") + 2);
    }
    function S(e) {
        return e[0] === "-";
    }
    function R(e, t) {
        const n = S(e);
        const r = S(t);
        if (n !== r) {
            return !n;
        }
        const o = v(e) > v(t);
        if (n) {
            return !o;
        }
        return o;
    }
    function L(e) {
        if (S(e)) {
            return e.slice(1);
        }
        return `-${e}`;
    }
    function E(e, t) {
        if (e.length > t) {
            throw r("err")(`"${e}" is longer than ${t * 4} bits.`);
        }
    }
    function k(e) {
        if (e > 4294967295 || e < -4294967296) {
            throw r("err")("uint32ToLowerCaseHex given number over 32 bits");
        }
        const t = (e >= 0 ? e : 4294967296 + e).toString(16);
        return C(t, 8);
    }
    l.NUM_HEX_IN_LONG = e;
    l.HEX_LOWER = u;
    l.toHex = c;
    l.toLowerCaseHex = d;
    l.parseHex = m;
    l.hexAt = p;
    l.hexOrThrow = _;
    l.bytesToBuffer = f;
    l.bytesToDebugString = g;
    l.createHexLong = h;
    l.createHexLongFrom32Bits = y;
    l.hexLongFromNumber = b;
    l.hexLongToHex = v;
    l.hexLongIsNegative = S;
    l.isBiggerHexLong = R;
    l.negateHexLong = L;
}, 98);