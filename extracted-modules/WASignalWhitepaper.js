__d("WASignalWhitepaper", [
    "Promise",
    "WABinary",
    "WACryptoDependencies",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Uint8Array(32);
    s.fill(255);
    const u = new Uint8Array([
        1
    ]);
    const c = new Uint8Array([
        2
    ]);
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ regId: u, staticKeyPair: c }, a, i) {
            const d = a.identity;
            const m = a.signedKey.publicKey;
            const p = i.privateKey;
            const _ = c.privateKey;
            const f = a.oneTimeKey?.publicKey;
            const g = r("gkx")("7643") ? o("WABinary").Binary.build.apply(o("WABinary").Binary, [
                s
            ].concat((yield (e || (e = n("Promise"))).all([
                o("WASignalKeys").ecdhAsync(_, m),
                o("WASignalKeys").ecdhAsync(p, d),
                o("WASignalKeys").ecdhAsync(p, m),
                f && o("WASignalKeys").ecdhAsync(p, f)
            ])))).readByteArrayView() : o("WABinary").Binary.build(s, E(_, m), E(p, d), E(p, m), f && E(p, f)).readByteArrayView();
            const h = yield R(g, "WhisperText");
            const y = h[0];
            const C = h[1];
            const b = a.ratchetKey;
            const S = o("WASignalSessions").makeFreshRecvChain(b, C);
            const L = r("gkx")("7643") ? yield o("WASignalKeys").makeSerializedKeyPairAsync() : o("WASignalKeys").makeSerializedKeyPair();
            const k = yield v(y, L, b);
            const I = o("WASignalSessions").makeInitialExchangeInfo(a.oneTimeKey == null ? null : a.oneTimeKey.id, a.signedKey.id, o("WASignalKeys").serializePubKey(i));
            return o("WASignalSessions").makeFreshSession({
                regId: u,
                pubKey: o("WASignalKeys").serializePubKey(c)
            }, {
                regId: a.regId,
                pubKey: d
            }, k.rootKey, [
                S
            ], o("WASignalSessions").makeFreshSendChain(L, k.chainKey), I, o("WASignalKeys").serializePubKey(i));
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n, r) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ regId: c, staticKeyPair: d }, a, i, l) {
            const m = d.privateKey;
            const p = l.signed.privateKey;
            const _ = i;
            const f = a.pubKey;
            const g = l.oneTime?.privateKey;
            const h = r("gkx")("7643") ? o("WABinary").Binary.build.apply(o("WABinary").Binary, [
                s
            ].concat((yield (e || (e = n("Promise"))).all([
                o("WASignalKeys").ecdhAsync(p, f),
                o("WASignalKeys").ecdhAsync(m, _),
                o("WASignalKeys").ecdhAsync(p, _),
                g && o("WASignalKeys").ecdhAsync(g, _)
            ])))).readByteArrayView() : o("WABinary").Binary.build(s, k(f, p), k(_, m), k(_, p), g && k(_, g)).readByteArrayView();
            const y = yield R(h, "WhisperText");
            const C = y[0];
            const b = y[1];
            const v = l.ratchet;
            const S = o("WASignalSessions").makeFreshSendChain(v, b);
            return o("WASignalSessions").makeSession({
                regId: c,
                pubKey: o("WASignalKeys").serializePubKey(d)
            }, a, C, [], S, null, 0, [], i);
        });
        return _.apply(this, arguments);
    }
    function f(t) {
        const r = o("WASignalGroupSession").makeSenderKeyState(o("WASignalKeys").serializePubKey(t), t.privateKey, o("WASignalGroupSession").makeSenderKeyChainKey(0, o("WASignalKeys").makeRawSenderKey()), o("WASignalOther").makeSenderKeyId(), []);
        return (e || (e = n("Promise"))).resolve(o("WASignalGroupSession").makeNewSenderKeySession(r));
    }
    function g(t, r, a, i, l) {
        const s = o("WASignalGroupSession").makeSenderKeyState(a, void 0, o("WASignalGroupSession").makeSenderKeyChainKey(r, i), t, []);
        let u = null;
        if (l) {
            u = o("WASignalGroupSession").updateSessionWithNewSenderKeyState(l, s);
        } else {
            u = o("WASignalGroupSession").makeNewSenderKeySession(s);
        }
        return (e || (e = n("Promise"))).resolve(u);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = yield o("WASignalOther").makeCryptoKey(r, "hmac-sha256");
            const i = function(t) {
                return o("WACryptoDependencies").getCrypto().subtle.sign({
                    name: "HMAC",
                    hash: "SHA-256"
                }, a, t);
            };
            const l = i(u).then((e)=>o("WASignalOther").hkdf(new Uint8Array(e), null, "WhisperMessageKeys", 80)).then((e)=>o("WASignalSessions").splitMsgKey(t, e));
            const s = i(c).then((e)=>o("WASignalOther").toBytes(e, 32));
            return (e || (e = n("Promise"))).all([
                s,
                l
            ]);
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = yield o("WASignalOther").makeCryptoKey(r, "hmac-sha256");
            const i = function(t) {
                return o("WACryptoDependencies").getCrypto().subtle.sign({
                    name: "HMAC",
                    hash: "SHA-256"
                }, a, t);
            };
            const l = i(u).then((e)=>o("WASignalOther").hkdf(new Uint8Array(e), null, "WhisperGroup", 50)).then((e)=>o("WASignalGroupSession").makeSenderKeyMsgKey(t, e));
            const s = i(c).then((e)=>o("WASignalOther").toBytes(e, 32));
            return (e || (e = n("Promise"))).all([
                s,
                l
            ]);
        });
        return b.apply(this, arguments);
    }
    function v(e, t, n) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { privateKey: a }, n) {
            const i = n;
            const l = r("gkx")("7643") ? yield o("WASignalKeys").ecdhAsync(a, i) : o("WASignalKeys").ecdh(a, i);
            const s = yield R(new Uint8Array(l), "WhisperRatchet", e);
            const u = s[0];
            const c = s[1];
            return {
                rootKey: u,
                chainKey: c
            };
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = null) {
            const r = yield o("WASignalOther").hkdf(e, n, t, 64);
            return [
                o("WASignalOther").sliceBytes(r, 0, 32),
                o("WASignalOther").sliceBytes(r, 32, 32)
            ];
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return new Uint8Array(o("WASignalKeys").ecdh(e, t));
    }
    function k(e, t) {
        return E(t, e);
    }
    l.initiateSessionOutgoing = d;
    l.initiateSessionIncoming = p;
    l.initiateSenderKeySessionOutgoing = f;
    l.initiateSenderKeySessionIncoming = g;
    l.deriveMsgKey = h;
    l.deriveSenderKeyMsgKey = C;
    l.calculateRatchet = v;
}, 98);