__d("WAWebFormatEventDateString", [
    "fbt",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebClock",
    "WAWebL10N"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        const n = o("WATimeUtils").castToUnixTime(e);
        const a = r("WAWeb-moment").unix(n);
        if (t == null || t === 0) {
            return u(a, {
                maybeShowAmPm: true
            });
        }
        const i = o("WATimeUtils").castToUnixTime(t);
        const l = r("WAWeb-moment").unix(i);
        if (o("WATimeUtils").sameDay(n, i)) {
            const c = a.format("a") === l.format("a");
            return s._("{start-date} - {end-time}", [
                s._param("start-date", u(a, {
                    maybeShowAmPm: !c
                })),
                s._param("end-time", u(l, {
                    maybeShowAmPm: true,
                    timeOnly: true,
                    lowercase: true
                }))
            ]);
        }
        return s._("{start-date} - {end-date}", [
            s._param("start-date", u(a, {
                maybeShowAmPm: true
            })),
            s._param("end-date", u(l, {
                maybeShowAmPm: true,
                lowercase: true
            }))
        ]);
    }
    function u(e, t) {
        const n = t.maybeShowAmPm && !o("WAWebClock").Clock.getIs24Hour();
        const a = o("WATimeUtils").unixTime();
        const i = o("WATimeUtils").castToUnixTime(e.unix());
        if (t.timeOnly === true) {
            return o("WAWebClock").Clock.timestampStr(i);
        }
        let l = "LT";
        if (n === false) {
            l = "h:mm";
        }
        const u = o("WATimeUtils").sameDay(o("WATimeUtils").castToUnixTime(r("WAWeb-moment")().subtract(1, "day").unix()), i);
        if (u) {
            if (t.lowercase === true) {
                return s._("yesterday, {time}", [
                    s._param("time", e.format(l))
                ]);
            }
            return s._("Yesterday, {time}", [
                s._param("time", e.format(l))
            ]);
        }
        const c = o("WATimeUtils").sameDay(a, i);
        if (c) {
            if (t.lowercase === true) {
                return s._("today, {time}", [
                    s._param("time", e.format(l))
                ]);
            }
            return s._("Today, {time}", [
                s._param("time", e.format(l))
            ]);
        }
        const d = o("WATimeUtils").sameDay(o("WATimeUtils").castToUnixTime(r("WAWeb-moment")().add(1, "day").unix()), i);
        if (d) {
            if (t.lowercase === true) {
                return s._("tomorrow, {time}", [
                    s._param("time", e.format(l))
                ]);
            }
            return s._("Tomorrow, {time}", [
                s._param("time", e.format(l))
            ]);
        }
        let m = "ddd, MMM D";
        let p = "MMM D, YYYY";
        if (r("WAWebL10N").getLanguage() !== "en") {
            m = "LL";
            p = "LL";
        }
        const _ = e.isSame(r("WAWeb-moment")(), "year");
        if (_) {
            return s._("{date}, {time}", [
                s._param("date", e.format(m)),
                s._param("time", e.format(l))
            ]);
        }
        return s._("{date}, {time}", [
            s._param("date", e.format(p)),
            s._param("time", e.format(l))
        ]);
    }
    l.getEventDateStringFor = e;
}, 226);