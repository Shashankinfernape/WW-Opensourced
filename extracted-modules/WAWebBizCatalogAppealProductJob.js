__d("WAWebBizCatalogAppealProductJob", [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementAppealProduct",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, reason) {
            const a = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const i = yield o("WAWebBizCatalogManagementAppealProduct").appealProduct({
                jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(a) ?? a.toJid(),
                product_id: e,
                reason
            });
            if (i.type === "success") {
                return i.result;
            }
            if (i.type === "graphql-error") {
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(i.error);
            } else {
                i.type;
            }
            throw r("err")(`appealProductGraphQL: error handling flow not implemented for ${JSON.stringify(i)}`);
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            return e(t, n);
        });
        return c.apply(this, arguments);
    }
    l.appealProductMD = u;
}, 98);