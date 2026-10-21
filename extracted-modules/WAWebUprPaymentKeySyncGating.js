__d("WAWebUprPaymentKeySyncGating", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e() {
        const t = o("WAWebABProps").getABPropConfigValue("payments_upr_custom_payment_methods_sync_countries") ?? "";
        if (t === "") {
            return new Set;
        }
        return new Set(t.split(",").map((e)=>e.trim().toUpperCase()).filter((e)=>e !== ""));
    }
    function s() {
        return e().size > 0;
    }
    function u(t) {
        if (t == null || t === "") {
            return false;
        }
        return e().has(t.toUpperCase());
    }
    l.isCustomPaymentMethodsSyncEnabled = s;
    l.isCustomPaymentMethodsSyncEnabledForCountry = u;
}, 98);