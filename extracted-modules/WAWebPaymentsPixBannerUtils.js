__d("WAWebPaymentsPixBannerUtils", [
    "WAWebABProps",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebABProps").getABPropConfigValue("br_payments_home_duration_rule_for_pux_banner") * 1000;
    function s() {
        const e = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
        if (e != null) {
            const t = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS);
            if (t?.pix != null) {
                const n = babelHelpers.extends({}, t, {
                    pix: babelHelpers.extends({}, t.pix, {
                        time_last_used: Date.now()
                    })
                });
                r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS, n);
            }
        }
    }
    function u() {
        if (!o("WAWebUserPrefsCustomPaymentMethods").isPIXValid()) {
            return false;
        }
        const t = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
        if (t == null || t.time_last_used != null || t.time_added == null) {
            return false;
        }
        const n = Date.now();
        const r = n - t.time_added;
        return r >= e;
    }
    l.shouldDismissTryItPixKeyPromo = s;
    l.shouldShowTryItPixKeyPromo = u;
}, 98);