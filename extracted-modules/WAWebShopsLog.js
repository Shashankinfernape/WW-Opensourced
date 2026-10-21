__d("WAWebShopsLog", [
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebUserPrefsMeUser",
    "WAWebWaShopsManagementWamEvent"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ? o("WAWebUserPrefsMeUser").getMaybeMePnUser() : undefined;
        return e?.user;
    }
    function s(shopsManagementAction, n) {
        const { isShopsProductPreviewVisible, shouldLogJid = true } = n ?? {};
        const s = new (o("WAWebWaShopsManagementWamEvent")).WaShopsManagementWamEvent({
            isShopsProductPreviewVisible,
            shopsManagementAction,
            shopsSellerJid: shouldLogJid ? e() : undefined
        });
        s.commit();
    }
    l.logShopsManagementEvent = s;
}, 98);