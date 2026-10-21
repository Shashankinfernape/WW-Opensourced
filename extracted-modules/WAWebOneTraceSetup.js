__d("WAWebOneTraceSetup", [
    "LongAnimationFrameConfig",
    "OneTraceQPLLogger",
    "WAWebEncryptedRid",
    "WAWebEnvironment",
    "WAWebLoggedOutSeparationGating",
    "WAWebUserPrefsIndexedDBStorage",
    "gkx",
    "justknobx",
    "one-trace",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    function s() {
        if (!e) {
            let t;
            e = true;
            r("one-trace").subscribe("trace-start", function(e) {
                o("OneTraceQPLLogger").initQPL(u(e), e);
            });
            r("one-trace").subscribe("trace-end", function(e) {
                r("one-trace").addAnnotations(e.annotations, {
                    string: {
                        subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
                        environment: r("WAWebEnvironment").getEnvironment(),
                        encrypted_rid: o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.loadedUserPrefs != null ? o("WAWebEncryptedRid").getEncryptedRid() : "",
                        logged_out_separation: o("WAWebLoggedOutSeparationGating").getLoggedOutSeparationExperiment()
                    },
                    bool: {
                        is_compiler_enabled: r("gkx")("7685")
                    }
                });
                o("OneTraceQPLLogger").logQPL(u(e), e);
            });
            r("one-trace").setup({
                Image: {
                    enableTracking: false
                },
                Longtask: {
                    enableTracking: false
                },
                LoAF: {
                    enableTracking: (t = r("gkx"))("18841"),
                    enableLogging: function() {
                        return o("LongAnimationFrameConfig").shouldLogLoAF(`${167028690535322}`);
                    },
                    enableScriptPositionConversion: function() {
                        return r("justknobx")._("5031");
                    },
                    config: o("LongAnimationFrameConfig").getLoAFAppConfig(`${167028690535322}`)
                },
                INP: {
                    enableTracking: t("18542"),
                    logReactStack: false,
                    logReactStackHash: false
                },
                Responsiveness: {
                    enableTracking: t("18542")
                },
                Scroll: {
                    enableTracking: t("18842")
                },
                Typing: {
                    enableTracking: t("19206")
                }
            });
        }
    }
    function u(e) {
        switch(e.traceType){
            case "IMAGE":
                return null;
            case "SCROLL":
                return r("qpl")._(802952254, "1042");
            case "LONG_ANIMATION_FRAME":
                if (e.annotations.bool?.isLoggingSample === true) {
                    return r("qpl")._(802951449, "2884");
                }
                return null;
            case "LONGTASK":
                return null;
            case "TYPING":
                return r("qpl")._(802948194, "3732");
            case "RESPONSIVENESS":
                return r("qpl")._(802960199, "1272");
            case "INP":
                return r("qpl")._(802947073, "3733");
        }
        return null;
    }
    l.default = s;
}, 98);