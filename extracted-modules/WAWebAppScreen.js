__d("WAWebAppScreen", [
    "WAWebAppMutex",
    "WAWebAppScreenTypes",
    "WAWebBuildConstants",
    "WAWebStreamModel",
    "cr:11133",
    "cr:12321",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t;
        const { anotherSession: a, mainLoaded: i, mode: l, screenLocked: s } = e;
        if ((t = e.temporaryBan) != null && t.banned) {
            return o("WAWebAppScreenTypes").AppScreen.TEMP_BAN;
        }
        if (e.serviceUnavailable === true) {
            return o("WAWebAppScreenTypes").AppScreen.SERVICE_UNAVAILABLE;
        }
        if (e.startLogout) {
            return o("WAWebAppScreenTypes").AppScreen.LOGOUT;
        }
        if (r("WAWebAppMutex").hasShownCallTakeoverModal()) {
            return o("WAWebAppScreenTypes").AppScreen.CALL_TAKEOVER_PREVENTION;
        }
        if (a) {
            return o("WAWebAppScreenTypes").AppScreen.ANOTHER_SESSION;
        }
        if (s) {
            if (i) {
                return o("WAWebAppScreenTypes").AppScreen.SCREEN_LOCK;
            }
            return o("WAWebAppScreenTypes").AppScreen.STARTUP;
        }
        switch(l){
            case o("WAWebStreamModel").StreamMode.QR:
                return o("WAWebAppScreenTypes").AppScreen.QR;
            case o("WAWebStreamModel").StreamMode.SYNCING:
                if ((n("cr:11133") == null ? void 0 : n("cr:11133")()) === true && i && (n("cr:12321") == null ? void 0 : n("cr:12321").isMeUserRestored()) === true) {
                    return o("WAWebAppScreenTypes").AppScreen.MAIN;
                }
                return o("WAWebAppScreenTypes").AppScreen.SYNCING;
            case o("WAWebStreamModel").StreamMode.OFFLINE:
                if (i && o("WAWebBuildConstants").WINDOWS_OFFLINE) {
                    return o("WAWebAppScreenTypes").AppScreen.MAIN;
                }
                return o("WAWebAppScreenTypes").AppScreen.OFFLINE;
            case o("WAWebStreamModel").StreamMode.PROXYBLOCK:
                return o("WAWebAppScreenTypes").AppScreen.PROXYBLOCK;
            case o("WAWebStreamModel").StreamMode.CONFLICT:
                return o("WAWebAppScreenTypes").AppScreen.CONFLICT;
            case o("WAWebStreamModel").StreamMode.TOS_BLOCK:
                return o("WAWebAppScreenTypes").AppScreen.TOS_BLOCK;
            case o("WAWebStreamModel").StreamMode.SMB_TOS_BLOCK:
                return o("WAWebAppScreenTypes").AppScreen.SMB_TOS_BLOCK;
            case o("WAWebStreamModel").StreamMode.MAIN:
                if (o("WAWebBuildConstants").WINDOWS_OFFLINE) {
                    return o("WAWebAppScreenTypes").AppScreen.MAIN;
                }
                if (i) {
                    if (e.stayInSync && (n("cr:11133") == null ? void 0 : n("cr:11133")()) !== true) {
                        return o("WAWebAppScreenTypes").AppScreen.SYNCING;
                    }
                    return o("WAWebAppScreenTypes").AppScreen.MAIN;
                }
                return o("WAWebAppScreenTypes").AppScreen.STARTUP;
        }
        throw r("err")(`[app] render Error invalid StreamMode: ${l}`);
    }
    l.getScreen = e;
}, 98);