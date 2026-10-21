__d("initWAWebPlatformWebPage", [
    "AnalyticsCoreData",
    "FalcoLoggerInternal",
    "VultureJSGating",
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsWamGlobals",
    "WAWebFBLoggerSetup",
    "WhatsAppWebBanzaiConfig",
    "cr:7426",
    "cr:7507",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c() {
        d();
    }
    function d() {
        if (r("WhatsAppWebBanzaiConfig").disabled) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[app] disabling Banzai"
            ])));
            m();
            o("VultureJSGating").__DO_NOT_USE_DISABLE_VULTURE_JS_LOGGING();
            return;
        }
        if (!r("gkx")("2664")) {
            o("VultureJSGating").__DO_NOT_USE_DISABLE_VULTURE_JS_LOGGING();
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[app] enabling FalcoLoggerTransports"
        ])));
        if (n("cr:7426")) {
            n("cr:7426").adapter.config.known_routes = r("WhatsAppWebBanzaiConfig").known_routes;
        }
        o("WAWebABPropsCache").waitForABPropConfigsReady().then(()=>{
            (u || (u = r("AnalyticsCoreData"))).consent_state = o("WAWebABPropsWamGlobals").getServiceImprovementConsentStateBits();
        });
        if (n("cr:7507") != null) {
            n("cr:7507").onReady(function(e) {
                return e.attach();
            });
        }
        if (r("gkx")("16915")) {
            o("WAWebFBLoggerSetup").init();
        }
    }
    function m() {
        if (n("cr:7426")) {
            n("cr:7426").adapter.config.disabled = true;
        }
    }
    l.default = c;
}, 98);