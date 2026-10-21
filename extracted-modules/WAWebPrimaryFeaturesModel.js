__d("WAWebPrimaryFeaturesModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.features = o("WAWebBaseModel").prop();
            t.ddmSettings = o("WAWebBaseModel").prop(false);
            t.clearAndDeleteChatSync = o("WAWebBaseModel").prop(false);
            t.viewOnceSpReceiver = o("WAWebBaseModel").prop(false);
            t.recentSticker = o("WAWebBaseModel").prop(false);
            t.favoriteSticker = o("WAWebBaseModel").prop(false);
            t.linkPreview = o("WAWebBaseModel").prop(false);
            t.hqLinkPreview = o("WAWebBaseModel").prop(false);
            t.pollCreationInCags = o("WAWebBaseModel").prop(false);
            t.newsletter = o("WAWebBaseModel").prop(false);
            t.externalWebBetaOptIn = o("WAWebBaseModel").prop(false);
            t.historySyncOnDemand = o("WAWebBaseModel").prop(false);
            t.extendedHistorySyncOnDemand = o("WAWebBaseModel").prop(false);
            t.completeHistorySyncOnDemand = o("WAWebBaseModel").prop(false);
            t.webLinkPreviewNseSupport = o("WAWebBaseModel").prop(false);
            t.messagePlaceholderResendNseSupport = o("WAWebBaseModel").prop(false);
            t.isPrimaryBetaBuild = o("WAWebBaseModel").prop(false);
            t.primaryCampaignIdInHistorySyncSupport = o("WAWebBaseModel").prop(false);
            t.contactManagement = o("WAWebBaseModel").prop(false);
            t.paymentInfoSyncSupport = o("WAWebBaseModel").prop(false);
            t.customPaymentMethodsSyncSupport = o("WAWebBaseModel").prop(false);
            t.merchantPaymentPartnerSyncSupport = o("WAWebBaseModel").prop(false);
            t.paymentTosSyncSupport = o("WAWebBaseModel").prop(false);
            t.companionLidContactChangeEnabled = o("WAWebBaseModel").prop(false);
            t.aiBotIntegrationEnabled = o("WAWebBaseModel").prop(false);
            t.aiHatchIntegrationEnabled = o("WAWebBaseModel").prop(false);
            t.aiArtifactsFixedEnabled = o("WAWebBaseModel").prop(false);
            t.isContactsBackupOn = o("WAWebBaseModel").prop(false);
            t.primaryHasAddressbookPermission = o("WAWebBaseModel").prop(false);
            t.primaryHasAgreedToNativeContactsNux = o("WAWebBaseModel").prop(false);
            t.isAccountIntegrityStatePending = o("WAWebBaseModel").prop(false);
            t.isAccountIntegrityStateTimelock = o("WAWebBaseModel").prop(false);
            t.isGalaxyFlowCompanionSyncSupported = o("WAWebBaseModel").prop(false);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.hasFeature = function(t) {
            return this.features?.includes(t) === true;
        };
        t_prototype.setPrimaryFeatures = function(t) {
            this.features = t;
            const e = new Set(t);
            this.ddmSettings = e.has("ddm_settings");
            this.clearAndDeleteChatSync = e.has("clear_and_delete_chat_sync");
            this.viewOnceSpReceiver = e.has("vo_sp_receiver");
            this.recentSticker = e.has("recent_sticker");
            this.favoriteSticker = e.has("favorite_sticker");
            this.linkPreview = e.has("link_preview");
            this.hqLinkPreview = e.has("link_preview_hq_thumbnail");
            this.pollCreationInCags = e.has("poll_creation_cag");
            this.newsletter = e.has("newsletter");
            this.externalWebBetaOptIn = e.has("external_web_beta_opt_in");
            this.historySyncOnDemand = e.has("history_sync_on_demand");
            this.extendedHistorySyncOnDemand = e.has("is_extended_history_sync_on_demand_enabled");
            this.completeHistorySyncOnDemand = e.has("is_complete_history_sync_on_demand_enabled");
            this.webLinkPreviewNseSupport = e.has("web_link_preview_nse_support");
            this.messagePlaceholderResendNseSupport = e.has("message_placeholder_resend_nse_support");
            this.isPrimaryBetaBuild = e.has("is_primary_beta_build");
            this.primaryCampaignIdInHistorySyncSupport = e.has("primary_campaign_id_in_history_sync_support");
            this.contactManagement = e.has("contact_management");
            this.paymentInfoSyncSupport = e.has("payment_info_sync_support");
            this.customPaymentMethodsSyncSupport = e.has("custom_payment_methods_sync_support");
            this.isContactsBackupOn = e.has("is_contacts_backup_on");
            this.primaryHasAddressbookPermission = e.has("primary_has_addressbook_permission");
            this.primaryHasAgreedToNativeContactsNux = e.has("primary_has_agreed_to_native_contacts_nux");
            this.isAccountIntegrityStatePending = e.has("is_account_integrity_state_pending");
            this.isAccountIntegrityStateTimelock = e.has("is_account_integrity_state_timelock");
            this.merchantPaymentPartnerSyncSupport = e.has("merchant_payment_partner_sync_support");
            this.paymentTosSyncSupport = e.has("payment_tos_sync_support");
            this.isGalaxyFlowCompanionSyncSupported = e.has("is_galaxy_flow_companion_sync_supported");
            this.companionLidContactChangeEnabled = e.has("companion_lid_contact_change_enabled");
            this.aiBotIntegrationEnabled = e.has("ai_bot_integration_enabled");
            this.aiHatchIntegrationEnabled = e.has("ai_hatch_integration_enabled");
            this.aiArtifactsFixedEnabled = e.has("ai_artifacts_fixed_enabled");
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "primaryFeatures";
    const s = o("WAWebBaseModel").defineModel(e);
    const u = new s({
        id: "1"
    });
    l.PrimaryFeatures = u;
}, 98);