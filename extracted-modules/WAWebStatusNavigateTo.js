__d("WAWebStatusNavigateTo", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebStatusDrawerFlowLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const Component = o("WAWebStatusDrawerFlowLoadable").StatusDrawerFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "status"
        } : <Component onBack={o("WAWebDrawerManager").closeDrawerLeft}/>, {
            disableRotateFocus: true,
            transition: "pop-drawer-fast",
            focusOnUnMount: true
        });
        e?.();
    }
    l.navigateToStatus = u;
}, 98);