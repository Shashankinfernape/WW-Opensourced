__d("WAWebFPUtils", [
    "$InternalEnum",
    "WAWebWamEnumBrowserEngineName",
    "WAWebWamEnumPlatformName",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = [].constructor;
        try {
            (-1).toFixed(-1);
        } catch (a) {
            const t = r("getErrorSafe")(a);
            const n = t.message.length + `${e}`.split(e.name).join("").length;
            switch(n){
                case 80:
                    return o("WAWebWamEnumBrowserEngineName").BROWSER_ENGINE_NAME.BLINK;
                case 58:
                    return o("WAWebWamEnumBrowserEngineName").BROWSER_ENGINE_NAME.GECKO;
                case 77:
                    return o("WAWebWamEnumBrowserEngineName").BROWSER_ENGINE_NAME.WEBKIT;
                default:
                    return o("WAWebWamEnumBrowserEngineName").BROWSER_ENGINE_NAME.UNKNOWN;
            }
        }
        return o("WAWebWamEnumBrowserEngineName").BROWSER_ENGINE_NAME.UNKNOWN;
    }
    const s = n("$InternalEnum").Mirrored([
        "WINDOWS",
        "MAC",
        "LINUX",
        "ANDROID",
        "CHROME_OS",
        "IOS",
        "UNKNOWN"
    ]);
    function u(e) {
        switch(e){
            case s.WINDOWS:
                return o("WAWebWamEnumPlatformName").PLATFORM_NAME.WINDOWS;
            case s.MAC:
                return o("WAWebWamEnumPlatformName").PLATFORM_NAME.MAC;
            case s.LINUX:
                return o("WAWebWamEnumPlatformName").PLATFORM_NAME.LINUX;
            case s.ANDROID:
                return o("WAWebWamEnumPlatformName").PLATFORM_NAME.ANDROID;
            case s.CHROME_OS:
                return o("WAWebWamEnumPlatformName").PLATFORM_NAME.CHROME_OS;
            case s.IOS:
                return o("WAWebWamEnumPlatformName").PLATFORM_NAME.IOS;
            default:
                return o("WAWebWamEnumPlatformName").PLATFORM_NAME.UNKNOWN;
        }
    }
    const c = e();
    const d = new RegExp("(^|\\.)whatsapp\\.(net|com)", "i");
    l.Platforms = s;
    l.castPlatformNameToWamEnum = u;
    l.DETECTED_BROWSER_ENGINE = c;
    l.waUrlRegex = d;
}, 98);