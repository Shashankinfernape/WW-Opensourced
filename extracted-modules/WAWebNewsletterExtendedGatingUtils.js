__d("WAWebNewsletterExtendedGatingUtils", [
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebGetEnumValuesFromConfig",
    "WAWebLogNewsletterExposuresAction",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterPinGatingUtils",
    "WAWebNewsletterValidationUtils",
    "WAWebPrimaryFeatures",
    "WAWebStateUtils",
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebPrimaryFeatures").primaryFeatureEnabled("newsletter") || r("gkx")("26256");
    }
    function s() {
        const t = o("WAWebNewsletterGatingUtils").NewsletterABPropConfig.cast(o("WAWebABProps").getABPropConfigValue("channels_enabled"));
        if (t == null || !e()) {
            return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.Disabled;
        }
        switch(t){
            case o("WAWebNewsletterGatingUtils").NewsletterABPropConfig.Disabled:
                return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.AvailableOnPhone;
            case o("WAWebNewsletterGatingUtils").NewsletterABPropConfig.Enabled:
                return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.Enabled;
            case o("WAWebNewsletterGatingUtils").NewsletterABPropConfig.NeedsUpgrade:
                return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.NeedsUpgrade;
        }
    }
    function u(e, capability) {
        if (o("WAWebNewsletterGatingUtils").shouldFetchAndLogCapabilities()) {
            o("WAWebLogNewsletterExposuresAction").logNewsletterExposuresAction([
                {
                    newsletterJid: o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e.id.toJid()),
                    capability
                }
            ]);
        }
        return e.capabilities?.has(capability) && o("WAWebABProps").getABPropConfigValue("channels_capabilities_enabled");
    }
    function c() {
        return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channel_reactions_enabled") && o("WAWebNewsletterFutureProofUtils").isMsgTypeSupported(o("WAWebMsgType").MSG_TYPE.REACTION);
    }
    function d(e, t) {
        return c() && !t && (e.newsletterMetadata?.iAmAdminOrOwner() ?? false);
    }
    function m() {
        const e = o("WAWebABProps").getABPropConfigValue("channels_directory_v2_filter_types");
        return o("WAWebGetEnumValuesFromConfig").getEnumValuesFromConfig({
            config: e,
            enumCastFunction: function(t) {
                return o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryFilterType.cast(t);
            }
        });
    }
    function p() {
        const e = o("WAWebABProps").getABPropConfigValue("channels_directory_category_types");
        return o("WAWebGetEnumValuesFromConfig").getEnumValuesFromConfig({
            config: e,
            enumCastFunction: function(t) {
                return o("WAWebNewsletterDirectoryCategoryUtils").NewsletterDirectoryCategoryType.cast(t);
            }
        });
    }
    function _(e) {
        if (e == null || !o("WAWebChatGetters").getIsNewsletter(e)) {
            return false;
        }
        const t = o("WAWebABProps").getABPropConfigValue("newsletter_forward_counter_ui_enabled");
        if (t === 2) {
            return true;
        }
        if (t === 1) {
            return e.newsletterMetadata?.iAmAdminOrOwner() ?? false;
        }
        return false;
    }
    function f(e) {
        let t;
        if ((t = e.newsletterMetadata) != null && t.iAmAdminOrOwner()) {
            return o("WAWebNewsletterGatingUtils").isNewsletterPollsVotersEnabled();
        }
        return false;
    }
    function g(e) {
        if (e == null || o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(o("WAWebStateUtils").unproxy(e))) {
            return false;
        }
        if (!r("gkx")("26258") && o("WAWebABProps").getABPropConfigValue("channels_admin_insights_gizmos_enabled")) {
            return true;
        }
        if (e.iAmAdminOrOwner()) {
            if (o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channels_producer_insights_enabled")) {
                return true;
            }
            return u(e, o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights);
        }
        return false;
    }
    function h(e) {
        if (e == null || !g(e)) {
            return false;
        }
        return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channel_status_admin_insights_enabled") || u(e, o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_ADMIN_INSIGHTS);
    }
    function y(e) {
        if (e == null || !e.iAmAdminOrOwner()) {
            return false;
        }
        if (o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channels_admin_notifications_enabled")) {
            return true;
        }
        return u(e, o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_NOTIFICATIONS);
    }
    function C(e) {
        if (e == null || !e.iAmAdminOrOwner()) {
            return false;
        }
        if (o("WAWebNewsletterPinGatingUtils").isChannelMessagePinAdminEnabled()) {
            return true;
        }
        return u(e, o("WAWebCommonNewsletterEnums").NewsletterCapability.PINNED_MESSAGES);
    }
    function b({ newsletterMetadata }) {
        if (newsletterMetadata == null) {
            return false;
        }
        return u(newsletterMetadata, o("WAWebCommonNewsletterEnums").NewsletterCapability.PhotoPolls);
    }
    function v(e) {
        if (e == null) {
            return false;
        }
        return u(e, o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_PRODUCER);
    }
    function S({ newsletterMetadata }) {
        if (newsletterMetadata == null) {
            return false;
        }
        return u(newsletterMetadata, o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS);
    }
    function R({ newsletterMetadata }) {
        if (newsletterMetadata == null) {
            return false;
        }
        return u(newsletterMetadata, o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS_M2);
    }
    function L({ newsletterMetadata }) {
        if (newsletterMetadata == null) {
            return false;
        }
        return u(newsletterMetadata, o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS_STARRING);
    }
    function E(e) {
        if (e == null || !e.iAmAdminOrOwner()) {
            return false;
        }
        if (o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channels_admin_profiles_sender_enabled")) {
            return true;
        }
        return u(e, o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_PROFILE);
    }
    function k(e) {
        return E(e) && e.adminProfilesSettingEnabled;
    }
    function I(e) {
        return k(e) && o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channels_admin_profiles_list_enabled");
    }
    function T(e) {
        return k(e) && o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channels_admin_profiles_update_enabled");
    }
    function D(e) {
        return E(e) && o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channels_admin_profiles_settings_enabled");
    }
    function x(e) {
        return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled("channels_admin_profiles_banner_enabled") && D(e);
    }
    l.isNewsletterEnabledOnPrimary = e;
    l.getNewsletterDeeplinkGating = s;
    l.isNewsletterReactionEnabled = c;
    l.isNewsletterReactionSenderListEnabled = d;
    l.getNewsletterDirectoryV2FilterTypes = m;
    l.getNewsletterDirectoryCategoryTypes = p;
    l.shouldShowNewsletterForwardCounterBubble = _;
    l.isNewsletterPollsVotersEnabledForChat = f;
    l.isNewsletterProducerInsightsEnabled = g;
    l.isNewsletterStatusAdminInsightsEnabled = h;
    l.isNewsletterAdminNotificationsEnabled = y;
    l.canPinNewsletterMessages = C;
    l.isNewsletterPhotoPollCapabilityEnabled = b;
    l.isNewsletterStatusCapabilityEnabled = v;
    l.isNewsletterQuestionsCapabilityEnabled = S;
    l.isNewsletterQuestionsM2CapabilityEnabled = R;
    l.isNewsletterQuestionsResponsesStarringCapabilityEnabled = L;
    l.isNewsletterAdminProfilesSenderEnabled = k;
    l.isNewsletterAdminProfilesListEnabled = I;
    l.isNewsletterAdminProfilesUpdateEnabled = T;
    l.isNewsletterAdminProfilesSettingEnabled = D;
    l.isNewsletterAdminProfilesUpsellBannerEnabled = x;
}, 98);