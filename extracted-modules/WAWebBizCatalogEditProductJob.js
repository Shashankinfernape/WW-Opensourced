__d("WAWebBizCatalogEditProductJob", [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementEditProduct",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            return u(e, t, n);
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const i = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const l = yield o("WAWebBizCatalogManagementEditProduct").editProduct({
                product: {
                    biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(i) ?? i.toJid(),
                    product_id: e.id.toString(),
                    width: t,
                    height: n,
                    product_info: o("WAWebBizCatalogManagementParseProductGraphql").productModelToGraphQLInput(e)
                }
            });
            if (l.type === "success") {
                return l.productResult;
            }
            if (l.type === "graphql-error") {
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(l.error);
            } else {
                l.type;
            }
            throw r("err")(`editProductGraphQL: error handling flow not implemented for ${JSON.stringify(l)}`);
        });
        return c.apply(this, arguments);
    }
    l.default = e;
}, 98);