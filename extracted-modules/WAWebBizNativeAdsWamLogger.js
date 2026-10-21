__d("WAWebBizNativeAdsWamLogger", [
    "$InternalEnum",
    "WAWebLwiEntryPointImpressionWamEvent",
    "WAWebLwiScreenWamEvent",
    "WAWebManageAdsEntryPointImpressionWamEvent",
    "WAWebWamEnumLwiEntryPoint"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        LINKED_ACCOUNTS_NULL: "suppressed_linked_accounts_null",
        LINKED_ACCOUNTS_THREW: "suppressed_linked_accounts_threw"
    });
    function s(e, t) {
        new (o("WAWebLwiEntryPointImpressionWamEvent")).LwiEntryPointImpressionWamEvent({
            lwiEntryPoint: e,
            userHasLinkedFbPage: t
        }).commit();
    }
    function u(lwiExtras) {
        new (o("WAWebLwiEntryPointImpressionWamEvent")).LwiEntryPointImpressionWamEvent({
            lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON,
            lwiExtras
        }).commit();
    }
    function c(manageAdsEntryPoint) {
        new (o("WAWebManageAdsEntryPointImpressionWamEvent")).ManageAdsEntryPointImpressionWamEvent({
            manageAdsEntryPoint
        }).commit();
    }
    function d(lwiScreenReference, t, n, r, a, i, l) {
        new (o("WAWebLwiScreenWamEvent")).LwiScreenWamEvent({
            ctwaAdAccountType: l ?? undefined,
            lwiAdCampaignId: a ?? undefined,
            lwiAdsIdentityType: n,
            lwiExtras: i ?? undefined,
            lwiFlowId: r,
            lwiScreenAction: t,
            lwiScreenReference
        }).commit();
    }
    l.AdCreationEntryPointSuppressionReason = e;
    l.logAdCreationImpression = s;
    l.logAdCreationEntryPointSuppressed = u;
    l.logManageAdsEntryPointImpression = c;
    l.logManageAdsScreenAction = d;
}, 98);