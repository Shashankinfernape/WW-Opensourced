__d("WAWebVoipCallsTabNavigateTo", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebVoipCallsTabDrawerFlowLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent({ clearUnreadActivity }) {
        const Component = o("WAWebVoipCallsTabDrawerFlowLoadable").VoipCallsTabDrawerFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "calls_tab"
        } : <Component onBack={o("WAWebDrawerManager").closeDrawerLeft}/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            transition: "pop-drawer-fast",
            disableRotateFocus: true
        });
        clearUnreadActivity?.();
    }
    l.navigateToVoipCallsTab = UComponent;
}, 98);