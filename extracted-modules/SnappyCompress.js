__d("SnappyCompress", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        return typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node !== "undefined";
    }
    function l(t) {
        return t instanceof Uint8Array && (!e() || !Buffer.isBuffer(t));
    }
    function s(e) {
        return e instanceof ArrayBuffer;
    }
    function u(t) {
        if (e()) {
            return Buffer.isBuffer(t);
        }
        return false;
    }
    const c = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    function d(e) {
        if (!l(e) && !s(e) && !u(e)) {
            throw new TypeError(c);
        }
        let t = false;
        let n = false;
        if (l(e)) {
            t = true;
        } else if (s(e)) {
            n = true;
            e = new Uint8Array(e);
        }
        const r = new D(e);
        const o = r.readUncompressedLength();
        if (o === -1) {
            throw new Error("Invalid Snappy bitstream");
        }
        let a;
        let i;
        if (t) {
            a = new Uint8Array(o);
            if (!r.uncompressToBuffer(a)) {
                throw new Error("Invalid Snappy bitstream");
            }
        } else if (n) {
            a = new ArrayBuffer(o);
            i = new Uint8Array(a);
            if (!r.uncompressToBuffer(i)) {
                throw new Error("Invalid Snappy bitstream");
            }
        } else {
            a = Buffer.alloc(o);
            if (!r.uncompressToBuffer(a)) {
                throw new Error("Invalid Snappy bitstream");
            }
        }
        return a;
    }
    function m(e) {
        if (!l(e) && !s(e) && !u(e)) {
            throw new TypeError(c);
        }
        let t = false;
        let n = false;
        if (l(e)) {
            t = true;
        } else if (s(e)) {
            n = true;
            e = new Uint8Array(e);
        }
        const r = new E(e);
        const o = r.maxCompressedLength();
        let a;
        let i;
        let d;
        if (t) {
            a = new Uint8Array(o);
            d = r.compressToBuffer(a);
        } else if (n) {
            a = new ArrayBuffer(o);
            i = new Uint8Array(a);
            d = r.compressToBuffer(i);
        } else {
            a = Buffer.alloc(o);
            d = r.compressToBuffer(a);
        }
        if (!a.slice) {
            const m = new Uint8Array(Array.prototype.slice.call(a, 0, d));
            if (t) {
                return m;
            }
            if (n) {
                return m.buffer;
            }
            throw new Error("not implemented");
        }
        return a.slice(0, d);
    }
    const p = 16;
    const _ = 1 << p;
    const f = 14;
    const g = new Array(f + 1);
    function h(e, t) {
        return e * 506832829 >>> t;
    }
    function y(array, t) {
        return array[t] + (array[t + 1] << 8) + (array[t + 2] << 16) + (array[t + 3] << 24);
    }
    function C(array, t, n) {
        return array[t] === array[n] && array[t + 1] === array[n + 1] && array[t + 2] === array[n + 2] && array[t + 3] === array[n + 3];
    }
    function b(array, t, n, r, o) {
        if (n <= 60) {
            r[o] = n - 1 << 2;
            o += 1;
        } else if (n < 256) {
            r[o] = 240;
            r[o + 1] = n - 1;
            o += 2;
        } else {
            r[o] = 244;
            r[o + 1] = n - 1 & 255;
            r[o + 2] = n - 1 >>> 8;
            o += 3;
        }
        I(array, t, r, o, n);
        return o + n;
    }
    function v(e, t, n, r) {
        if (r < 12 && n < 2048) {
            e[t] = 1 + (r - 4 << 2) + (n >>> 8 << 5);
            e[t + 1] = n & 255;
            return t + 2;
        }
        e[t] = 2 + (r - 1 << 2);
        e[t + 1] = n & 255;
        e[t + 2] = n >>> 8;
        return t + 3;
    }
    function S(e, t, n, r) {
        while(r >= 68){
            t = v(e, t, n, 64);
            r -= 64;
        }
        if (r > 64) {
            t = v(e, t, n, 60);
            r -= 60;
        }
        return v(e, t, n, r);
    }
    function R(array, t, n, r, o) {
        for(var a = 1; 1 << a <= n && a <= f;){
            a += 1;
        }
        a -= 1;
        const i = 32 - a;
        if (typeof g[a] === "undefined") {
            g[a] = new Uint16Array(1 << a);
        }
        const l = g[a];
        let s;
        for(s = 0; s < l.length; s++){
            l[s] = 0;
        }
        const u = t + n;
        let c;
        const d = t;
        let m = t;
        let p;
        let _;
        let v;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        let D;
        let x;
        let $ = true;
        const P = 15;
        if (n >= P) {
            c = u - P;
            t += 1;
            for(_ = h(y(array, t), i); $;){
                L = 32;
                v = t;
                do {
                    t = v;
                    p = _;
                    E = L >>> 5;
                    L += 1;
                    v = t + E;
                    if (t > c) {
                        $ = false;
                        break;
                    }
                    _ = h(y(array, v), i);
                    R = d + l[p];
                    l[p] = t - d;
                }while (!C(array, t, R))
                if (!$) {
                    break;
                }
                o = b(array, m, t - m, r, o);
                do {
                    k = t;
                    for(I = 4; t + I < u && array[t + I] === array[R + I];){
                        I += 1;
                    }
                    t += I;
                    T = k - R;
                    o = S(r, o, T, I);
                    m = t;
                    if (t >= c) {
                        $ = false;
                        break;
                    }
                    D = h(y(array, t - 1), i);
                    l[D] = t - 1 - d;
                    x = h(y(array, t), i);
                    R = d + l[x];
                    l[x] = t - d;
                }while (C(array, t, R))
                if (!$) {
                    break;
                }
                t += 1;
                _ = h(y(array, t), i);
            }
        }
        if (m < u) {
            o = b(array, m, u - m, r, o);
        }
        return o;
    }
    function L(e, t, n) {
        do {
            t[n] = e & 127;
            e = e >>> 7;
            if (e > 0) {
                t[n] += 128;
            }
            n += 1;
        }while (e > 0)
        return n;
    }
    class E {
        constructor(e){
            this.array = e;
        }
        maxCompressedLength() {
            const length = this.array.length;
            return 32 + length + Math.floor(length / 6);
        }
        compressToBuffer(e) {
            const array = this.array;
            const t_length = array.length;
            let r = 0;
            let o = 0;
            let a;
            for(o = L(t_length, e, o); r < t_length;){
                a = Math.min(t_length - r, _);
                o = R(array, r, a, e, o);
                r += a;
            }
            return o;
        }
    }
    const k = [
        0,
        255,
        65535,
        16777215,
        4294967295
    ];
    function I(e, t, n, r, o) {
        let a;
        for(a = 0; a < o; a++){
            n[r + a] = e[t + a];
        }
    }
    function T(e, t, n, r) {
        let o;
        for(o = 0; o < r; o++){
            e[t + o] = e[t - n + o];
        }
    }
    class D {
        constructor(e){
            this.array = e;
            this.pos = 0;
        }
        readUncompressedLength() {
            let e = 0;
            let n;
            let r;
            for(let t = 0; t < 32 && this.pos < this.array.length;){
                n = this.array[this.pos];
                this.pos += 1;
                r = n & 127;
                if (r << t >>> t !== r) {
                    return -1;
                }
                e |= r << t;
                if (n < 128) {
                    return e;
                }
                t += 7;
            }
            return -1;
        }
        uncompressToBuffer(e) {
            let a;
            let i;
            let l;
            let s;
            for(let t = this.array, n = t.length, r = this.pos, o = 0; r < t.length;){
                a = t[r];
                r += 1;
                if ((a & 3) === 0) {
                    i = (a >>> 2) + 1;
                    if (i > 60) {
                        if (r + 3 >= n) {
                            return false;
                        }
                        l = i - 60;
                        i = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24);
                        i = (i & k[l]) + 1;
                        r += l;
                    }
                    if (r + i > n) {
                        return false;
                    }
                    I(t, r, e, o, i);
                    r += i;
                    o += i;
                } else {
                    switch(a & 3){
                        case 1:
                            i = (a >>> 2 & 7) + 4;
                            s = t[r] + (a >>> 5 << 8);
                            r += 1;
                            break;
                        case 2:
                            if (r + 1 >= n) {
                                return false;
                            }
                            i = (a >>> 2) + 1;
                            s = t[r] + (t[r + 1] << 8);
                            r += 2;
                            break;
                        case 3:
                            if (r + 3 >= n) {
                                return false;
                            }
                            i = (a >>> 2) + 1;
                            s = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24);
                            r += 4;
                            break;
                        default:
                            break;
                    }
                    if (s === 0 || s > o) {
                        return false;
                    }
                    T(e, o, s, i);
                    o += i;
                }
            }
            return true;
        }
    }
    a.exports.uncompress = d;
    a.exports.compress = m;
}, null);