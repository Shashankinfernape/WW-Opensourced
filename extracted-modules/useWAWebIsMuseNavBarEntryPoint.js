__d("useWAWebIsMuseNavBarEntryPoint", [
    "WAWebAIHatchIdentityStore",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebMuseDefaultAssistantVariant",
    "WAWebPrimaryFeaturesModel",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function u() {
        return useSyncExternalStore(c, o("WAWebHatchFrontendGating").isMuseNavBarEntryPointSelected);
    }
    function c(e) {
        const t = o("WAWebMuseDefaultAssistantVariant").subscribeToMuseDefaultAssistantVariant(e);
        const n = o("WAWebAIHatchIdentityStore").subscribeToIdentityChanges(e);
        const a = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(e);
        for (const i of o("WAWebBotPrimaryFeaturesFrontend").BOT_PRIMARY_FEATURE_CHANGE_EVENTS){
            o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(i, e);
        }
        return function() {
            t();
            n();
            a();
            for (const r of o("WAWebBotPrimaryFeaturesFrontend").BOT_PRIMARY_FEATURE_CHANGE_EVENTS){
                o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off(r, e);
            }
        };
    }
    l.default = u;
}, 98);