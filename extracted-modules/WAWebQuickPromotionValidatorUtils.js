__d("WAWebQuickPromotionValidatorUtils", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WATimeUtils").castUnixTimeToMillisTime(e);
        const r = o("WATimeUtils").millisTime() - n;
        const a = r <= t;
        return a;
    }
    function s(e) {
        const t = new Map;
        e.forEach(({ key, value: r })=>{
            if (!(key == null || r == null)) {
                t.set(key, r);
            }
        });
        return t;
    }
    function u(e, t) {
        const o = e.contentAttributes?.attribute;
        if (o == null) {
            return null;
        }
        const a = o.find((e)=>e.key === t);
        return a?.value ?? null;
    }
    const c = "whatsapp_gk_enabled";
    function d(e) {
        return u(e, c) === "true";
    }
    l.checkIsWithinEligibilityWindow = e;
    l.convertFilterParametersIntoMap = s;
    l.getQuickPromotionContentAttribute = u;
    l.isWhatsappGkEnabledPromotion = d;
}, 98);