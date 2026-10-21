__d("WAWebGalaxyFlowsDrawerUtils", [
    "fbt",
    "WABase64",
    "WAFlowsActionHandlerTypes",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = {
        screen: "RESPONSE"
    };
    function u() {
        const e = location.hostname.match(/(?:dev-web|web)\.(.+?)\.whatsapp\.com$/);
        if (e) {
            return `https://flows.${e[1]}.whatsapp.net/flows-v2/wa-web/`;
        }
        return "https://flows.whatsapp.net/flows-v2/wa-web/";
    }
    const c = "flows-iframe";
    const d = "flows-iframe-loaded";
    const m = [
        "whatsapp.net"
    ];
    const p = u();
    function _(e, t) {
        if (e.isResponseFlow) {
            return "PUBLISHED";
        }
        const a = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(e.flowId, t ?? e.flowFetchedMetadata)?.state;
        if ((a ?? e.mode)?.toUpperCase() === "DRAFT") {
            return "DRAFT";
        }
        return "PUBLISHED";
    }
    function f(messageData) {
        if (messageData.flowAction === o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE) {
            return o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE;
        }
        return o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE;
    }
    function g({ chat, flowInitData, messageData, responseViewer }) {
        const messageData_isResponseFlow = messageData.isResponseFlow;
        const u = ()=>{
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.resyncPicturesByWid([
                chat.contact.id
            ]);
            const t = chat.contact.getProfilePicThumb();
            return o("WAWebProfilePicThumbGetters").getMaybeImg(t) ?? "";
        };
        const c = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(messageData.flowId, messageData.flowFetchedMetadata);
        return {
            public_key: h(messageData.flowFetchedMetadata),
            biz_jid: chat.contact.id.toString(),
            flow_token: messageData.flowToken,
            extension_status: String(_(messageData)),
            qpl_message_id: messageData.flowQPLMessageId,
            wam_message_id: messageData.flowWAMMessageId,
            wam_session_id: "2C95C13B-5731-4508-8F88-863DAAC34A95",
            extension_id: messageData.flowId,
            qpl_session_id: "7342BB21-9B5E-4408-895C-D5171427E19F",
            business_name: flowInitData?.business_name ?? "",
            biz_logo: u(),
            is_template: messageData.isTemplate === true,
            hsm_tag: messageData.hsmTag,
            categories: messageData.categories,
            biz_platform: o("WAWebGalaxyFlowWamLoggerUtils").getFlowsMaybeBizPlatform(chat),
            entry_point_conversion_source: messageData.entryPointConversionSource,
            entry_point_conversion_app: messageData.entryPointConversionApp,
            entry_point_conversation_initiated: -1,
            flow_action: f(messageData),
            flow_action_payload: o("WABase64").encodeB64(new TextEncoder().encode(JSON.stringify(messageData_isResponseFlow ? e : messageData.flowActionPayload))),
            flow_json: JSON.stringify(messageData.flowJSON),
            flow_entry_point: messageData.flowEntryPoint,
            click_sequence_number: null,
            is_flow_interactive: true,
            response_viewer: responseViewer,
            response_message: messageData.flowResponseMessage,
            creation_source: messageData.creationSource,
            www_proxy_secret: c?.www_proxy_secret,
            flow_token_signature: c?.flow_token_signature
        };
    }
    function h(e) {
        if (!e) {
            return "";
        }
        const r = e.xwa_extensions_get_flow_data ?? {};
        const r_endpoint_public_key = r.endpoint_public_key;
        return r_endpoint_public_key?.key ?? "";
    }
    function y() {
        if (navigator.onLine) {
            return s._("Something went wrong.");
        }
        return s._("Check your internet connection and try again.");
    }
    l.getFlowsUrl = u;
    l.FLOWS_IFRAME_ID = c;
    l.FLOWS_IFRAME_LOADED_EVENT = d;
    l.SUPPORTED_ORIGINS = m;
    l.FLOWS_URL = p;
    l.getFlowStatus = _;
    l.getFlowInitDataPayload = g;
    l.getPublicKeyFromFetchedData = h;
    l.getGalaxyFlowsFullScreenErrorString = y;
}, 226);