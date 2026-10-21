__d("WAWebAuraBenefitABPropsProvider", [
    "WAWebABProps",
    "WAWebAuraBenefitProvider",
    "WAWebAuraBenefitTypes"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e() {}
        const t = e.prototype;
        t.benefit = function(t) {
            const e = t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES ? o("WAWebABProps").getABPropConfigValue("aura_app_themes_benefit_active") : t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS ? false : t === o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES ? o("WAWebABProps").getABPropConfigValue("aura_ringtones_benefit_active") : t === o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS ? o("WAWebABProps").getABPropConfigValue("aura_stickers_benefit_active") : t === o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS ? o("WAWebABProps").getABPropConfigValue("aura_pinned_chats_benefit_active") : t === o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS ? false : t === o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH ? true : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
            return {
                id: t,
                isActive: e,
                limit: o("WAWebAuraBenefitProvider").auraBenefitLimit(t, e)
            };
        };
        return e;
    })();
    l.AuraBenefitABPropsProvider = e;
}, 98);