__d("WAWebQueryCatalogHasCategories", [
    "errorCode",
    "WALogger",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebQueryCatalogHasCategoriesQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ catalogWid, imageDimensions = {
            width: 100,
            height: 100
        }, sessionId }) {
            try {
                let c;
                const d = yield o("WAWebRelayClient").fetchQuery(e !== undefined ? e : e = n("WAWebQueryCatalogHasCategoriesQuery.graphql"), {
                    request: {
                        categories: {
                            biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(catalogWid) ?? catalogWid.toString(),
                            image_dimensions: imageDimensions,
                            catalog_session_id: sessionId
                        }
                    }
                }, {
                    eventLogger: o("WAWebCatalogEventLogger").createCatalogEventLogger(o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT.GET_CATEGORIES)
                });
                return !!(!(d == null || (c = d.xwa_product_catalog_get_categories) == null) && c.categories.length);
            } catch (error) {
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    const m = error.source.errors || [];
                    const p = m[0];
                    if (p?.code === 2498052) {
                        return false;
                    }
                    o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(error);
                }
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: xwa_product_catalog_get_categories fetch failed"
                ])));
                return false;
            }
        });
        return d.apply(this, arguments);
    }
    l.queryCatalogHasCategories = c;
}, 98);