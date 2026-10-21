__d("WAWebParseInteractiveResponseMessageProto", [
    "WALogger",
    "WAWebABProps",
    "WAWebE2EProtoUtils",
    "WAWebGalaxyFlowMessageInteractiveResponseMessageParser",
    "WAWebGalaxyFlowsUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c({ baseMessage: n, bizInfo: a, messageProtobuf: i, msgContext: l }) {
        const s = i.interactiveResponseMessage;
        if (s != null) {
            const u = o("WAWebE2EProtoUtils").getInteractiveResponseMessageTypeForProto(s);
            if (!u) {
                return {
                    msgData: babelHelpers.extends({}, n, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        subtype: "phone_only_feature"
                    }),
                    contextInfo: s.contextInfo
                };
            }
            const c = s.nativeFlowResponseMessage?.paramsJson;
            if (m(c)) {
                return {
                    msgData: babelHelpers.extends({}, n, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        subtype: "phone_only_feature"
                    }),
                    contextInfo: s.contextInfo
                };
            }
            if (o("WAWebGalaxyFlowsUtils").isResponseFlowSupported(s)) {
                return d(n, s);
            }
            try {
                const f = o("WAWebE2EProtoUtils").getInteractiveResponsePayload({
                    type: u,
                    message: s,
                    bizInfo: a,
                    msgContext: l
                });
                const g = f?.name === r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST;
                return {
                    msgData: babelHelpers.extends({}, n, {
                        type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                        kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                        body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(s.body?.text) ?? "",
                        interactivePayload: f
                    }, g ? {
                        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN
                    } : null),
                    contextInfo: s.contextInfo
                };
            } catch (e) {
                return {
                    msgData: babelHelpers.extends({}, n, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        subtype: "phone_only_feature"
                    }),
                    contextInfo: s.contextInfo
                };
            }
        }
    }
    function d(t, n) {
        if (o("WAWebGalaxyFlowsUtils").isFlexibleCheckoutForm(n)) {
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.Unknown,
                    subtype: "phone_only_feature"
                }),
                contextInfo: n.contextInfo
            };
        }
        try {
            return o("WAWebGalaxyFlowMessageInteractiveResponseMessageParser").getGalaxyMessageInteractiveResponse(t, n);
        } catch (r) {
            if (r instanceof SyntaxError) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[NFM response] failed to parse Galaxy paramsJson"
                ]))).sendLogs("wa-web-nfm-response-params-json-parse-failed");
            } else {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[NFM response] unexpected Galaxy response failure"
                ]))).sendLogs("wa-web-nfm-galaxy-response-unexpected-failure");
            }
            return {
                msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.Unknown,
                    subtype: "phone_only_feature"
                }),
                contextInfo: n.contextInfo
            };
        }
    }
    function m(e) {
        if (e == null || e.length <= o("WAWebABProps").getABPropConfigValue("native_flow_response_message_params_json_max_size")) {
            return false;
        }
        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[NFM response] paramsJson over protocol limit: ",
            ""
        ])), e.length).sendLogs("wa-web-nfm-response-params-json-over-limit");
        return true;
    }
    l.default = c;
}, 98);