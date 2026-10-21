__d("WAWebGuestCoreGetMobilePlatform", [
    "WAWebGuestCoreConsts",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (typeof window !== "undefined" && window.webkit?.messageHandlers?.WAAppClipHandler?.postMessage) {
            return o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP;
        }
        if (window.navigator.userAgent.includes("iPhone")) {
            return o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER;
        }
        if (window.navigator.userAgent.includes("Android")) {
            return o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER;
        }
        return o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN;
    }
    function s(e) {
        if (e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER || e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP) {
            return o("WAWebMobilePlatforms").PLATFORMS.IPHONE;
        }
        if (e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER || e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN) {
            return o("WAWebMobilePlatforms").PLATFORMS.ANDROID;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.getGuestMobilePlatform = e;
    l.mapGuestPlatformToMobilePlatformType = s;
}, 98);