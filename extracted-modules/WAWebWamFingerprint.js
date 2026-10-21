__d("WAWebWamFingerprint", [
    "WAWebBrowserFeatures",
    "WAWebDeviceFeatures",
    "WAWebExternalInjectedSources",
    "WAWebFPUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return babelHelpers.extends({
                webdriver: self.navigator.webdriver,
                browserEngine: o("WAWebFPUtils").DETECTED_BROWSER_ENGINE
            }, (yield r("WAWebBrowserFeatures")()), r("WAWebExternalInjectedSources")(), o("WAWebDeviceFeatures").getDeviceFeatures());
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);