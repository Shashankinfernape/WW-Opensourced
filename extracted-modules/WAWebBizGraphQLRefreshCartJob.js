__d("WAWebBizGraphQLRefreshCartJob", [
    "WALogger",
    "WAWebBizGraphQLRefreshCartJobQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = {
        type: "error"
    };
    const p = e !== undefined ? e : e = n("WAWebBizGraphQLRefreshCartJobQuery.graphql");
    function _(e) {
        return f(e).then((e)=>{
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "RefreshCart: success"
                ])));
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    'RefreshCart results: "',
                    '"'
                ])), JSON.stringify(e.cartResult));
                return e;
            }
            e.type;
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                'WAWebBizRefreshCart: failed as "',
                '"'
            ])), e.type);
            return e;
        });
    }
    function f(request) {
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").fetchQuery(p, {
                request
            }, {
                environmentType: "whatsapp_catalog"
            })).then((e)=>{
            if (e == null) {
                return m;
            }
            const d = e.xwa_checkout_refresh_cart?.cart?.products;
            if (d == null) {
                return m;
            }
            const p = d.map((e)=>{
                const i = {
                    id: "",
                    currency: null,
                    price: null,
                    name: null,
                    variantProperties: undefined
                };
                if (e.id == null) {
                    throw r("err")("product id is null");
                }
                i.id = e.id ?? "";
                i.name = e.name;
                i.price = e.price;
                i.currency = e.currency;
                i.max_available = e.max_available ?? 0;
                i.status = e.product_availability ?? "";
                if (e.sale_price != null) {
                    i.sale_price = {
                        price: e.sale_price.price,
                        start_date: e.sale_price.start_date ?? "",
                        end_date: e.sale_price.end_date ?? ""
                    };
                }
                const u = {};
                if (e.media != null && e.media.images != null) {
                    if (e.media.images[0].id != null) {
                        u.id = e.media.images[0].id;
                    }
                    if (e.media.images[0].request_image_url != null) {
                        u.request_image_url = e.media.images[0].request_image_url;
                    }
                }
                i.media = {
                    image: u
                };
                if (e.variant_info?.variant_properties != null) {
                    const d = [];
                    e.variant_info?.variant_properties.forEach(function({ name, value }) {
                        if (name != null && value != null) {
                            d.push({
                                name,
                                value
                            });
                        }
                    });
                    i.variantProperties = d;
                }
                return i;
            });
            const _ = {
                price_details: {
                    total: e.xwa_checkout_refresh_cart?.cart?.price_details?.total_amount,
                    subtotal: e.xwa_checkout_refresh_cart?.cart?.price_details?.subtotal_amount,
                    currency: e.xwa_checkout_refresh_cart?.cart?.price_details?.currency,
                    price_status: e.xwa_checkout_refresh_cart?.cart?.price_details?.price_status
                }
            };
            const f = {};
            if (_.price_details?.subtotal != null) {
                f.subtotal = String(_.price_details?.subtotal);
            }
            if (_.price_details?.currency != null) {
                f.currency = String(_.price_details?.currency);
            }
            if (_.price_details?.total != null) {
                f.total = String(_.price_details?.total);
            }
            if (_.price_details?.price_status != null) {
                f.price_status = String(_.price_details?.price_status);
            }
            const cartResult = {
                price: {
                    currency: f.currency,
                    price_status: f.price_status,
                    subtotal: f.subtotal,
                    total: f.total
                },
                products: p
            };
            return {
                type: "success",
                cartResult
            };
        }).catch((e)=>{
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBizRefreshCart: RefreshCartImpl failed"
            ])));
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                return {
                    type: "graphql-error",
                    error: e
                };
            }
            return m;
        });
    }
    l.RefreshCart = _;
}, 98);