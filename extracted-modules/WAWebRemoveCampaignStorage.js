__d("WAWebRemoveCampaignStorage", [
    "WALogger",
    "WAWebSchemaBusinessBroadcastCampaign",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().remove(t);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-storage] Failed to remove campaign ",
                    ": ",
                    ""
                ])), t, r("getErrorSafe")(error));
                throw error;
            }
        });
        return u.apply(this, arguments);
    }
    l.removeCampaignStorage = s;
}, 98);