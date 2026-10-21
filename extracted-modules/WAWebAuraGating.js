__d("WAWebAuraGating", [
    "WAWebABProps",
    "WAWebAuraBenefitABPropsProvider",
    "WAWebAuraBenefitFeatureFlagProvider",
    "WAWebAuraBenefitTypes",
    "WAWebMobilePlatforms",
    "WAWebStickerPremiumStatus"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e() {
            this.$1 = new (o("WAWebAuraBenefitABPropsProvider")).AuraBenefitABPropsProvider;
            this.$2 = null;
        }
        const t = e.prototype;
        t.initFeatureFlagProvider = function(t) {
            this.$2 = new (o("WAWebAuraBenefitFeatureFlagProvider")).AuraBenefitFeatureFlagProvider(t);
        };
        t.__resetForTesting = function() {
            this.$2 = null;
        };
        t.$3 = function() {
            if (o("WAWebMobilePlatforms").isSMB()) {
                return true;
            }
            return o("WAWebABProps").getABPropConfigValue("aura_kill_switch");
        };
        t.$4 = function() {
            if (this.$3()) {
                return false;
            }
            return o("WAWebABProps").getABPropConfigValue("aura_enabled");
        };
        t.$5 = function(t) {
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES) {
                return o("WAWebABProps").getABPropConfigValue("aura_app_themes_enabled");
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS) {
                return false;
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES) {
                return o("WAWebABProps").getABPropConfigValue("aura_ringtones_enabled");
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS) {
                return o("WAWebABProps").getABPropConfigValue("aura_stickers_enabled");
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS) {
                return o("WAWebABProps").getABPropConfigValue("aura_pinned_chats_enabled");
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS) {
                return false;
            }
            if (t === o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH) {
                return o("WAWebABProps").getABPropConfigValue("aura_status_search_enabled");
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
        };
        t.$6 = function() {
            if (!o("WAWebABProps").getABPropConfigValue("aura_subscription_simulation_enabled") && this.$2 != null) {
                return this.$2;
            }
            return this.$1;
        };
        t.$7 = function(t) {
            return this.$8(t) != null;
        };
        t.$8 = function(t) {
            if (this.$3()) {
                return null;
            }
            const e = this.$6().benefit(t);
            if (e?.isActive === true) {
                return e;
            }
            return null;
        };
        t.$9 = function(t) {
            return this.benefit(t) != null || this.$7(t);
        };
        t.benefit = function(t) {
            if (!this.$4() || !this.$5(t)) {
                return null;
            }
            return this.$6().benefit(t);
        };
        t.isThemesEnabled = function() {
            return this.$9(o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES);
        };
        t.isThemesBenefitActive = function() {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES);
        };
        t.isIconsEnabled = function() {
            return this.$9(o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS);
        };
        t.isIconsBenefitActive = function() {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS);
        };
        t.isRingtonesEnabled = function() {
            return this.$9(o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES);
        };
        t.isRingtonesBenefitActive = function() {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES);
        };
        t.isStickersEnabled = function() {
            return this.$9(o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS);
        };
        t.isStickersBenefitActive = function() {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS);
        };
        t.isPinnedChatsEnabled = function() {
            return this.$9(o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS);
        };
        t.isPinnedChatsBenefitActive = function() {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS);
        };
        t.getPinnedChatsBenefitLimit = function() {
            return this.$8(o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS)?.limit ?? null;
        };
        t.isListsEnabled = function() {
            return this.$9(o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS);
        };
        t.isListsBenefitActive = function() {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS);
        };
        t.isStatusSearchEnabled = function() {
            return this.benefit(o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH) != null;
        };
        t.isStatusSearchBenefitActive = function() {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH);
        };
        t.canUsePremiumSticker = function(t) {
            if (t == null || t === o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE) {
                return true;
            }
            if (t === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM) {
                return this.isStickersBenefitActive();
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })();
        };
        return e;
    })();
    const s = new e;
    l.default = s;
}, 98);