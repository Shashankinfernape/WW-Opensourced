__d("WAWebInitBotGatingHelpers", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebCanonicalHatchLinkedStatusGetQuery",
    "WAWebHatchBackendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebInitializeBots",
    "WAWebPrefetchHatchLinkedStatusOnLogin",
    "WAWebSubscriptionAgeGating",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = false;
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            r("WAWebHatchLinkedStatusManager").registerFetcher(o("WAWebCanonicalHatchLinkedStatusGetQuery").fetchHatchLinkedStatus);
            if (!u) {
                u = true;
                o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(function() {
                    o("WAWebInitializeBots").initializeBots();
                    o("WAWebPrefetchHatchLinkedStatusOnLogin").maybePrefetchHatchLinkedStatusOnLogin();
                    o("WAWebSubscriptionAgeGating").maybeWarmSubscriptionAgeVerdict();
                });
                o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(function() {
                    o("WAWebInitializeBots").initializeBots();
                    o("WAWebPrefetchHatchLinkedStatusOnLogin").maybePrefetchHatchLinkedStatusOnLogin();
                    o("WAWebSubscriptionAgeGating").maybeWarmSubscriptionAgeVerdict();
                });
                o("WAWebBackendEventBus").BackendEventBus.onPrimaryFeaturesSynced(function(e) {
                    if (e.has(o("WAWebHatchBackendGating").HATCH_PRIMARY_FEATURE)) {
                        o("WAWebPrefetchHatchLinkedStatusOnLogin").maybePrefetchHatchLinkedStatusOnLogin();
                    }
                });
            }
            o("WAWebPrefetchHatchLinkedStatusOnLogin").maybePrefetchHatchLinkedStatusOnLogin();
            o("WAWebSubscriptionAgeGating").maybeWarmSubscriptionAgeVerdict();
            try {
                const t = yield o("WAWebBackendApi").frontendSendAndReceive("getLanguage", void 0);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] initialized bot gating language cache with: ",
                    ""
                ])), t);
                o("WAWebBotBaseGating").setBonsaiUserLanguage(t);
            } catch (e) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] lang cache init failed, features may not work"
                ])));
            }
        });
        return d.apply(this, arguments);
    }
    l.initBotGatingHelpers = c;
}, 98);