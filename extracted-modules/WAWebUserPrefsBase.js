__d("WAWebUserPrefsBase", [
    "WALogger",
    "WAWebPermanentStorage",
    "WAWebUserPrefsKeys",
    "WAWebWidJsonReviver",
    "cr:34987",
    "err"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = n("cr:34987") ?? {};
    const c = u.notifySettingChangeHandler;
    const d = [
        o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX,
        o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS,
        o("WAWebUserPrefsKeys").MD_KEYS.INITIAL_HISTORY_SYNCED,
        o("WAWebUserPrefsKeys").MD_KEYS.WEB_ENC_SALT,
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxAcknowledged
    ];
    const m = {
        isRawString: false,
        ignoreCache: false,
        shouldWriteToIdb: true,
        storage: r("WAWebPermanentStorage")
    };
    const p = (()=>{
        function e() {}
        const t = e.prototype;
        t.$1 = function(t, n) {
            if (d.includes(t)) {
                return r("WAWebPermanentStorage");
            }
            return n ?? m.storage;
        };
        t.get = function(t, n) {
            if (t == null) {
                throw r("err")("UserPreferencesStoreBase.get called with no key");
            }
            const e = t;
            const a = this.$1(e, n?.storage);
            const i = n?.ignoreCache == null ? m.ignoreCache : n.ignoreCache;
            const l = a.getItem(e, i);
            const u = n?.isRawString == null ? m.isRawString : n.isRawString;
            if (u || l == null) {
                return l;
            }
            try {
                return JSON.parse(l, o("WAWebWidJsonReviver").jsonWidReviver);
            } catch (t) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "UserPreferencesStoreBase.get(): failed: ",
                    ""
                ])), String(t)).sendLogs("userprefs-parse-error");
                a.removeItem(e);
                return;
            }
        };
        t.set = function(t, n, o) {
            if (t == null) {
                throw r("err")("UserPreferencesStoreBase.set called with no key");
            }
            const e = t;
            const a = this.$1(e, o?.storage);
            if (n == null) {
                a.removeItem(e);
            } else {
                const i = o?.isRawString == null ? m.isRawString : o.isRawString;
                if (i) {
                    if (typeof n === "string") {
                        a.setItem(e, n);
                    } else {
                        throw r("err")("UserPreferencesStoreBase.set: expecting string because isRawString is true");
                    }
                } else {
                    const l = o?.shouldWriteToIdb == null ? m.shouldWriteToIdb : o.shouldWriteToIdb;
                    a.setItem(e, JSON.stringify(n), l);
                }
            }
            c?.(e, n);
        };
        return e;
    })();
    const _ = new p;
    l.ENFORCE_PERMANENT_STORAGE_KEYS = d;
    l.UserPreferencesStoreBase = p;
    l.userPreferencesStoreBase = _;
}, 98);