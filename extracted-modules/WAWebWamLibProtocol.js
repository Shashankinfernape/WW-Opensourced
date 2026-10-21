__d("WAWebWamLibProtocol", [
    "WABinary"
], function(t, n, r, o, a, i, l) {
    const e = 8;
    const s = 0;
    const u = 1;
    const c = 2;
    const d = 4;
    function m(e, t, n) {
        return f(e, t, n, s);
    }
    function p({ buffer: t, hasFieldsToWrite: n, id: r, value: o }) {
        const a = n ? u : u | d;
        return f(t, r, o, a);
    }
    function _(e, t, n, r) {
        const o = r ? c : c | d;
        return f(e, t, n, o);
    }
    function f(e, t, n, r) {
        if (n == null) {
            if (r === s) {
                g(e, t, r);
            }
        } else if (typeof n === "number" && n === (n | 0)) {
            if (n === 0) {
                g(e, t, r | 16);
            } else if (n === 1) {
                g(e, t, r | 32);
            } else if (n >= -128 && n < 128) {
                g(e, t, r | 48);
                e.writeInt8(n);
            } else if (n >= -32768 && n < 32768) {
                g(e, t, r | 64);
                e.writeInt16(n);
            } else {
                g(e, t, r | 80);
                e.writeInt32(n);
            }
        } else if (typeof n === "number") {
            g(e, t, r | 112);
            e.writeFloat64(n);
        } else if (typeof n === "string") {
            const a = o("WABinary").numUtf8Bytes(n);
            if (a < 256) {
                g(e, t, r | 128);
                e.writeUint8(a);
            } else if (a < 65536) {
                g(e, t, r | 144);
                e.writeUint16(a);
            } else {
                g(e, t, r | 160);
                e.writeUint32(a);
            }
            e.writeString(n);
        }
    }
    function g(t, n, r) {
        if (n < 256) {
            t.writeUint8(r);
            t.writeUint8(n);
        } else {
            t.writeUint8(r | e);
            t.writeUint16(n);
        }
    }
    l.writeGlobalAttribute = m;
    l.writeEvent = p;
    l.writeField = _;
}, 98);