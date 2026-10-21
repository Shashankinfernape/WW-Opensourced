__d("WAWebUserPrefsUsername", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.UsernameState);
        if (e === "ACTIVE" || e === "RESERVED") {
            return e;
        }
        return null;
    }
    function s(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.UsernameState, e);
    }
    l.getUsernameState = e;
    l.setUsernameState = s;
}, 98);