__d("WAWebBizBroadcastInsightsStorageUtils", [
    "WALogger",
    "WAWebSchemaBusinessBroadcastInsights",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            try {
                const m = {
                    campaignId: t,
                    deliveredCount: n.deliveredCount ?? 0,
                    lastUpdatedTimestampMs: a,
                    quickReplyCount: n.quickReplyCount ?? 0,
                    readCount: n.readCount ?? 0,
                    recipientCount: n.recipientCount ?? 0,
                    repliedCount: n.repliedCount ?? 0
                };
                yield o("WAWebSchemaBusinessBroadcastInsights").getBusinessBroadcastInsightsTable().createOrReplace(m);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:insights-storage] Stored insights for campaign ",
                    ""
                ])), t);
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:insights-storage] upsert failed ",
                    ": ",
                    ""
                ])), t, r("getErrorSafe")(e));
                throw e;
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebSchemaBusinessBroadcastInsights").getBusinessBroadcastInsightsTable().remove(e);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:insights-storage] Removed insights for campaign ",
                    ""
                ])), e);
            } catch (t) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:insights-storage] remove failed ",
                    ": ",
                    ""
                ])), e, r("getErrorSafe")(t));
                throw t;
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return yield o("WAWebSchemaBusinessBroadcastInsights").getBusinessBroadcastInsightsTable().get(e);
            } catch (t) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:insights-storage] Failed to get insights for ",
                    ": ",
                    ""
                ])), e, r("getErrorSafe")(t));
                throw t;
            }
        });
        return h.apply(this, arguments);
    }
    l.upsertInsightsStorage = m;
    l.removeInsightsStorage = _;
    l.getInsightsForCampaign = g;
}, 98);