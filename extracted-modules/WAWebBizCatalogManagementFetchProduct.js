__d("WAWebBizCatalogManagementFetchProduct", [
    "WALogger",
    "WAWebBizCatalogManagementFetchProductQuery.graphql",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = {
        type: "error"
    };
    const m = e !== undefined ? e : e = n("WAWebBizCatalogManagementFetchProductQuery.graphql");
    function p(e) {
        return _(e).then((e)=>{
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchProduct: success"
                ])));
                return e;
            }
            e.type;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'fetchProduct: failed as "',
                '"'
            ])), e.type);
            return e;
        });
    }
    function _(e) {
        return o("WAWebFetchAdAccountToken").fetchToken().then((t)=>{
            if (t.type === "success") {
                return f(t.token, e).then((e)=>{
                    if (e.type !== "success" && e.type === "auth-failure") {
                        o("WAWebFetchAdAccountToken").markTokenAsInvalid();
                    } else {
                        e.type;
                    }
                    return e;
                });
            }
            t.type;
            return t;
        });
    }
    function f(token, t) {
        let n;
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").fetchQuery(m, {
                request: t
            }, {
                environmentType: "facebook",
                accessToken: token,
                getInlineDataReader: function(t) {
                    n = t;
                }
            })).then((e)=>{
            if (e == null) {
                return d;
            }
            const i = e.xfb_whatsapp_catalog_product?.product_catalog?.product;
            if (i == null) {
                return d;
            }
            const l = o("WAWebBizCatalogManagementParseProductGraphql").parseProductGraphQL(n(o("WAWebBizCatalogManagementParseProductGraphql").PARSE_PRODUCT_FRAGMENT, i));
            return {
                type: "success",
                productResult: {
                    data: l,
                    catalog_id: e.xfb_whatsapp_catalog_product?.product_catalog?.catalog_id,
                    catalog_type: e.xfb_whatsapp_catalog_product?.product_catalog?.catalog_type
                }
            };
        }).catch((e)=>{
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "fetchProductWithToken: failed with error"
            ])));
            if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)) {
                return {
                    type: "auth-failure"
                };
            }
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                return {
                    type: "graphql-error",
                    error: e
                };
            }
            return d;
        });
    }
    l.fetchProduct = p;
}, 98);