__d("WAWebGetGalaxyFlowsActionFromButton", [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowsOpenDrawer",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQbmMessageClickLogEvent",
    "WAWebWamEnumQbmMessageClickButtonClickedType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        const n = t.unsafe();
        return u(e, t.id, {
            chat: o("WAWebFrontendMsgGetters").getChat(n),
            galaxyFlowDisabled: n.galaxyFlowDisabled,
            isFlowDisabledForSender: n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && o("WAWebMsgGetters").getIsSentByMe(n)
        });
    }
    function u(t, n, { chat, galaxyFlowDisabled, isFlowDisabledForSender }) {
        const t_data = t.data;
        if (t_data.flowId == null) {
            return null;
        }
        const d = function() {
            const a = o("WAWebMsgCollection").MsgCollection.get(n)?.safe();
            if (a == null || a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE && a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[galaxy-flow] flow button click skipped, message left the collection"
                ])));
                return;
            }
            o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                msg: a.unsafe(),
                chat,
                buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.FLOW,
                nativeFlowName: t.name
            });
            o("WAWebGalaxyFlowsOpenDrawer").openGalaxyFlowsDrawer(a, t_data, chat, t_data.flowId)();
        };
        return {
            label: t_data.label,
            onClick: d,
            disabled: (isFlowDisabledForSender || galaxyFlowDisabled) ?? false,
            nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
            testid: "cta-flow-button"
        };
    }
    l.getCtaFlowInteractiveAction = s;
    l.getCtaFlowInteractiveActionFor = u;
}, 98);