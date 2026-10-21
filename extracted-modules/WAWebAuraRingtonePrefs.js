__d("WAWebAuraRingtonePrefs", [
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "AuraSelectedRingtoneId";
    const s = "AuraChatRingtone_";
    const u = "AuraRingtonePackVersion";
    const c = "__default__";
    const d = "__none__";
    function m() {
        return typeof r("WAWebUserPrefsStore").getUser(e) === "string";
    }
    function p() {
        const t = r("WAWebUserPrefsStore").getUser(e);
        if (typeof t === "string") {
            return t;
        }
        return c;
    }
    function _(t) {
        r("WAWebUserPrefsStore").setUser(e, t);
    }
    function f() {
        r("WAWebUserPrefsStore").setUser(e, c);
    }
    function g(e) {
        const t = s + e.toString();
        const n = r("WAWebUserPrefsStore").getUser(t);
        if (typeof n === "string") {
            return n;
        }
        return null;
    }
    function h(e, t) {
        r("WAWebUserPrefsStore").setUser(s + e.toString(), t);
    }
    function y() {
        const e = r("WAWebUserPrefsStore").getUser(u);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function C(e) {
        r("WAWebUserPrefsStore").setUser(u, String(e));
    }
    function b() {
        r("WAWebUserPrefsStore").setUser(u, null);
    }
    l.DEFAULT_RINGTONE_ID = c;
    l.NONE_RINGTONE_ID = d;
    l.hasExplicitRingtoneSelection = m;
    l.getSelectedRingtoneId = p;
    l.saveSelectedRingtoneId = _;
    l.resetToDefaultRingtone = f;
    l.getChatRingtoneId = g;
    l.saveChatRingtoneId = h;
    l.getStoredPackVersion = y;
    l.savePackVersion = C;
    l.clearPackVersion = b;
}, 98);