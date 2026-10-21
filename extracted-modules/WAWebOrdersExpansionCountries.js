__d("WAWebOrdersExpansionCountries", [
    "WAMemoizeCache",
    "WAWebABProps",
    "WAWebCompactMapString",
    "WAWebCurrencyUtils",
    "WAWebL10NCountryCodes",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = o("WAMemoizeCache").memoizeWithArgs(function(e) {
        return r("WAWebCompactMapString")(e.split(","), function(e) {
            return e.trim();
        });
    }, function(e) {
        return e;
    });
    function s() {
        const t = o("WAWebABProps").getABPropConfigValue("orders_expansion_receiver_countries_allowed");
        if (t.length) {
            return e(t);
        }
        return null;
    }
    const u = o("WAMemoizeCache").memoizeWithArgs(function(e, t) {
        let n = [];
        if (t.length === 0) {
            return n;
        }
        const r = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        const a = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
        const i = r ? o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(r.user) : null;
        n = t.filter((e)=>e === a || i != null && e === i).map((e)=>o("WAWebCurrencyUtils").currencyForCountryShortcode(e));
        return Array.from(new Set(n).values());
    }, function(e, t) {
        return e;
    });
    function c(e) {
        return u(e, d() ?? []);
    }
    function d() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return s();
        }
        return null;
    }
    l.getConsumerOrdersExpansionAllowedCountries = s;
    l.getOrdersExpansionAllowedCurrencies = c;
    l.getOrdersExpansionAllowedCountries = d;
}, 98);