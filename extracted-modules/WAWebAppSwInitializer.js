__d("WAWebAppSwInitializer", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebFeatureDetectionSwSupport",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebSwUpdater",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let a;
            let i;
            let l;
            const { swScope: u, swScriptPath: d } = t;
            if (f()) {
                return p();
            }
            if (!(!r("WAWebFeatureDetectionSwSupport").supported || window.navigator.serviceWorker == null)) {
                r("WAWebFeatureDetectionSwSupport").refreshStreamingSupport();
                if ((a = window.navigator.serviceWorker) != null && a.controller) {
                    yield o("WAWebSwUpdater").updateSw();
                }
                if (!r("gkx")("26258") && (i = window.navigator.serviceWorker) != null && i.controller) {
                    const m = yield window.navigator.serviceWorker.getRegistrations?.();
                    if (m) {
                        const _ = [];
                        for (const g of m){
                            if (g.scope !== window.location.origin + window.location.pathname) {
                                _.push(g.unregister().catch((t)=>{
                                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "service-worker-unregistration-failure"
                                    ]))).catching(r("getErrorSafe")(t)).sendLogs("service-worker-unregistration-failure");
                                }));
                            }
                        }
                        yield (c || (c = n("Promise"))).all(_);
                    }
                }
                if (window.navigator.serviceWorker && !((l = window.navigator.serviceWorker) != null && l.controller)) {
                    try {
                        const h = r("WAWebEnvironment").isWindows ? window.location.search : "";
                        const y = d + h;
                        yield window.navigator.serviceWorker.register(y, {
                            scope: u,
                            updateViaCache: "all"
                        });
                    } catch (e) {
                        const C = r("getErrorSafe")(e);
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "service-worker-registration-failure"
                        ]))).catching(C).sendLogs("service-worker-registration-failure", {
                            sampling: 0.01
                        });
                    }
                }
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            const t = yield (e = window.navigator.serviceWorker) == null || e.getRegistrations == null ? void 0 : e.getRegistrations();
            if (t) {
                const a = [];
                for (const i of t){
                    a.push(i.unregister().catch((e)=>{
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "service-worker-unregistration-failure"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("service-worker-unregistration-failure");
                    }));
                }
                yield (c || (c = n("Promise"))).all(a);
            }
        });
        return _.apply(this, arguments);
    }
    function f() {
        return o("WAWebABProps").getABPropConfigValue("web_disable_sw_on_safari_pwa") && o("WAWebUA").UA.isSafari && o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa();
    }
    l.initializeSw = d;
    l.shouldDisableSwForSafariPwa = f;
}, 98);