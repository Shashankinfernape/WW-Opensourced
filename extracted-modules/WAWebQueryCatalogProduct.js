__d("WAWebQueryCatalogProduct", [
    "errorCode",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchProduct",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebQueryCatalogProductQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(...a) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            const l = a[0];
            const s = a[1];
            const c = a[2];
            const d = a[3];
            const m = a[4];
            const p = m === undefined ? false : m;
            const _ = a[5];
            const f = a[6];
            const g = a[7];
            try {
                const C = yield o("WAWebRelayClient").fetchQuery(e !== undefined ? e : e = n("WAWebQueryCatalogProductQuery.graphql"), {
                    request: {
                        product: {
                            jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(l) ?? l.toString(),
                            product_id: s,
                            width: String(c),
                            height: String(d),
                            fetch_compliance_info: String(p),
                            variant_info_fields: _,
                            variant_thumbnail_height: f != null ? String(f) : null,
                            variant_thumbnail_width: g != null ? String(g) : null
                        }
                    }
                }, {
                    eventLogger: o("WAWebCatalogEventLogger").createCatalogEventLogger(o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT.GET_PRODUCT)
                });
                const b = r("nullthrows")(C?.xwa_product_catalog_get_product?.product_catalog?.product);
                return {
                    data: o("WAWebBizParseProductGraphql").parseProductGraphQL(b),
                    catalog_id: null,
                    catalog_type: null
                };
            } catch (error) {
                if (error instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    const S = error.source?.errors || [];
                    const R = S[0];
                    if (R?.code === 2498052) {
                        return {
                            error: "NOT_FOUND"
                        };
                    }
                    o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(error);
                }
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: xwa_product_catalog_get_product fetch failed"
                ])));
                throw new (o("WAWebBackendErrors")).CatalogUnknownError;
            }
        });
        return function() {
            return t.apply(this, arguments);
        };
    })();
    const m = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(...n) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            const a = n[0];
            const i = n[1];
            const l = n[2];
            const s = n[3];
            const u = n[4];
            const d = u === undefined ? false : u;
            const m = n[5];
            const p = n[6];
            const _ = n[7];
            const f = yield o("WAWebBizCatalogManagementFetchProduct").fetchProduct({
                product: {
                    jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(a) ?? a.toJid(),
                    product_id: i,
                    width: String(l),
                    height: String(s),
                    fetch_compliance_info: String(d),
                    variant_info_fields: m,
                    variant_thumbnail_height: p != null ? String(p) : null,
                    variant_thumbnail_width: _ != null ? String(_) : null
                }
            });
            if (f.type === "success") {
                return f.productResult;
            }
            if (f.type === "graphql-error") {
                const h = f.error.source?.errors;
                const y = h[0];
                if (y?.code === 2498052) {
                    return {
                        error: "NOT_FOUND"
                    };
                }
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(f.error);
            } else {
                if (f.type === "recovery-required") {
                    throw new (o("WAWebBackendErrors")).AdAccountRecoveryRequiredError(f.emailMask);
                }
                if (f.type === "incorrect-nonce") {
                    throw new (o("WAWebBackendErrors")).CatalogIncorrectNonceError;
                }
                f.type;
            }
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "queryCatalogProductGraphQLByOwner: unhandled err ",
                ""
            ])), JSON.stringify(f));
            throw new (o("WAWebBackendErrors")).CatalogUnknownError;
        });
        return function() {
            return e.apply(this, arguments);
        };
    })();
    const p = function(...t) {
        const r = t[0];
        if (o("WAWebUserPrefsMeUser").isMeAccount(r)) {
            return m(...t);
        }
        return d(...t);
    };
    l.default = p;
}, 98);