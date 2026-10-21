__d("WAWebNotificationsOptInGating", [
    "WATimeUtils",
    "WAWebEnvironment",
    "WAWebNotificationConstants",
    "WAWebNotificationsModalVariant",
    "WAWebNux",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsNuxPreferences"
], function(t, n, r, o, a, i, l) {
    const e = 2 * o("WATimeUtils").WEEK_SECONDS;
    function s(e) {
        return !(r("WAWebEnvironment").isWindows || window.Notification == null || e !== o("WAWebNotificationConstants").PERMISSION_DEFAULT || !d());
    }
    function u(e) {
        return s(e) && o("WAWebNotificationsModalVariant").isNotificationsOptInModalVariant();
    }
    function c() {
        if (!o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.NOTIFICATIONS_OPT_IN)) {
            return false;
        }
        const t = o("WAWebUserPrefsNotifications").getWebNotificationsBBStatus();
        const t_lastModalShownTime = t.lastModalShownTime;
        return t_lastModalShownTime == null || o("WATimeUtils").unixTime() - t_lastModalShownTime > e;
    }
    function d(e = false) {
        if (r("WAWebEnvironment").isWindows && !e) {
            return false;
        }
        const t = o("WAWebUserPrefsNotifications").getWebNotificationsBBStatus();
        const { isDismissed, lastDismissTime } = t;
        if (isDismissed) {
            return lastDismissTime == null || o("WATimeUtils").unixTime() - lastDismissTime > 2 * o("WATimeUtils").WEEK_SECONDS;
        }
        return true;
    }
    l.isNotificationsOptInEligible = s;
    l.shouldShowNotificationsOptInModal = u;
    l.shouldShowOptInModalNow = c;
    l.shouldShowNotificationSettingsV2Butterbar = d;
}, 98);