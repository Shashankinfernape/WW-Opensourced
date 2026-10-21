__d("WAWebBizOrderUpdateStatusAction", [
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebOrderStatusUpdateFlowLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e, t, n) {
        const r = o("WAWebOrderDetails").getOrderInfo(e);
        const a = o("WAWebMsgGetters").getSender(e.unsafe());
        if (!(r == null || a == null)) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(o("WAWebOrderStatusUpdateFlowLoadable").OrderStatusUpdateFlowLoadable, {
                entryPoint: n,
                chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
                sellerJid: a.toJid(),
                orderInfo: r
            }), {
                transition: "slide-left",
                uim: t
            });
        }
    }
    l.openOrderStatusUpdateDrawer = u;
}, 98);