__d("WAWebLinkify", [
    "WAJids",
    "WALinkify",
    "WASuspiciousLinks",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e, t = false, n) {
        const r = o("WALinkify").findLinks(e, t);
        return r.map((e)=>c(e, n));
    }
    function s({ httpOnly = false, sender, text }) {
        const i = o("WALinkify").findLink(text, httpOnly);
        if (i != null) {
            return c(i, sender);
        }
    }
    function u(e) {
        return e.body != null && s({
            httpOnly: true,
            text: e.body
        }) != null;
    }
    function c(e, t) {
        const n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        let r = null;
        if (t && n) {
            const a = t.isLid() ? o("WAJids").toLidUserJid(t.user) : o("WAJids").toPhoneUserJid(t.user);
            r = o("WASuspiciousLinks").findSuspiciousCharacters(e.domain, a, o("WAJids").toPhoneUserJid(n.user), []);
        }
        return babelHelpers.extends({}, e, {
            suspiciousCharacters: r ?? undefined
        });
    }
    l.findLinks = e;
    l.findLink = s;
    l.hasHttpLink = u;
}, 98);