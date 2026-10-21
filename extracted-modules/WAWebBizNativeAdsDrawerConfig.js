__d("WAWebBizNativeAdsDrawerConfig", [
    "fbt",
    "WAWebBizAdCreationLoadingFallback.react",
    "WAWebBizAdManagementLoadingFallback.react",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebDrawerHeader.react",
    "WAWebNoop",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let u;
    const c = u || (u = o("react"));
    const d = {
        [o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation]: {
            drawerTheme: "starred",
            headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            loadingFallback: c.jsx(r("WAWebBizAdCreationLoadingFallback.react"), {}),
            title: function() {
                return s._("Create new ad");
            }
        },
        [o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement]: {
            drawerTheme: "starred",
            headerType: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
            loadingFallback: c.jsx(r("WAWebBizAdManagementLoadingFallback.react"), {}),
            title: function() {
                return s._("Advertise");
            }
        }
    };
    function m(e) {
        return d[e];
    }
    l.INITIAL_STEP = o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement;
    l.LOADING_BACK_HANDLER = r("WAWebNoop");
    l.getDrawerConfig = m;
}, 226);