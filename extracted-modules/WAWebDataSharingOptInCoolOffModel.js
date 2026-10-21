__d("WAWebDataSharingOptInCoolOffModel", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e = null;
    function isCoolOffActive() {
        const t = o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_opt_in_cool_off_period");
        if (e == null) {
            const n = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF);
            e = o("WATimeUtils").castToUnixTime(typeof n === "number" ? n : 0);
        }
        return o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(t, e));
    }
    function startCoolOff() {
        e = o("WATimeUtils").unixTime();
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF, e);
    }
    const resetCoolOffStartTimestamp = function() {
        if (r("gkx")("16539")) {
            e = null;
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF, null);
        }
    };
    const d = {
        isCoolOffActive,
        startCoolOff,
        resetCoolOffStartTimestamp
    };
    l.DataSharingOptInCoolOffModel = d;
}, 98);