__d("WAWebBizCreateProductCatalogJob", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementCreateCatalog",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const r = yield o("WAWebBizCatalogManagementCreateCatalog").createCatalog({
                product_catalog: {
                    biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(n) ?? n.toJid()
                },
                platform: "WEB"
            });
            if (r.type !== "success") {
                if (r.type === "graphql-error") {
                    o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(r.error);
                } else {
                    r.type;
                }
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createProductCatalogGraphQL: unhandled error ",
                    ""
                ])), JSON.stringify(r));
            }
        });
        return u.apply(this, arguments);
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
                throw new (o("WAWebBackendErrors")).E451;
            }
            return s();
        });
        return d.apply(this, arguments);
    }
    l.createProductCatalog = c;
}, 98);