__d("WAWebVoipRelayAllCallsAction", [
    "WAWebUserPrefsGeneral",
    "WAWebVoipRelayAllCallsSettingSync",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebUserPrefsGeneral").setUserPrivacySettings(babelHelpers.extends({}, o("WAWebUserPrefsGeneral").getUserPrivacySettings(), {
                disallowAllP2p: e
            }));
            yield o("WAWebVoipStackInterface").getCachedVoipStackInterface()?.setHideMyIp(e);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield e(t);
            yield r("WAWebVoipRelayAllCallsSettingSync").sendMutation(t);
        });
        return c.apply(this, arguments);
    }
    l.setRelayAllCallsToUserPrefs = e;
    l.setRelayAllCalls = u;
}, 98);