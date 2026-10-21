__d("WAWebUprGating", [
    "WAWebABProps",
    "WAWebPaymentsChatUtils"
], function(t, n, r, o, a, i, l) {
    function e() {
        const t = o("WAWebABProps").getABPropConfigValue("payments_upr_bubble_countries") ?? "";
        if (t === "") {
            return new Set;
        }
        return new Set(t.split(",").map((e)=>e.trim().toUpperCase()).filter((e)=>e !== ""));
    }
    function s(t) {
        if (t == null || t === "") {
            return false;
        }
        return e().has(t.toUpperCase());
    }
    function u(e) {
        return c(e) != null;
    }
    function c(t) {
        if (t == null) {
            return null;
        }
        const n = e();
        for (const r of n){
            if (o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(t, r)) {
                return r;
            }
        }
        if (o("WAWebABProps").getABPropConfigValue("is_internal_tester")) {
            return n.values().next().value ?? null;
        }
        return null;
    }
    l.isUprBubbleEnabledForSenderCountry = s;
    l.isUprBubbleEnabledForSender = u;
    l.getMatchedSenderCountry = c;
}, 98);