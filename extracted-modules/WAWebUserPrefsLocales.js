__d("WAWebUserPrefsLocales", [
    "WAComms",
    "WAWebL10NHelpers",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_PHONE);
        return e ?? r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.LANG);
    }
    function s() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_USER);
    }
    function u(e) {
        if (o("WAWebL10NHelpers").isLocalLanguageOverrideEnabled()) {
            r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_USER, e);
            if (o("WAComms").isSocketConnected()) {
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_USER, e);
            }
        }
    }
    function c(e) {
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_PHONE, e);
        if (o("WAComms").isSocketConnected()) {
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.LANG_FROM_PHONE, e);
        }
    }
    function d(e) {
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").KEYS.LANG_DID_MISMATCH_WITH_COOKIE, e);
    }
    function m() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.LANG_DID_MISMATCH_WITH_COOKIE) ?? false;
    }
    function p(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.HOUR_24_FROM_PHONE, e);
    }
    function _(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.HOUR_24_FROM_DEVICE, e);
    }
    function f() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.HOUR_24_FROM_PHONE);
        if (typeof e === "boolean") {
            return e;
        }
        const t = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.HOUR_24);
        if (typeof t === "boolean") {
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.HOUR_24_FROM_PHONE, t);
        }
        if (typeof t === "boolean") {
            return t;
        }
        return null;
    }
    function g() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.HOUR_24_FROM_DEVICE);
        if (typeof e === "boolean") {
            return e;
        }
        return null;
    }
    l.getPhoneLangPref = e;
    l.getUserLangPref = s;
    l.setUserLangPref = u;
    l.setPhoneLangPref = c;
    l.setLangPrefCookieDidMismatchWithUserPref = d;
    l.getLangPrefCookieDidMismatchWithUserPref = m;
    l.setPhoneHour24 = p;
    l.setDeviceHour24 = _;
    l.getPhoneHour24 = f;
    l.getDeviceHour24 = g;
}, 98);