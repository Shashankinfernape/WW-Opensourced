__d("WAWebDeactivatedContactUtils", [
    "WAJids",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebOutContactCollection",
    "WAWebOutContactInviteGating"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t;
        const e_accountLid = e.accountLid;
        if (e_accountLid != null && (t = o("WAWebContactCollection").ContactCollection.get(e_accountLid)) != null) {
            return t;
        }
        return null;
    }
    function s(e) {
        return u(e) && o("WAWebOutContactInviteGating").isInviteDeactivatedUserWebEnabled();
    }
    function u(e) {
        const t = c(e);
        return t != null && o("WAWebOutContactCollection").OutContactCollection.get(t) != null;
    }
    function c(e) {
        const t = e?.id;
        if (t == null || !t.isRegularUser()) {
            return null;
        }
        const n = t.isLid() ? o("WAWebApiContact").getPnIfLidIsLatestMapping(t) : t;
        if (n != null) {
            return o("WAJids").toPhoneUserJid(n.user);
        }
        return null;
    }
    l.getDeactivatedChatContact = e;
    l.isDeactivatedContactInviteEnabled = s;
    l.isSyncedNonWAContact = u;
    l.getSyncedNonWAContactId = c;
}, 98);