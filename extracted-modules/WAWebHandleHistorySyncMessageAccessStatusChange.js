__d("WAWebHandleHistorySyncMessageAccessStatusChange", [
    "WALogger",
    "WAWebEnvironment",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!r("WAWebEnvironment").isWindows) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] MESSAGE_ACCESS_STATUS notification received but not on Windows Hybrid"
                ]))).sendLogs("history-sync-message-access-status-change-not-hybrid");
                return;
            }
            const a = t.messageAccessStatus?.completeAccessGranted;
            if (a == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] MESSAGE_ACCESS_STATUS notification received but messageAccessStatus.completeAccessGranted is empty"
                ]))).sendLogs("history-sync-message-access-status-change-empty");
                return;
            }
            const i = a === true;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Setting history sync complete on demand access granted to: ",
                ""
            ])), i);
            yield o("WAWebUserPrefsHistorySync").setHistorySyncCompleteOnDemandAccessGranted(i);
        });
        return d.apply(this, arguments);
    }
    l.handleHistorySyncMessageAccessStatusChange = c;
}, 98);