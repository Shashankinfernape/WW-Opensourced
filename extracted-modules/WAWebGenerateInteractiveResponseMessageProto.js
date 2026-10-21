__d("WAWebGenerateInteractiveResponseMessageProto", [
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    const e = [
        "type"
    ];
    const s = [
        "buttonParamsJson",
        "type"
    ];
    const u = [
        "flow_message_version",
        "flow_token",
        "wa_flow_response_params"
    ];
    function c({ contextInfo, json }) {
        const json_interactivePayload = json.interactivePayload;
        const l_type = json_interactivePayload.type;
        const u = babelHelpers.objectWithoutPropertiesLoose(json_interactivePayload, e);
        const c = o("WAWebE2EProtoUtils").getInteractiveResponseMessageFieldNameForType(l_type);
        const m = u.name === String(r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW);
        if (m) {
            return d({
                json,
                contextInfo
            });
        }
        const p = {
            body: {
                text: json.body
            },
            [c]: u,
            contextInfo
        };
        return {
            interactiveResponseMessage: p
        };
    }
    function d({ contextInfo, json }) {
        const json_interactivePayload = json.interactivePayload;
        const { buttonParamsJson, type } = json_interactivePayload;
        const c = babelHelpers.objectWithoutPropertiesLoose(json_interactivePayload, s);
        const d = o("WAWebE2EProtoUtils").getInteractiveResponseMessageFieldNameForType(type);
        const m = JSON.parse(buttonParamsJson);
        const { flow_message_version, flow_token, wa_flow_response_params } = m;
        const g = babelHelpers.objectWithoutPropertiesLoose(m, u);
        const h = {
            body: {
                text: json.body,
                format: o("WAWebProtobufsE2E.pb").Message$InteractiveResponseMessage$Body$Format.EXTENSIONS_1
            },
            [d]: babelHelpers.extends({}, c, {
                paramsJson: JSON.stringify(babelHelpers.extends({}, g, {
                    flow_token,
                    wa_flow_response_params
                })),
                version: wa_flow_response_params != null ? 3 : 2
            }),
            contextInfo
        };
        return {
            interactiveResponseMessage: h
        };
    }
    l.default = c;
}, 98);