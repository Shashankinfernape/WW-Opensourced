__d("WAWebInteractiveMessage", [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActions",
    "WAWebGetInteractiveFooterText",
    "WAWebInteractiveActionMenuDialog.react",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsBloksOnlyMessage",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPrimaryFeaturesGetters",
    "WAWebShowMessageActionFallbackErrorAction",
    "WDSDialogBridge",
    "react",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus",
    "useWAWebPrimaryFeaturesValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ displayAuthor, displayType, msgKey, quotedMsg }) {
        let t;
        const u = r("useWAWebUIM")();
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (t = o("WAWebMsgGetters")).getNativeFlowName,
            t.getGalaxyFlowDisabled,
            t.getInteractivePayload,
            t.getSignupCtaTapped,
            t.getType,
            t.getInteractiveType,
            t.getNativeFlowButtons,
            t.getBloksWidget,
            t.getInteractiveHeader,
            t.getFooter,
            o("WAWebFrontendMsgGetters").getText,
            t.getIsNewsletterMsg,
            t.getIsFromTemplate,
            t.getIsSentByMe,
            t.getSender,
            t.getT,
            t.getBizBotType
        ]);
        const m = d[0];
        const galaxyFlowDisabled = d[1];
        const _ = d[2];
        const signupCtaTapped = d[3];
        const g = d[4];
        const h = d[5];
        const y = d[6];
        const bloksWidget = d[7];
        const interactiveHeader = d[8];
        const v = d[9];
        const S = d[10];
        const R = d[11];
        const L = d[12];
        const E = d[13];
        const k = d[14];
        const I = d[15];
        const T = d[16];
        o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues([
            o("WAWebPrimaryFeaturesGetters").getCustomPaymentMethodsSyncSupport
        ]);
        const D = o("WAWebFrontendMsgGetters").getChatByMsgKey(msgKey, R);
        const x = r("useWAWebConversationPanelCanCompose")(D);
        const $ = x[0];
        const P = $ || o("WAWebChatGetters").getIsBroadcast(D);
        const N = o("WAWebOrderDetails").getOrderInfoFor({
            interactivePayload: _,
            interactiveType: h,
            nativeFlowButtons: y,
            nativeFlowName: m,
            type: g
        });
        const orderPaymentStatus = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(D, N?.referenceId, o("WAWebOrderStatus").isSimplifiedOrder(N));
        const w = g !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ? null : r("WAWebGetInteractiveActions")({
            canCompose: P,
            msgKey,
            orderPaymentStatus,
            uimContext: u,
            values: {
                chat: D,
                galaxyFlowDisabled,
                interactivePayload: _,
                interactiveType: h,
                isFromTemplate: L,
                isOutgoingBizBot: msgKey.fromMe && T != null,
                isSentByMe: E,
                nativeFlowName: m,
                sender: k,
                signupCtaTapped,
                t: I,
                type: g
            }
        });
        const actions = w?.map(function(e) {
            const t = e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW && galaxyFlowDisabled === true;
            return {
                testid: e.testid,
                label: e.label,
                disabled: e.disabled === true || t === true,
                onClick: c(e),
                Icon: e.Icon
            };
        });
        const F = m === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS;
        return s.jsx(r("WAWebInteractiveBubble.react"), {
            msgKey,
            displayAuthor,
            displayType,
            displayFooter: !F || o("WAWebOrderStatusButton").getOrderStatusButtonFor({
                interactivePayload: _,
                type: g
            }) != null,
            header: s.jsx(r("WAWebInteractiveHeader"), {
                msgKey,
                quotedMsg,
                displayType
            }),
            actions,
            hideMeta: m === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS && o("WAWebOrderStatus").isPaymentRequest(D, N) || r("WAWebIsBloksOnlyMessage")({
                bloksWidget,
                footerText: o("WAWebGetInteractiveFooterText").getInteractiveFooterTextFor({
                    footer: v,
                    interactivePayload: _,
                    nativeFlowName: m,
                    type: g
                }),
                interactiveHeader,
                text: S
            })
        });
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    function c(e) {
        const e_menu = e.menu;
        if (e_menu != null) {
            return function() {
                return o("WDSDialogBridge").openWDSDialog(s.jsx(r("WAWebInteractiveActionMenuDialog.react"), {
                    menu: e_menu
                }));
            };
        }
        return e.onClick ?? function() {
            return r("WAWebShowMessageActionFallbackErrorAction")();
        };
    }
    l.default = u;
}, 98);