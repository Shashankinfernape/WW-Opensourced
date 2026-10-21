__d("WAWebBizCatalogManagementFetchCollections", [
    "WALogger",
    "WAWebBizCatalogManagementFetchCollectionsQuery.graphql",
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
    const m = e !== undefined ? e : e = n("WAWebBizCatalogManagementFetchCollectionsQuery.graphql");
    function p(e) {
        return _(e).then((e)=>{
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchCollections: success"
                ])));
                return e;
            }
            e.type;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'fetchCollections: failed as "',
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
            const l = e.xfb_whatsapp_catalog_collections?.collections;
            if (l == null) {
                return d;
            }
            const s = e.xfb_whatsapp_catalog_collections?.paging;
            const u = s?.after ?? "";
            const collections = l.map((e)=>{
                const { id, name, status_info } = e;
                const l = status_info?.status;
                const s = (l != null ? o("WAWebProductTypes").asProductReviewType(l) : undefined) ?? "APPROVED";
                const u = e.products.map((e)=>n(o("WAWebBizCatalogManagementParseProductGraphql").PARSE_PRODUCT_FRAGMENT, e)).map(o("WAWebBizCatalogManagementParseProductGraphql").parseProductGraphQL);
                return {
                    id: id ?? "",
                    name: name ?? "",
                    rejectReason: status_info?.reject_reason,
                    commerceUrl: status_info?.commerce_url,
                    canAppeal: status_info?.can_appeal === "true",
                    reviewStatus: s,
                    totalItemsCount: 0,
                    products: u,
                    isHidden: false
                };
            });
            return {
                type: "success",
                collectionsResult: {
                    collections,
                    afterCursor: u,
                    catalog_type: e.xfb_whatsapp_catalog_collections?.catalog_type
                }
            };
        }).catch((e)=>{
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "fetchCollectionsWithToken: failed with error"
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
    l.fetchCollections = p;
}, 98);