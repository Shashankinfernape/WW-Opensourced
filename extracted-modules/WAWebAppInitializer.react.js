__d("WAWebAppInitializer.react", [
    "CometHeroHoldTrigger.react",
    "WALogger",
    "WAWebApp.react",
    "WAWebAppBootstrap",
    "WAWebEnvironment",
    "WAWebFeatureDetectionRedirectIfMissingCapabilities",
    "WAWebMainThreadLogger",
    "WAWebRequestPersistentStorage",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect: d, useRef: m, useState: p } = c;
    function _() {
        const t = o("react-compiler-runtime").c(7);
        const n = p(false);
        const a = n[0];
        const i = n[1];
        const l = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_console_log_level");
        const s = m(null);
        let c;
        let _;
        if (t[0] !== l) {
            c = function() {
                const e = s.current;
                s.current = l;
                if (!r("gkx")("26258") && e != null && l !== e) {
                    o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger();
                }
            };
            _ = [
                l
            ];
            t[0] = l;
            t[1] = c;
            t[2] = _;
        } else {
            c = t[1];
            _ = t[2];
        }
        d(c, _);
        if (r("WAWebEnvironment").isWindows || r("gkx")("19016")) {
            o("WAWebRequestPersistentStorage").requestPersistentStore();
        }
        let f;
        let g;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                o("WAWebAppBootstrap").bootstrapApp().then(()=>{
                    if (r("WAWebFeatureDetectionRedirectIfMissingCapabilities")()) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Redirect because missing required browser apis"
                        ]))).sendLogs("missing-required-browser-apis");
                    } else {
                        i(true);
                    }
                });
            };
            g = [];
            t[3] = f;
            t[4] = g;
        } else {
            f = t[3];
            g = t[4];
        }
        d(f, g);
        if (a) {
            let h;
            if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                h = u.jsx(o("WAWebApp.react").App, {});
                t[5] = h;
            } else {
                h = t[5];
            }
            return h;
        }
        let y;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            y = u.jsx(r("CometHeroHoldTrigger.react"), {
                description: "WAWebAppInitializer_bootstrap",
                hold: true
            });
            t[6] = y;
        } else {
            y = t[6];
        }
        return y;
    }
    l.default = _;
}, 98);