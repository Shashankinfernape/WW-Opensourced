__d("WAWebCompanionPlatformType", [
    "WAWebBrowserInfo",
    "WAWebEnvironment",
    "WAWebProtobufsCompanionReg.pb"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (r("WAWebEnvironment").isWindows) {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.UWP;
        }
        return s(r("WAWebBrowserInfo")().name);
    }
    function s(e) {
        if (e === "Chrome") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.CHROME;
        }
        if (e === "Firefox") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.FIREFOX;
        }
        if (e === "IE") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.IE;
        }
        if (e === "Opera") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.OPERA;
        }
        if (e === "Safari") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.SAFARI;
        }
        if (e === "Edge") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.EDGE;
        }
        if (e === "electron" || e === "Desktop") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.DESKTOP;
        }
        if (e === "ipad" || e === "iPad") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.IPAD;
        }
        if (e === "tablet" || e === "Android tablet") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.ANDROID_TABLET;
        }
        if (e === "Ohana") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.OHANA;
        }
        if (e === "Aloha") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.ALOHA;
        }
        if (e === "Catalina") {
            return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.CATALINA;
        }
        return o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.UNKNOWN;
    }
    l.default = e;
}, 98);