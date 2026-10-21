__d("encodeProtobuf", [
    "WABinary",
    "WAHex",
    "WAProtoCompile",
    "WAProtoConst",
    "WAProtoUtils",
    "WAProtoValidate"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = void 0;
    const s = 128;
    function u(t, n, r = new (o("WABinary")).Binary) {
        o("WAProtoValidate").checkValid(t, n);
        b(r, n, t);
        e = void 0;
        return r;
    }
    function c() {
        if (e !== void 0) {
            return `Last encoded value for ${e}`;
        }
        return "No information known";
    }
    function d(e, t) {
        e.writeVarInt(t);
    }
    function m(e, t) {
        if (typeof t === "number" && t < 4503599627370496 && t >= -4503599627370496) {
            e.writeVarInt(t >= 0 ? 2 * t : 2 * -t - 1);
        } else {
            const n = new (o("WABinary")).Binary;
            let r;
            if (typeof t === "number") {
                r = t < 0;
                n.writeVarInt(r ? -t : t);
            } else {
                r = o("WAHex").hexLongIsNegative(t);
                n.writeVarIntFromHexLong(r ? o("WAHex").negateHexLong(t) : t);
            }
            const a = n.peek(function() {
                return n.readByteArrayView();
            });
            const i = a.byteLength;
            if (r) {
                let l = 0;
                let u;
                do {
                    u = a[l];
                    a[l] = u & s | (u & 127) - 1 & 127;
                    l++;
                }while (a[l - 1] === 255)
            }
            let c = r ? 1 : 0;
            for(let d = 0; d < i; d++){
                const m = a[d];
                const p = m & s | (m & 63) << 1 | c;
                c = (m & 64) >> 6;
                a[d] = p;
            }
            if (c === 1) {
                a[i - 1] |= s;
                n.writeInt8(1);
            }
            e.writeBinary(n);
        }
    }
    function p(e, t) {
        if (typeof t === "number") {
            e.writeVarInt(t);
        } else {
            e.writeVarIntFromHexLong(t);
        }
    }
    function _(e, t) {
        e.writeVarInt(o("WABinary").numUtf8Bytes(t));
        e.writeString(t);
    }
    function f(e, t) {
        e.writeVarInt(t.byteLength);
        e.writeBuffer(t);
    }
    function g(e, t, n) {
        e.writeWithVarIntLength(function(e, t) {
            return b(e, t, n);
        }, t);
    }
    var h = [
        void 0,
        d,
        p,
        d,
        p,
        m,
        m,
        function(e, t) {
            e.writeVarInt(t ? 1 : 0);
        },
        d,
        function(e, t) {
            if (typeof t === "number") {
                e.writeUint64(t, true);
            } else {
                e.writeHexLong(t, true);
            }
        },
        function(e, t) {
            if (typeof t === "number") {
                e.writeInt64(t, true);
            } else {
                e.writeHexLong(t, true);
            }
        },
        function(e, t) {
            e.writeFloat64(t, true);
        },
        _,
        f,
        g,
        function(e, t) {
            e.writeUint32(t, true);
        },
        function(e, t) {
            e.writeInt32(t, true);
        },
        function(e, t) {
            e.writeFloat32(t, true);
        }
    ];
    const y = function(t) {
        if (t == null) {
            return;
        }
        const e = t;
        function n(t, n) {
            for(let r = 0; r < n.length; r++){
                e(t, n[r]);
            }
        }
        return function(e, t) {
            e.writeWithVarIntLength(n, t);
        };
    };
    var C = h.map(y);
    function b(t, n, r) {
        const a = o("WAProtoCompile").compileSpec(r);
        const { fields: i, meta: l } = a;
        for(let s = a.names, u = a.types, c = r.internalDefaults, d = 0; d < s.length; d++){
            const m = s[d];
            let p = n[m];
            if (p == null && c) {
                p = c[m];
            }
            if (p != null) {
                e = m;
                const _ = i[d];
                const f = u[d];
                const g = f & o("WAProtoConst").TYPE_MASK;
                const y = l[d];
                const b = _ * 8 | o("WAProtoUtils").typeToEncType(f);
                if (f & o("WAProtoConst").FLAGS.PACKED) {
                    if (p.length > 0) {
                        t.writeVarInt(b);
                        const v = C[g];
                        v(t, p, y);
                    }
                } else if (f & o("WAProtoConst").FLAGS.REPEATED) {
                    for(let S = 0; S < p.length; S++){
                        t.writeVarInt(b);
                        const R = h[g];
                        R(t, p[S], y);
                    }
                } else if (g === o("WAProtoConst").TYPES.MAP) {
                    for (const [E, k] of p){
                        t.writeVarInt(b);
                        const I = y[0];
                        const T = y[1];
                        const D = typeof T === "object" ? o("WAProtoConst").TYPES.MESSAGE : T;
                        const x = h[I];
                        const $ = h[D];
                        if (x == null || $ == null) {
                            const P = new Error("Invalid encoder for map key/value");
                            P.stack;
                            throw P;
                        }
                        const N = new (o("WABinary")).Binary;
                        const M = 8 | o("WAProtoUtils").typeToEncType(I);
                        N.writeVarInt(M);
                        x(N, E, I);
                        const w = 16 | o("WAProtoUtils").typeToEncType(D);
                        N.writeVarInt(w);
                        $(N, k, T);
                        t.writeVarInt(N.size());
                        t.writeBinary(N);
                    }
                } else {
                    t.writeVarInt(b);
                    const A = h[g];
                    A(t, p, y);
                }
            }
        }
    }
    l.encodeProtobuf = u;
    l.encodeErrorInfo = c;
}, 98);