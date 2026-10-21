__d("WAWebGetGalaxyFlowCtaButton", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        return {
            label: e.flow_cta,
            expireTime: e.expire_time,
            mode: e.mode,
            flowId: e.flow_id,
            flowActionPayload: e.flow_action_payload,
            flowDataEndpoint: e.flow_data_endpoint,
            flowMessageVersion: e.flow_message_version,
            flowMetadata: e.flow_metadata,
            flowToken: e.flow_token,
            flowVersionId: e.flow_version_id,
            flowJSON: e.flow_json,
            flowJSONFreshFetched: e.flow_json_fresh_fetched,
            flowAction: e.flow_action,
            flowName: e.flow_name,
            flowQPLMessageId: e.flow_qpl_message_id,
            flowWAMMessageId: e.flow_wam_message_id,
            messageTimestamp: t,
            isResponseFlow: false,
            creationSource: e.creation_source
        };
    }
    function l(t, n, r) {
        const o = JSON.parse(t);
        return {
            name: "galaxy_message",
            index: n,
            data: e(o, r)
        };
    }
    function s(t, n, r) {
        const o = JSON.parse(t);
        if (o.wa_flow_response_params != null) {
            const a = o.wa_flow_response_params;
            const { flow_id: i, flow_name: l, response_message: s } = a;
            return {
                name: "galaxy_message",
                index: n,
                data: babelHelpers.extends({}, e(o, r), {
                    flowId: i,
                    flowName: l,
                    flowResponseMessage: s,
                    isResponseFlow: s != null
                })
            };
        }
    }
    i.getGalaxyFlowCtaButton = l;
    i.getGalaxyFlowResponseCtaButton = s;
}, 66);