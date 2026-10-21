__d("WAWebFMXTrustSignals", [
    "fbt",
    "WALogger",
    "WAWebApiContactUsernameFields",
    "WAWebCountriesUtils",
    "WAWebFMXGatingUtils",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebApiContactUsernameFields").getOrFetchContactUsernameCountryCode(e.id);
            if (t == null) {
                return {
                    isDifferentCountry: null,
                    label: null,
                    shown: false
                };
            }
            const n = yield _();
            const isDifferentCountry = n == null ? null : n !== t;
            const shown = n !== t || o("WAWebFMXGatingUtils").isFmxPersistentCountryTrustSignalEnabled();
            if (shown) {
                return {
                    isDifferentCountry,
                    label: yield g(t),
                    shown
                };
            }
            return {
                isDifferentCountry,
                label: null,
                shown
            };
        });
        return p.apply(this, arguments);
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                return yield o("WAWebApiContactUsernameFields").getOrFetchMeContactUsernameCountryCode();
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to get viewer country code for the FMX trust signal, error: ",
                    ""
                ])), error).tags("fmx", "wa-ice", "wa-spice-web").sendLogs("fmx-viewer-country-code-failed", {
                    sampling: 0.01
                });
                return null;
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            try {
                t = yield o("WAWebCountriesUtils").getCountryNameFromCountryCode(e);
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to localize the FMX sender country, error: ",
                    ""
                ])), error).tags("fmx", "wa-ice", "wa-spice-web").sendLogs("fmx-sender-country-name-failed", {
                    sampling: 0.01
                });
                return null;
            }
            if (t == null) {
                return null;
            }
            return s._("Phone number from {country}", [
                s._param("country", t)
            ]);
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return !o("WAWebFrontendContactGetters").getIsMyContact(e);
    }
    function C(e) {
        if (y(e)) {
            return s._("Not a contact");
        }
    }
    function b(e) {
        if (e.isSenderNewAccount === true && o("WAWebFMXGatingUtils").isExpandFmxAccountAgeUiEnabled()) {
            const t = s._("New account");
            if (o("WAWebFMXGatingUtils").isExpandFmxAccountAgeBoldedEnabled()) {
                const Component = r("WDSText.react");
                return <Component type="Body2Emphasized" colorName="contentDeemphasized">{t}</Component>;
            }
            return t;
        }
    }
    l.getCountryCodeTrustSignal = m;
    l.shouldShowContactTrustSignal = y;
    l.getContactTrustSignal = C;
    l.getNewAccountTrustSignal = b;
}, 226);