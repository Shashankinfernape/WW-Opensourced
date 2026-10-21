__d("WAWebPersistedPrefObject", [
    "WALogger",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n, a) {
        const i = r("WAWebUserPrefsStore").getUser(t);
        if (i == null) {
            return null;
        }
        if (typeof i === "object") {
            const l = n(i);
            if (l != null) {
                return l;
            }
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "WAWebPersistedPrefObject: malformed value for ",
            "; resetting"
        ])), t).sendLogs(a);
        r("WAWebUserPrefsStore").setUser(t, null);
        return null;
    }
    function u(e, t) {
        r("WAWebUserPrefsStore").setUser(e, t);
    }
    l.readPersistedPrefObject = s;
    l.writePersistedPrefObject = u;
}, 98);