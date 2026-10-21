__d("punycode-2.1.1", [], function(t, n, r, o, a, i) {
    "use strict";
    const exports = {};
    const l = {
        exports
    };
    function s() {
        const e = 2147483647;
        const t = 36;
        const n = 1;
        const r = 26;
        const o = 38;
        const a = 700;
        const i = 72;
        const s = 128;
        const u = "-";
        const c = /^xn--/;
        const d = /[^\0-\x7E]/;
        const m = /[\x2E\u3002\uFF0E\uFF61]/g;
        const p = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        };
        const _ = t - n;
        function h(e) {
            throw new RangeError(p[e]);
        }
        function y(e, t) {
            const n = [];
            for(let r = e.length; r--;){
                n[r] = t(e[r]);
            }
            return n;
        }
        function C(e, t) {
            const n = e.split("@");
            let r = "";
            if (n.length > 1) {
                r = `${n[0]}@`;
                e = n[1];
            }
            e = e.replace(m, ".");
            const o = e.split(".");
            const a = y(o, t).join(".");
            return r + a;
        }
        function b(e) {
            const t = [];
            for(let n = 0, r = e.length; n < r;){
                const o = e.charCodeAt(n++);
                if (o >= 55296 && o <= 56319 && n < r) {
                    const a = e.charCodeAt(n++);
                    if ((a & 64512) == 56320) {
                        t.push(((o & 1023) << 10) + (a & 1023) + 65536);
                    } else {
                        t.push(o);
                        n--;
                    }
                } else {
                    t.push(o);
                }
            }
            return t;
        }
        const v = function(t) {
            return String.fromCodePoint(...t);
        };
        const S = (n)=>{
            if (n - 48 < 10) {
                return n - 22;
            }
            if (n - 65 < 26) {
                return n - 65;
            }
            if (n - 97 < 26) {
                return n - 97;
            }
            return t;
        };
        const R = (t, n)=>t + 22 + 75 * (t < 26) - ((n != 0) << 5);
        const L = (n, i, l)=>{
            let e = 0;
            n = l ? Math.floor(n / a) : n >> 1;
            for(n += Math.floor(n / i); n > _ * r >> 1; e += t){
                n = Math.floor(n / _);
            }
            return Math.floor(e + (_ + 1) * n / (n + o));
        };
        const E = function(a) {
            const o = [];
            const a_length = a.length;
            let c = 0;
            let d = s;
            let m = i;
            let p = a.lastIndexOf(u);
            if (p < 0) {
                p = 0;
            }
            for(let _ = 0; _ < p; ++_){
                if (a.charCodeAt(_) >= 128) {
                    h("not-basic");
                }
                o.push(a.charCodeAt(_));
            }
            for(let g = p > 0 ? p + 1 : 0; g < a_length;){
                const y = c;
                let C = 1;
                let b = t;
                for(;; b += t){
                    if (g >= a_length) {
                        h("invalid-input");
                    }
                    const v = S(a.charCodeAt(g++));
                    if (v >= t || v > Math.floor((e - c) / C)) {
                        h("overflow");
                    }
                    c += v * C;
                    const R = b <= m ? n : b >= m + r ? r : b - m;
                    if (v < R) {
                        break;
                    }
                    const E = t - R;
                    if (C > Math.floor(e / E)) {
                        h("overflow");
                    }
                    C *= E;
                }
                const k = o.length + 1;
                m = L(c - y, k, y == 0);
                if (Math.floor(c / k) > e - d) {
                    h("overflow");
                }
                d += Math.floor(c / k);
                c %= k;
                o.splice(c++, 0, d);
            }
            return String.fromCodePoint(...o);
        };
        const k = function(a) {
            const o = [];
            a = b(a);
            const a_length = a.length;
            let c = s;
            let d = 0;
            let m = i;
            for (const p of a){
                if (p < 128) {
                    o.push(String.fromCharCode(p));
                }
            }
            const o_length = o.length;
            let y = o_length;
            for(o_length && o.push(u); y < a_length;){
                let C = e;
                for (const v of a){
                    if (v >= c && v < C) {
                        C = v;
                    }
                }
                const S = y + 1;
                if (C - c > Math.floor((e - d) / S)) {
                    h("overflow");
                }
                d += (C - c) * S;
                c = C;
                for (const E of a){
                    if (E < c && ++d > e) {
                        h("overflow");
                    }
                    if (E == c) {
                        let k = d;
                        let I = t;
                        for(;; I += t){
                            const T = I <= m ? n : I >= m + r ? r : I - m;
                            if (k < T) {
                                break;
                            }
                            const D = k - T;
                            const x = t - T;
                            o.push(String.fromCharCode(R(T + D % x, 0)));
                            k = Math.floor(D / x);
                        }
                        o.push(String.fromCharCode(R(k, 0)));
                        m = L(d, S, y == o_length);
                        d = 0;
                        ++y;
                    }
                }
                ++d;
                ++c;
            }
            return o.join("");
        };
        const toUnicode = function(t) {
            return C(t, function(e) {
                if (c.test(e)) {
                    return E(e.slice(4).toLowerCase());
                }
                return e;
            });
        };
        const toASCII = function(t) {
            return C(t, function(e) {
                if (d.test(e)) {
                    return `xn--${k(e)}`;
                }
                return e;
            });
        };
        const D = {
            version: "2.1.0",
            ucs2: {
                decode: b,
                encode: v
            },
            decode: E,
            encode: k,
            toASCII,
            toUnicode
        };
        l.exports = D;
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case undefined:
                return c();
        }
    }
    a.exports = d;
}, null);