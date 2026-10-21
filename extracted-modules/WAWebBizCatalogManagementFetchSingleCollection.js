__d("WAWebBizCatalogManagementFetchSingleCollection", [
    "WALogger",
    "WAWebBizCatalogManagementFetchSingleCollectionQuery.graphql",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebProductTypes",
    "WAWebRelayClient"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = {
        type: "error"
    };
    const m = e !== undefined ? e : e = n("WAWebBizCatalogManagementFetchSingleCollectionQuery.graphql");
    function p(e) {
        return _(e).then((e)=>{
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchSingleCollection: success"
                ])));
                return e;
            }
            e.type;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'fetchSingleCollection: failed as "',
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
            const l = e.xfb_whatsapp_catalog_collection?.collection;
            if (l == null) {
                return d;
            }
            const s = e.xfb_whatsapp_catalog_collection?.paging;
            const u = s?.after ?? "";
            const { id, name, products, status_info } = l;
            const f = status_info?.status;
            const g = (f != null ? o("WAWebProductTypes").asProductReviewType(f) : undefined) ?? "APPROVED";
            const h = products.map((e)=>n(o("WAWebBizCatalogManagementParseProductGraphql").PARSE_PRODUCT_FRAGMENT, e)).map(o("WAWebBizCatalogManagementParseProductGraphql").parseProductGraphQL);
            const y = {
                id: id ?? "",
                name: name ?? "",
                rejectReason: status_info?.reject_reason,
                commerceUrl: status_info?.commerce_url,
                canAppeal: status_info?.can_appeal === "true",
                reviewStatus: g,
                totalItemsCount: 0,
                products: h,
                isHidden: false
            };
            return {
                type: "success",
                collectionsResult: {
                    collections: [
                        y
                    ],
                    afterCursor: u,
                    catalog_type: null
                }
            };
        }).catch((e)=>{
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "fetchSingleCollectionWithToken: failed with error"
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
    l.fetchSingleCollection = p;
}, 98);