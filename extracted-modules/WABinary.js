__d("WABinary", [
    "WAHex",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 65533;
    const s = 10;
    const u = new Uint8Array(s);
    const c = new Uint8Array(0);
    const d = (()=>{
        function e(t = c, n = false) {
            const r = this;
            this.$1 = new Uint8Array(0);
            this.$2 = 0;
            this.$4 = 0;
            this.write = function(...args) {
                for(let t = 0; t < args.length; t++){
                    const n = t < 0 || args.length <= t ? void 0 : args[t];
                    if (typeof n === "string") {
                        r.writeString(n);
                    } else if (typeof n === "number") {
                        r.writeUint8(n);
                    } else if (n instanceof e) {
                        r.writeBinary(n);
                    } else if (n instanceof ArrayBuffer) {
                        r.writeBuffer(n);
                    } else if (n instanceof Uint8Array) {
                        r.writeByteArray(n);
                    }
                }
            };
            if (t instanceof ArrayBuffer) {
                this.$1 = new Uint8Array(t);
                this.$2 = this.$4 = t.byteLength;
            } else if (t instanceof Uint8Array) {
                this.$1 = t;
                this.$2 = this.$4 = t.length;
            }
            this.$5 = 0;
            this.$6 = this.$3 = 0;
            this.$7 = null;
            this.$8 = n;
            this.$9 = 0;
            this.$10 = 0;
        }
        const t = e.prototype;
        t.size = function() {
            return this.$2 - this.$3;
        };
        t.peek = function(t, n) {
            this.$9++;
            const e = this.$3;
            const r = this.$5;
            try {
                return t(this, n);
            } finally{
                this.$9--;
                this.$3 = e - (this.$5 - r);
            }
        };
        t.advance = function(t) {
            this.$11(t);
        };
        t.readWithViewParser = function(t, n, r, o) {
            return n(this.$12(), this.$11(t), t, r, o);
        };
        t.readWithBytesParser = function(t, n, r, o) {
            return n(this.$1, this.$11(t), t, r, o);
        };
        t.readUint8 = function() {
            return g(this, 1, y, false);
        };
        t.readInt8 = function() {
            return g(this, 1, y, true);
        };
        t.readUint16 = function(t = this.$8) {
            return g(this, 2, C, t);
        };
        t.readInt32 = function(t = this.$8) {
            return g(this, 4, b, t);
        };
        t.readUint32 = function(t = this.$8) {
            return g(this, 4, v, t);
        };
        t.readInt64 = function(t = this.$8) {
            return g(this, 8, S, j, t);
        };
        t.readUint64 = function(t = this.$8) {
            return g(this, 8, S, K, t);
        };
        t.readLong = function(t, n = this.$8) {
            return g(this, 8, S, t, n);
        };
        t.readFloat32 = function(t = this.$8) {
            return g(this, 4, R, t);
        };
        t.readFloat64 = function(t = this.$8) {
            return g(this, 8, L, t);
        };
        t.readVarInt = function(t) {
            const e = this.size();
            const n = h(this, 0, E, e);
            return h(this, n, k, t);
        };
        t.readBuffer = function(t = this.size()) {
            if (t === 0) {
                return new ArrayBuffer(0);
            }
            return h(this, t, I);
        };
        t.readByteArrayView = function(t = this.size()) {
            if (t === 0) {
                return new Uint8Array(0);
            }
            return h(this, t, T);
        };
        t.readBinary = function(n = this.size(), r = this.$8) {
            if (n === 0) {
                return new e(void 0, r);
            }
            const t = h(this, n, T);
            return new e(t, r);
        };
        t.indexOf = function(t) {
            if (t.length === 0) {
                return 0;
            }
            const e = this.$1;
            for(let n = this.$2, r = this.$3, o = 0, a = r, i = r; i < n; i++){
                if (e[i] === t[o]) {
                    if (o === 0) {
                        a = i;
                    }
                    o++;
                    if (o === t.byteLength) {
                        return i - r - t.byteLength + 1;
                    }
                } else {
                    if (o > 0) {
                        o = 0;
                        i = a;
                    }
                }
            }
            return -1;
        };
        t.readString = function(t) {
            return h(this, t, D);
        };
        t.ensureCapacity = function(t) {
            this.$13(this.$3 + t);
        };
        t.ensureAdditionalCapacity = function(t) {
            this.$13(this.$4 + t);
        };
        t.writeToView = function(t, n, r, o) {
            const e = this.$14(t);
            return n(this.$12(), e, t, r, o);
        };
        t.writeToBytes = function(t, n, r, o) {
            const e = this.$14(t);
            return n(this.$1, e, t, r, o);
        };
        t.writeUint8 = function(t) {
            G(t, 0, 256, "uint8");
            $(this, 1, P, t, false);
        };
        t.writeInt8 = function(t) {
            G(t, -128, 128, "signed int8");
            $(this, 1, P, t, true);
        };
        t.writeUint16 = function(t, n = this.$8) {
            G(t, 0, 65536, "uint16");
            x(this, 2, N, t, n);
        };
        t.writeInt16 = function(t, n = this.$8) {
            G(t, -32768, 32768, "signed int16");
            x(this, 2, M, t, n);
        };
        t.writeUint32 = function(t, n = this.$8) {
            G(t, 0, 4294967296, "uint32");
            x(this, 4, w, t, n);
        };
        t.writeInt32 = function(t, n = this.$8) {
            G(t, -2147483648, 2147483648, "signed int32");
            x(this, 4, A, t, n);
        };
        t.writeUint64 = function(t, n = this.$8) {
            G(t, 0, 18446744073709552000, "uint64");
            x(this, 8, F, t, n);
        };
        t.writeInt64 = function(t, n = this.$8) {
            G(t, -9223372036854776000, 9223372036854776000, "signed int64");
            x(this, 8, F, t, n);
        };
        t.writeFloat32 = function(t, n = this.$8) {
            x(this, 4, O, t, n);
        };
        t.writeFloat64 = function(t, n = this.$8) {
            x(this, 8, B, t, n);
        };
        t.writeVarInt = function(t) {
            G(t, -9223372036854776000, 9223372036854776000, "varint (signed int64)");
            const e = t < 0;
            const n = e ? -t : t;
            let r = Math.floor(n / 4294967296);
            let o = n - r * 4294967296;
            if (e) {
                r = ~r;
                if (o === 0) {
                    r++;
                } else {
                    o = -o;
                }
            }
            const a = H(r, o);
            $(this, a, W, r, o);
        };
        t.writeVarIntFromHexLong = function(t) {
            const e = o("WAHex").hexLongIsNegative(t);
            const n = e ? o("WAHex").negateHexLong(t) : t;
            const r = o("WAHex").hexLongToHex(n);
            let a = 0;
            let i = 0;
            for(let l = 0; l < o("WAHex").NUM_HEX_IN_LONG; l++){
                a = a << 4 | i >>> 28;
                i = i << 4 | o("WAHex").hexAt(r, l);
            }
            if (e) {
                a = ~a;
                if (i === 0) {
                    a++;
                } else {
                    i = -i;
                }
            }
            const s = H(a, i);
            $(this, s, W, a, i);
        };
        t.writeBinary = function(t) {
            const e = t.peek(function(e) {
                return e.readByteArrayView();
            });
            if (e.length) {
                const n = this.$14(e.length);
                this.$1.set(e, n);
            }
        };
        t.writeBuffer = function(t) {
            this.writeByteArray(new Uint8Array(t));
        };
        t.writeByteArray = function(t) {
            const e = this.$14(t.length);
            this.$1.set(t, e);
        };
        t.writeBufferView = function(t) {
            this.writeByteArray(new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
        };
        t.writeString = function(t) {
            $(this, _(t), q, t);
        };
        t.writeHexLong = function(t, n = this.$8) {
            x(this, 8, U, t, n);
        };
        t.writeBytes = function(...t) {
            for(let r = 0; r < t.length; r++){
                G(t[r], 0, 256, "byte");
            }
            $(this, t.length, V, t);
        };
        t.writeAtomically = function(t, n) {
            this.$10++;
            let e = this.$4;
            let r = this.$5;
            try {
                const o = t(this, n);
                e = this.$4;
                r = this.$5;
                return o;
            } finally{
                this.$10--;
                this.$4 = e - (this.$5 - r);
            }
        };
        t.writeWithVarIntLength = function(t, n) {
            const e = this.$4;
            const r = this.writeAtomically(t, n);
            const o = this.$4;
            this.writeVarInt(o - e);
            for(var a = this.$4 - o, i = this.$1, l = 0; l < a; l++){
                u[l] = i[o + l];
            }
            for(let s = o - 1; s >= e; s--){
                i[s + a] = i[s];
            }
            for(let c = 0; c < a; c++){
                i[e + c] = u[c];
            }
            return r;
        };
        e.build = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++){
                n[r] = arguments[r];
            }
            let o = 0;
            for (const i of n){
                if (typeof i === "string") {
                    o += _(i);
                } else if (typeof i === "number") {
                    o++;
                } else if (i instanceof e) {
                    o += i.size();
                } else if (i instanceof ArrayBuffer) {
                    o += i.byteLength;
                } else if (i instanceof Uint8Array) {
                    o += i.length;
                }
            }
            const l = new e;
            l.ensureCapacity(o);
            l.write(...arguments);
            return l;
        };
        t.$12 = function() {
            return this.$7 || (this.$7 = new DataView(this.$1.buffer, this.$1.byteOffset));
        };
        t.$11 = function(t) {
            if (t < 0) {
                throw r("err")("ReadError: given negative number of bytes to read");
            }
            const e = this.$3;
            const n = e + t;
            if (n > this.$2) {
                throw r("err")(e === this.$2 ? "ReadError: tried to read from depleted binary" : "ReadError: tried to read beyond end of binary");
            }
            this.$3 = n;
            if (!this.$9) {
                this.$6 = n;
            }
            return e;
        };
        t.$13 = function(t) {
            const e = this.$1;
            if (t <= e.length) {
                return t;
            }
            const n = this.$6;
            const r = t - n;
            const o = Math.max(r, 2 * (e.length - n), 64);
            const a = new Uint8Array(o);
            if (n) {
                a.set(e.subarray(n));
                this.$5 += n;
                this.$3 -= n;
                this.$2 -= n;
                this.$4 -= n;
                this.$6 = 0;
            } else {
                a.set(e);
            }
            this.$1 = a;
            this.$7 = null;
            return r;
        };
        t.$14 = function(t) {
            const e = this.$13(this.$4 + t);
            const n = this.$4;
            this.$4 = e;
            if (!this.$10) {
                this.$2 = e;
            }
            return n;
        };
        return e;
    })();
    var m = "";
    var p = 0;
    function _(e) {
        if (e === m) {
            return p;
        }
        for(var t = e.length, n = 0, r = 0; r < t; r++){
            const o = e.charCodeAt(r);
            if (o < 128) {
                n++;
            } else if (o < 2048) {
                n += 2;
            } else if (o < 55296 || o >= 57344 && o <= 65535) {
                n += 3;
            } else if (o >= 55296 && o < 56320 && r + 1 !== t) {
                const a = e.charCodeAt(r + 1);
                if (a >= 56320 && a < 57344) {
                    r++;
                    n += 4;
                } else {
                    n += 3;
                }
            } else {
                n += 3;
            }
        }
        m = e;
        return p = n;
    }
    function f(e, t, n) {
        const r = t >> 21;
        if (e) {
            const o = t & 2097151;
            const a = !!(o || n);
            return r === 0 || r === -1 && a;
        } else {
            return r === 0;
        }
    }
    function g(e, t, n, r, o) {
        return e.readWithViewParser(t, n, r, o);
    }
    function h(e, t, n, r, o) {
        return e.readWithBytesParser(t, n, r, o);
    }
    function y(e, t, n, r) {
        if (r) {
            return e.getInt8(t);
        }
        return e.getUint8(t);
    }
    function C(e, t, n, r) {
        return e.getUint16(t, r);
    }
    function b(e, t, n, r) {
        return e.getInt32(t, r);
    }
    function v(e, t, n, r) {
        return e.getUint32(t, r);
    }
    function S(e, t, n, r, o) {
        const a = e.getInt32(o ? t + 4 : t, o);
        const i = e.getInt32(o ? t : t + 4, o);
        return r(a, i);
    }
    function R(e, t, n, r) {
        return e.getFloat32(t, r);
    }
    function L(e, t, n, r) {
        return e.getFloat64(t, r);
    }
    function E(e, t, n, o) {
        for(var a = Math.min(o, s), i = 0, l = 128; i < a && l & 128;){
            l = e[t + i++];
        }
        if (i === s && l > 1) {
            throw r("err")("ParseError: varint exceeds 64 bits");
        }
        if (l & 128) {
            return i + 1;
        }
        return i;
    }
    function k(e, t, n, r) {
        let o = 0;
        let a = 0;
        let i = n;
        if (n === s) {
            i--;
            a = e[t + i] & 1;
        }
        for(let l = i - 1; l >= 0; l--){
            o = o << 7 | a >>> 25;
            a = a << 7 | e[t + l] & 127;
        }
        return r(o, a);
    }
    function I(e, t, n) {
        const r = t + e.byteOffset;
        const o = e.buffer;
        if (r === 0 && n === o.byteLength) {
            return o;
        }
        return o.slice(r, r + n);
    }
    function T(e, t, n) {
        return e.subarray(t, t + n);
    }
    function D(t, n, r) {
        for(var o = n + r, a = [], i = null, l = n; l < o; l++){
            if (a.length > 5000) {
                if (!i) {
                    i = [];
                }
                i.push(String.fromCharCode(...a));
                a = [];
            }
            const s = t[l] | 0;
            if ((s & 128) === 0) {
                a.push(s);
            } else if ((s & 224) === 192) {
                const u = Q(t, l + 1, o);
                if (u) {
                    l++;
                    const c = (s & 31) << 6 | u & 63;
                    if (c >= 128) {
                        a.push(c);
                    } else {
                        a.push(e);
                    }
                } else {
                    a.push(e);
                }
            } else if ((s & 240) === 224) {
                const d = Q(t, l + 1, o);
                const m = Q(t, l + 2, o);
                if (d && m) {
                    l += 2;
                    const p = (s & 15) << 12 | (d & 63) << 6 | m & 63;
                    if (p >= 2048 && !(p >= 55296 && p < 57344)) {
                        a.push(p);
                    } else {
                        a.push(e);
                    }
                } else {
                    if (d) {
                        l++;
                    }
                    a.push(e);
                }
            } else if ((s & 248) === 240) {
                const _ = Q(t, l + 1, o);
                const f = Q(t, l + 2, o);
                const g = Q(t, l + 3, o);
                if (_ && f && g) {
                    l += 3;
                    const h = (s & 7) << 18 | (_ & 63) << 12 | (f & 63) << 6 | g & 63;
                    if (h >= 65536 && h <= 1114111) {
                        const y = h - 65536;
                        a.push(55296 | y >> 10, 56320 | y & 1023);
                    } else {
                        a.push(e);
                    }
                } else {
                    if (_ && f) {
                        l += 2;
                        a.push(e);
                    } else {
                        if (_) {
                            l++;
                        }
                        a.push(e);
                    }
                }
            } else {
                a.push(e);
            }
        }
        const C = String.fromCharCode(...a);
        if (i) {
            i.push(C);
            return i.join("");
        }
        return C;
    }
    function x(e, t, n, r, o) {
        return e.writeToView(t, n, r, o);
    }
    function $(e, t, n, r, o) {
        return e.writeToBytes(t, n, r, o);
    }
    function P(e, t, n, r) {
        e[t] = r;
    }
    function N(e, t, n, r, o) {
        e.setUint16(t, r, o);
    }
    function M(e, t, n, r, o) {
        e.setInt16(t, r, o);
    }
    function w(e, t, n, r, o) {
        e.setUint32(t, r, o);
    }
    function A(e, t, n, r, o) {
        e.setInt32(t, r, o);
    }
    function F(e, t, n, r, o) {
        const a = r < 0;
        const i = a ? -r : r;
        let l = Math.floor(i / 4294967296);
        let s = i - l * 4294967296;
        if (a) {
            l = ~l;
            if (s === 0) {
                l++;
            } else {
                s = -s;
            }
        }
        e.setUint32(o ? t + 4 : t, l, o);
        e.setUint32(o ? t : t + 4, s, o);
    }
    function O(e, t, n, r, o) {
        e.setFloat32(t, r, o);
    }
    function B(e, t, n, r, o) {
        e.setFloat64(t, r, o);
    }
    function W(e, t, n, r, o) {
        let a = r;
        let i = o;
        for(var l = t + n - 1, s = t; s < l; s++){
            e[s] = 128 | i & 127;
            i = a << 25 | i >>> 7;
            a >>>= 7;
        }
        e[l] = i;
    }
    function q(e, t, n, r) {
        let o = t;
        for(let a = r.length, i = 0; i < a; i++){
            const l = r.charCodeAt(i);
            if (l < 128) {
                e[o++] = l;
            } else if (l < 2048) {
                e[o++] = 192 | l >> 6;
                e[o++] = 128 | l & 63;
            } else if (l < 55296 || l >= 57344) {
                e[o++] = 224 | l >> 12;
                e[o++] = 128 | l >> 6 & 63;
                e[o++] = 128 | l & 63;
            } else if (l >= 55296 && l < 56320 && i + 1 !== a) {
                const s = r.charCodeAt(i + 1);
                if (s >= 56320 && s < 57344) {
                    i++;
                    const u = 65536 + ((l & 1023) << 10 | s & 1023);
                    e[o++] = 240 | u >> 18;
                    e[o++] = 128 | u >> 12 & 63;
                    e[o++] = 128 | u >> 6 & 63;
                    e[o++] = 128 | u & 63;
                } else {
                    e[o++] = 239;
                    e[o++] = 191;
                    e[o++] = 189;
                }
            } else {
                e[o++] = 239;
                e[o++] = 191;
                e[o++] = 189;
            }
        }
    }
    function U(e, t, n, r, a) {
        const i = o("WAHex").hexLongIsNegative(r);
        const l = o("WAHex").hexLongToHex(r);
        let s = 0;
        let u = 0;
        for(let c = 0; c < 16; c++){
            s = s << 4 | u >>> 28;
            u = u << 4 | o("WAHex").hexAt(l, c);
        }
        if (i) {
            s = ~s;
            if (u === 0) {
                s++;
            } else {
                u = -u;
            }
        }
        e.setUint32(a ? t + 4 : t, s, a);
        e.setUint32(a ? t : t + 4, u, a);
    }
    function V(e, t, n, r) {
        for(let o = 0; o < n; o++){
            e[t + o] = r[o];
        }
    }
    function H(e, t) {
        let n;
        let r;
        for(e ? (n = 5, r = e >>> 3) : (n = 1, r = t >>> 7); r;){
            n++;
            r >>>= 7;
        }
        return n;
    }
    function G(e, t, n, o) {
        if (typeof e !== "number" || e !== e || Math.floor(e) !== e || e < t || e >= n) {
            throw r("err")(typeof e === "string" ? `TyperError WriteError: string "${e}" is not a valid ${o}` : `TypeError WriteError: ${String(e)} is not a valid ${o}`);
        }
    }
    function z(e, t, n) {
        const o = f(e, t, n);
        let a;
        if (t >= 0) {
            a = t;
        } else {
            a = e ? t : 4294967296 + t;
        }
        const i = n >= 0 ? n : 4294967296 + n;
        const l = a * 4294967296 + i;
        if (!o) {
            throw r("err")(`ReadError: integer exceeded 53 bits (${l})`);
        }
        return l;
    }
    function j(e, t) {
        return z(true, e, t);
    }
    function K(e, t) {
        return z(false, e, t);
    }
    function Q(e, t, n) {
        if (t >= n) {
            return 0;
        }
        const r = e[t] | 0;
        if ((r & 192) === 128) {
            return r;
        }
        return 0;
    }
    l.Binary = d;
    l.numUtf8Bytes = _;
    l.longFitsInDouble = f;
    l.parseInt64OrThrow = j;
    l.parseUint64OrThrow = K;
}, 98);