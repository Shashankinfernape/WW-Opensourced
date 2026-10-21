__d("WAWebUtmBizPrefs", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = c();
        const a = Date.now();
        n[e] = babelHelpers.extends({
            addedTime: a
        }, t);
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.CHAT_UTM, JSON.stringify(n));
    }
    function s(e) {
        const t = c();
        delete t[e];
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.CHAT_UTM, JSON.stringify(t));
    }
    function u(e) {
        const t = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.CHAT_UTM);
        if (t == null) {
            return null;
        }
        try {
            return JSON.parse(t)[e];
        } catch (e) {
            return null;
        }
    }
    function c() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.CHAT_UTM);
        if (e == null) {
            return {};
        }
        try {
            return JSON.parse(e) ?? {};
        } catch (e) {
            return {};
        }
    }
    l.persistUtmtoLocalStorage = e;
    l.removeUtmFromLocalStorage = s;
    l.getUtmFromLocalStorage = u;
    l.getAllUtmsFromLocalStorage = c;
}, 98);