__d("WAWebBizQueryOrderJob", [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizQueryOrderJobQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = e !== undefined ? e : e = n("WAWebBizQueryOrderJobQuery.graphql");
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ height, orderId, sellerJid, token, width }) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                return (u || (u = n("Promise"))).reject(new (o("WAWebBackendErrors")).E451);
            }
            return p(orderId, width, height, sellerJid, token);
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n, r, o) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, jid, sensitive_string_value) {
            try {
                yield r("WAWebNetworkStatus").waitIfOffline();
                const _ = yield o("WAWebRelayClient").fetchQuery(c, {
                    request: {
                        order: {
                            jid,
                            token: {
                                sensitive_string_value
                            },
                            id: e,
                            image_dimensions: {
                                height: n,
                                width: t
                            }
                        }
                    }
                }, {
                    environmentType: "whatsapp_catalog"
                });
                if (_?.xwa_checkout_get_order_info?.order == null) {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500);
                }
                const f = _.xwa_checkout_get_order_info.order;
                const g = (f.products ?? []).map((e)=>{
                    const properties = [];
                    e.variant_info?.variant_properties?.forEach(function(e) {
                        if (e.name != null && e.value != null) {
                            properties.push([
                                e.name,
                                e.value
                            ]);
                        }
                    });
                    return {
                        id: e.id,
                        name: e.name,
                        price: e.price != null ? parseInt(e.price, 10) : null,
                        currency: e.currency,
                        quantity: e.quantity != null ? parseInt(e.quantity, 10) : null,
                        thumbnailId: e.media?.images?.at(0)?.id,
                        thumbnailUrl: e.media?.images?.at(0)?.request_image_url,
                        properties
                    };
                });
                return {
                    createdAt: f.creation_time_stamp != null ? Number(f.creation_time_stamp) : null,
                    currency: f.price_details?.currency,
                    subtotal: f.price_details?.subtotal_amount != null ? parseInt(f.price_details.subtotal_amount, 10) : null,
                    tax: null,
                    total: f.price_details?.total_amount != null ? parseInt(f.price_details.total_amount, 10) : null,
                    products: g
                };
            } catch (error) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBizQueryOrderJob: GraphQL queryOrder failed"
                ])));
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    const y = error.source.errors[0]?.code;
                    throw y === 451 ? new (o("WAWebBackendErrors")).E451 : new (o("WAWebBackendErrors")).ServerStatusCodeError(y ?? 500);
                }
                throw error;
            }
        });
        return _.apply(this, arguments);
    }
    l.queryOrder = d;
}, 98);