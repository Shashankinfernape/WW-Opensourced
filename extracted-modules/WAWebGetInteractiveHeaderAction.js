__d("WAWebGetInteractiveHeaderAction", [
    "fbt",
    "WALogger",
    "WAWebBizEntryPoint",
    "WAWebBizOrderDetailAction",
    "WAWebBizSignupConfirmationPopup.react",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetShopStorefrontInteractiveAction",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPaymentDetailsGating",
    "WAWebSignupFlowLoggerLazy"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(e) {
        const { interactivePayload, interactiveType, nativeFlowName } = e;
        if (interactiveType === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT) {
            if (interactivePayload == null) {
                return null;
            }
            return r("WAWebGetShopStorefrontInteractiveAction")(interactivePayload);
        }
        if (interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            return null;
        }
        if (nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
            return c(e);
        }
        if (nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
            return d(e.msgKey, e.uimContext);
        }
        if (nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP) {
            return m(e.msgKey);
        }
        return null;
    }
    function c({ canCompose, interactivePayload, interactiveType, msgKey, nativeFlowName, orderInfo, type }) {
        if (!canCompose || orderInfo == null || o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
            interactivePayload,
            interactiveType,
            msgKey,
            nativeFlowName,
            type
        })) {
            return null;
        }
        return o("WAWebGetBrazilnteractiveActions").getPaymentInfoOrderDetailsInteractiveAction(orderInfo, msgKey);
    }
    function d(msgKey, uimContext) {
        return {
            label: s._("Open Details Drawer"),
            onClick: function() {
                const n = p(msgKey);
                if (n != null) {
                    o("WAWebBizOrderDetailAction").openOrderDetailDrawer(n, uimContext, r("WAWebBizEntryPoint").FROM_CHAT);
                }
            }
        };
    }
    function m(msgKey) {
        return {
            label: s._("View details"),
            onClick: function() {
                const t = p(msgKey);
                if (t != null) {
                    const n = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(t);
                    if (n != null) {
                        o("WAWebSignupFlowLoggerLazy").logSignupOp({
                            operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_VIEW_DETAILS_CLICKED,
                            signupId: n.signupId,
                            businessWid: msgKey.remote
                        });
                    }
                    o("WAWebBizSignupConfirmationPopup.react").openSignupConfirmationPopup(t);
                }
            }
        };
    }
    function p(msgKey) {
        const r = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
        if (r != null && r.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return r;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[interactive-header] header click skipped, message is not in the collection"
        ])));
        return null;
    }
    l.default = u;
}, 226);