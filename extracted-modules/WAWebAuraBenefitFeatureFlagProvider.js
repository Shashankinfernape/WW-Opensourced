__d("WAWebAuraBenefitFeatureFlagProvider", [
    "WAWebAuraBenefitProvider",
    "WAWebAuraBenefitTypes",
    "WAWebFeatureFlagName"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(e) {
            this.$1 = e;
        }
        const t = e.prototype;
        t.benefit = function(t) {
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES) {
                return this.$2(t, o("WAWebFeatureFlagName").FeatureFlagName.CUSTOM_APP_THEME);
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS) {
                return this.$2(t, o("WAWebFeatureFlagName").FeatureFlagName.CUSTOM_APP_ICON);
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES) {
                return this.$2(t, o("WAWebFeatureFlagName").FeatureFlagName.CUSTOM_RINGTONES);
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS) {
                return this.$2(t, o("WAWebFeatureFlagName").FeatureFlagName.PREMIUM_MESSAGE_STICKERS);
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS) {
                return this.$2(t, o("WAWebFeatureFlagName").FeatureFlagName.PIN_MORE_CHATS);
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS) {
                return this.$2(t, o("WAWebFeatureFlagName").FeatureFlagName.ENHANCED_LISTS);
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH) {
                return {
                    id: o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH,
                    isActive: true,
                    limit: null
                };
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
        };
        t.$2 = function(t, n) {
            const e = this.$1(n);
            const r = e?.enabled === true;
            return {
                id: t,
                isActive: r,
                limit: o("WAWebAuraBenefitProvider").auraBenefitLimit(t, r)
            };
        };
        return e;
    })();
    l.AuraBenefitFeatureFlagProvider = e;
}, 98);