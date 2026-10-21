__d("WAWebBroadcastDeviceClassifier", [
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebUserPrefsMeUser").isMeAccount(e);
        if (t) {
            if (e.isCompanion()) {
                return "self:web_companion";
            }
            return `self:primary:${o("WAWebMobilePlatforms").getMobilePlatform() ?? "unknown"}`;
        }
        if (e.isCompanion()) {
            return "recipient:companion";
        }
        return "recipient:primary";
    }
    l.classifyBroadcastDevice = e;
}, 98);