__d("WAWebUserPrefsEvents", [
    "WATimeUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    let e = null;
    function s() {
        if (e != null) {
            return e;
        }
        const t = parseInt(r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").UserPrefs.CagEventsAwarenessBannerFirstSeenTimestamp), 10);
        if (!Number.isNaN(t)) {
            e = o("WATimeUtils").castToUnixTime(t);
        }
        return e;
    }
    function u() {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").UserPrefs.CagEventsAwarenessBannerFirstSeenTimestamp, o("WATimeUtils").unixTime());
    }
    function c() {
        const e = s();
        if (e == null) {
            return o("WATimeUtils").unixTime();
        }
        return o("WATimeUtils").futureUnixTime(o("WATimeUtils").WEEK_SECONDS, e);
    }
    l.getCagEventsAwarenessBannerFirstSeenTimestamp = s;
    l.setCagEventsAwarenessBannerFirstSeenTimestamp = u;
    l.getCagEventsAwarenessBannerAutoDismissalExpiration = c;
}, 98);