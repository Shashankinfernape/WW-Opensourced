__d("WAWebBizBroadcastInsightsContactListHandler", [
    "WALogger",
    "WAWebProtobufsE2E.pb",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = "biz_broadcast_insights_contact_list_received";
    function m(state) {
        if (state === o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.SENT) {
            return "SENT";
        }
        if (state === o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.DELIVERED) {
            return "DELIVERED";
        }
        if (state === o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.READ) {
            return "READ";
        }
        if (state === o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.REPLIED) {
            return "REPLIED";
        }
        if (state === o("WAWebProtobufsE2E.pb").Message$InsightDeliveryState.QUICK_REPLIED) {
            return "QUICK_REPLIED";
        }
        return "SENT";
    }
    function p(t) {
        try {
            if (t.length === 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleInsightsContactListResponse] Empty results"
                ])));
                return null;
            }
            const l = t[0];
            const d = l?.bizBroadcastInsightsContactListResponse;
            if (d == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleInsightsContactListResponse] no response data"
                ])));
                return null;
            }
            const campaignId = d.campaignId ?? "";
            const timestampMs = Number(d.timestampMs ?? 0);
            const f = (d.contacts ?? []).map((e)=>({
                    contactJid: e.contactJid ?? "",
                    state: m(e.state)
                }));
            const g = {
                campaignId,
                contacts: f,
                timestampMs
            };
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[handleInsightsContactListResponse] ",
                " contacts, campaign=",
                ""
            ])), f.length, campaignId);
            return g;
        } catch (error) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[handleInsightsContactListResponse] failed: ",
                ""
            ])), r("getErrorSafe")(error));
            return null;
        }
    }
    l.BIZ_BROADCAST_INSIGHTS_CONTACT_LIST_RECEIVED = d;
    l.handleInsightsContactListResponse = p;
}, 98);