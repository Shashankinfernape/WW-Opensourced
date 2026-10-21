__d("WAWebQueryProductCollections", [
    "errorCode",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchCollections",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebProductTypes",
    "WAWebQueryProductCollectionsQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            try {
                const { afterCursor, catalogWid, height, limit, productsCount, variantInfoFields, variantThumbnailHeight, variantThumbnailWidth, width } = t;
                const f = yield o("WAWebRelayClient").fetchQuery(e !== undefined ? e : e = n("WAWebQueryProductCollectionsQuery.graphql"), {
                    request: {
                        collections: {
                            biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(catalogWid) ?? catalogWid.toString(),
                            collection_limit: String(limit),
                            item_limit: String(productsCount),
                            after: afterCursor,
                            width: String(width),
                            height: String(height),
                            variant_info_fields: variantInfoFields,
                            variant_thumbnail_height: variantThumbnailHeight != null ? String(variantThumbnailHeight) : null,
                            variant_thumbnail_width: variantThumbnailWidth != null ? String(variantThumbnailWidth) : null
                        }
                    }
                }, {
                    eventLogger: o("WAWebCatalogEventLogger").createCatalogEventLogger(o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT.GET_COLLECTIONS)
                });
                if (f?.xwa_product_catalog_get_collections == null) {
                    return {
                        afterCursor: "",
                        collections: [],
                        catalog_type: null
                    };
                }
                const g = f.xwa_product_catalog_get_collections;
                const { collections, paging } = g;
                return {
                    afterCursor: paging?.after || "",
                    collections: collections.map(({ id, name, products, status_info })=>{
                        const l = status_info?.status;
                        const s = (l != null ? o("WAWebProductTypes").asProductReviewType(l) : undefined) ?? "APPROVED";
                        return {
                            id: id || "",
                            name: name || "",
                            canAppeal: status_info?.can_appeal === "true",
                            isHidden: false,
                            reviewStatus: s,
                            totalItemsCount: 0,
                            products: products.map(o("WAWebBizParseProductGraphql").parseProductGraphQL),
                            rejectReason: status_info?.reject_reason,
                            commerceUrl: status_info?.commerce_url
                        };
                    }),
                    catalog_type: null
                };
            } catch (error) {
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    const b = error.source?.errors || [];
                    const v = b[0];
                    if (v?.code === 2498052) {
                        return {
                            collections: [],
                            afterCursor: "",
                            catalog_type: null
                        };
                    }
                    o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(error);
                }
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: xwa_product_catalog_get_collections fetch failed"
                ])));
                throw new (o("WAWebBackendErrors")).CatalogUnknownError;
            }
        });
        return function(n) {
            return t.apply(this, arguments);
        };
    })();
    const m = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            const { afterCursor, catalogWid, height, limit, productsCount, variantInfoFields, variantThumbnailHeight, variantThumbnailWidth, width } = e;
            const p = yield o("WAWebBizCatalogManagementFetchCollections").fetchCollections({
                collections: {
                    biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(catalogWid) ?? catalogWid.toJid(),
                    after: afterCursor,
                    collection_limit: String(limit),
                    item_limit: String(productsCount),
                    width: String(width),
                    height: String(height),
                    variant_info_fields: variantInfoFields,
                    variant_thumbnail_height: variantThumbnailHeight != null ? String(variantThumbnailHeight) : null,
                    variant_thumbnail_width: variantThumbnailWidth != null ? String(variantThumbnailWidth) : null
                }
            });
            if (p.type === "success") {
                return p.collectionsResult;
            }
            if (p.type === "graphql-error") {
                if (p.error.source.errors[0]?.code === 2498052) {
                    return {
                        collections: [],
                        afterCursor: "",
                        catalog_type: null
                    };
                }
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(p.error);
            } else {
                p.type;
            }
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "queryCollectionsGraphQLByOwner: unhandled error ",
                ""
            ])), JSON.stringify(p));
            throw new (o("WAWebBackendErrors")).CatalogUnknownError;
        });
        return function(n) {
            return e.apply(this, arguments);
        };
    })();
    const p = function(t) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(t.catalogWid)) {
            return m(t);
        }
        return d(t);
    };
    l.default = p;
}, 98);