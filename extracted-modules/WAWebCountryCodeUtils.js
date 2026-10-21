__d("WAWebCountryCodeUtils", [
    "WACcToIso",
    "WAIsoToCc",
    "WALogger",
    "WAPhoneFindCC",
    "WAWebApiContactUsernameFields",
    "WAWebAsISOCountryCode",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const t = o("WAPhoneFindCC").findCC(e);
        const n = parseInt(t, 10);
        const a = r("WACcToIso")[n];
        return r("nullthrows")(a);
    }
    function c(t) {
        const r = o("WAWebLidMigrationUtils").toPn(t)?.user;
        if (r != null) {
            try {
                return o("WAWebAsISOCountryCode").asISOCountryCode(u(r));
            } catch (t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to get country code from pn, error: ",
                    ""
                ])), t).sendLogs("failed-to-get-country-code-from-pn", {
                    sampling: 0.01
                });
            }
        }
        return null;
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            const t = e != null ? u(e.user) : yield o("WAWebApiContactUsernameFields").getOrFetchMeContactUsernameCountryCode();
            return t;
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield d();
                const n = t == null ? null : r("WAIsoToCc")[t] ?? null;
                if (n == null) {
                    return null;
                }
                return String(n);
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to get my calling code, error: ",
                    ""
                ])), e).sendLogs("failed-to-get-my-calling-code", {
                    sampling: 0.01
                });
                return null;
            }
        });
        return _.apply(this, arguments);
    }
    l.pnToCountryCodeString = u;
    l.getCountryCodeFromPn = c;
    l.getMyCountryCode = d;
    l.getMyCallingCode = p;
}, 98);