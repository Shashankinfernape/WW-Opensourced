__d("WAWebBizNativeAdsEntryTapLogger", [
    "WAWebCtwaAdCreationAndManagementJourneyWamEvent",
    "WAWebLwiEntryTapWamEvent",
    "WAWebWamEnumLwiEntryPoint"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ lwiEntryPoint, lwiExtras, lwiFlowId, previousLwiFlowId, userHasLinkedFbPage, waCampaignId, webFlowType }) {
        new (o("WAWebLwiEntryTapWamEvent")).LwiEntryTapWamEvent({
            lwiEntryPoint,
            lwiExtras: lwiExtras ?? undefined,
            lwiFlowId,
            previousLwiFlowId: previousLwiFlowId ?? undefined,
            userHasLinkedFbPage: userHasLinkedFbPage ?? undefined,
            waCampaignId: waCampaignId ?? undefined,
            webFlowType: webFlowType ?? undefined
        }).commit();
    }
    function s({ activeAccountInfoType, hasCreatedAd, hasFacebookPage, lwiEntryPoint, lwiFlowId, sourceAdCreation, usesNativeAds }) {
        new (o("WAWebCtwaAdCreationAndManagementJourneyWamEvent")).CtwaAdCreationAndManagementJourneyWamEvent({
            extraAttributes: JSON.stringify({
                active_account_info_type: activeAccountInfoType,
                event_type: "advertise_ep_routing_decision",
                has_created_ad: hasCreatedAd,
                has_facebook_page: hasFacebookPage,
                source_ad_creation: sourceAdCreation,
                uses_native_ads: usesNativeAds
            }),
            lwiEntryPoint,
            lwiFlowId,
            seqId: 0,
            unifiedSessionId: lwiFlowId
        }).commit();
    }
    function u({ flowID, scenario }) {
        new (o("WAWebCtwaAdCreationAndManagementJourneyWamEvent")).CtwaAdCreationAndManagementJourneyWamEvent({
            extraAttributes: JSON.stringify({
                event_type: "scenario_resolved",
                scenario
            }),
            lwiFlowId: flowID,
            seqId: 1,
            unifiedSessionId: flowID
        }).commit();
    }
    l.logEntryTap = e;
    l.logRoutingDecision = s;
    l.logScenarioResolved = u;
    l.LWI_ENTRY_POINT = o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT;
}, 98);