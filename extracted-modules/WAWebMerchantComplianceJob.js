__d("WAWebMerchantComplianceJob", [
    "WAWebBizGetMerchantCompliance",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return u(e);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = yield o("WAWebBizGetMerchantCompliance").getMerchantCompliance({
                biz_jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(e[0].wid) ?? e[0].wid.toJid()
            });
            if (n.type === "success") {
                return n.merchant_info;
            }
            if (n.type === "graphql-error") {
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(n.error);
            } else {
                n.type;
            }
            throw r("err")(`getMerchantComplianceGraphQL: error handling flow not implemented for ${JSON.stringify(n)}`);
        });
        return c.apply(this, arguments);
    }
    l.getMerchantCompliance = e;
}, 98);