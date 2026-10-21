__d("WAWebBizCatalogProductVisibilitySetJob", [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementUpdateProductVisibility",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        throw r("err")(`updateProductVisibilityGraphQL: error handling flow not implemented for ${JSON.stringify(e)}`);
    }
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, is_hidden) {
            const a = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const i = yield o("WAWebBizCatalogManagementUpdateProductVisibility").updateProductVisibility({
                jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(a) ?? a.toJid(),
                products: [
                    {
                        product_id: t,
                        is_hidden
                    }
                ]
            });
            if (i.type === "success") {
                if (i.result === true) {
                    return undefined;
                }
                return e(i);
            }
            if (i.type === "graphql-error") {
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(i.error);
            } else {
                i.type;
                return e(i);
            }
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            return s(e, t);
        });
        return d.apply(this, arguments);
    }
    l.default = c;
}, 98);