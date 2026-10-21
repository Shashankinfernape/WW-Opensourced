__d("WASignalPQXDH", [
    "WABinary",
    "WAKemModule",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "WASignalWhitepaper",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Uint8Array(32);
    e.fill(255);
    const s = "WhisperText_X25519_SHA-256_CRYSTALS-KYBER-1024";
    function u(e, t, n, r, o) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ regId: s, staticKeyPair: u }, n, r, a, i) {
            const c = n.identity;
            const d = n.signedKey.publicKey;
            const m = r.privateKey;
            const _ = u.privateKey;
            const g = n.oneTimeKey?.publicKey;
            const h = yield o("WAKemModule").encapsulate(a);
            const { ciphertext: y, sharedSecret: C } = h;
            const b = o("WABinary").Binary.build(e, p(_, d), p(m, c), p(m, d), g && p(m, g), C).readByteArrayView();
            const v = yield f(b);
            const S = v[0];
            const R = v[1];
            const L = n.ratchetKey;
            const E = o("WASignalSessions").makeFreshRecvChain(L, R);
            const k = o("WASignalKeys").makeSerializedKeyPair();
            const I = yield o("WASignalWhitepaper").calculateRatchet(S, k, L);
            const T = o("WASignalSessions").makeInitialExchangeInfo(n.oneTimeKey == null ? null : n.oneTimeKey.id, n.signedKey.id, o("WASignalKeys").serializePubKey(r), i, y);
            const D = o("WASignalSessions").makeFreshSession({
                regId: s,
                pubKey: o("WASignalKeys").serializePubKey(u)
            }, {
                regId: n.regId,
                pubKey: c
            }, I.rootKey, [
                E
            ], o("WASignalSessions").makeFreshSendChain(k, I.chainKey), T, o("WASignalKeys").serializePubKey(r), o("WASignalSessions").PQXDH_FORMAT_VERSION);
            return {
                session: D,
                kemCiphertext: y
            };
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n, r, o, a) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ regId: u, staticKeyPair: c }, n, r, a, i, l) {
            const d = c.privateKey;
            const m = a.signed.privateKey;
            const p = r;
            const g = n.pubKey;
            const h = a.oneTime?.privateKey;
            const y = yield o("WAKemModule").decapsulate(l, i);
            const C = o("WABinary").Binary.build(e, _(g, m), _(p, d), _(p, m), h && _(p, h), y).readByteArrayView();
            const b = yield f(C);
            const v = b[0];
            const S = b[1];
            const R = a.ratchet;
            const L = o("WASignalSessions").makeFreshSendChain(R, S);
            return o("WASignalSessions").makeSession({
                regId: u,
                pubKey: o("WASignalKeys").serializePubKey(c)
            }, n, v, [], L, null, 0, [], r, o("WASignalSessions").PQXDH_FORMAT_VERSION);
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return new Uint8Array(o("WASignalKeys").ecdh(e, t));
    }
    function _(e, t) {
        return new Uint8Array(o("WASignalKeys").ecdh(t, e));
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WASignalOther").hkdf(e, null, s, 64);
            return [
                o("WASignalOther").sliceBytes(t, 0, 32),
                o("WASignalOther").sliceBytes(t, 32, 32)
            ];
        });
        return g.apply(this, arguments);
    }
    l.initiateSessionOutgoingPQ = u;
    l.initiateSessionIncomingPQ = d;
}, 98);