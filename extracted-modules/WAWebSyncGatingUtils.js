__d("WAWebSyncGatingUtils", [
    "WALogger",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeaturesModel",
    "WAWebUserPrefsHistorySync",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        if (!o("WAWebPrimaryFeaturesModel").PrimaryFeatures.historySyncOnDemand) {
            return false;
        }
        const t = o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
        const n = o("WAWebUserPrefsHistorySync").getHistoryInitialSyncBoundary();
        if (t && (n == null || r("isEmptyObject")(n))) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] hsod disabled: initSync incomplete/no boundary"
            ])));
            return false;
        }
        const a = o("WAWebMobilePlatforms").getMobilePlatform() === o("WAWebMobilePlatforms").PLATFORMS.ANDROID || o("WAWebMobilePlatforms").getMobilePlatform() === o("WAWebMobilePlatforms").PLATFORMS.SMBA;
        if (a && o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isPrimaryBetaBuild) {
            return true;
        }
        if (r("WAWebEnvironment").isWindows) {
            return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.extendedHistorySyncOnDemand && p();
        }
        return true;
    }
    function u() {
        return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.historySyncOnDemand;
    }
    function c() {
        return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.webLinkPreviewNseSupport;
    }
    function d() {
        return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.messagePlaceholderResendNseSupport;
    }
    function m() {
        return o("WAWebABProps").getABPropConfigValue("web_noncritical_history_sync_message_processing_break_iteration");
    }
    function p() {
        return o("WAWebABProps").getABPropConfigValue("history_sync_on_demand_companion");
    }
    function _() {
        return o("WAWebPrimaryFeaturesModel").PrimaryFeatures.completeHistorySyncOnDemand;
    }
    l.isHistorySyncOnDemandEnabled = s;
    l.shouldPopulateStarMessageWithTimestamp = u;
    l.isWebLinkPreviewNseSupportEnabled = c;
    l.isMessagePlaceholderResendNseSupportEnabled = d;
    l.getRecentSyncMessageProcessingBreakIteration = m;
    l.isOnDemandExtendedHistorySyncForHybridEnabled = p;
    l.isHistorySyncOnDemandCompleteCompanionEnabled = _;
}, 98);