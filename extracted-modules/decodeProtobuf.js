__d("decodeProtobuf", [
    "WABaseProto",
    "WABinary",
    "WAHasProperty",
    "WAHex",
    "WALogger",
    "WAProtoCompile",
    "WAProtoConst",
    "WAProtoUtils",
    "WAProtoValidate",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 100;
    function u(e, t) {
        const n = new (o("WABinary")).Binary(t);
        const r = C(e, n, void 0, false, false);
        o("WAProtoValidate").checkRequirements(e, r);
        return r;
    }
    function c(e, t) {
        const n = new (o("WABinary")).Binary(t);
        const r = C(e, n, void 0, false, true);
        o("WAProtoValidate").checkRequirements(e, r);
        return r;
    }
    function d(e, t) {
        const n = new (o("WABinary")).Binary(t);
        const r = C(e, n, void 0, true, false);
        o("WAProtoValidate").checkRequirements(e, r);
        return r;
    }
    function m(e) {
        if (r("WAHasProperty")(e, "$$unsafeUnknownFields")) {
            return e.$$unsafeUnknownFields;
        }
        return null;
    }
    function p(e, t, n) {
        if (e !== o("WAProtoUtils").typeToEncType(t)) {
            const r = new Error(`FormatError: ${n} encoded with wire type ${e}`);
            r.stack;
            throw r;
        }
    }
    function _(e, t, n) {
        switch(t){
            case o("WAProtoConst").TYPES.INT32:
                return f(n, -2147483648, 2147483648, e, o("WABinary").parseInt64OrThrow);
            case o("WAProtoConst").TYPES.INT64:
                return n.readVarInt(g);
            case o("WAProtoConst").TYPES.UINT32:
                return f(n, 0, 4294967296, e, o("WABinary").parseUint64OrThrow);
            case o("WAProtoConst").TYPES.UINT64:
                return n.readVarInt(h);
            case o("WAProtoConst").TYPES.SINT32:
                {
                    const r = f(n, 0, 4294967296, e, o("WABinary").parseInt64OrThrow);
                    if (r & 1) {
                        return ~(r >>> 1);
                    }
                    return r >>> 1;
                }
            case o("WAProtoConst").TYPES.SINT64:
                return n.readVarInt(y);
            case o("WAProtoConst").TYPES.BOOL:
                return !!f(n, 0, 2, e, o("WABinary").parseUint64OrThrow);
            case o("WAProtoConst").TYPES.ENUM:
                return n.readVarInt(o("WABinary").parseInt64OrThrow);
            case o("WAProtoConst").TYPES.FIXED64:
                return n.readLong(h, true);
            case o("WAProtoConst").TYPES.SFIXED64:
                return n.readLong(g, true);
            case o("WAProtoConst").TYPES.DOUBLE:
                return n.readFloat64(true);
            case o("WAProtoConst").TYPES.STRING:
                return n.readString(n.readVarInt(o("WABinary").parseUint64OrThrow));
            case o("WAProtoConst").TYPES.BYTES:
                return n.readBuffer(n.readVarInt(o("WABinary").parseUint64OrThrow));
            case o("WAProtoConst").TYPES.FIXED32:
                return n.readUint32(true);
            case o("WAProtoConst").TYPES.SFIXED32:
                return n.readInt32(true);
            case o("WAProtoConst").TYPES.FLOAT:
                return n.readFloat32(true);
        }
    }
    function f(e, t, n, r, o) {
        const a = e.readVarInt(o);
        if (a < t || a >= n) {
            const i = new Error(`FormatError: ${r} encoded with out-of-range value ${a}`);
            i.stack;
            throw i;
        }
        return a;
    }
    function g(e, t) {
        const n = o("WABinary").longFitsInDouble(true, e, t);
        if (n) {
            const r = b(t);
            return e * 4294967296 + r;
        } else {
            const a = e < 0;
            let i;
            if (a) {
                i = t === 0 ? -e : ~e;
            } else {
                i = e;
            }
            const l = a ? -t : t;
            return o("WAHex").createHexLongFrom32Bits(i, l, a);
        }
    }
    function h(e, t) {
        const n = o("WABinary").longFitsInDouble(false, e, t);
        if (n) {
            const r = b(e);
            const a = b(t);
            return r * 4294967296 + a;
        } else {
            return o("WAHex").createHexLongFrom32Bits(e, t);
        }
    }
    function y(e, t) {
        let n = e >>> 1;
        let r = e << 31 | t >>> 1;
        if (t & 1) {
            n = ~n;
            r = ~r;
        }
        return g(n, r);
    }
    function C(t, n, a, i, l, u = 0) {
        if (r("justknobx")._("2451") && u >= s) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "decodeProtobuf: nesting depth exceeded limit of ",
                ""
            ])), s).tags("messaging").sendLogs("protobuf-decode-max-depth");
            throw r("err")(`FormatError: protobuf nesting depth exceeded limit of ${s}`);
        }
        const d = o("WAProtoCompile").compileSpec(t);
        const { fields: m, fieldToOneof: g, meta: h, names: y, oneofToFields: b, reservedFields: v, reservedTags: S, types: R } = d;
        const L = t.internalDefaults;
        const E = a || babelHelpers.extends({}, L) || {};
        E.$$unknownFieldCount = a?.$$unknownFieldCount ?? 0;
        for(let k = 0; k < y.length; k++){
            if (R[k] & o("WAProtoConst").FLAGS.REPEATED) {
                E[y[k]] = [];
            } else if (R[k] === (o("WAProtoConst").TYPES.MAP & o("WAProtoConst").TYPE_MASK)) {
                E[y[k]] = new Map;
            }
        }
        let I = 0;
        const T = m.length > 0;
        let D = m[0];
        const x = function() {
            const e = f(n, 0, 4294967296, "field and enc type", o("WABinary").parseInt64OrThrow);
            const t = e & 7;
            const r = e >>> 3;
            if (T && r !== D) {
                const a = I;
                do {
                    if (++I === m.length) {
                        I = 0;
                    }
                    D = m[I];
                }while (r !== D && I !== a)
            }
            if (T && r === D) {
                const s = y[I];
                const c = R[I];
                p(t, c, s);
                const d = c & o("WAProtoConst").TYPE_MASK;
                const L = h[I];
                if (c & o("WAProtoConst").FLAGS.PACKED) {
                    const k = n.readVarInt(o("WABinary").parseUint64OrThrow);
                    for(const x = n.readBinary(k); x.size();){
                        const $ = _(s, d, x);
                        if (d !== o("WAProtoConst").TYPES.ENUM || L[$] || L.cast?.($) !== void 0) {
                            E[s].push($);
                        }
                    }
                } else if (d === o("WAProtoConst").TYPES.MESSAGE) {
                    const P = n.readVarInt(o("WABinary").parseUint64OrThrow);
                    const N = n.readBinary(P);
                    if (c & o("WAProtoConst").FLAGS.REPEATED) {
                        E[s].push(C(L, N, void 0, i, l, u + 1));
                    } else {
                        const M = E[s];
                        E[s] = C(L, N, M, i, l, u + 1);
                    }
                } else if (d === o("WAProtoConst").TYPES.MAP) {
                    const w = n.readVarInt(o("WABinary").parseUint64OrThrow);
                    const A = n.readBinary(w);
                    let F;
                    let O;
                    for(let B = 0; B < h[I].length; B++){
                        const W = f(A, 0, 4294967296, "map field and enc type", o("WABinary").parseInt64OrThrow);
                        const q = W & 7;
                        const U = W >>> 3;
                        let V = void 0;
                        switch(q){
                            case o("WAProtoConst").ENC.VARINT:
                                V = A.readVarInt(o("WABinary").parseInt64OrThrow);
                                break;
                            case o("WAProtoConst").ENC.BIT64:
                                V = A.readBinary(8);
                                break;
                            case o("WAProtoConst").ENC.BINARY:
                                {
                                    const H = L[B];
                                    if (H === o("WAProtoConst").TYPES.BYTES || H === o("WAProtoConst").TYPES.STRING) {
                                        V = _(s, H, A);
                                    } else {
                                        const G = A.readVarInt(o("WABinary").parseUint64OrThrow);
                                        const z = A.readBinary(G);
                                        V = C(H, z, void 0, i, l, u + 1);
                                    }
                                    break;
                                }
                            case o("WAProtoConst").ENC.BIT32:
                                V = A.readBinary(4);
                                break;
                        }
                        if (U === 1) {
                            F = V;
                        } else {
                            O = V;
                        }
                    }
                    E[s].set(F, O);
                } else {
                    const j = _(s, d, n);
                    if (d !== o("WAProtoConst").TYPES.ENUM || L[j] || L.cast?.(j) !== void 0) {
                        if (c & o("WAProtoConst").FLAGS.REPEATED) {
                            E[s].push(j);
                        } else {
                            E[s] = j;
                        }
                    }
                }
                const K = g[s];
                if (K && typeof E[s] !== "undefined") {
                    K.forEach((e)=>{
                        const t = b[e].filter((e)=>e !== s);
                        t.forEach((e)=>{
                            delete E[e];
                        });
                        if (l) {
                            E[e] = {
                                type: s,
                                value: E[s],
                                [o("WABaseProto").TAGGED_UNION_TAG]: true
                            };
                            delete E[s];
                        }
                    });
                }
                if (S[r] || v[s]) {
                    delete E[s];
                }
            } else {
                E.$$unknownFieldCount++;
                if (i) {
                    if (!E.$$unsafeUnknownFields) {
                        E.$$unsafeUnknownFields = {};
                    }
                    let Q;
                    switch(t){
                        case o("WAProtoConst").ENC.VARINT:
                            Q = n.readVarInt(o("WABinary").parseInt64OrThrow);
                            break;
                        case o("WAProtoConst").ENC.BIT64:
                            Q = n.readBinary(8);
                            break;
                        case o("WAProtoConst").ENC.BINARY:
                            Q = n.readBinary(n.readVarInt(o("WABinary").parseUint64OrThrow));
                            break;
                        case o("WAProtoConst").ENC.BIT32:
                            Q = n.readBinary(4);
                            break;
                    }
                    E.$$unsafeUnknownFields[r] = Q;
                } else {
                    if (t === o("WAProtoConst").ENC.VARINT) {
                        n.readVarInt(o("WABinary").parseInt64OrThrow);
                    } else if (t === o("WAProtoConst").ENC.BIT64) {
                        n.advance(8);
                    } else if (t === o("WAProtoConst").ENC.BINARY) {
                        n.advance(n.readVarInt(o("WABinary").parseUint64OrThrow));
                    } else if (t === o("WAProtoConst").ENC.BIT32) {
                        n.advance(4);
                    }
                }
            }
        };
        while(n.size()){
            x();
        }
        return E;
    }
    function b(e) {
        if (e >= 0) {
            return e;
        }
        return 4294967296 + e;
    }
    l.decodeProtobuf = u;
    l.decodeProtobufWithTaggedUnions = c;
    l.decodeProtobufWithUnknowns = d;
    l.getUnknownFields = m;
}, 98);