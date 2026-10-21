__d("WAWebUnknownUserDisplayedLogger", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebLidMigrationUtils",
    "WAWebPersistedPrefObject",
    "WAWebUserPrefsKeys",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameUnknownUserDisplayedWamEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 6 * o("WATimeUtils").HOUR_SECONDS;
    function c() {
        return o("WAWebPersistedPrefObject").readPersistedPrefObject(o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW, d, "unknown-user-wam-window-malformed");
    }
    function d({ count, start }) {
        if (typeof count !== "number" || typeof start !== "number") {
            return null;
        }
        return {
            count,
            start: o("WATimeUtils").castToUnixTime(start)
        };
    }
    function m(e) {
        o("WAWebPersistedPrefObject").writePersistedPrefObject(o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_WAM_WINDOW, e);
    }
    function p() {
        return o("WAWebABProps").getABPropConfigValue("username_unknown_user_logging_enabled") && o("WAWebUsernameGatingUtils").usernameAdoptionAndEngagementMonitoringEnabled();
    }
    function _() {
        const e = o("WAWebABProps").getABPropConfigValue("unknown_user_wam_max_events_per_window");
        if (e <= 0) {
            return false;
        }
        const t = o("WATimeUtils").unixTime();
        const n = c();
        let r;
        let a;
        if (n != null && t - n.start < u) {
            r = n.start;
            a = n.count;
        } else {
            r = t;
            a = 0;
        }
        if (a >= e) {
            return false;
        }
        m({
            count: a + 1,
            start: r
        });
        return true;
    }
    function f(e) {
        if (e.isBot()) {
            return "bot";
        }
        if (e.isLid()) {
            return "lid";
        }
        if (e.isGroup()) {
            return "group";
        }
        return "pn";
    }
    function g(e) {
        if (o("WAWebABProps").getABPropConfigValue("unknown_user_target_rid_logging") && (e.isLid() || e.isRegularUserPn())) {
            return o("WAWebLidMigrationUtils").toUserLid(e)?.user;
        }
    }
    function h(unknownUserDisplayContext, n, r) {
        if (o("WAWebCurrentUser").isEmployee()) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[uname]: Unknown user placeholder shown on ",
                ", wid=",
                ""
            ])), unknownUserDisplayContext, n.toString()).sendLogs("unknown-user-displayed");
        } else {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[uname]: Unknown user placeholder shown on ",
                ""
            ])), unknownUserDisplayContext);
        }
        new (o("WAWebUsernameUnknownUserDisplayedWamEvent")).UsernameUnknownUserDisplayedWamEvent({
            unknownUserDisplayContext,
            clientTsMs: r.clientTsMs,
            jidType: f(n),
            unknownUserDisplayLid: g(n) ?? undefined,
            isFirstDisplay: r.isFirstDisplay ?? undefined,
            durationInSecs: r.durationInSecs ?? undefined,
            hasUn: r.hasUn ?? undefined,
            hasPn: r.hasPn ?? undefined,
            hasPush: r.hasPush ?? undefined,
            inDb: r.inDb ?? undefined,
            unknownUserRecoveryPath: r.unknownUserRecoveryPath ?? undefined
        }).commit();
    }
    l.WINDOW_SECONDS = u;
    l.unknownUserLoggingEnabled = p;
    l.reserveUnknownUserEmission = _;
    l.commitUnknownUserDisplayed = h;
}, 98);