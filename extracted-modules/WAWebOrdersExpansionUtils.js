__d("WAWebOrdersExpansionUtils", [
    "WAMemoizeCache",
    "WAWebABProps",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebOrdersExpansionCountries",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e() {
        const n = (o("WAWebOrdersExpansionCountries").getOrdersExpansionAllowedCountries()?.length ?? 0) > 0;
        return n && o("WAWebABProps").getABPropConfigValue("payments_merchant_global_orders_value_props_banner_enabled");
    }
    function s() {
        return (o("WAWebOrdersExpansionCountries").getOrdersExpansionAllowedCountries()?.length ?? 0) > 0;
    }
    const u = o("WAMemoizeCache").memoizeWithArgs(function(e) {
        const n = o("WAWebOrdersExpansionCountries").getOrdersExpansionAllowedCountries() ?? [];
        const r = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
        return n.find((e)=>r === e) != null;
    }, function(e) {
        return e;
    });
    function c(e) {
        if (!s()) {
            return false;
        }
        const t = p(e.contact.id);
        const n = t?.user;
        if (n == null) {
            return false;
        }
        return u(n);
    }
    function d(e, t) {
        if (s()) {
            return e.length > 0 && e.at(0)?.currency != null && e.at(0)?.currency !== t;
        }
        return false;
    }
    function m(e) {
        const t = p(o("WAWebUserPrefsMeUser").getMaybeMePnUser());
        const n = p(e.contact.id);
        return t != null && n != null && o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t.user) === o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(n.user);
    }
    function p(e) {
        if (e != null) {
            return o("WAWebLidMigrationUtils").toPn(e);
        }
        return e;
    }
    l.isOrderExpansionBannerEnabled = e;
    l.isOrderExpansionEnabled = s;
    l.isContactCountrySupported = c;
    l.shouldPreventCatalogProductSelection = d;
    l.isSellerCountrySameAsBuyer = m;
}, 98);