__d("WAWebCryptoCurve25519", [
    "Promise",
    "WALogger",
    "WAWeb-curve25519-donna",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        if (!u) {
            u = n("WAWeb-curve25519-donna");
        }
    }
    const d = new Uint8Array(32);
    d[0] = 9;
    const m = 32;
    const p = 256;
    const _ = new Uint8Array([
        48,
        46,
        2,
        1,
        0,
        48,
        5,
        6,
        3,
        43,
        101,
        110,
        4,
        34,
        4,
        32
    ]);
    let f = null;
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            if (e === void 0) {
                t = new Uint8Array(32);
                self.crypto.getRandomValues(t);
            } else {
                t = new Uint8Array(e);
            }
            t[0] &= 248;
            t[31] &= 127;
            t[31] |= 64;
            const n = yield C(t, d);
            if (n != null) {
                return {
                    pubKey: n,
                    privKey: t.buffer
                };
            }
            return $({
                pubKey: 32,
                privKey: t,
                basepoint: d
            }, function(e) {
                const n = u._curve25519_donna(e.pubKey, e.privKey, e.basepoint);
                if (n) {
                    throw r("err")(`Curve25519:keyPair Error Code ${n}`);
                }
                return {
                    pubKey: x(e.pubKey, 32),
                    privKey: t.buffer
                };
            });
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return (s || (s = n("Promise"))).resolve().then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = yield C(new Uint8Array(t), new Uint8Array(e));
            return n ?? $({
                sharedKey: 32,
                pubKey: e,
                privKey: t
            }, function(e) {
                const t = u._curve25519_donna(e.sharedKey, e.privKey, e.pubKey);
                if (t) {
                    throw r("err")(`Curve25519:sharedSecret Error Code ${t}`);
                }
                return x(e.sharedKey, 32);
            });
        }));
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const l = self.crypto?.subtle;
            if (!r("gkx")("7643") || l == null || l === f || t.length !== m || a.length !== m) {
                return null;
            }
            const u = new Uint8Array(_.length + m);
            u.set(_);
            u.set(t, _.length);
            try {
                const c = yield (s || (s = n("Promise"))).all([
                    l.importKey("pkcs8", u, {
                        name: "X25519"
                    }, false, [
                        "deriveBits"
                    ]),
                    l.importKey("raw", a, {
                        name: "X25519"
                    }, false, [])
                ]);
                const d = c[0];
                const g = c[1];
                return yield l.deriveBits({
                    name: "X25519",
                    public: g
                }, d, p);
            } catch (t) {
                if (v(t) !== "OperationError") {
                    f = l;
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[curve25519] WebCrypto X25519 failed, using donna: ",
                        ""
                    ])), r("getErrorSafe")(t).message);
                }
                return null;
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        if (e != null && typeof e === "object" && typeof e.name === "string") {
            return e.name;
        }
        return null;
    }
    const S = 5;
    function R(e) {
        return e.pubKey.byteLength === 33 && e.privKey.byteLength === 32;
    }
    function L(e) {
        if (R(e)) {
            return e;
        }
        if (e.pubKey.byteLength !== 32 || e.privKey.byteLength !== 32) {
            throw r("err")("Invalid key pair type");
        }
        const t = E(e.pubKey);
        const n = new Uint8Array(32);
        n.set(new Uint8Array(e.privKey));
        return {
            pubKey: t,
            privKey: n.buffer
        };
    }
    function E(e) {
        if (e.byteLength !== 32) {
            throw r("err")("Invalid key type");
        }
        const t = new Uint8Array(33);
        t[0] = S;
        t.set(new Uint8Array(e), 1);
        return t.buffer;
    }
    function k(e) {
        return e.privKey.byteLength === 32 && e.pubKey.byteLength === 32;
    }
    function I(e) {
        if (k(e)) {
            return e;
        }
        if (e.pubKey.byteLength !== 33 || e.privKey.byteLength !== 32) {
            throw r("err")("Invalid key pair type");
        }
        const t = new Uint8Array(32);
        const n = new Uint8Array(32);
        t.set(new Uint8Array(e.pubKey).subarray(1));
        n.set(new Uint8Array(e.privKey));
        return {
            pubKey: t.buffer,
            privKey: n.buffer
        };
    }
    function T(e) {
        if (e.byteLength !== 33) {
            throw r("err")("Invalid key type");
        }
        const t = new Uint8Array(32);
        t.set(new Uint8Array(e).subarray(1));
        return t.buffer;
    }
    function D(e) {
        if (typeof e === "number") {
            return u._malloc(e);
        }
        const t = new Uint8Array(e instanceof Uint8Array ? e.buffer : e);
        const n = u._malloc(t.length);
        u.HEAPU8.set(t, n);
        return n;
    }
    function x(e, t) {
        const n = new Uint8Array(t);
        n.set(u.HEAPU8.subarray(e, e + t));
        return n.buffer;
    }
    function $(e, t) {
        c();
        const n = {};
        try {
            for(const r in e){
                n[r] = D(e[r]);
            }
            return t(n);
        } finally{
            for(const o in n){
                u._free(n[o]);
            }
        }
    }
    l.keyPair = g;
    l.sharedSecret = y;
    l.toSignalCurveKeyPair = L;
    l.toSignalCurvePubKey = E;
    l.toCurveKeyPair = I;
    l.toCurveKeyPubKey = T;
}, 98);