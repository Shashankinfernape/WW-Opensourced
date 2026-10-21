__d("WAWebDataSharingUpsellModel", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    let e = null;
    function s() {
        if (e == null) {
            const t = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE);
            e = t === true;
        }
        return e;
    }
    function u() {
        if (e !== true) {
            e = true;
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE, true);
        }
    }
    l.isUpsellEnabled = s;
    l.enableUpsell = u;
}, 98);