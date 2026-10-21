__d("WAWebUserPrefsNotifications", [
    "WATimeUtils",
    "WAWebBackgroundSyncReporter",
    "WAWebEnvironment",
    "WAWebNotificationConstants",
    "WAWebPrivacySettings",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumOnboardSources",
    "cr:5151"
], function(t, n, r, o, a, i, l) {
    function e() {
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_SOUNDS) !== true;
    }
    function s(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_SOUNDS, !e);
    }
    function u() {
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_RINGTONE) !== true;
    }
    function c(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_RINGTONE, !e);
    }
    function d() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_NOTIFICATIONS);
        if (typeof e !== "boolean") {
            if (r("WAWebEnvironment").isWindows) {
                return true;
            }
            return window.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED;
        }
        return !e;
    }
    function m(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_NOTIFICATIONS, !e);
    }
    function p() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_NOTIFICATIONS);
        if (typeof e !== "boolean") {
            return true;
        }
        return !e;
    }
    function _(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_CALL_NOTIFICATIONS, !e);
    }
    function f() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED);
        if (typeof e !== "boolean") {
            const n = window.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED;
            if (n) {
                o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
                    offboardSource: null,
                    onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.DEFAULT
                });
            }
            return n;
        }
        return e;
    }
    function g(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED, e);
    }
    function h() {
        const e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.SECURITY_NOTIFICATIONS) !== true || e.defenseMode != null && e.defenseMode !== o("WAWebPrivacySettings").DEFENSE_MODE_STATE.off;
    }
    function y(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.SECURITY_NOTIFICATIONS, !e);
    }
    const C = {
        isDismissed: false,
        firstSeenTime: null,
        lastDismissTime: null,
        lastModalShownTime: null
    };
    function b() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.WEB_NOTIFICATIONS_BB_STATUS);
        if (e == null || typeof e !== "object" || e instanceof Array) {
            return C;
        }
        const t = {
            isDismissed: e.isDismissed === true,
            firstSeenTime: typeof e.firstSeenTime === "number" ? o("WATimeUtils").castToUnixTime(e.firstSeenTime) : null,
            lastDismissTime: typeof e.lastDismissTime === "number" ? o("WATimeUtils").castToUnixTime(e.lastDismissTime) : null,
            lastModalShownTime: typeof e.lastModalShownTime === "number" ? o("WATimeUtils").castToUnixTime(e.lastModalShownTime) : null
        };
        return t;
    }
    function v(e) {
        const { firstSeenTime = null, lastDismissTime = null, lastModalShownTime = null } = b();
        const p = e.firstSeenTime ?? firstSeenTime;
        const lastDismissTime_1 = e.lastDismissTime ?? lastDismissTime;
        const lastModalShownTime_1 = e.lastModalShownTime ?? lastModalShownTime;
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.WEB_NOTIFICATIONS_BB_STATUS, {
            isDismissed: e.isDismissed,
            firstSeenTime: p,
            lastDismissTime: lastDismissTime_1,
            lastModalShownTime: lastModalShownTime_1
        });
    }
    function S() {
        const e = b();
        const e_isDismissed = e.isDismissed;
        v({
            isDismissed: e_isDismissed,
            lastModalShownTime: o("WATimeUtils").unixTime()
        });
    }
    const R = {
        isDismissed: false,
        firstSeenTime: null,
        isLongResumeTime: false
    };
    function L() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.OFFLINE_NOTIFICATIONS_BB_STATUS);
        if (e == null || typeof e !== "object" || e instanceof Array) {
            return R;
        }
        const t = {
            isDismissed: e.isDismissed === true,
            firstSeenTime: typeof e.firstSeenTime === "number" ? o("WATimeUtils").castToUnixTime(e.firstSeenTime) : null,
            isLongResumeTime: e.isLongResumeTime === true
        };
        return t;
    }
    function E(e) {
        const { firstSeenTime = null, isDismissed = false, isLongResumeTime = false } = L();
        const isDismissed_1 = e.isDismissed ?? isDismissed;
        const _ = e.firstSeenTime ?? firstSeenTime;
        const isLongResumeTime_1 = e.isLongResumeTime ?? isLongResumeTime;
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.OFFLINE_NOTIFICATIONS_BB_STATUS, {
            isDismissed: isDismissed_1,
            firstSeenTime: _,
            isLongResumeTime: isLongResumeTime_1
        });
    }
    function k() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_PREVIEWS);
        if (typeof e !== "boolean" && r("WAWebEnvironment").isWindows) {
            return true;
        }
        return e !== true;
    }
    function I(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_MUTE_PREVIEWS, !e);
    }
    function T() {
        if (n("cr:5151")) {
            return r("WAWebUserPrefsStore").getUser(n("cr:5151").IGNORE_NONDIRECT_GROUP_MSG) === true;
        }
        return false;
    }
    function D(e) {
        if (n("cr:5151")) {
            r("WAWebUserPrefsStore").setUser(n("cr:5151").IGNORE_NONDIRECT_GROUP_MSG, e);
        }
    }
    function x() {
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.OUTGOING_MESSAGE_SOUND) === true;
    }
    function $(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.OUTGOING_MESSAGE_SOUND, e);
    }
    function P() {
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_COLLAPSE_MUTED) === true;
    }
    function N(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_COLLAPSE_MUTED, e);
    }
    function M() {
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED_ONCE) === true;
    }
    function w() {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED_ONCE, true);
    }
    function A() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATIONS_ENABLED);
        if (typeof e !== "boolean") {
            return d();
        }
        return e;
    }
    function F(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATIONS_ENABLED, e);
    }
    function O(e) {
        const t = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATION_REACTIONS_ENABLED);
        if (typeof t !== "boolean") {
            return e ?? false;
        }
        return t;
    }
    function B(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_NOTIFICATION_REACTIONS_ENABLED, e);
    }
    function W() {
        const t = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_SOUNDS_ENABLED);
        if (typeof t !== "boolean") {
            return e();
        }
        return t;
    }
    function q(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_SOUNDS_ENABLED, e);
    }
    function U() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATIONS_ENABLED);
        if (typeof e !== "boolean") {
            return A();
        }
        return e;
    }
    function V(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATIONS_ENABLED, e);
    }
    function H() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATION_REACTIONS_ENABLED);
        if (typeof e !== "boolean") {
            return O();
        }
        return e;
    }
    function G(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_NOTIFICATION_REACTIONS_ENABLED, e);
    }
    function z() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_SOUNDS_ENABLED);
        if (typeof e !== "boolean") {
            return W();
        }
        return e;
    }
    function j(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_GROUP_SOUNDS_ENABLED, e);
    }
    function K() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATIONS_ENABLED);
        if (typeof e !== "boolean") {
            return A();
        }
        return e;
    }
    function Q(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATIONS_ENABLED, e);
    }
    function X() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATION_REACTIONS_ENABLED);
        if (typeof e !== "boolean") {
            return O();
        }
        return e;
    }
    function Y(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_NOTIFICATION_REACTIONS_ENABLED, e);
    }
    function J() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_SOUNDS_ENABLED);
        if (typeof e !== "boolean") {
            return W();
        }
        return e;
    }
    function Z(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.GLOBAL_STATUS_SOUNDS_ENABLED, e);
    }
    const ee = {
        isDismissed: false,
        dismissedTime: null
    };
    function te() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.NOTIFICATIONS_GRANULARITY_AWARENESS_BANNER_STATUS);
        if (e == null || typeof e !== "object" || e instanceof Array) {
            return ee;
        }
        const t = {
            isDismissed: e.isDismissed === true,
            dismissedTime: typeof e.dismissedTime === "number" ? o("WATimeUtils").castToUnixTime(e.dismissedTime) : null
        };
        return t;
    }
    function ne() {
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.NOTIFICATION_TEST_VERIFIED) === true;
    }
    function re() {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.NOTIFICATION_TEST_VERIFIED, true);
    }
    function oe() {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.NOTIFICATION_TEST_VERIFIED, false);
    }
    l.getGlobalSounds = e;
    l.setGlobalSounds = s;
    l.getGlobalCallRingtone = u;
    l.setGlobalCallRingtone = c;
    l.getGlobalNotifications = d;
    l.setGlobalNotifications = m;
    l.getGlobalCallNotifications = p;
    l.setGlobalCallNotifications = _;
    l.getGlobalOfflineNotifications = f;
    l.setGlobalOfflineNotifications = g;
    l.getGlobalSecurityNotifications = h;
    l.setGlobalSecurityNotifications = y;
    l.DEFAULT_NOTIFICATION_BB_STATUS = C;
    l.getWebNotificationsBBStatus = b;
    l.setWebNotificationsBBStatus = v;
    l.recordOptInModalShown = S;
    l.DEFAULT_OFFLINE_NOTIFICATION_BB_STATUS = R;
    l.getOfflineNotificationsBBStatus = L;
    l.setOfflineNotificationsBBStatus = E;
    l.getGlobalPreviews = k;
    l.setGlobalPreviews = I;
    l.getIgnoreNondirectGroupMsg = T;
    l.setIgnoreNondirectGroupMsg = D;
    l.getOutgoingMessageSound = x;
    l.setOutgoingMessageSound = $;
    l.getCollapseMuted = P;
    l.setCollapseMuted = N;
    l.getOfflineNotificationsEnabledOnce = M;
    l.setOfflineNotificationsEnabledOnce = w;
    l.getGlobalNotificationsEnabled = A;
    l.setGlobalNotificationsEnabled = F;
    l.getGlobalNotificationReactionsEnabled = O;
    l.setGlobalNotificationReactionsEnabled = B;
    l.getGlobalSoundsEnabled = W;
    l.setGlobalSoundsEnabled = q;
    l.getGlobalGroupNotificationsEnabled = U;
    l.setGlobalGroupNotificationsEnabled = V;
    l.getGlobalGroupNotificationReactionsEnabled = H;
    l.setGlobalGroupNotificationReactionsEnabled = G;
    l.getGlobalGroupSoundsEnabled = z;
    l.setGlobalGroupSoundsEnabled = j;
    l.getGlobalStatusNotificationsEnabled = K;
    l.setGlobalStatusNotificationsEnabled = Q;
    l.getGlobalStatusNotificationReactionsEnabled = X;
    l.setGlobalStatusNotificationReactionsEnabled = Y;
    l.getGlobalStatusSoundsEnabled = J;
    l.setGlobalStatusSoundsEnabled = Z;
    l.getNotificationsGranularityAwarenessBannerStatus = te;
    l.getNotificationTestVerified = ne;
    l.setNotificationTestVerified = re;
    l.clearNotificationTestVerified = oe;
}, 98);