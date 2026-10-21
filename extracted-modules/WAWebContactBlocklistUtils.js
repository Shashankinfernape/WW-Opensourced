__d("WAWebContactBlocklistUtils", [
    "WAWebApiContact",
    "WAWebBlocklistCollection",
    "WAWebBlocklistMigration",
    "WAWebChatCollection",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.id.isUser()) {
            if (o("WAWebBlocklistMigration").applyBlocklistV2Rules()) {
                e.isContactBlocked = u(e);
            } else {
                e.isContactBlocked = s(e);
            }
        }
    }
    function s(e) {
        if (o("WAWebBlocklistCollection").BlocklistCollection.get(e.id)) {
            return true;
        }
        if (e.id.isLid() && e.phoneNumber != null) {
            return o("WAWebBlocklistCollection").BlocklistCollection.get(e.phoneNumber) != null;
        }
        const t = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e.id));
        const n = t != null && o("WAWebBlocklistCollection").BlocklistCollection.get(t) != null;
        return n;
    }
    function u(e) {
        if (e.id.isRegularUserPn()) {
            const t = o("WAWebChatCollection").ChatCollection.get(e.id);
            if (t?.accountLid == null) {
                return false;
            }
            return o("WAWebBlocklistCollection").BlocklistCollection.get(t.accountLid) != null;
        }
        return o("WAWebBlocklistCollection").BlocklistCollection.get(e.id) != null;
    }
    l.updateContactBlocked = e;
}, 98);