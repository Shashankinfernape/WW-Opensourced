__d("WAWebEphemeralConstants", [
    "$InternalEnum",
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WATimeUtils").DAY_SECONDS * 7;
    const s = o("WATimeUtils").DAY_SECONDS * 90;
    const u = n("$InternalEnum").Mirrored([
        "KEPT",
        "UNKEPT"
    ]);
    const c = n("$InternalEnum").Mirrored([
        "Seconds",
        "Minutes",
        "Hours",
        "Days",
        "Weeks"
    ]);
    function d(e, t = false) {
        if (e < o("WATimeUtils").MINUTE_SECONDS) {
            return {
                duration: e,
                unit: c.Seconds
            };
        }
        if (e < o("WATimeUtils").HOUR_SECONDS) {
            const n = Math.floor(e / 60);
            return {
                duration: n,
                unit: c.Minutes
            };
        } else if (e <= o("WATimeUtils").DAY_SECONDS) {
            const r = Math.floor(e / 60 / 60);
            return {
                duration: r,
                unit: c.Hours
            };
        } else if (t) {
            if (e < o("WATimeUtils").WEEK_SECONDS) {
                const a = Math.floor(e / 24 / 60 / 60);
                return {
                    duration: a,
                    unit: c.Days
                };
            }
            const i = Math.floor(e / 7 / 24 / 60 / 60);
            return {
                duration: i,
                unit: c.Weeks
            };
        }
        const l = Math.floor(e / 24 / 60 / 60);
        return {
            duration: l,
            unit: c.Days
        };
    }
    l.ONE_DAY = o("WATimeUtils").DAY_SECONDS;
    l.SEVEN_DAYS = e;
    l.NINETY_DAYS = s;
    l.KeepInChatState = u;
    l.DurationUnit = c;
    l.getDurationForString = d;
}, 98);