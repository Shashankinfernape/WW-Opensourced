__d("WAWebMessageListDayOfMsg", [
    "WAWeb-moment",
    "WAWebClock"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const e_startOfDaySkew = e.startOfDaySkew;
        if (e_startOfDaySkew !== undefined && e_startOfDaySkew > o("WAWebClock").Clock.skew - 30 && e_startOfDaySkew < o("WAWebClock").Clock.skew + 30) {
            return e.startOfDay;
        }
        e.startOfDaySkew = o("WAWebClock").Clock.skew;
        return e.startOfDay = r("WAWeb-moment").unix(e.t + o("WAWebClock").Clock.skew).startOf("day").unix();
    }
    l.default = e;
}, 98);