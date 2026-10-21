__d("WAWebQueryPrivacyDisallowedListUtil", [
    "WALogger",
    "WAWebABProps",
    "WAWebQueryPrivacyDisallowedListLidJob",
    "WAWebQueryPrivacyDisallowedListMexJob",
    "WAWebQueryPrivacyDisallowedListPnJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebABProps").getABPropConfigValue("mex_get_privacy_contact_list_enabled")) {
                const n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
                try {
                    return yield o("WAWebQueryPrivacyDisallowedListMexJob").queryPrivacyDisallowedListMex(t, n.toString());
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[queryPrivacyDisallowedList] mex failed ",
                        " ",
                        " -> smax"
                    ])), t, error).sendLogs("queryPrivacyDisallowedList-with-mex-failed");
                }
            }
            if (m()) {
                try {
                    return yield o("WAWebQueryPrivacyDisallowedListLidJob").queryPrivacyDisallowedListLid(t);
                } catch (error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[queryPrivacyDisallowedList] lid failed ",
                        " ",
                        " -> pn"
                    ])), t, error).sendLogs("queryPrivacyDisallowedList-with-lid-failed");
                }
            }
            try {
                return yield o("WAWebQueryPrivacyDisallowedListPnJob").queryPrivacyDisallowedListPn(t);
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryPrivacyDisallowedList] pn failed ",
                    " ",
                    ""
                ])), t, error).sendLogs("queryPrivacyDisallowedList-with-pn-failed");
                throw error;
            }
        });
        return d.apply(this, arguments);
    }
    function m() {
        const e = r("justknobx")._("5326");
        return !e;
    }
    l.queryPrivacyDisallowedList = c;
    l.isPrivacyDisallowedListTypeLidMigrated = m;
}, 98);