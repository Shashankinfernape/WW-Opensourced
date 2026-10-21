__d("WAWebQueryCatalog", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchCatalog",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebQueryCatalogQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            try {
                const { afterCursor, allowShopSource, catalogWid, checkmarkCollectionId, height, limit, variantInfoFields, variantThumbnailHeight, variantThumbnailWidth, width } = t;
                const C = yield o("WAWebRelayClient").fetchQuery(e !== undefined ? e : e = n("WAWebQueryCatalogQuery.graphql"), {
                    request: {
                        product_catalog: {
                            jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(catalogWid) ?? catalogWid.toString(),
                            allow_shop_source: allowShopSource ? "ALLOWSHOPSOURCE_TRUE" : "ALLOWSHOPSOURCE_FALSE",
                            width: String(width),
                            height: String(height),
                            limit: String(limit),
                            after: afterCursor,
                            catalog_session_id: checkmarkCollectionId,
                            variant_info_fields: variantInfoFields,
                            variant_thumbnail_height: variantThumbnailHeight != null ? String(variantThumbnailHeight) : null,
                            variant_thumbnail_width: variantThumbnailWidth != null ? String(variantThumbnailWidth) : null
                        }
                    }
                }, {
                    eventLogger: o("WAWebCatalogEventLogger").createCatalogEventLogger(o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT.GET_CATALOG)
                });
                const b = C?.xwa_product_catalog_get_product_catalog?.product_catalog;
                if (b == null) {
                    return {
                        data: [],
                        catalog_id: null,
                        catalog_name: null,
                        catalog_type: null,
                        paging: {
                            cursors: {
                                after: "",
                                before: ""
                            }
                        }
                    };
                }
                const { paging, products } = b;
                return {
                    data: products.map(o("WAWebBizParseProductGraphql").parseProductGraphQL),
                    catalog_id: null,
                    catalog_name: null,
                    catalog_type: null,
                    paging: {
                        cursors: {
                            before: paging?.before ?? "",
                            after: paging?.after ?? ""
                        }
                    }
                };
            } catch (error) {
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(error);
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: xwa_product_catalog_get_product_catalog failed"
                ])));
                throw new (o("WAWebBackendErrors")).CatalogUnknownError;
            }
        });
        return function(n) {
            return t.apply(this, arguments);
        };
    })();
    const d = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ afterCursor, allowShopSource, catalogWid, checkmarkCollectionId, height, limit, variantInfoFields, variantThumbnailHeight, variantThumbnailWidth, width }) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            const _ = yield o("WAWebBizCatalogManagementFetchCatalog").fetchCatalog({
                product_catalog: {
                    jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(catalogWid) ?? catalogWid.toJid(),
                    after: afterCursor,
                    limit: String(limit),
                    width: String(width),
                    height: String(height),
                    belongs_to: {
                        collection_id: checkmarkCollectionId
                    },
                    allow_shop_source: allowShopSource,
                    variant_info_fields: variantInfoFields,
                    variant_thumbnail_height: variantThumbnailHeight != null ? String(variantThumbnailHeight) : null,
                    variant_thumbnail_width: variantThumbnailWidth != null ? String(variantThumbnailWidth) : null
                },
                platform: "WEB"
            });
            if (_.type === "success") {
                return _.catalog;
            }
            if (_.type === "graphql-error") {
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(_.error, o("WAWebMaybeThrowCatalogErrors").ErrorSourceForCatalogQuery.GET_PRODUCT_CATALOG_OWNER_GRAPHQL);
            } else {
                _.type;
            }
            throw _.type === "recovery-required" ? new (o("WAWebBackendErrors")).AdAccountRecoveryRequiredError(_.emailMask) : _.type === "incorrect-nonce" ? new (o("WAWebBackendErrors")).CatalogIncorrectNonceError : (o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "queryCatalogGraphQLByOwner: unhandled error ",
                ""
            ])), JSON.stringify(_)), new (o("WAWebBackendErrors")).CatalogUnknownError(_.type === "auth-failure" || _.type === "error" || _.type === "timeout" || _.type === "too-many-attempts" ? _.type : undefined));
        });
        return function(n) {
            return e.apply(this, arguments);
        };
    })();
    const m = function(t) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(t.catalogWid)) {
            return d(t);
        }
        return c(t);
    };
    l.default = m;
}, 98);