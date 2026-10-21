__d("WAWebOpenBizNativeAdsFlow", [
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsTwoPhaseContainer.react",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarTypes",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e, flowID, preselectedProductId) {
        o("WAWebBizNativeAdsQplHelpers").startAdsManagementQpl(false);
        o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.AdCreation);
        const a = s.jsx(r("WAWebBizNativeAdsTwoPhaseContainer.react"), {
            entryPoint: e,
            flowID,
            preselectedProductId
        });
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(a, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "slide-left"
        });
    }
    l.default = u;
}, 98);