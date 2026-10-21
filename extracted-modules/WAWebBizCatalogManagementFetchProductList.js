__d("WAWebBizCatalogManagementFetchProductList", [
    "WALogger",
    "WAWebBizCatalogManagementFetchProductListQuery.graphql",
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
    const m = e !== void 0 ? e : e = n("WAWebBizCatalogManagementFetchProductListQuery.graphql");
    function p(e) {
        return _(e).then((e)=>{
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchProductList: success"
                ])));
                return e;
            }
            e.type;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'fetchProductList: failed as "',
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
    function f(e, t) {
        let n;
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").fetchQuery(m, {
                request: t
            }, {
                environmentType: "facebook",
                accessToken: e,
                getInlineDataReader: function(t) {
                    n = t;
                }
            })).then((e)=>{
            if (e == null) {
                return d;
            }
            const r = e.xfb_whatsapp_catalog_product_list?.product_list?.products;
            if (r == null) {
                return d;
            }
            const a = r.map((e)=>n(o("WAWebBizCatalogManagementParseProductGraphql").PARSE_PRODUCT_FRAGMENT, e)).map(o("WAWebBizCatalogManagementParseProductGraphql").parseProductGraphQL);
            return {
                type: "success",
                productsResult: a
            };
        }).catch((e)=>{
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "fetchProductListWithToken: failed with error"
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
    l.fetchProductList = p;
}, 98);