__d("WAWebUpdateClockSkewUtils", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebClockSkewDifferenceTWamEvent",
    "cr:2960"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = Date.now() / 1000;
        const newClockSkew = Math.round(t - e);
        const a = Math.round(newClockSkew / o("WATimeUtils").HOUR_SECONDS);
        if (a !== 0 && o("WAWebABProps").getABPropConfigValue("log_clock_skew")) {
            new (o("WAWebClockSkewDifferenceTWamEvent")).ClockSkewDifferenceTWamEvent({
                clockSkewHourly: a * -1
            }).commit();
        }
        o("WATimeUtils").setClockSkew(newClockSkew);
        o("WAWebBackendApi").frontendFireAndForget("setWebClockSkew", {
            newClockSkew
        });
        if (n("cr:2960") != null) {
            n("cr:2960").reportLoginServerTime(o("WATimeUtils").castUnixTimeToMillisTime(e));
        }
    }
    l.updateClockSkew = e;
}, 98);