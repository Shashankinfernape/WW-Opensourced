__d("WAWebClockDurationFormatters", [
    "fbt",
    "WATimeUtils",
    "WAWeb-moment",
    "err"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const t = typeof e === "string" ? parseInt(e, 10) : e;
        const n = r("WAWeb-moment").utc(t * 1000);
        if (n.isValid()) {
            const a = t < o("WATimeUtils").HOUR_SECONDS ? "m:ss" : "H:mm:ss";
            return n.format(a);
        }
        return "";
    }
    function u(e) {
        let t;
        let n = e;
        const r = Math.floor(n / (t = o("WATimeUtils")).DAY_SECONDS);
        n -= r * t.DAY_SECONDS;
        const a = Math.floor(n / t.HOUR_SECONDS);
        n -= a * t.HOUR_SECONDS;
        const i = Math.floor(n / t.MINUTE_SECONDS);
        const l = Math.floor(n % t.MINUTE_SECONDS);
        const u = s._("_j{\"*\":\"{days} days\",\"_1\":\"1 day\"}", [
            s._plural(r, "days")
        ]);
        const c = s._("_j{\"*\":\"{hours} hours\",\"_1\":\"1 hour\"}", [
            s._plural(a, "hours")
        ]);
        const d = s._("_j{\"*\":\"{minutes} minutes\",\"_1\":\"1 minute\"}", [
            s._plural(i, "minutes")
        ]);
        const m = s._("_j{\"*\":\"{seconds} seconds\",\"_1\":\"1 second\"}", [
            s._plural(l, "seconds")
        ]);
        if (r > 0) {
            return s._("{x days} {x hours} {x minutes} {x seconds}", [
                s._param("x days", u),
                s._param("x hours", c),
                s._param("x minutes", d),
                s._param("x seconds", m)
            ]);
        }
        if (a > 0) {
            return s._("{x hours} {x minutes} {x seconds}", [
                s._param("x hours", c),
                s._param("x minutes", d),
                s._param("x seconds", m)
            ]);
        }
        if (i > 0) {
            return s._("{x minutes} {x seconds}", [
                s._param("x minutes", d),
                s._param("x seconds", m)
            ]);
        }
        return m;
    }
    function c(e) {
        let t;
        let n = e;
        const r = Math.floor(n / (t = o("WATimeUtils")).DAY_SECONDS);
        n -= r * t.DAY_SECONDS;
        const a = Math.floor(n / t.HOUR_SECONDS);
        n -= a * t.HOUR_SECONDS;
        const i = Math.floor(n % t.MINUTE_SECONDS);
        const l = r * 24 + a;
        const u = Math.floor(e / t.MINUTE_SECONDS);
        if (r >= 1) {
            return s._("_j{\"*\":\"{days} days\",\"_1\":\"1 day\"}", [
                s._plural(r, "days")
            ]);
        }
        if (l >= 1) {
            return s._("_j{\"*\":\"{hours} hours\",\"_1\":\"1 hour\"}", [
                s._plural(l, "hours")
            ]);
        }
        if (u >= 1) {
            return s._("_j{\"*\":\"{minutes} minutes\",\"_1\":\"1 minute\"}", [
                s._plural(u, "minutes")
            ]);
        }
        return s._("_j{\"*\":\"{seconds} seconds\",\"_1\":\"1 second\"}", [
            s._plural(i, "seconds")
        ]);
    }
    function d(e) {
        const t = Math.floor(e / 86400);
        if (t > 0) {
            return s._("_j{\"*\":\"{days}d\"}", [
                s._plural(t),
                s._param("days", t)
            ]);
        }
        const n = Math.floor(e / 3600);
        if (n > 0) {
            return s._("_j{\"*\":\"{hours}h\"}", [
                s._plural(n),
                s._param("hours", n)
            ]);
        }
        const r = Math.floor(e / 60);
        if (r > 0) {
            return s._("_j{\"*\":\"{minutes}m\"}", [
                s._plural(r),
                s._param("minutes", r)
            ]);
        }
        return s._("_j{\"*\":\"{seconds}s\"}", [
            s._plural(e),
            s._param("seconds", e)
        ]);
    }
    function m(e) {
        const t = Math.floor(e / 3600);
        const n = Math.floor(e % 3600 / 60);
        const r = e % 60;
        if (t > 24 || t === 24 && (n > 0 || r > 0)) {
            const o = Math.ceil(e / 86400);
            return s._("_j{\"*\":\"{days} days\",\"_1\":\"1 day\"}", [
                s._plural(o, "days")
            ]);
        }
        const a = t.toString().padStart(2, "0");
        const i = n.toString().padStart(2, "0");
        const l = r.toString().padStart(2, "0");
        return s._("{x hours}:{x minutes}:{x seconds}", [
            s._param("x hours", a),
            s._param("x minutes", i),
            s._param("x seconds", l)
        ]);
    }
    function p(e) {
        const t = Math.max(0, Math.floor(e));
        if (t > o("WATimeUtils").DAY_SECONDS) {
            const n = Math.ceil(t / o("WATimeUtils").DAY_SECONDS);
            return s._("_j{\"*\":\"{days} days\",\"_1\":\"1 day\"}", [
                s._plural(n, "days")
            ]);
        }
        const r = Math.floor(t / o("WATimeUtils").HOUR_SECONDS);
        const a = Math.floor(t % o("WATimeUtils").HOUR_SECONDS / o("WATimeUtils").MINUTE_SECONDS);
        const i = t % o("WATimeUtils").MINUTE_SECONDS;
        const l = a.toString().padStart(2, "0");
        const u = i.toString().padStart(2, "0");
        if (r > 0) {
            const c = r.toString().padStart(2, "0");
            return s._("{x hours}:{x minutes}:{x seconds}", [
                s._param("x hours", c),
                s._param("x minutes", l),
                s._param("x seconds", u)
            ]);
        }
        return s._("{x minutes}:{x seconds}", [
            s._param("x minutes", l),
            s._param("x seconds", u)
        ]);
    }
    function _(e) {
        const t = Math.floor(e / 86400);
        if (t > 0) {
            const n = s._("_j{\"*\":\"{days} days\",\"_1\":\"{days} day\"}", [
                s._plural(t),
                s._param("days", t)
            ]);
            return s._("Try again in {time}.", [
                s._param("time", n)
            ]);
        }
        const r = Math.floor(e / 3600);
        if (r > 0) {
            const o = s._("_j{\"*\":\"{hours} hours\",\"_1\":\"{hours} hour\"}", [
                s._plural(r),
                s._param("hours", r)
            ]);
            return s._("Try again in {time}.", [
                s._param("time", o)
            ]);
        }
        const a = Math.floor(e / 60);
        if (a > 0) {
            const i = s._("_j{\"*\":\"{minutes} minutes\",\"_1\":\"{minutes} minute\"}", [
                s._plural(a),
                s._param("minutes", a)
            ]);
            return s._("Try again in {time}.", [
                s._param("time", i)
            ]);
        }
        const l = s._("_j{\"*\":\"{seconds} seconds\",\"_1\":\"{seconds} second\"}", [
            s._plural(e),
            s._param("seconds", e)
        ]);
        return s._("Try again in {time}.", [
            s._param("time", l)
        ]);
    }
    function f(e) {
        if (e < 0) {
            throw r("err")("negative duration");
        }
        if (e === 0) {
            return s._("Now");
        }
        const t = r("WAWeb-moment")().subtract(e, "seconds").year();
        const n = r("WAWeb-moment")().year();
        if (n !== t) {
            const o = r("WAWeb-moment")().subtract(e, "seconds").format("MMM DD, YYYY");
            return s._("{formattedDate}", [
                s._param("formattedDate", o)
            ]);
        }
        const a = Math.floor(e / 86400);
        if (a > 7) {
            const i = r("WAWeb-moment")().subtract(e, "seconds").format("MMM DD");
            return s._("{formattedDate}", [
                s._param("formattedDate", i)
            ]);
        }
        if (e < 60) {
            return s._("Just now");
        }
        return d(e);
    }
    function g(e) {
        const t = d(e);
        return s._("{time} left", [
            s._param("time", t)
        ]);
    }
    function h(e, t) {
        const o = r("WAWeb-moment").unix(e).startOf("day");
        const a = t === void 0 ? r("WAWeb-moment")().startOf("day") : r("WAWeb-moment").unix(t).startOf("day");
        const i = a.diff(o, "days");
        return Math.abs(i);
    }
    l.durationStr = e;
    l.callDurationStr = u;
    l.callDurationStrSimple = c;
    l.shortDurationString = d;
    l.enforcementTimeLeftStr = m;
    l.afterReadingExpiryTimeStr = p;
    l.tryAgainInStr = _;
    l.relativeShortStr = f;
    l.timeLeftStr = g;
    l.daysDeltaAbs = h;
}, 226);