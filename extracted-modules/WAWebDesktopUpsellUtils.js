__d("WAWebDesktopUpsellUtils", [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBrowserInfo",
    "WAWebEnvironment",
    "WAWebUA",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "WINDOWS",
        "MACOS"
    ]);
    let s;
    const u = n("$InternalEnum").Mirrored([
        "Control",
        "Variant2",
        "Variant3"
    ]);
    function c() {
        const e = o("WAWebABProps").getABPropConfigValue("wa_web_growth_empty_state_upsell_variant_m1");
        return e === 2 || e === 3;
    }
    function d() {
        const e = o("WAWebABProps").getABPropConfigValue("wa_web_growth_empty_state_upsell_variant_m1");
        switch(e){
            case 2:
                return u.Variant2;
            case 3:
                return u.Variant3;
            default:
                return u.Control;
        }
    }
    function m() {
        if (s === undefined) {
            s = p();
        }
        return s;
    }
    function p() {
        const t = r("WAWebBrowserInfo")();
        switch(t.os.toLowerCase()){
            case "windows":
                return e.WINDOWS;
            case "mac os":
                return e.MACOS;
        }
        return null;
    }
    const _ = "8.0.0";
    const f = 10;
    const g = "12.0.0";
    let h = null;
    let y = null;
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (r("WAWebEnvironment").isWindows) {
                return false;
            }
            if (h != null) {
                return h;
            }
            const n = yield self.navigator?.userAgentData?.getHighEntropyValues([
                "platformVersion"
            ]);
            if (n?.platformVersion != null && n.platform?.toLowerCase() === "windows" && n.platformVersion != null) {
                h = R(_, n.platformVersion) <= 0;
            } else {
                const o = r("WAWebBrowserInfo")();
                h = o.os === "Windows" && parseInt(o.version, 10) >= f;
            }
            return h;
        });
        return b.apply(this, arguments);
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (r("WAWebEnvironment").isWindows) {
                return false;
            }
            if (o("WAWebUA").UA.isSafari) {
                return true;
            }
            if (y != null) {
                return y;
            }
            const n = yield self.navigator?.userAgentData?.getHighEntropyValues([
                "platformVersion"
            ]);
            if (n?.platformVersion != null && n.platform?.toLowerCase() === "macos" && n.platformVersion != null) {
                y = R(g, n.platformVersion) <= 0;
            }
            return y ?? false;
        });
        return S.apply(this, arguments);
    }
    function R(e, platformVersion) {
        return e.localeCompare(platformVersion, undefined, {
            numeric: true,
            sensitivity: "base"
        });
    }
    l.UserDesktopOs = e;
    l.EmptyStateUpsellBannerVariantEnum = u;
    l.isEmptyStateUpsellBannerVariantEnabled = c;
    l.getEmptyStateUpsellBannerVariant = d;
    l.getUserDesktopOs = m;
    l.isWebUserOnSupportedWindowsOSForUWPAsync = C;
    l.isWebUserOnSupportedMacOSForCatalystAsync = v;
}, 98);