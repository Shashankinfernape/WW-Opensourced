__d("WAWebBizOpenOrderStatusDrawer.react", [
    "WAWebBizOrderStatusDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(orderStatusButton, t, n) {
        const Component = o("WAWebBizOrderStatusDrawerLoadable").OrderStatusDrawerLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component onClose={o("WAWebDrawerManager").closeDrawerRight} orderStatusButton={orderStatusButton} chat={t} message={n} openRequestTimestamp={Date.now()}/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    l.openOrderStatusDrawer = UComponent;
}, 98);