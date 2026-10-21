__d("WAWebOpenMetaAIHomeAction", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u() {
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "mid_drawer_empty_state",
            navBarItem: o("WAWebNavBarTypes").NavBarItems.MetaAI
        } : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
            type: o("WAWebNavBarTypes").NavBarItems.MetaAI
        }), {
            transition: "none",
            disableRotateFocus: true
        });
    }
    l.openMetaAIHome = u;
}, 98);