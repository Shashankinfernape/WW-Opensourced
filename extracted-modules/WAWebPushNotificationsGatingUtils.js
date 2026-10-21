__d("WAWebPushNotificationsGatingUtils", [
    "WAWebEnvironment",
    "WAWebNotificationConstants",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    function e() {
        return c() && !r("WAWebEnvironment").isWindows;
    }
    function s() {
        return globalThis.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED;
    }
    function u(e, t) {
        return e === o("WAWebNotificationConstants").PERMISSION_DEFAULT || e === o("WAWebNotificationConstants").PERMISSION_DENIED && t && (o("WAWebUA").UA.isChrome || o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.EDGE || o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.browser === "opera");
    }
    function c() {
        try {
            const e = o("WAWebUA").UA.isSafari && Number(o("WAWebUA").UA.browserVersion.split(".")[0]) < 16;
            return !e;
        } catch (e) {
            return false;
        }
    }
    function d() {
        try {
            const e = o("WAWebUA").UA.isSafari || o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.FIREFOX || o("WAWebUA").UA.isChrome && Number(o("WAWebUA").UA.browserVersion.split(".")[0]) < 80;
            return !e;
        } catch (e) {
            return false;
        }
    }
    function m(e = 1) {
        const self_Notification = self.Notification;
        return (self_Notification?.maxActions ?? 0) >= e;
    }
    l.canEnableOfflineNotifications = e;
    l.isNotificationPermissionGranted = s;
    l.canShowNotificationsBanner = u;
    l.canSupportOfflineNotifications = c;
    l.canSupportPeriodicBackgroundSync = d;
    l.canSupportNotificationActions = m;
}, 98);