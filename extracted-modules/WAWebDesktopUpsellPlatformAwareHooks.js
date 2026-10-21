__d("WAWebDesktopUpsellPlatformAwareHooks", [
    "WAWebDesktopUpsellUtils",
    "WAWebMobilePlatforms",
    "react-compiler-runtime",
    "useWAWebAsync"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("react-compiler-runtime").c(2);
        const t = s();
        let n;
        if (e[0] !== t) {
            n = !o("WAWebMobilePlatforms").isSMB() && t;
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function s() {
        const e = o("react-compiler-runtime").c(2);
        const t = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [];
            e[0] = n;
        } else {
            n = e[0];
        }
        const a = r("useWAWebAsync")(o("WAWebDesktopUpsellUtils").isWebUserOnSupportedWindowsOSForUWPAsync, n);
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = [];
            e[1] = i;
        } else {
            i = e[1];
        }
        const l = r("useWAWebAsync")(o("WAWebDesktopUpsellUtils").isWebUserOnSupportedMacOSForCatalystAsync, i);
        if (t === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS && !a.loading && !a.error) {
            return a.value;
        }
        if (t === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS && !l.loading && !l.error) {
            return l.value;
        }
        return false;
    }
    l.useWAWebDesktopUpsellPlatformCheck = e;
    l.useWAWebDesktopUpsellPlatformAwareOsVersionCheck = s;
}, 98);