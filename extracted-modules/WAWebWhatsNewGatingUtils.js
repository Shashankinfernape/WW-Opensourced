__d("WAWebWhatsNewGatingUtils", [
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebColdLaunchDeeplink",
    "WAWebMobilePlatforms",
    "WAWebWhatsNewContent",
    "WAWebWhatsNewNux",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebColdLaunchDeeplink").wasLaunchedFromDeeplink()) {
            return false;
        }
        return s() && o("WAWebWhatsNewNux").shouldShowWhatsNewNux(e);
    }
    function s() {
        return !(o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal") !== true || !o("WAWebWhatsNewContent").hasWhatsNewContent() || o("WAWebMobilePlatforms").isSMB() && !o("WAWebWhatsNewContent").hasSmbWhatsNewContent());
    }
    const u = 3000;
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebMobilePlatforms").isSMB() || !o("WAWebWhatsNewContent").hasBizAgentWhatsNewHighlight() || o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()) {
                return true;
            }
            yield o("WAPromiseDelays").delayMs(u);
            return o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled();
        });
        return d.apply(this, arguments);
    }
    const m = 30;
    const p = 15;
    function _() {
        if (o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal_short_cooldown") === true) {
            return p;
        }
        return m;
    }
    l.shouldShowWhatsNewAutoModalOnLaunch = e;
    l.isWhatsNewAutoModalEnabled = s;
    l.resolveWhatsNewBizAgentEligible = c;
    l.getWhatsNewAutoModalCooldownDays = _;
}, 98);