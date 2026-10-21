__d("WACryptoCurveEd25519PointOps", [
    "WACryptoCurveConstants",
    "WACryptoCurveTransformations",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ T, X, Y, Z }, { T: T_1, X: X_1, Y: Y_1, Z: Z_1 }) {
        let n;
        const m = (n = o("WACryptoCurveTransformations")).mod(X * X_1);
        const p = n.mod(Y * Y_1);
        const _ = n.mod(T * o("WACryptoCurveConstants").D * T_1);
        const f = n.mod(Z * Z_1);
        const g = n.mod((X + Y) * (X_1 + Y_1) - m - p);
        const h = n.mod(f - _);
        const y = n.mod(f + _);
        const C = n.mod(p - o("WACryptoCurveConstants").A * m);
        const X_2 = n.mod(g * h);
        const Y_2 = n.mod(y * C);
        const Z_2 = n.mod(h * y);
        const T_2 = n.mod(g * C);
        return {
            X: X_2,
            Y: Y_2,
            Z: Z_2,
            T: T_2
        };
    }
    function s({ X, Y, Z }) {
        let t;
        const i = (t = o("WACryptoCurveTransformations")).mod(X * X);
        const l = t.mod(Y * Y);
        const s = t.mod(BigInt(2) * t.mod(Z * Z));
        const u = t.mod(o("WACryptoCurveConstants").A * i);
        const c = X + Y;
        const d = t.mod(t.mod(c * c) - i - l);
        const m = t.mod(u + l);
        const p = t.mod(m - s);
        const _ = t.mod(u - l);
        return {
            X: t.mod(d * p),
            Y: t.mod(m * _),
            Z: t.mod(p * m),
            T: t.mod(d * _)
        };
    }
    function u({ X, Y, Z }, { X: X_1, Y: Y_1, Z: Z_1 }) {
        let n;
        const c = (n = o("WACryptoCurveTransformations")).mod(X * Z_1);
        const d = n.mod(X_1 * Z);
        const m = n.mod(Y * Z_1);
        const p = n.mod(Y_1 * Z);
        return c === d && m === p;
    }
    function c(t, n) {
        let r = {
            X: BigInt(0),
            Y: BigInt(1),
            Z: BigInt(1),
            T: BigInt(0)
        };
        let o = t;
        for(let a = n; a > BigInt(0);){
            if (a & BigInt(1)) {
                r = e(r, o);
            }
            o = s(o);
            a >>= BigInt(1);
        }
        return r;
    }
    function d({ T, X, Y, Z }) {
        let t;
        const s = (t = o("WACryptoCurveTransformations")).mod(X * X);
        const u = t.mod(Y * Y);
        const c = t.mod(Z * Z);
        const d = t.mod(c * c);
        const m = t.mod(s * o("WACryptoCurveConstants").A);
        const p = t.mod(c * t.mod(m + u));
        const _ = t.mod(d + t.mod(o("WACryptoCurveConstants").D * t.mod(s * u)));
        if (p !== _) {
            throw r("err")("bad point: equation left != right (1)");
        }
        const f = o("WACryptoCurveTransformations").mod(X * Y);
        const g = o("WACryptoCurveTransformations").mod(Z * T);
        if (f !== g) {
            throw r("err")("bad point: equation left != right (2)");
        }
        return true;
    }
    l.addPoints = e;
    l.doublePoint = s;
    l.equalPoints = u;
    l.scalarMult = c;
    l.isPointValid = d;
}, 98);