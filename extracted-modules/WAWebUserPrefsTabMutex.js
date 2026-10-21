__d("WAWebUserPrefsTabMutex", [
    "WAWebLocalStorage",
    "WAWebPermanentStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = `x${Math.round(Math.random() * 1000000000)}`;
    function s() {
        return r("WAWebUserPrefsStore").getPSIgnoringCache(o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX);
    }
    function u(t) {
        const n = t != null && t !== "" ? `${e}:${t}` : t;
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX, n, {
            storage: r("WAWebPermanentStorage")
        });
    }
    function c() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX, null, {
            storage: r("WAWebPermanentStorage")
        });
    }
    function d(e) {
        const t = e ? JSON.parse(e) : "";
        return t && t.toString().split(/:/).pop();
    }
    function m(t) {
        if (t.key !== o("WAWebUserPrefsKeys").KEYS.WHATSAPP_MUTEX) {
            return false;
        }
        const n = t.newValue || "";
        return !n.includes(e);
    }
    function p() {
        return (s() || "").includes(e);
    }
    function _() {
        const t = {
            wa_tab_src: e
        };
        r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.LOCAL_TAKEOVER_OK, JSON.stringify(t));
        r("nullthrows")(r("WAWebLocalStorage")).removeItem(o("WAWebUserPrefsKeys").KEYS.LOCAL_TAKEOVER_OK);
    }
    function f(t) {
        if (t.key !== o("WAWebUserPrefsKeys").KEYS.LOCAL_TAKEOVER_OK) {
            return false;
        }
        const n = t.newValue || "";
        return !n.includes(e);
    }
    function g(e) {
        r("WAWebUserPrefsStore").setTS(o("WAWebUserPrefsKeys").KEYS.NO_TAKEOVER, e);
    }
    function h() {
        return !!r("WAWebUserPrefsStore").getTS(o("WAWebUserPrefsKeys").KEYS.NO_TAKEOVER);
    }
    l.THIS_TAB = e;
    l.getMutex = s;
    l.setMutex = u;
    l.removeMutex = c;
    l.parseMutex = d;
    l.mutexFilter = m;
    l.currentTabHasMutex = p;
    l.localTakeoverSuccess = _;
    l.takeoverFilter = f;
    l.setNoTakeover = g;
    l.getNoTakeover = h;
}, 98);