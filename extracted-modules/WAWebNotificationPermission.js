__d("WAWebNotificationPermission", [
    "WAWebEnvironment",
    "WAWebNotificationConstants"
], function(t, n, r, o, a, i, l) {
    function e() {
        return r("WAWebEnvironment").isWindows || window.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED;
    }
    l.isNotificationPermissionGranted = e;
}, 98);