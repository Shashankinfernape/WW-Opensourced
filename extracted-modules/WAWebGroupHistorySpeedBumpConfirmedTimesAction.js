__d("WAWebGroupHistorySpeedBumpConfirmedTimesAction", [
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebUserPrefsLocalStorage"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d()) ?? 0;
    }
    function u() {
        try {
            r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(d(), s() + 1);
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "recordGroupHistorySpeedBumpConfirmed: failed to persist count: ",
                ""
            ])), error).sendLogs("group-history-speed-bump-persist-failed");
        }
    }
    function c() {
        return s() < o("WAWebGroupHistoryGating").getGroupHistorySpeedBumpDialogDisplayTimes();
    }
    function d() {
        if (o("WAWebGroupHistoryGating").isGroupHistorySendDefaultOnEnabled() || o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled()) {
            return "WAGroupHistorySpeedBumpConfirmedTimesDefaultOn";
        }
        return "WAGroupHistorySpeedBumpConfirmedTimes";
    }
    l.getGroupHistorySpeedBumpConfirmedTimes = s;
    l.recordGroupHistorySpeedBumpConfirmed = u;
    l.isGroupHistorySpeedBumpNeeded = c;
}, 98);