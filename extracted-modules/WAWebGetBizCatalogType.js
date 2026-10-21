__d("WAWebGetBizCatalogType", [
    "WALogger",
    "WAWebBusinessProfileTypes",
    "WAWebQueryBusinessProfile",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let r;
            try {
                r = yield o("WAWebQueryBusinessProfile").queryBusinessProfile([
                    {
                        wid: t
                    }
                ]);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadLogging] biz profile query fail: biz_catalog_type"
                ]))).verbose().sendLogs("query-business-profile-fail");
                return null;
            }
            const a = r[0];
            if (!a) {
                return null;
            }
            const i = a.profile?.profile_options?.commerce_experience;
            if (i === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG) {
                return "native";
            }
            if (i === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.SHOP) {
                return "shop";
            }
            return null;
        });
        return u.apply(this, arguments);
    }
    l.getBizCatalogType = s;
}, 98);