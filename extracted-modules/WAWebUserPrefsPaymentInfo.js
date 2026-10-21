__d("WAWebUserPrefsPaymentInfo", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = s();
        const t = e?.cpi;
        if (typeof t === "string") {
            return t;
        }
        return null;
    }
    function s() {
        const e = r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.PAYMENT_INFO);
        if (typeof e !== "object") {
            return null;
        }
        return e;
    }
    function u(e) {
        const n = s() ?? {};
        n.cpi = e;
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").KEYS.PAYMENT_INFO, n);
    }
    function c() {
        const t = e();
        return typeof t === "string" && t.trim().length > 0;
    }
    l.getCPIInfo = e;
    l.setCPIInfo = u;
    l.isCPIInfoValid = c;
}, 98);