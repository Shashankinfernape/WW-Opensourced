__d("WAWebGalaxyFlowMessageInteractiveResponseMessageParser", [
    "WAWebBackendApi",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (t?.nativeFlowResponseMessage?.paramsJson != null) {
            const s = JSON.parse(t?.nativeFlowResponseMessage?.paramsJson);
            const u = t.contextInfo;
            const c = {
                msgData: babelHelpers.extends({}, e, {
                    interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                    kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                    type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                    nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW
                }),
                contextInfo: u
            };
            if (u) {
                const { participant: d, stanzaId: m } = u;
                if (m != null && d != null) {
                    const p = new (r("WAWebMsgKey"))({
                        id: m,
                        fromMe: false,
                        remote: e.id.remote
                    });
                    o("WAWebBackendApi").frontendFireAndForget("addGalaxyDisableCTAMessageId", {
                        messageId: p.toString()
                    });
                }
            }
            if (s.wa_flow_response_params == null) {
                return c;
            }
            return babelHelpers.extends({}, c, {
                msgData: babelHelpers.extends({}, c.msgData, {
                    interactivePayload: {
                        name: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
                        buttonParamsJson: JSON.stringify(babelHelpers.extends({}, s, {
                            flow_message_version: t.nativeFlowResponseMessage?.version ?? 1,
                            flow_token: s.flow_token
                        }))
                    }
                })
            });
        }
    }
    l.getGalaxyMessageInteractiveResponse = e;
}, 98);