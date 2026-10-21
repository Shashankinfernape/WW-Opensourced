__d("WACryptoCurveTransformations", [
    "WACryptoCurveConstants",
    "WACryptoCurveEncoding",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return (e % o("WACryptoCurveConstants").P + o("WACryptoCurveConstants").P) % o("WACryptoCurveConstants").P;
    }
    function s(e) {
        return u(e, o("WACryptoCurveConstants").P - BigInt(2));
    }
    function u(t, n) {
        let r = e(t);
        for(var o = n, a = BigInt(1); o > BigInt(0);){
            if (o & BigInt(1)) {
                a = e(a * r);
            }
            r = e(r * r);
            o >>= BigInt(1);
        }
        return a;
    }
    function c(t, n) {
        const a = e(t * s(n));
        let i = u(a, o("WACryptoCurveConstants").P + BigInt(3) >> BigInt(3));
        let l = e(i * i);
        if (l !== a && (i = e(i * o("WACryptoCurveConstants").I), l = e(i * i), l !== a)) {
            throw r("err")("Montgomery u is on the twist (no sqrt for v)");
        }
        return i;
    }
    function d(t) {
        const n = e(o("WACryptoCurveEncoding").bytesToBigIntLE(t));
        if (n === o("WACryptoCurveConstants").P - BigInt(1)) {
            throw r("err")("u == -1 (mod p): cannot convert");
        }
        const a = e(e(n - BigInt(1)) * s(e(n + BigInt(1))));
        return o("WACryptoCurveEncoding").bigIntTo32LE(a);
    }
    function m(X, Y) {
        return {
            X,
            Y,
            Z: BigInt(1),
            T: e(X * Y)
        };
    }
    function p(t) {
        const n = e(t.x);
        const o = e(t.y);
        const a = e(BigInt(1) - o);
        if (a === BigInt(0)) {
            throw r("err")("y == 1: map undefined");
        }
        const u_1 = e((BigInt(1) + o) * s(a));
        const v = n === BigInt(0) ? undefined : e(u_1 * s(n));
        return {
            u: u_1,
            v
        };
    }
    function _({ x, y }) {
        const r = o("WACryptoCurveEncoding").bigIntTo32LE(y);
        const a = (x & BigInt(1)) === BigInt(1) ? 128 : 0;
        r[31] |= a;
        return r;
    }
    function f(t) {
        if (!(t instanceof Uint8Array) || t.length !== 32) {
            throw r("err")("Compressed Ed25519 key is not 32 bytes");
        }
        const n = t[31];
        const a = (n & 128) !== 0;
        const i = t.slice();
        i[31] &= 127;
        const y = e(o("WACryptoCurveEncoding").bytesToBigIntLE(i));
        const s = e(y * y);
        const u = e(s - BigInt(1));
        const d = e(o("WACryptoCurveConstants").D * s + BigInt(1));
        let x = c(u, d);
        if ((x & BigInt(1)) !== (a ? BigInt(1) : BigInt(0))) {
            x = e(-x);
        }
        if (x === BigInt(0) && a) {
            throw r("err")("Error during decompression of Ed25519: x coord is 0 but sign bit set");
        }
        return {
            x,
            y
        };
    }
    l.mod = e;
    l.toEdwardsCompressed = d;
    l.affineToExtended = m;
    l.fromAffineToMontgomeryUV = p;
    l.compressEd25519 = _;
    l.decompressEd25519 = f;
}, 98);