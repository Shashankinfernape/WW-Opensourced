__d("WAByteBuffer", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 16;
    const s = new ArrayBuffer(0);
    const u = (()=>{
        function t(t) {
            this.offset = 0;
            this.limit = 0;
            this.capacity = t ?? e;
            if (t == null || t < 0) {
                throw r("err")("RangeError: Illegal capacity");
            }
            this.buffer = this.capacity === 0 ? s : new ArrayBuffer(this.capacity);
            this.view = this.capacity === 0 ? null : new DataView(this.buffer);
        }
        const n = t.prototype;
        n.toArrayBuffer = function(t = false) {
            let e = this.offset;
            let n = this.limit;
            if (e > n) {
                const o = e;
                e = n;
                n = o;
            }
            if (e == null || e % 1 !== 0) {
                throw r("err")("TypeError: Illegal offset: Not a valid integer");
            }
            e >>>= 0;
            if (n == null || n % 1 !== 0) {
                throw r("err")("TypeError: Illegal limit: Not a valid integer");
            }
            n >>>= 0;
            if (e < 0 || e > n || n > this.buffer.byteLength) {
                throw r("err")(`RangeError: Illegal range: 0 <= ${e} <= ${n} <= ${this.buffer.byteLength}`);
            }
            if (!t && e === 0 && n === this.buffer.byteLength) {
                return this.buffer;
            }
            if (e === n) {
                return s;
            }
            const a = new ArrayBuffer(n - e);
            new Uint8Array(a).set(new Uint8Array(this.buffer).subarray(e, n), 0);
            return a;
        };
        n.toBinaryString = function(t, n) {
            let e = t ?? this.offset;
            let o = n ?? this.limit;
            if (e == null || e % 1 !== 0) {
                throw r("err")("TypeError: Illegal begin: Not a valid integer");
            }
            e >>>= 0;
            if (o == null || o % 1 !== 0) {
                throw r("err")("TypeError: Illegal end: Not a valid integer");
            }
            o >>>= 0;
            if (e < 0 || e > o || o > this.buffer.byteLength) {
                throw r("err")(`RangeError: Illegal range: 0 <= ${e} <= ${o} <= ${this.buffer.byteLength}`);
            }
            if (e === o) {
                return "";
            }
            let a = [];
            const i = [];
            while(e < o){
                a.push(this.view?.getUint8(e++));
                if (a.length >= 1024) {
                    i.push(String.fromCharCode(...a));
                    a = [];
                }
            }
            return i.join("") + String.fromCharCode(...a);
        };
        return t;
    })();
    function c(e) {
        if (typeof e !== "string") {
            throw r("err")("TypedError: Illegal input => not a string");
        }
        for(var t = e.length, n = new u(t), o = 0; o < t; o++){
            const i = e.charCodeAt(o);
            if (i > 255) {
                throw r("err")(`RangeError: Illegal charCode at ${o}: 0 <= ${i} <= 255`);
            }
            n.view?.setUint8(o, i);
        }
        n.limit = t;
        return n.toArrayBuffer();
    }
    function d(e) {
        const t = new u(0);
        if (e.byteLength > 0) {
            t.buffer = e;
            t.offset = 0;
            t.limit = e.byteLength;
            t.view = e.byteLength > 0 ? new DataView(e) : null;
        }
        return t.toBinaryString();
    }
    function m(e) {
        if (e instanceof Uint8Array) {
            const t = new u(0);
            if (e.length > 0) {
                t.buffer = e.buffer;
                t.offset = e.byteOffset;
                t.limit = e.byteOffset + e.length;
                t.view = e.length > 0 ? new DataView(e.buffer) : null;
            }
            return t.toArrayBuffer();
        } else {
            throw r("err")(`TypeError: Illegal input => not an Uint8Array but ${typeof e}`);
        }
    }
    function p(e) {
        if (e instanceof ArrayBuffer) {
            const t = new u(0);
            if (e.byteLength > 0) {
                t.buffer = e;
                t.offset = 0;
                t.limit = e.byteLength;
                t.view = e.byteLength > 0 ? new DataView(e) : null;
            }
            return t.toArrayBuffer();
        } else {
            throw r("err")(`TypeError: Illegal input => not an ArrayBuffer but ${typeof e}`);
        }
    }
    l.wrapString = c;
    l.wrapBufferToString = d;
    l.wrapUint8Array = m;
    l.wrapArrayBuffer = p;
}, 98);