__d("WAWebBizCatalogDeleteProductsJob", [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementDeleteProduct",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(product_ids) {
            const n = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const a = yield o("WAWebBizCatalogManagementDeleteProduct").deleteProduct({
                biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(n) ?? n.toJid(),
                product_ids
            });
            if (a.type === "success") {
                return a.deleteResult;
            }
            if (a.type === "graphql-error") {
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(a.error);
            } else {
                a.type;
            }
            throw r("err")(`deleteProductsGraphQL: error handling flow not implemented for ${JSON.stringify(a)}`);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            return e(t);
        });
        return c.apply(this, arguments);
    }
    l.deleteProductsMD = u;
}, 98);