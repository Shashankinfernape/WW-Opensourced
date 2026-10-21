__d("WACryptoPrimitives", [
    "Promise",
    "WACryptoDependencies",
    "WAHex",
    "asyncToGeneratorRuntime",
    "cr:8712",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 256;
    const c = new WeakMap;
    let d = null;
    const m = {
        scalarbase: (s = n("cr:8712")).lowlevel.scalarbase,
        crypto_hash: s.lowlevel.crypto_hash,
        modL: s.lowlevel.modL,
        pack25519: s.lowlevel.pack25519,
        S: s.lowlevel.S,
        M: s.lowlevel.M,
        A: s.lowlevel.A,
        Z: s.lowlevel.Z,
        D: s.lowlevel.D,
        unpack25519: s.lowlevel.unpack25519,
        pow2523: s.lowlevel.pow2523,
        crypto_verify_32: s.lowlevel.crypto_verify_32,
        set25519: s.lowlevel.set25519,
        add: s.lowlevel.add,
        scalarmult: s.lowlevel.scalarmult
    };
    const p = new Uint8Array([
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
    let _ = null;
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = o("WACryptoDependencies").getCrypto().subtle;
            const l = i.deriveBits;
            if (!r("gkx")("7643") || _ === i || l == null) {
                return n("cr:8712").scalarMult(t, a);
            }
            const s = new Uint8Array(p.length + 32);
            s.set(p);
            s.set(t, p.length);
            try {
                const u = yield (e || (e = n("Promise"))).all([
                    i.importKey("pkcs8", s, {
                        name: "X25519"
                    }, false, [
                        "deriveBits"
                    ]),
                    i.importKey("raw", a, {
                        name: "X25519"
                    }, false, [])
                ]);
                const c = u[0];
                const d = u[1];
                const m = yield l.call(i, {
                    name: "X25519",
                    public: d
                }, c, 256);
                return new Uint8Array(m);
            } catch (e) {
                if (e instanceof DOMException && e.name === "NotSupportedError") {
                    _ = i;
                }
                return n("cr:8712").scalarMult(t, a);
            } finally{
                s.fill(0);
            }
        });
        return g.apply(this, arguments);
    }
    const h = new Uint8Array(32);
    h[0] = 9;
    function y() {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!r("gkx")("7643")) {
                return n("cr:8712").box.keyPair();
            }
            const e = n("cr:8712").randomBytes(32);
            const t = yield f(e, h);
            return {
                publicKey: t,
                secretKey: e
            };
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            const i = o("WACryptoDependencies").getCrypto().subtle;
            const l = i.verify;
            if (!r("gkx")("6446") || d === i || l == null) {
                return n("cr:8712").sign.detached.verify(e, t, a);
            }
            try {
                const s = yield S(i, a);
                return yield l.call(i, {
                    name: "Ed25519"
                }, s, t, e);
            } catch (r) {
                if (r instanceof DOMException && r.name === "NotSupportedError") {
                    d = i;
                }
                return n("cr:8712").sign.detached.verify(e, t, a);
            }
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        if (!r("gkx")("6446") || !r("gkx")("27245")) {
            return R(e, t);
        }
        const n = c.get(e);
        const a = n ?? new Map;
        if (n == null) {
            c.set(e, a);
        }
        const i = o("WAHex").toHex(t);
        const l = a.get(i);
        if (l != null) {
            a.delete(i);
            a.set(i, l);
            return l;
        }
        const s = R(e, t);
        a.set(i, s);
        if (a.size > u) {
            const d = a.keys().next().value;
            if (d != null) {
                a.delete(d);
            }
        }
        s.catch(()=>{
            if (a.get(i) === s) {
                a.delete(i);
            }
        });
        return s;
    }
    function R(e, t) {
        return e.importKey("raw", t, {
            name: "Ed25519"
        }, false, [
            "verify"
        ]);
    }
    l.lowlevel = m;
    l.keypairFromSecretKey = s.box.keyPair.fromSecretKey;
    l.keyPair = s.box.keyPair;
    l.signDetachedVerify = s.sign.detached.verify;
    l.scalarMultAsync = f;
    l.keyPairAsync = y;
    l.signDetachedVerifyAsync = b;
    l.hash = s.hash;
    l.randomBytes = s.randomBytes;
    l.scalarMult = s.scalarMult;
    l.secretbox = s.secretbox;
    l.verify = s.verify;
}, 98);