__d("WAWebCryptoLibrarySessionConversionApi", [
    "WAArrayBufferUtils",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = d(e);
            const r = yield u(n, t);
            const a = [];
            for(const i in e.sessions){
                if (e.sessions[i].indexInfo.closed !== -1) {
                    const l = yield u(e.sessions[i], t);
                    const s = o("WASignalSessions").detachSession(l);
                    a.push(s);
                }
            }
            return o("WASignalSessions").setPrevSessions(r, a);
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = [];
                if (e.currentRatchet.lastRemoteEphemeralKey) {
                    const r = e[o("WAArrayBufferUtils").arrayBufferToString(e.currentRatchet.lastRemoteEphemeralKey)];
                    if (r) {
                        const a = [];
                        const i = function*(t) {
                            const e = r.messageKeys[t];
                            const n = yield o("WASignalOther").hkdf(new Uint8Array(e), null, "WhisperMessageKeys", 80).then((e)=>o("WASignalSessions").splitMsgKey(t, e));
                            a.push(n);
                        };
                        for(let l = 0; l < r.messageKeys.length; l++){
                            yield* i(l);
                        }
                        const s = e.currentRatchet.lastRemoteEphemeralKey;
                        const u = r.chainKey.key;
                        if (s != null && u != null) {
                            const c = o("WASignalSessions").makeRecvChain(o("WASignalKeys").castToSerializedPubKey(new Uint8Array(s)), r.chainKey.counter + 1, o("WASignalOther").toBytes(u, 32), a);
                            n.push(c);
                        }
                    }
                }
                const d = e[o("WAArrayBufferUtils").arrayBufferToString(e.currentRatchet.ephemeralKeyPair.pubKey)];
                const m = o("WASignalKeys").castToSerializedPubKey(new Uint8Array(e.currentRatchet.ephemeralKeyPair.pubKey));
                const p = d.chainKey.key;
                const _ = o("WASignalOther").toBytes(e.currentRatchet.ephemeralKeyPair.privKey, 32);
                const f = o("WASignalKeys").makeSerializedKeyPairFrom(_, m);
                const g = o("WASignalSessions").makeSendChain(f, d.chainKey.counter + 1, o("WASignalOther").toBytes(p, 32));
                const h = t && {
                    regId: t.registrationId,
                    pubKey: o("WASignalKeys").serializeIdentity(new Uint8Array(t.identityKeyPair.pubKey))
                };
                const y = t && {
                    regId: e.registrationId,
                    pubKey: new Uint8Array(e.indexInfo.remoteIdentityKey)
                };
                const C = e.indexInfo.baseKey && o("WASignalKeys").castToSerializedPubKey(new Uint8Array(e.indexInfo.baseKey));
                const b = e.currentRatchet.previousCounter;
                const v = o("WASignalOther").toBytes(e.currentRatchet.rootKey, 32);
                let S;
                if (e.pendingPreKey != null) {
                    S = o("WASignalSessions").makeInitialExchangeInfo(e.pendingPreKey.preKeyId, e.pendingPreKey.signedKeyId, o("WASignalKeys").castToSerializedPubKey(new Uint8Array(e.pendingPreKey.baseKey)));
                }
                const R = [];
                const L = o("WASignalSessions").makeSession(h, y, v, n, g, S, Math.max(b, 0), R, C);
                return L;
            } catch (e) {
                throw e;
            }
        });
        return c.apply(this, arguments);
    }
    function d({ sessions: t }) {
        for(const n in t){
            if (t[n].indexInfo.closed === -1) {
                return t[n];
            }
        }
        throw r("err")("getOpenSession: There are no open session");
    }
    l.toCryptoLibrarySessionPrevSessions = e;
    l.toCryptoManagerSession = u;
}, 98);