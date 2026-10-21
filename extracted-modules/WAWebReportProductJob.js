__d("WAWebReportProductJob", [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebRelayClient",
    "WAWebReportProductJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebReportProductJobMutation.graphql");
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            return d(e, t, n);
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = {
                jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(e) ?? e.toJid(),
                product_id: t
            };
            if (n !== "") {
                a.reason = n;
            }
            return o("WAWebRelayClient").commitMutation(s, {
                input: a
            }).then((e)=>{
                const n = e?.xwa_whatsapp_catalog_report_product?.success;
                if (n !== true) {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500);
                }
            }).catch((e)=>{
                if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(e);
                }
            });
        });
        return m.apply(this, arguments);
    }
    l.default = u;
}, 98);