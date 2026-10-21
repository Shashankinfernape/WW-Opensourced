__d("WACryptoCurveKeyCanonicalCheck", [
    "WACryptoCurveConstants",
    "WACryptoCurveEd25519PointOps",
    "WACryptoCurveEncoding",
    "WACryptoCurveTransformations"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return o("WACryptoCurveEd25519PointOps").equalPoints(e, {
            X: BigInt(0),
            Y: BigInt(1),
            Z: BigInt(1),
            T: BigInt(0)
        });
    }
    function s(e) {
        const t = o("WACryptoCurveEncoding").bytesToBigIntLE(e);
        return t < o("WACryptoCurveConstants").P;
    }
    function u(t) {
        try {
            const n = o("WACryptoCurveTransformations").toEdwardsCompressed(t);
            const r = o("WACryptoCurveTransformations").decompressEd25519(n);
            const { x, y } = r;
            const l = o("WACryptoCurveTransformations").affineToExtended(x, y);
            const s = o("WACryptoCurveEd25519PointOps").scalarMult(l, o("WACryptoCurveConstants").L);
            return e(s);
        } catch (e) {
            return false;
        }
    }
    function c(e) {
        return u(e) && s(e);
    }
    l.isIdentity = e;
    l.isInRange = s;
    l.isTorsionFree = u;
    l.isCanonical = c;
}, 98);