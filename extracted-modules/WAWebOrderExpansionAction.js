__d("WAWebOrderExpansionAction", [
    "fbt",
    "WALogger",
    "WAWebBizEntryPoint",
    "WAWebBizOrderUpdateStatusAction",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebOrdersExpansionUtils"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = ({ interactiveType, isSentByMe, nativeFlowName })=>interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS && isSentByMe;
    const c = (values, orderStatus)=>{
        const e = !(orderStatus === o("WAWebOrderStatus").OrderStatus.Canceled || orderStatus === o("WAWebOrderStatus").OrderStatus.Complete);
        return e && u(values);
    };
    function d({ chat, msgKey, orderInfo, orderStatus, uimContext, values }) {
        if (!o("WAWebOrdersExpansionUtils").isContactCountrySupported(chat) || o("WAWebOrderStatus").isPaymentRequest(chat, orderInfo) || o("WAWebOrderStatusButton").isInboxCreatedOrderFor({
            interactivePayload: values.interactivePayload,
            type: values.type
        }) || orderStatus == null || !c(values, orderStatus)) {
            return null;
        }
        return {
            label: s._("Update status"),
            onClick: function() {
                const n = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
                if (n == null || n.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[order-expansion] update status skipped, message left the collection"
                    ])));
                    return;
                }
                o("WAWebBizOrderUpdateStatusAction").openOrderStatusUpdateDrawer(n, uimContext, r("WAWebBizEntryPoint").FROM_CHAT);
            }
        };
    }
    l.getOrderUpdateStatusAction = d;
}, 226);