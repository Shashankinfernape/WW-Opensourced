__d("WAWebBizOrderDetailAction", [
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebOrderGatingUtils",
    "WAWebProductDetailsFlowLoadable",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(interactiveMessage, t, n, onlyShowPaymentDetails) {
        const a = o("WAWebMsgGetters").getSender(interactiveMessage.unsafe());
        if (a != null) {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                entryPoint: n,
                onlyShowPaymentDetails,
                chat: o("WAWebFrontendMsgGetters").getChat(interactiveMessage.unsafe()),
                sellerJid: a.toJid(),
                orderInfo: o("WAWebOrderDetails").getOrderInfo(interactiveMessage),
                interactiveMessage
            }), {
                transition: "slide-left",
                uim: t
            });
        }
    }
    function c(orderMessage, t, n) {
        const { orderId, sellerJid, status, token } = orderMessage;
        const d = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        const userIsCartOwner = o("WAWebMsgGetters").getSender(orderMessage.unsafe())?.equals(d) ?? false;
        if (orderId != null && sellerJid != null && token != null) {
            if (o("WAWebOrderGatingUtils").isBuyerOrderRevampEnabled() && status != null && status !== o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus.INQUIRY) {
                return;
            }
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                entryPoint: n,
                chat: o("WAWebFrontendMsgGetters").getChat(orderMessage.unsafe()),
                orderMessage,
                orderId,
                token,
                userIsCartOwner,
                sellerJid
            }), {
                transition: "slide-left",
                uim: t
            });
        }
    }
    l.openOrderDetailDrawer = u;
    l.openOrderRequestDrawer = c;
}, 98);