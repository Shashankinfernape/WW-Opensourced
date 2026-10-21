__d("WAWebBizBusinessProfileAction", [
    "WAWebBusinessCategoriesResultModel",
    "WAWebBusinessProfileCategoriesBridge",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebQueryBusinessProfile",
    "WAWebQueryBusinessProfileWithCompliance",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = t ? yield o("WAWebQueryBusinessProfileWithCompliance").queryBusinessProfileWithCompliance(e) : yield o("WAWebQueryBusinessProfile").queryBusinessProfile(e);
            return n;
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        if (e === o("WAWebBusinessCategoriesResultModel").BUSINESS_CATEGORY_EMPTY_STR_ID) {
            return o("WAWebBusinessProfileCategoriesBridge").queryBusinessCategories("", t);
        }
        return o("WAWebBusinessProfileCategoriesBridge").queryBusinessCategories(e, t);
    }
    function c(e) {
        return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilCompleted(o("WAWebPersistedJobDefinitions").jobSerializers.getPublicKey(e));
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilCompleted(o("WAWebPersistedJobDefinitions").jobSerializers.getSignedUserInfo(e));
            const { businessDomain, phoneNumber, phoneNumberSignature, phoneNumberSignatureExpiration } = t;
            if (phoneNumber == null || phoneNumberSignatureExpiration == null || phoneNumberSignature == null || businessDomain == null) {
                throw r("err")("Unexpected null or undefined");
            }
            return {
                phoneNumber,
                phoneNumberSignature,
                phoneNumberSignatureExpiration,
                businessDomain
            };
        });
        return m.apply(this, arguments);
    }
    l.queryBusinessProfile = e;
    l.queryBusinessCategories = u;
    l.queryBusinessPublicKey = c;
    l.querySignedUserInfo = d;
}, 98);