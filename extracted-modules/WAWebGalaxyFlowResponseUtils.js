__d("WAWebGalaxyFlowResponseUtils", [
    "fbt",
    "WALogger",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    function u(e) {
        if (e.fromMe) {
            return s._("Response sent");
        }
        return s._("Response received");
    }
    function c(t) {
        if (t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE || t.nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW || t.interactivePayload == null || t.interactivePayload.buttonParamsJson == null) {
            return false;
        }
        let n;
        try {
            n = JSON.parse(t.interactivePayload.buttonParamsJson);
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Galaxy Response message: Failed to parse the paramsJson: ",
                ""
            ])), error);
            return false;
        }
        return !(n == null || n.wa_flow_response_params == null);
    }
    l.getGalaxyFlowResponseSubtitle = u;
    l.isGalaxyFlowsResponseBubble = c;
}, 226);