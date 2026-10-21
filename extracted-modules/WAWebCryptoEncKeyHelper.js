__d("WAWebCryptoEncKeyHelper", [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerInitState",
    "WAWebCryptoEncryptionSaltHelper",
    "WAWebDbEncryptionKey",
    "WAWebInvocationInterface",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        if (s == null) {
            s = o("WAWebCryptoEncryptionSaltHelper").getOrGenSalt();
        }
        return s;
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield u();
            if (!(!e || e.constructor !== Uint8Array)) {
                return o("WAWebDbEncryptionKey").DbEncKeyStore.init(e);
            }
        });
        return d.apply(this, arguments);
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield u();
            if (!(!e || e.constructor !== Uint8Array)) {
                yield o("WAWebInvocationInterface").get().initDatabaseEncnKey(e);
            }
        });
        return p.apply(this, arguments);
    }
    function _(salt) {
        o("WAWebBackendWorkerInitState").recordInitDbFinalKey({
            salt
        });
        return o("WAWebInvocationInterface").get().generateFinalDbEncryptionAndFtsKey(salt);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield (e || (e = n("Promise"))).all([
                o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeys(),
                o("WAWebInvocationInterface").get().deleteDbEncKeyCache()
            ]);
        });
        return g.apply(this, arguments);
    }
    o("WAWebBackendEventBus").BackendEventBus.onLogout(function() {
        s = (e || (e = n("Promise"))).resolve(null);
    });
    l.getSalt = u;
    l.initEncSalt = c;
    l.initEncSaltForInvoker = m;
    l.generateFinalDbEncryptionAndFtsKeyForInvoker = _;
    l.deleteEncKeysAndCache = f;
}, 98);