__d("WAWebRegistration", [
    "Promise",
    "WALogger",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebCryptoCurve25519").keyPair();
            const t = new Uint8Array(24);
            self.crypto.getRandomValues(t);
            return (s || (s = n("Promise"))).resolve(o("WAWebUserPrefsInfoStore").waNoiseInfo.set({
                recoveryToken: t.buffer,
                staticKeyPair: e,
                certificateChainBuffer: void 0
            }));
        });
        return c.apply(this, arguments);
    }
    function d() {
        return r("WAWebCryptoLibraryUtilsApi").makeRegistrationId();
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = d();
            yield o("WAWebSignalStoreApi").waSignalStore.clearCredential();
            const r = o("WAWebSignalKeyApi").generateIdentityKeyPair();
            try {
                yield (s || (s = n("Promise"))).all([
                    o("WAWebSignalStoreApi").waSignalStore.setRegistrationInfo({
                        registrationId: t,
                        identityKeyPair: r
                    }),
                    o("WAWebSignalStoreApi").waSignalStore.rotateSignedPreKey(o("WAWebCryptoCurve25519").toSignalCurveKeyPair(r), o("WAWebSignalKeyApi").generateSignedKeyPair)
                ]);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to refreshSignalCredentials: ",
                    ""
                ])), t);
                throw t;
            }
        });
        return p.apply(this, arguments);
    }
    l.refreshNoiseCredentials = u;
    l.refreshSignalCredentials = m;
}, 98);