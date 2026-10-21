__d("WAWamBuffer", [
    "WABinary",
    "WAWamTypes",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 5;
    const s = 47;
    const u = 0;
    const c = 1;
    const d = 2;
    const m = 1;
    const p = 2;
    const _ = 0;
    const f = 4;
    const g = 8;
    const h = (()=>{
        function t(t, n, r, a) {
            const i = this;
            this.$5 = false;
            this.$6 = false;
            const l = new (o("WABinary")).Binary(void 0, true);
            l.writeString("WAM");
            l.writeUint8(e);
            l.writeUint8(n);
            l.writeUint16(r);
            switch(t){
                case "regular":
                    l.writeUint8(u);
                    break;
                case "realtime":
                    l.writeUint8(c);
                    break;
                default:
                    l.writeUint8(d);
            }
            this.$1 = t;
            this.$2 = l;
            this.$3 = r;
            this.$4 = n;
            a.forEach((e, t)=>void i.writeGlobal(t, e));
        }
        const n = t.prototype;
        n.writeGlobal = function(t, n) {
            if (n == null) {
                v(this.$2, t, _);
                return;
            }
            if (typeof n === "string") {
                b(this.$2, t, _, n);
            } else if (typeof n === "number") {
                y(this.$2, t, _, n);
            } else if (typeof n === "boolean") {
                y(this.$2, t, _, n ? 1 : 0);
            } else {
                throw r("err")(`Incorrect value type ${typeof n}`);
            }
        };
        n.writeEvent = function(t, n, r, a) {
            const e = this.$2;
            y(e, s, _, Math.floor(t / 1000));
            const i = S(r);
            const l = i === -1 ? m | f : m;
            y(e, n, l, a);
            for(let u = 0; u <= i; u += 3){
                const c = r[u + 2];
                if (c != null) {
                    const d = r[u];
                    const g = r[u + 1];
                    const h = u === i ? p | f : p;
                    if (g === o("WAWamTypes").TYPES.INT) {
                        y(e, d, h, c);
                    } else if (g === o("WAWamTypes").TYPES.BOOL) {
                        y(e, d, h, c ? 1 : 0);
                    } else if (g === o("WAWamTypes").TYPES.STRING) {
                        b(e, d, h, c);
                    } else {
                        C(e, d, h, c);
                    }
                }
            }
            this.$6 = true;
        };
        n.getKey = function() {
            return {
                streamId: this.$4,
                sequenceNumber: this.$3,
                channel: this.$1
            };
        };
        n.getSize = function() {
            return this.$2.size();
        };
        n.peek = function() {
            return this.$2.peek(function(e) {
                return e.readByteArrayView();
            });
        };
        n.getBuffer__INTERNAL = function() {
            return this.$2;
        };
        n.isFinalized = function() {
            return this.$5;
        };
        n.finalize = function() {
            this.$5 = true;
        };
        n.hasEvents = function() {
            return this.$6;
        };
        return t;
    })();
    function y(e, t, n, r) {
        if (r === 0) {
            v(e, t, n | 16);
        } else if (r === 1) {
            v(e, t, n | 32);
        } else if (r >= -128 && r < 128) {
            v(e, t, n | 48);
            e.writeInt8(r);
        } else if (r >= -32768 && r < 32768) {
            v(e, t, n | 64);
            e.writeInt16(r);
        } else if (r >= -2147483648 && r < 2147483648) {
            v(e, t, n | 80);
            e.writeInt32(r);
        } else {
            v(e, t, n | 96);
            e.writeInt64(r);
        }
    }
    function C(e, t, n, r) {
        v(e, t, n | 112);
        e.writeFloat64(r);
    }
    function b(e, t, n, r) {
        const a = o("WABinary").numUtf8Bytes(r);
        if (a < 256) {
            v(e, t, n | 128);
            e.writeUint8(a);
        } else if (a < 65536) {
            v(e, t, n | 144);
            e.writeUint16(a);
        } else {
            v(e, t, n | 160);
            e.writeUint32(a);
        }
        e.writeString(r);
    }
    function v(e, t, n) {
        if (t < 256) {
            e.writeUint8(n);
            e.writeUint8(t);
        } else {
            e.writeUint8(n | g);
            e.writeUint16(t);
        }
    }
    function S(e) {
        let t = -1;
        for(let n = 0; n < e.length; n += 3){
            if (e[n + 2] != null) {
                t = n;
            }
        }
        return t;
    }
    function R(e) {
        for(let t = S(e), n = 0; n <= t; n += 3){
            const r = e[n + 2];
            if (r != null) {
                const a = e[n + 1];
                if (a === o("WAWamTypes").TYPES.INT && isNaN(r)) {
                    return false;
                }
            }
        }
        return true;
    }
    function L(e) {
        if (typeof e === "number") {
            return !isNaN(e);
        }
        return true;
    }
    l.WamBuffer = h;
    l.canWriteEvent = R;
    l.canWriteGlobal = L;
}, 98);