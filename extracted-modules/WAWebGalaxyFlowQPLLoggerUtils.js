__d("WAWebGalaxyFlowQPLLoggerUtils", [
    "$InternalEnum",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsUtils",
    "WAWebQplFlowWrapper",
    "gkx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("qpl")._(200750681, "3410");
    const u = r("qpl")._(200743350, "3411");
    const c = (e = n("$InternalEnum"))({
        SCREEN_NAVIGATION_START: "screen_navigation_start",
        SCREEN_NAVIGATION_END: "screen_navigation_end",
        METADATA_NETWORK_START: "metadata_network_start",
        METADATA_NETWORK_END: "metadata_network_end",
        FETCHING_FLOW_DATA_START: "fetching_flow_data_start",
        FETCHING_FLOW_DATA_END: "fetching_flow_data_end",
        FETCHING_FLOW_JSON_START: "fetching_flow_json_start",
        FETCHING_FLOW_JSON_END: "fetching_flow_json_end",
        HTML_START: "html_start",
        HTML_END: "html_end"
    });
    const d = e({
        EXTENSION_METADATA_RESPONSE_ERROR: "extensions-metadata-response-error",
        NO_NETWORK_ERROR: "no-network-error",
        EXTENSION_WEBVIEW_LOADING_ERROR: "extensions-webview-loading-error",
        EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR: "extensions-metadata-graphql-response-error"
    });
    const m = e({
        MESSAGE_CTA: "message_cta"
    });
    function p() {
        g(4);
        o("WAWebQplFlowWrapper").QPL.markerStart(s);
    }
    function _(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(s, e);
    }
    function f(e) {
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, e);
    }
    function g(e, t) {
        o("WAWebQplFlowWrapper").QPL.markerEnd(s, e, t);
    }
    function h() {
        o("WAWebQplFlowWrapper").QPL.markerDrop(s);
    }
    function y(e, t) {
        return {
            string: {
                extension_id: t.flowId,
                flow_entry_point: m.MESSAGE_CTA,
                perf_origin: m.MESSAGE_CTA,
                session_id: t.flowQPLSessionId,
                biz_jid: o("WAWebGalaxyFlowWamLoggerUtils").getFlowBusinessPhoneNumber(e),
                extension_message_id: e.galaxyFlowQPLMessageId
            },
            bool: {
                is_debug_build: !r("gkx")("26258"),
                is_response_flow: !!t.isResponseFlow,
                data_channel_navigation: !o("WAWebGalaxyFlowsUtils").isFlowInitWithoutDataChannel(t?.flowAction ?? "")
            }
        };
    }
    const C = e({
        FETCH_START: "fetch_start",
        METADATA_NETWORK_START: "metadata_network_start",
        METADATA_NETWORK_END: "metadata_network_end",
        FETCH_END: "fetch_end"
    });
    const b = e({
        EXTENSIONS_METADATA_EMPTY_RESPONSE: "extensions-metadata-empty-response",
        EXTENSIONS_METADATA_RESPONSE_ERROR: "extensions-metadata-response-error",
        EXTENSIONS_INVALID_EXTENSIONS_ID: "extensions-invalid-extensions-id",
        EXTENSIONS_INVALID_PUBLIC_KEY: "extensions-invalid-public-key",
        EXTENSIONS_PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION: "extensions-public-key-signature-verification-exception",
        EXTENSIONS_PUBLIC_KEY_MISSING_IDENTITY_KEY_ERROR: "extensions-public-key-missing-identity-key-error",
        EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR: "extensions-metadata-graphql-response-error"
    });
    const v = e({
        EXTENSION_METADATA_PERF_TRACKER: "extensionMetadataPerfTracker"
    });
    const S = e({
        USER_INTERACTION: "user_interaction",
        SCREEN_TRANSITION_INTEGRITY_CHECK: "screen_transition_integrity_check"
    });
    const R = e({
        OPTIONAL: "optional",
        REQUIRED: "required"
    });
    function L() {
        I(4);
        o("WAWebQplFlowWrapper").QPL.markerStart(u);
    }
    function E(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(u, e);
    }
    function k(e) {
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(u, e);
    }
    function I(e) {
        o("WAWebQplFlowWrapper").QPL.markerEnd(u, e);
    }
    function T() {
        o("WAWebQplFlowWrapper").QPL.markerDrop(u);
    }
    function D(e) {
        const t = JSON.stringify(e);
        const n = new TextEncoder().encode(t ?? "").length;
        k({
            int: {
                metadata_response_size: n
            }
        });
    }
    function x(e) {
        const t = {};
        for(const n in e){
            const r = e[n];
            if (typeof r === "string") {
                t.string = babelHelpers.extends({}, t.string, {
                    [n]: r
                });
            } else if (typeof r === "number") {
                t.int = babelHelpers.extends({}, t.int, {
                    [n]: r
                });
            } else if (typeof r === "boolean") {
                t.bool = babelHelpers.extends({}, t.bool, {
                    [n]: r
                });
            }
        }
        return t;
    }
    function $(e, t, n = R.OPTIONAL) {
        return {
            string: {
                biz_jid: o("WAWebGalaxyFlowWamLoggerUtils").getFlowBusinessPhoneNumber(e),
                fetch_context: S.USER_INTERACTION,
                extension_id: t.flowId,
                perf_origin: v.EXTENSION_METADATA_PERF_TRACKER,
                endpoint_public_key_fetch_mode: n
            },
            bool: {
                is_debug_build: !r("gkx")("26258"),
                is_graphql_prod: r("gkx")("26258")
            }
        };
    }
    function P() {
        g(4);
        I(4);
    }
    l.WaeScreenNavigationQPLPoints = c;
    l.WaeScreenNavigationQPLErrorTypes = d;
    l.qplWaeScreenNavigationStart = p;
    l.qplWaeScreenNavigationPoint = _;
    l.qplWaeScreenNavigationAnnotate = f;
    l.qplWaeScreenNavigationEnd = g;
    l.qplWaeScreenNavigationDrop = h;
    l.getWaeScreenNavigationAnnotations = y;
    l.WaeMetadataQPLPoints = C;
    l.WaeMetadataQPLErrorTypes = b;
    l.qplWaeMetadataStart = L;
    l.qplWaeMetadataPoint = E;
    l.qplWaeMetadataAnnotate = k;
    l.qplWaeMetadataEnd = I;
    l.qplWaeMetadataDrop = T;
    l.qplAnnotateMetadataSize = D;
    l.qplBuildAnnotations = x;
    l.getWaeMetadataAnnotations = $;
    l.clearAllActiveWaeQPLMarkerInstances = P;
}, 98);