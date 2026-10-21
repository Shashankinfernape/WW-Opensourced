__d("WAWebWaffleCertificateCache", [
    "WATimeUtils",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingSchema",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 3600;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield o("WAWebAccountLinkingSchema").getTable().get(o("WAWebAccountLinkingConstants").AccountLinkKey);
                const t = e?.certEncryptionPem;
                const ttlSeconds = e?.certTtlSeconds;
                const fetchTimestampSeconds = e?.certFetchTimestamp;
                if (t != null && ttlSeconds != null && fetchTimestampSeconds != null) {
                    const u = o("WATimeUtils").unixTime();
                    const c = u - fetchTimestampSeconds;
                    if (c >= ttlSeconds) {
                        return null;
                    }
                    return {
                        encryptionPem: t,
                        passwordPem: e?.certPasswordPem ?? null,
                        passwordKeyId: e?.certPasswordKeyId ?? null,
                        payloadKeyId: e?.certPayloadKeyId ?? null,
                        passwordIsOaep: e?.certPasswordIsOaep ?? false,
                        ttlSeconds,
                        fetchTimestampSeconds
                    };
                }
            } catch (e) {}
            return null;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ encryptionPem, passwordIsOaep, passwordKeyId, passwordPem, passwordTtlSeconds, payloadKeyId, ttlSeconds }) {
            const certTtlSeconds = _(ttlSeconds, passwordPem == null ? null : passwordTtlSeconds);
            if (!(certTtlSeconds <= 0)) {
                const certFetchTimestamp = Math.floor(Date.now() / 1000);
                try {
                    yield o("WAWebModelStorageUtils").getStorage().lock([
                        "account-linking"
                    ], (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                            const l = yield n.get(o("WAWebAccountLinkingConstants").AccountLinkKey);
                            const u = {
                                certEncryptionPem: encryptionPem,
                                certPasswordPem: passwordPem ?? undefined,
                                certPasswordKeyId: passwordKeyId ?? undefined,
                                certPayloadKeyId: payloadKeyId ?? undefined,
                                certPasswordIsOaep: passwordIsOaep,
                                certTtlSeconds,
                                certFetchTimestamp
                            };
                            const m = l != null ? babelHelpers.extends({}, l, u) : babelHelpers.extends({
                                accountLinkKey: o("WAWebAccountLinkingConstants").AccountLinkKey,
                                linkState: o("WAWebAccountLinkingConstants").AccountLinkState.Unknown,
                                linkTimestamp: 0
                            }, u);
                            yield n.createOrReplace(m);
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                } catch (e) {}
            }
        });
        return d.apply(this, arguments);
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "account-linking"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                        const n = yield t.get(o("WAWebAccountLinkingConstants").AccountLinkKey);
                        if (!(n == null || n.certFetchTimestamp == null)) {
                            yield t.createOrReplace(babelHelpers.extends({}, n, {
                                certFetchTimestamp: undefined
                            }));
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            } catch (e) {}
        });
        return p.apply(this, arguments);
    }
    function _(ttlSeconds, n) {
        const r = ttlSeconds ?? e;
        if (n == null || n <= 0) {
            return r;
        }
        return Math.min(r, n);
    }
    l.loadCertFromIDB = s;
    l.saveCertToIDB = c;
    l.invalidateCertInIDB = m;
}, 98);