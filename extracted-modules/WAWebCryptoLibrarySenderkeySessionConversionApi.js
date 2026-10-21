__d("WAWebCryptoLibrarySenderkeySessionConversionApi", [
    "invariant",
    "WAPromiseReduce",
    "WASignalGroupSession",
    "WASignalOther",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ sessions: t }) {
            const r = yield o("WAPromiseReduce").promiseReduce(t, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                    const r = yield c(t);
                    if (e == null) {
                        return o("WASignalGroupSession").makeNewSenderKeySession(r);
                    }
                    return o("WASignalGroupSession").updateSessionWithNewSenderKeyState(e, r);
                });
                return function(t, n, r) {
                    return e.apply(this, arguments);
                };
            })(), null);
            if (r == null) {
                s(0, 72944);
            }
            return r;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.signatureKey.pubKey !== void 0 ? new Uint8Array(e.signatureKey.pubKey) : new Uint8Array(e.signatureKey);
            const n = e.signatureKey.privKey ? o("WASignalOther").ensureSize(new Uint8Array(e.signatureKey.privKey), 32) : void 0;
            const r = o("WASignalGroupSession").makeSenderKeyChainKey(e.chainKey.counter, o("WASignalOther").ensureSize(new Uint8Array(e.chainKey.key), 32));
            const a = e.keyId;
            const i = [];
            const l = function*(n) {
                if (e.messageKeys[n]) {
                    const t = e.messageKeys[n];
                    const r = yield o("WASignalOther").hkdf(new Uint8Array(t), null, "WhisperGroup", 50).then((e)=>o("WASignalGroupSession").makeSenderKeyMsgKey(n, e));
                    i.push(r);
                }
            };
            for(let s = 0; s < e.messageKeys.length; s++){
                yield* l(s);
            }
            const c = o("WASignalGroupSession").makeSenderKeyState(t, n, r, a, i);
            return c;
        });
        return d.apply(this, arguments);
    }
    l.toCryptoManagerSenderKeySession = e;
}, 98);