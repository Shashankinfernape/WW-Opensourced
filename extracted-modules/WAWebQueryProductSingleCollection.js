__d("WAWebQueryProductSingleCollection", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchSingleCollection",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebProductTypes",
    "WAWebQueryProductSingleCollectionQuery.graphql",
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
                const { afterCursor, catalogWid, collectionId, height, limit, variantInfoFields, variantThumbnailHeight, variantThumbnailWidth, width } = t;
                const g = yield o("WAWebRelayClient").fetchQuery(e !== undefined ? e : e = n("WAWebQueryProductSingleCollectionQuery.graphql"), {
                    request: {
                        collection: {
                            biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(catalogWid) ?? catalogWid.toString(),
                            id: collectionId,
                            limit: String(limit),
                            after: afterCursor,
                            width: String(width),
                            height: String(height),
                            variant_info_fields: variantInfoFields,
                            variant_thumbnail_height: variantThumbnailHeight != null ? String(variantThumbnailHeight) : null,
                            variant_thumbnail_width: variantThumbnailWidth != null ? String(variantThumbnailWidth) : null
                        }
                    }
                }, {
                    eventLogger: o("WAWebCatalogEventLogger").createCatalogEventLogger(o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT.GET_SINGLE_COLLECTION)
                });
                const h = g?.xwa_product_catalog_get_single_collection || {};
                const { collection, paging } = h;
                const b = collection || {};
                const { id, name, products, status_info } = b;
                const E = status_info?.status;
                const k = (E != null ? o("WAWebProductTypes").asProductReviewType(E) : undefined) ?? "APPROVED";
                return {
                    afterCursor: paging?.after || "",
                    catalog_type: null,
                    collections: [
                        {
                            id: id || "",
                            name: name || "",
                            canAppeal: status_info?.can_appeal === "true",
                            isHidden: false,
                            reviewStatus: k,
                            totalItemsCount: 0,
                            products: products != null ? products.map(o("WAWebBizParseProductGraphql").parseProductGraphQL) : [],
                            rejectReason: status_info?.reject_reason,
                            commerceUrl: status_info?.commerce_url
                        }
                    ]
                };
            } catch (error) {
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(error);
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: get_single_collection fetch failed"
                ])));
                throw new (o("WAWebBackendErrors")).CatalogUnknownError;
            }
        });
        return function(n) {
            return t.apply(this, arguments);
        };
    })();
    const d = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            const { afterCursor, catalogWid, collectionId, height, limit, variantInfoFields, variantThumbnailHeight, variantThumbnailWidth, width } = e;
            const p = yield o("WAWebBizCatalogManagementFetchSingleCollection").fetchSingleCollection({
                collection: {
                    biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(catalogWid) ?? catalogWid.toJid(),
                    id: collectionId,
                    limit: String(limit),
                    after: afterCursor,
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
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(p.error);
            } else {
                p.type;
            }
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "queryProductSingleCollectionGraphQLByOwner: unhandled err ",
                ""
            ])), JSON.stringify(p));
            throw new (o("WAWebBackendErrors")).CatalogUnknownError;
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