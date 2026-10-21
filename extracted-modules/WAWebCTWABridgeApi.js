__d("WAWebCTWABridgeApi", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCTWADetectedOutcomeOnboardingStatusUpdateAction",
    "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
    "WAWebNewCTWASuggestionAction",
    "WAWebQuickPromotionAction",
    "WAWebSmbDataSharingServerUpdateAction",
    "WAWebUpdateDataSharing3pdLidInCollectionAction",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("JSResourceForInteraction")("WAWebCoexStateSyncCoordinator").__setRef("WAWebCTWABridgeApi");
    const d = r("JSResourceForInteraction")("WAWebCoexStateStaleRepair").__setRef("WAWebCTWABridgeApi");
    const m = r("JSResourceForInteraction")("WAWebDetectedOutcomeNotificationSignalAction").__setRef("WAWebCTWABridgeApi");
    const p = {
        newCTWASuggestion: function({ suggestion }) {
            return o("WAWebNewCTWASuggestionAction").newCTWASuggestion(suggestion);
        },
        revokeCTWASuggestion: function({ suggestion }) {
            return o("WAWebNewCTWASuggestionAction").revokeCTWASuggestion(suggestion);
        },
        loadedCTWASuggestions: function({ suggestions }) {
            return o("WAWebNewCTWASuggestionAction").loadedCTWASuggestions(suggestions);
        },
        loadedQuickPromotions: function({ promotions }) {
            return o("WAWebQuickPromotionAction").loadedQuickPromotions(promotions);
        },
        smbDataSharingSettingUpdate: function({ smbDataSharingSettingValue, smbDataSharingSettingVersion }) {
            return o("WAWebSmbDataSharingServerUpdateAction").smbDataSharingSettingUpdateAction(smbDataSharingSettingValue, smbDataSharingSettingVersion);
        },
        ctwaDetectedOutcomeOnboardingStatusUpdate: function({ onboardingStatus }) {
            return o("WAWebCTWADetectedOutcomeOnboardingStatusUpdateAction").ctwaDetectedOutcomeOnboardingStatusUpdateAction(onboardingStatus);
        },
        emitDetectedOutcomeNotificationSignal: function({ payloadJson, threadLid }) {
            m.load().then((e)=>e.emitDetectedOutcomeNotificationSignal(threadLid, payloadJson)).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] detected-outcome notification dispatch failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("ctwa-detected-outcome-dispatch-failed");
            });
        },
        coexStateSyncNotification: function() {
            c.load().then((e)=>e.requestCoexStateRefresh("sync_notification")).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] coex state sync dispatch failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("coex-state-sync-dispatch-failed");
            });
        },
        coexStateSyncStartup: function() {
            d.load().then((e)=>e.startCoexStateRepair()).catch((e)=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] coex state sync startup failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("coex-state-sync-startup-dispatch-failed");
            });
        },
        updateDataSharing3pdLidInCollection: o("WAWebUpdateDataSharing3pdLidInCollectionAction").updateDataSharing3pdLidInCollection,
        removeDataSharing3pdLidFromCollection: o("WAWebUpdateDataSharing3pdLidInCollectionAction").removeDataSharing3pdLidFromCollection,
        maybeGeneratePerCustomerDataSharingSystemMessage: o("WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction").maybeGeneratePerCustomerDataSharingSystemMessage
    };
    l.CTWABridgeApi = p;
}, 98);