__d("WAWebUserPrefsScreenLock", [
    "WAArrayBufferUtils",
    "WABase64",
    "WABinary",
    "WAWebDbEncryptionKey",
    "WAWebPermanentStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
        const t = parseInt(r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS) ?? 0, 10);
        return t !== 0;
    }
    function s() {
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
    }
    function u() {
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS) ?? 0;
    }
    function c(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS, e);
    }
    function d(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV, e);
    }
    function m() {
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV);
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV);
    }
    function p(e) {
        return r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT, e, {
            shouldWriteToIdb: false
        });
    }
    function _() {
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT, false);
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = I();
            const n = yield R(String(e), t);
            return r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS, `${n}_${t}`);
        });
        return g.apply(this, arguments);
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS);
            const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS);
            if (e == null) {
                return null;
            }
            if (typeof e === "number") {
                return parseInt(e, 10);
            }
            const t = e.split("_");
            const n = t[0];
            const a = t[1];
            if (n == null || a == null) {
                return null;
            }
            const i = yield E(n, a);
            return parseInt(i, 10);
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT);
            const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT);
            if (e == null) {
                return 0;
            }
            if (typeof e === "number") {
                return parseInt(e, 10);
            }
            const t = e.split("_");
            const n = t[0];
            const a = t[1];
            const i = yield E(n, a);
            return parseInt(i, 10);
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = I();
            const a = yield R(String(e), n);
            if (!t.aborted) {
                r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT, `${a}_${n}`);
            }
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Uint8Array(o("WABase64").decodeB64(t));
            const r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0];
            const a = yield self.crypto.subtle.encrypt({
                iv: n,
                name: "AES-CBC"
            }, r.key, o("WAArrayBufferUtils").stringToArrayBuffer(e));
            return o("WABase64").encodeB64(a);
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Uint8Array(o("WABase64").decodeB64(t));
            yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit();
            const r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0];
            const a = yield self.crypto.subtle.decrypt({
                iv: n,
                name: "AES-CBC"
            }, r.key, o("WABase64").decodeB64(e));
            return o("WAWebX509Utils").arrayBufferToString(a);
        });
        return k.apply(this, arguments);
    }
    function I() {
        const e = new Uint8Array(16);
        self.crypto.getRandomValues(e);
        const t = new (o("WABinary")).Binary(e).readByteArrayView(16);
        return o("WABase64").encodeB64(t);
    }
    function T(e, t) {
        const n = r("WAWebUserPrefsStore").get(e);
        if (n != null) {
            const o = t != null ? {
                shouldWriteToIdb: t
            } : null;
            r("WAWebUserPrefsStore").setUser(e, n, o ?? {});
            r("WAWebPermanentStorage").removeItem(e);
        }
    }
    l.getScreenLockEnabled = e;
    l.getScreenLockDurationForLogging = s;
    l.getScreenLockDurationInSeconds = u;
    l.setScreenLockDurationInSeconds = c;
    l.setScreenLockIvString = d;
    l.getScreenLockIvString = m;
    l.setScreenLockSalt = p;
    l.getScreenLockSalt = _;
    l.setScreenLockIterations = f;
    l.getScreenLockIterations = h;
    l.getScreenUnlockTryCount = C;
    l.setScreenUnlockTryCount = v;
}, 98);