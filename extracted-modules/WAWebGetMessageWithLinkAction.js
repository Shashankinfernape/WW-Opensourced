__d("WAWebGetMessageWithLinkAction", [
    "WAWebExternalLink.react",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebPaymentsGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return null;
        }
        return s({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            type: e.type
        });
    }
    function s({ interactivePayload, interactiveType, nativeFlowName, type }) {
        if (o("WAWebPaymentsGatingUtils").isMessageWithLinkNfmEnabled()) {
            if (nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK || type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW || interactivePayload == null) {
                return null;
            }
            const l = interactivePayload;
            if (l?.buttons && l.buttons.length > 0) {
                const s = l.buttons[0];
                const { buttonParamsJson, name } = s;
                if (name === "open_webview" && buttonParamsJson != null) {
                    const d = JSON.parse(buttonParamsJson);
                    const { link, title } = d;
                    return {
                        label: title,
                        onClick: function() {
                            return o("WAWebExternalLink.react").openExternalLink(link.url);
                        }
                    };
                }
            }
        }
        return null;
    }
    l.getOpenMessageWithLinkAction = e;
    l.getOpenMessageWithLinkActionFor = s;
}, 98);