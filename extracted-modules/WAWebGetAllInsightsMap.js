__d("WAWebGetAllInsightsMap", [
    "WALogger",
    "WAWebSchemaBusinessBroadcastInsights",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAWebSchemaBusinessBroadcastInsights").getBusinessBroadcastInsightsTable().all();
                return new Map(t.map((e)=>[
                        e.campaignId,
                        e
                    ]));
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:insights-storage] Failed to get all insights: ",
                    ""
                ])), r("getErrorSafe")(t));
                throw t;
            }
        });
        return u.apply(this, arguments);
    }
    l.getAllInsightsMap = s;
}, 98);