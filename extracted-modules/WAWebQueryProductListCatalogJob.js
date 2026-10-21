__d("WAWebQueryProductListCatalogJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchProductList",
    "WAWebBizCatalogParseProduct",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebCommsWapMd",
    "WAWebDefinePersistedJob",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebProductMessageListConstant",
    "WAWebQueryProductListCatalogJobQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new (r("WADeprecatedWapParser"))("productListResponse", function(e) {
        e.assertTag("iq");
        e.assertFromServer();
        const t = e.child("product_list");
        const n = [];
        t.forEachChildWithTag("product", function(e) {
            const t = e.maybeChild("id");
            if (t) {
                const r = e.maybeChild("status");
                if (r?.contentString() === o("WAWebProductMessageListConstant").INVALID_PRODUCT_TOKEN) {
                    n.push({
                        id: t.contentString(),
                        status: o("WAWebProductMessageListConstant").INVALID_PRODUCT_TOKEN
                    });
                } else {
                    n.push(o("WAWebBizCatalogParseProduct").parseProductNode(e));
                }
            }
        });
        return n;
    });
    const d = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            const { catalogWid: n, directConnectionEncryptedInfo: a, height: i, productIds: l, width: s } = e;
            const u = (t = o("WAWap")).wap("iq", {
                to: t.S_WHATSAPP_NET,
                type: "get",
                smax_id: t.SMAX_ID(r("WAWapDeprecatedSmaxID").CatalogGetProductList),
                xmlns: "w:biz:catalog",
                id: t.generateId()
            }, t.wap("product_list", {
                jid: o("WAWebCommsWapMd").USER_JID(o("WAWebWidFactory").createWid(n))
            }, l.map((e)=>o("WAWap").wap("product", null, o("WAWap").wap("id", null, e))).concat(r("filterNulls")([
                t.wap("width", null, s.toString()),
                t.wap("height", null, i.toString()),
                a != null ? o("WAWap").wap("direct_connection_encrypted_info", null, a) : null
            ]))));
            const d = yield o("WADeprecatedSendIq").deprecatedSendIq(u, c);
            if (d.success) {
                return d.result;
            }
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(d.errorCode);
        });
        return function(n) {
            return e.apply(this, arguments);
        };
    })();
    const m = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const { catalogWid: l, directConnectionEncryptedInfo: u, height: c, productIds: m, width: p } = t;
                const _ = yield o("WAWebRelayClient").fetchQuery(e !== void 0 ? e : e = n("WAWebQueryProductListCatalogJobQuery.graphql"), {
                    request: {
                        product_list: {
                            jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(o("WAWebWidFactory").createWid(l)) ?? l.toString(),
                            products: m.map((e)=>({
                                    id: e
                                })),
                            width: String(p),
                            height: String(c),
                            direct_connection_encrypted_info: u
                        }
                    }
                }, {
                    eventLogger: o("WAWebCatalogEventLogger").createCatalogEventLogger(o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT.GET_PRODUCT_LIST)
                });
                return r("nullthrows")(_?.xwa_product_catalog_get_product_list?.product_list?.products.map(o("WAWebBizParseProductGraphql").parseProductGraphQL));
            } catch (e) {
                if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(e);
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "xwa_product_catalog_get_product_list failed, IQ fallback"
                ])));
                return d(t);
            }
        });
        return function(n) {
            return t.apply(this, arguments);
        };
    })();
    const p = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { catalogWid: n, directConnectionEncryptedInfo: r, height: a, productIds: i, width: l } = e;
            const s = yield o("WAWebBizCatalogManagementFetchProductList").fetchProductList({
                product_list: {
                    jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(o("WAWebWidFactory").createWid(n)) ?? n.toString(),
                    products: i.map((e)=>({
                            id: e
                        })),
                    width: String(l),
                    height: String(a),
                    direct_connection_encrypted_info: r
                }
            });
            if (s.type === "success") {
                return s.productsResult;
            }
            if (s.type === "graphql-error") {
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(s.error);
            } else {
                s.type;
            }
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "queryProductListGraphQLByOwner: unhandled error ",
                ""
            ])), JSON.stringify(s));
            return d(e);
        });
        return function(n) {
            return e.apply(this, arguments);
        };
    })();
    const _ = function(t) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(t.catalogWid))) {
            if (o("WAWebBizCatalogGatingUtils").graphQLForGetProductListEnabled()) {
                return p(t);
            }
            return d(t);
        }
        return m(t);
    };
    const f = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("sendStanza", _).end();
    l.queryProductListCatalog = _;
    l.QueryProductListCatalog = f;
}, 98);