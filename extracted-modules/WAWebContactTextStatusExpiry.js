__d("WAWebContactTextStatusExpiry", [
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebTextStatusUtils",
    "WAWebUpdateTextStatusForContact"
], function(t, n, r, o, a, i, l) {
    const e = 1000;
    function s(t) {
        const t_textStatusExpiryTs = t.textStatusExpiryTs;
        if (t_textStatusExpiryTs != null) {
            if (t.meTextStatusExpiryTimer != null) {
                r("WAWebAlarm").clearTimeout(t.meTextStatusExpiryTimer);
            }
            if (t_textStatusExpiryTs < o("WATimeUtils").unixTime()) {
                self.setTimeout(function() {
                    u(t);
                });
            } else {
                t.meTextStatusExpiryTimer = r("WAWebAlarm").setGlobalTimeout(function() {
                    return u(t);
                }, t_textStatusExpiryTs * e, t.meTextStatusExpiryTimer);
            }
        }
    }
    function u(e) {
        let t;
        r("WAWebAlarm").clearTimeout(e.meTextStatusExpiryTimer);
        e.unset([
            "meTextStatusExpiryTimer"
        ]);
        o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
            contactId: e.id,
            textString: (t = o("WAWebTextStatusUtils")).CLEAR_TEXT_STATUS_STRING_VAL,
            emoji: t.CLEAR_TEXT_STATUS_EMOJI_VAL,
            ephemeralDuration: t.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL,
            newUpdateTime: t.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL,
            source: "clear-self-expiry"
        });
    }
    l.setupContactTextStatusExpiration = s;
}, 98);