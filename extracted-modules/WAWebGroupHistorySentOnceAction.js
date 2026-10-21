__d("WAWebGroupHistorySentOnceAction", [
    "WAWebUserPrefsLocalStorage"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage("WAGroupHistorySentOnce", true);
    }
    function s() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage("WAGroupHistorySentOnce") === true;
    }
    l.markGroupHistorySentOnce = e;
    l.hasSentGroupHistoryOnce = s;
}, 98);