__d("WAWebCoexV2RevokeAuthorization", [
    "WAWebCoexV2BotWid",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = u(e, t);
        if (n == null) {
            return null;
        }
        return o("WAWebUserPrefsMeUser").isMeAccount(n);
    }
    function s(e, t, n, r) {
        const a = u(e, t);
        if (a == null) {
            return null;
        }
        if (r || n == null) {
            return false;
        }
        return n.isSameAccountAndAddressingMode(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) || c(a, n);
    }
    function u(e, t) {
        if (e?.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) === true) {
            return t;
        }
        return null;
    }
    function c(e, t) {
        const n = o("WAWebLidMigrationUtils").toCommonAddressingMode(e, t);
        const r = n[0];
        const a = n[1];
        return r != null && a != null && r.isSameAccountAndAddressingMode(a);
    }
    l.getCoexV2RevokeAuthorizationForCurrentUser = e;
    l.getCoexV2RevokeAuthorization = s;
}, 98);