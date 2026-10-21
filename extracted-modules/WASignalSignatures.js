__d("WASignalSignatures", [
    "Promise",
    "WACryptoDependencies",
    "WACryptoEd25519",
    "WACryptoPrimitives",
    "WAHex",
    "WALongInt",
    "WASignalKeys",
    "WASignalLocalStorageProtocol.pb",
    "WASignalOther",
    "decodeProtobuf",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 256;
    const u = new Map;
    function c(e, t, n) {
        return o("WACryptoEd25519").runInAllocationScope(function() {
            let r;
            const a = t.length;
            const i = e.privateKey;
            const l = new Uint8Array(32);
            (r = o("WACryptoEd25519")).scalarmultBase(l, i);
            const s = l[31] & 128;
            const u = new Uint8Array(a + 128);
            u[0] = 254;
            u.fill(255, 1, 32);
            u.set(i, 32);
            u.set(t, 64);
            u.set(n, a + 64);
            const c = r.allocate(Uint8Array, 64);
            r.hashSha512(c, u, a + 128);
            u.set(l, 32);
            const d = r.allocate(Float64Array, 64);
            r.reduce(c, d);
            r.scalarmultBase(u, c);
            const m = r.allocate(Uint8Array, 64);
            r.hashSha512(m, u, a + 64);
            r.reduce(m, d);
            let p;
            let _;
            for(p = 0; p < 32; ++p){
                d[p] = c[p];
            }
            for(p = 0; p < 32; ++p){
                for(_ = 0; _ < 32; ++_){
                    d[p + _] += m[p] * i[_];
                }
            }
            r.modL(u.subarray(32, 64), d);
            return {
                pubKeyNegative: s !== 0,
                signedMsg: u
            };
        });
    }
    function d(t, r) {
        return (e || (e = n("Promise"))).resolve().then(()=>{
            const e = o("WASignalOther").makeBytes(64);
            o("WACryptoDependencies").getCrypto().getRandomValues(e);
            return h(t, r, e);
        });
    }
    function m(e, t) {
        const n = t[63];
        if (n & 96) {
            return null;
        }
        const r = new Uint8Array(t);
        r[63] = n & 127;
        const o = new Uint8Array(p(e));
        o[31] = o[31] & 127 | n & 128;
        return {
            publicKey: o,
            signature: r
        };
    }
    function p(e) {
        if (!r("gkx")("27245")) {
            return _(e);
        }
        const t = o("WAHex").toHex(e);
        const n = u.get(t);
        if (n != null) {
            u.delete(t);
            u.set(t, n);
            return n;
        }
        const a = _(e);
        u.set(t, a);
        if (u.size > s) {
            const i = u.keys().next().value;
            if (i != null) {
                u.delete(i);
            }
        }
        return a;
    }
    function _(e) {
        return o("WACryptoEd25519").runInAllocationScope(function() {
            let t;
            let n;
            const r = (t = o("WACryptoPrimitives")).lowlevel.A;
            const a = t.lowlevel.M;
            const i = t.lowlevel.Z;
            const l = t.lowlevel.pack25519;
            const s = t.lowlevel.unpack25519;
            const u = (n = o("WACryptoEd25519")).fieldElement();
            const c = n.fieldElement();
            const d = n.fieldElement();
            const m = n.fieldElement();
            const p = n.fieldElement();
            const _ = n.allocate(Uint8Array, 32);
            const f = n.fieldElement();
            f[0] = 1;
            s(u, e.subarray(1));
            i(c, u, f);
            r(d, u, f);
            n.inv25519(m, d);
            a(p, c, m);
            l(_, p);
            return new Uint8Array(_);
        });
    }
    function f(e, t, n) {
        const r = m(e, n);
        if (r == null) {
            return false;
        }
        return o("WACryptoPrimitives").signDetachedVerify(t, r.signature, r.publicKey);
    }
    function g(t, r, a) {
        const i = m(t, a);
        if (i == null) {
            return (e || (e = n("Promise"))).resolve(false);
        }
        return o("WACryptoPrimitives").signDetachedVerifyAsync(r, i.signature, i.publicKey);
    }
    function h(e, t, n) {
        const r = c(e, t, n);
        const a = o("WASignalOther").sliceBytes(r.signedMsg, 0, 64);
        a[63] = a[63] & 127 | (r.pubKeyNegative ? 128 : 0);
        return a;
    }
    function y(e, t, n) {
        const a = o("WASignalKeys").makeKeyPair();
        const i = o("WASignalOther").makeBytes(64);
        o("WACryptoDependencies").getCrypto().getRandomValues(i);
        const l = h(n, o("WASignalKeys").serializePubKey(a), i);
        if (!Number.isSafeInteger(t)) {
            throw r("err")(`Expected timestamp to be a safe integer, given ${String(t)}`);
        }
        return {
            id: o("WASignalKeys").castToPreKeyId(e),
            ts: t,
            keyPair: a,
            signature: l
        };
    }
    function C(e, t) {
        const n = o("WASignalOther").makeBytes(64);
        o("WACryptoDependencies").getCrypto().getRandomValues(n);
        return h(e, t, n);
    }
    function b(e) {
        const { id: t, keyPair: n } = e;
        return o("WASignalOther").encodeSignalProto(o("WASignalLocalStorageProtocol.pb").SignedPreKeyRecordStructureSpec, {
            id: t,
            publicKey: o("WASignalKeys").serializePubKey(n),
            privateKey: n.privateKey,
            signature: e.signature,
            timestamp: e.ts
        });
    }
    function v(e) {
        try {
            const t = o("decodeProtobuf").decodeProtobuf(o("WASignalLocalStorageProtocol.pb").SignedPreKeyRecordStructureSpec, e);
            const { id: n, privateKey: r, publicKey: a, signature: i, timestamp: l } = t;
            if (n == null || a == null || r == null || i == null || l == null) {
                return null;
            }
            return {
                id: o("WASignalKeys").castToSignedPreKeyId(n),
                ts: o("WALongInt").numberOrThrowIfTooLarge(l),
                keyPair: o("WASignalKeys").makeKeyPairFromSerialized(o("WASignalOther").toBytes(r, 32), o("WASignalKeys").castToSerializedPubKey(new Uint8Array(a))),
                signature: o("WASignalOther").toBytes(i, 64)
            };
        } catch (e) {
            return null;
        }
    }
    function S(e) {
        return new Uint8Array(o("WAHex").parseHex(e));
    }
    function R(e) {
        if (e.length === 33) {
            return o("WASignalKeys").castToSerializedPubKey(e);
        }
        if (e.length === 32) {
            return o("WASignalKeys").serializeIdentity(e);
        }
        throw r("err")("verifyCertificate publicKey incorrect length");
    }
    function L(t, r, o) {
        return (e || (e = n("Promise"))).resolve().then(()=>{
            const e = y(t, r, o);
            const n = b(e);
            return {
                plainObject: e,
                record: n
            };
        });
    }
    l.signMsg = d;
    l.verifyMsgSignalVariant = f;
    l.verifyMsgSignalVariantAsync = g;
    l.makeSignature = h;
    l.makeSignedPreKey = y;
    l.signSenderKeyMessage = C;
    l.serializeSignedPreKeyForPrivateStorage = b;
    l.deserializeSignedPreKey = v;
    l.convertPublicKeyHexToUint8Array = S;
    l.convertPublicKeyToSerializedPubKey = R;
    l.generateSignedPreKey = L;
}, 98);