__d("WABase64", [
    "WALogger",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 43;
    const u = 47;
    const c = 61;
    const d = 45;
    const m = 95;
    const p = 3000;
    const _ = function(t) {
        return typeof t === "string" && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t);
    };
    function f(e) {
        return h(e, s, u, true);
    }
    function g(e, t = false) {
        return h(e, d, m, t);
    }
    function h(e, t, n, r) {
        const o = Array.isArray(e) || e instanceof ArrayBuffer ? new Uint8Array(e) : e;
        if (o.length <= p) {
            return y(o, t, n, r);
        }
        const a = [];
        for(let i = 0; i < o.length; i += p){
            a.push(y(o.subarray(i, i + p), t, n, r));
        }
        return a.join("");
    }
    function y(e, t, n, r) {
        const o = Math.ceil(e.length * 4 / 3);
        for(var a = 4 * Math.ceil(e.length / 3), i = new Array(a), l = 0, s = 0; l < a; l += 4, s += 3){
            const u = e[s] << 16 | e[s + 1] << 8 | e[s + 2];
            i[l] = u >> 18;
            i[l + 1] = u >> 12 & 63;
            i[l + 2] = u >> 6 & 63;
            i[l + 3] = u & 63;
        }
        for(let c = 0; c < o; c++){
            const d = i[c];
            if (d < 26) {
                i[c] = 65 + d;
            } else if (d < 52) {
                i[c] = 71 + d;
            } else if (d < 62) {
                i[c] = d - 4;
            } else if (d === 62) {
                i[c] = t;
            } else {
                i[c] = n;
            }
        }
        for(let m = o; m < a; m++){
            i[m] = 61;
        }
        const p = String.fromCharCode(...i);
        if (r) {
            return p;
        }
        return p.substring(0, o);
    }
    function C(t, n, r, a) {
        for(var i = t.length, l = new Int32Array(i + i % 4), s = 0; s < i; s++){
            const u = t.charCodeAt(s);
            if (u >= 65 && u <= 90) {
                l[s] = u - 65;
            } else if (u >= 97 && u <= 122) {
                l[s] = u - 71;
            } else if (u >= 48 && u <= 57) {
                l[s] = u + 4;
            } else if (u === n) {
                l[s] = 62;
            } else if (u === r) {
                l[s] = 63;
            } else if (u === a) {
                i = s;
                break;
            } else {
                const c = self;
                if (c.ERROR != null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Found unexpected character code while decoding B64 at index ",
                        ", length ",
                        ": ",
                        ""
                    ])), s, i, u);
                }
                return null;
            }
        }
        for(let d = l.length / 4, m = 0, p = 0; m < d; m++, p += 4){
            l[m] = l[p] << 18 | l[p + 1] << 12 | l[p + 2] << 6 | l[p + 3];
        }
        for(var _ = Math.floor(i * 3 / 4), f = new Uint8Array(_), g = 0, h = 0; h + 3 <= _; g++, h += 3){
            const y = l[g];
            f[h] = y >> 16;
            f[h + 1] = y >> 8 & 255;
            f[h + 2] = y & 255;
        }
        switch(_ - h){
            case 2:
                f[h] = l[g] >> 16;
                f[h + 1] = l[g] >> 8 & 255;
                break;
            case 1:
                f[h] = l[g] >> 16;
        }
        return f;
    }
    function b(e) {
        const t = C(e, s, u, c);
        if (t) {
            return t.buffer;
        }
        throw r("err")("Base64.decode given invalid string");
    }
    function v(e, t = false) {
        const n = C(e, d, m, t ? c : -1);
        if (n) {
            return n.buffer;
        }
        throw r("err")("Base64.decode given invalid string");
    }
    function S(e) {
        return Math.floor(e.length * 3 / 4);
    }
    l.isBase64 = _;
    l.encodeB64 = f;
    l.encodeB64UrlSafe = g;
    l.decodeB64 = b;
    l.decodeB64UrlSafe = v;
    l.sizeWhenB64Decoded = S;
}, 98);