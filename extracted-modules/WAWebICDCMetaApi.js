__d("WAWebICDCMetaApi", [
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebE2EProtoGenerator",
    "WAWebIdentityIcdcApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            let r;
            let a;
            let i = false;
            let l = null;
            try {
                r = yield o("WAWebIdentityIcdcApi").getICDCMeta(n);
            } catch (error) {
                i = true;
                l = error;
            }
            try {
                if (r == null) {
                    const s = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                    r = s ? yield o("WAWebIdentityIcdcApi").getICDCMeta(s) : null;
                }
            } catch (error) {
                if (!i) {
                    i = true;
                    l = error;
                }
            }
            if (r == null && i) {
                new (o("WAWebAdvMetadataCreationFailureWamEvent")).AdvMetadataCreationFailureWamEvent({
                    advMetadataIsMe: true
                }).commit();
                throw l;
            }
            try {
                a = o("WAWebUserPrefsMeUser").isMeAccount(e) ? null : yield o("WAWebIdentityIcdcApi").getICDCMeta(e);
            } catch (error) {
                new (o("WAWebAdvMetadataCreationFailureWamEvent")).AdvMetadataCreationFailureWamEvent({
                    advMetadataIsMe: false
                }).commit();
                throw error;
            }
            o("WAWebE2EProtoGenerator").populateMessageContextInfo(t, r, a);
        });
        return s.apply(this, arguments);
    }
    l.populateICDCMeta = e;
}, 98);