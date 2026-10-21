__d("WAWebOpenNotificationsSetting", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNotificationsFlowLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u() {
        const n = new URLSearchParams((window.location.search ?? "").toLowerCase());
        const r = (n.get("ns") ?? "") === "1";
        if (r) {
            const Component = o("WAWebNotificationsFlowLoadable").NotificationsFlowLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                descriptorType: "notifications"
            } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>, {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                transition: "pop-drawer-fast"
            });
            window.history.pushState({}, "", window.location.origin);
        }
    }
    l.handleOpenNotificationsSettingDeeplink = u;
}, 98);