__d("WAWebCoexStateSyncNotification", [
    "WALogger",
    "WAWebAECompanionGating",
    "WAWebBackendApi",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        try {
            if (!o("WAWebAECompanionGating").isCoexStateSyncEnabled()) {
                return;
            }
            o("WAWebBackendApi").frontendFireAndForget("coexStateSyncNotification", {});
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleCoexStateSyncNotification: failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("coex-state-sync-notification-failed");
        }
    }
    l.handleCoexStateSyncNotification = s;
}, 98);