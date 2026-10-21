__d("WAWebBizAGMFlowCta.react", [
    "WALogger",
    "WAWebGalaxyFlowsOpenDrawer",
    "WAWebMessageBubbleActions.react",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WDSIconIcOpenInNew.react",
    "err",
    "react",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useCallback = s.useCallback;
    function d({ chat, ctaPayload, ctaText, msg, onClick }) {
        const d = s_useCallback(function() {
            let t = null;
            try {
                const i = JSON.parse(ctaPayload);
                t = {
                    label: i.flow_cta,
                    expireTime: i.expire_time,
                    mode: i.mode,
                    flowId: i.flow_id,
                    flowActionPayload: i.flow_action_payload,
                    flowDataEndpoint: i.flow_data_endpoint,
                    flowMessageVersion: i.flow_message_version,
                    flowMetadata: i.flow_metadata,
                    flowToken: i.flow_token,
                    flowVersionId: i.flow_version_id,
                    flowResponseMessage: i.flow_response_message,
                    flowJSON: i.flow_json,
                    flowJSONFreshFetched: i.flow_json_fresh_fetched,
                    flowAction: i.flow_action,
                    flowName: i.flow_name,
                    flowQPLMessageId: i.flow_qpl_message_id,
                    flowWAMMessageId: i.flow_wam_message_id,
                    messageTimestamp: Date.now(),
                    isResponseFlow: i.flow_response_message != null,
                    categories: i.categories,
                    creationSource: i.creation_source
                };
                if (!o("WAWebGalaxyFlowsOpenDrawer").isValidGalaxyFlowBtnParamsJson(t)) {
                    throw r("err")("Missing required Galaxy Flow parameters");
                }
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Galaxy Flow: Invalid Flow configuration: ",
                    ""
                ])), error);
            }
            if (t != null) {
                o("WAWebGalaxyFlowsOpenDrawer").openGalaxyFlowsDrawer(msg, t, chat, t.flowId)();
                onClick();
            } else {
                r("WAWebNoop")();
            }
        }, [
            chat,
            ctaPayload,
            msg,
            onClick
        ]);
        const m = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebMsgGetters").getGalaxyFlowDisabled
        ]);
        const p = m[0];
        const _ = msg.id.fromMe || p === true;
        return u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
                {
                    label: ctaText,
                    onClick: d,
                    Icon: r("WDSIconIcOpenInNew.react"),
                    disabled: _
                }
            ]
        });
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);