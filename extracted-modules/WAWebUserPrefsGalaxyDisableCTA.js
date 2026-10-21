__d("WAWebUserPrefsGalaxyDisableCTA", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_COLLECTION);
        if (Array.isArray(e)) {
            return new Set(e.filter((e)=>typeof e === "string"));
        }
        return new Set;
    }
    function s(e) {
        const t = Array.from(e);
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_COLLECTION, t);
    }
    function u(t) {
        const n = e();
        n.add(t);
        s(n);
    }
    function c(t) {
        const n = e();
        n.delete(t);
        s(n);
    }
    function d() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_AGM_COLLECTION);
        if (!Array.isArray(e)) {
            return [];
        }
        const t = [];
        for (const n of e){
            if (n != null && typeof n === "object" && typeof n.agmId === "string" && typeof n.chatId === "string") {
                t.push({
                    agmId: n.agmId,
                    chatId: n.chatId
                });
            }
        }
        return t;
    }
    function m(agmId, t) {
        const n = d();
        const a = [].concat(n, [
            {
                agmId,
                chatId: t
            }
        ]);
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_AGM_COLLECTION, a);
    }
    function p(e) {
        const t = d();
        const n = t.filter((t)=>t.agmId !== e);
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_GALAXY_DISABLE_CTA_AGM_COLLECTION, n);
    }
    l.getGalaxyDisableCTAMessageIds = e;
    l.setGalaxyDisableCTAMessageIds = s;
    l.addGalaxyDisableCTAMessageId = u;
    l.removeGalaxyDisableCTAMessageId = c;
    l.getGalaxyDisableCTAAgmEntries = d;
    l.addGalaxyDisableCTAAgmEntry = m;
    l.removeGalaxyDisableCTAAgmEntry = p;
}, 98);