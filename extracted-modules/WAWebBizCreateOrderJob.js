__d("WAWebBizCreateOrderJob", [
    "WAWebBackendErrors",
    "WAWebBizCreateOrderJobMutation.graphql",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebBizCreateOrderJobMutation.graphql");
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = t.map((e)=>{
                const t = {
                    id: e.id,
                    name: e.name,
                    quantity: e.quantity
                };
                if (e.currency != null) {
                    t.currency = e.currency;
                }
                if (e.priceAmount1000 != null) {
                    t.price = String(e.priceAmount1000);
                }
                if (e.variantProperties != null && e.variantProperties.length > 0) {
                    t.variant_info = {
                        properties: {
                            properties: e.variantProperties.map(({ name, value })=>({
                                    nameAttr: name ?? "",
                                    valueAttr: value ?? ""
                                }))
                        }
                    };
                }
                return t;
            });
            const input = {
                order: {
                    jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(e) ?? e.toJid(),
                    products: a
                }
            };
            return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").commitMutation(s, {
                    input
                }, {
                    environmentType: "whatsapp_catalog"
                })).then((e)=>{
                const u = e?.xwa_checkout_place_order?.order;
                if (u == null || u.order_id == null) {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500);
                }
                const price = {};
                if (u.price?.subtotal_amount != null) {
                    price.subtotal = String(u.price.subtotal_amount);
                }
                if (u.price?.total_amount != null) {
                    price.total = String(u.price.total_amount);
                }
                if (u.price?.currency != null) {
                    price.currency = u.price.currency;
                }
                if (u.price?.price_status != null) {
                    price.price_status = u.price.price_status;
                }
                return {
                    id: u.order_id ?? "",
                    token: u.token ?? "",
                    price
                };
            }).catch((e)=>{
                throw e instanceof o("WAWebGraphQLServerError").GraphQLServerError ? new (o("WAWebBackendErrors")).ServerStatusCodeError(500) : e;
            });
        });
        return c.apply(this, arguments);
    }
    l.createOrderMD = u;
}, 98);