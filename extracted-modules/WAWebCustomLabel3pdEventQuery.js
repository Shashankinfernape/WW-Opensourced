__d("WAWebCustomLabel3pdEventQuery", [
    "WALogger",
    "WAWebCustomLabel3pdEventQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = {
        type: "error"
    };
    const d = e !== undefined ? e : e = n("WAWebCustomLabel3pdEventQuery.graphql");
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(custom_labels, expt_group) {
            yield r("WAWebNetworkStatus").waitIfOffline();
            try {
                const n = yield o("WAWebRelayClient").fetchQuery(d, {
                    custom_labels,
                    expt_group
                });
                if (n == null) {
                    return c;
                }
                const a = n.xwa_get_3pd_event;
                if (a == null) {
                    return c;
                }
                const i = {
                    type: "success",
                    events: a.map((e)=>({
                            custom_label: e.custom_label ?? "",
                            ctwa_3pd_conversion_type: e.ctwa_3pd_conversion_type,
                            ctwa_3pd_conversion_subtype: e.ctwa_3pd_conversion_subtype,
                            ctwa_3pd_conversion_metadata: e.ctwa_3pd_conversion_metadata
                        }))
                };
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getCustomLabel3pdEvent: success"
                ])));
                return i;
            } catch (error) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getCustomLabel3pdEvent: failed with error"
                ])));
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    return {
                        type: "graphql-error",
                        error
                    };
                }
                return c;
            }
        });
        return p.apply(this, arguments);
    }
    l.getCustomLabel3pdEvent = m;
}, 98);