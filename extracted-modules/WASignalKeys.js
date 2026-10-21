__d("WASignalKeys", [
    "WACryptoDependencies",
    "WACryptoPrimitives",
    "WASignalLocalStorageProtocol.pb",
    "WASignalOther",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 5;
    const s = 16777215;
    function u(e, t) {
        return {
            publicKey: e,
            privateKey: t
        };
    }
    function c(e) {
        const t = o("WACryptoPrimitives").keypairFromSecretKey(e);
        const { publicKey: n, secretKey: r } = t;
        return u(o("WASignalOther").ensureSize(n, 32), o("WASignalOther").ensureSize(r, 32));
    }
    function d(e, t) {
        return {
            publicKey: o("WASignalOther").toBytes(e, 32),
            privateKey: o("WASignalOther").toBytes(t, 32)
        };
    }
    function m() {
        const e = o("WACryptoPrimitives").keyPair();
        const { publicKey: t, secretKey: n } = e;
        n[0] &= 248;
        n[31] = 64 | n[31] & 63;
        return u(o("WASignalOther").ensureSize(t, 32), o("WASignalOther").ensureSize(n, 32));
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WACryptoPrimitives").keyPairAsync();
            const { publicKey: t, secretKey: n } = e;
            n[0] &= 248;
            n[31] = 64 | n[31] & 63;
            return u(o("WASignalOther").ensureSize(t, 32), o("WASignalOther").ensureSize(n, 32));
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return u(o("WASignalOther").sliceBytes(t, 1, 32), e);
    }
    function g(e, t) {
        return {
            serializedPubKey: t,
            privateKey: e
        };
    }
    function h() {
        const e = m();
        return g(e.privateKey, b(e));
    }
    function y() {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield p();
            return g(e.privateKey, b(e));
        });
        return C.apply(this, arguments);
    }
    function b(t) {
        const n = o("WASignalOther").makeBytes(33);
        n[0] = e;
        n.set(t.publicKey, 1);
        return n;
    }
    function v(t) {
        const n = o("WASignalOther").makeBytes(33);
        n[0] = e;
        n.set(o("WASignalOther").ensureSize(t, 32), 1);
        return n;
    }
    function S(e) {
        return g(e.privateKey, b(e));
    }
    function R(e, t) {
        let n = e >= s ? 0 : e - 1;
        const r = [];
        for(let a = 0; a < t; a++){
            const i = n + 1 >= s ? 1 : n + 1;
            const l = m();
            const u = o("WASignalOther").encodeSignalProto(o("WASignalLocalStorageProtocol.pb").PreKeyRecordStructureSpec, {
                id: i,
                publicKey: b(l),
                privateKey: l.privateKey
            });
            r.push({
                plainObject: {
                    id: i,
                    keyPair: l
                },
                record: u
            });
            n = i;
        }
        return r;
    }
    function L(e) {
        try {
            const t = o("decodeProtobuf").decodeProtobuf(o("WASignalLocalStorageProtocol.pb").PreKeyRecordStructureSpec, e);
            const { id: n, privateKey: r, publicKey: a } = t;
            if (n == null || a == null || r == null) {
                return null;
            }
            return {
                id: E(n),
                keyPair: f(o("WASignalOther").toBytes(r, 32), I(new Uint8Array(a)))
            };
        } catch (e) {
            return null;
        }
    }
    function E(e) {
        return o("WASignalOther").ensureIntInRange(e, 1, s);
    }
    function k(e) {
        return o("WASignalOther").ensureIntInRange(e, 0, s);
    }
    function I(t) {
        if (t.length === 0 || t[0] !== e) {
            throw r("err")("Unrecognized public key type");
        }
        return o("WASignalOther").ensureSize(t, 33);
    }
    function T() {
        const e = o("WASignalOther").makeBytes(32);
        o("WACryptoDependencies").getCrypto().getRandomValues(e);
        return e;
    }
    function D(e, t) {
        return o("WACryptoPrimitives").scalarMult(e, t.subarray(1)).buffer;
    }
    function x(e, t) {
        return o("WACryptoPrimitives").scalarMultAsync(e, t.subarray(1));
    }
    l.KEY_TYPE = e;
    l.PRE_KEY_NON_INCLUSIVE_UPPER_BORDER = s;
    l.makeKeyPairFrom = c;
    l.makeKeyPairFromArrayBuffers = d;
    l.makeKeyPair = m;
    l.makeKeyPairAsync = p;
    l.makeKeyPairFromSerialized = f;
    l.makeSerializedKeyPairFrom = g;
    l.makeSerializedKeyPair = h;
    l.makeSerializedKeyPairAsync = y;
    l.serializePubKey = b;
    l.serializeIdentity = v;
    l.toSerializedKeyPair = S;
    l.makePreKeys = R;
    l.deserializePreKey = L;
    l.castToPreKeyId = E;
    l.castToSignedPreKeyId = k;
    l.castToSerializedPubKey = I;
    l.makeRawSenderKey = T;
    l.ecdh = D;
    l.ecdhAsync = x;
}, 98);