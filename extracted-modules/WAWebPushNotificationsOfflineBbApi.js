__d("WAWebPushNotificationsOfflineBbApi", [
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsNotifications"
], function(t, n, r, o, a, i, l) {
    const e = 10000;
    let s = true;
    let u = null;
    function c() {
        if (o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications()) {
            s = false;
            u = self.performance.now();
        }
    }
    function d() {
        if (o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications() && !s && u != null && self.performance.now() - u > e) {
            o("WAWebUserPrefsNotifications").setOfflineNotificationsBBStatus({
                isLongResumeTime: true
            });
        }
    }
    l.setStartCommsT = c;
    l.setMainStreamModeReadyT = d;
}, 98);