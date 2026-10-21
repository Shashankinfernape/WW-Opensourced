__d("WAWebBizAiAgentGating", [
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
    "WAWebBizAiWebEditingCoachingGateModel",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_smb_agents_automatic_reply_enabled");
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_web_smart_composer_enabled") === true;
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_suggested_reply_coaching_enabled") === true;
    }
    function c() {
        return o("WAWebABProps").getABPropConfigValue("maiba_meta_ai_fab_nullstate_is_deprecated");
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_enable_download");
    }
    function m() {
        return r("justknobx")._("5395");
    }
    function p() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_auto_save_enabled");
    }
    function _() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_fab_confirm_modal_enabled") && o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled();
    }
    function f() {
        return o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled() && o("WAWebBizAiWebEditingCoachingGateModel").isBizAiWebEditingCoachingGateEnabled() && o("WAWebABProps").getABPropConfigValue("biz_ai_agent_ai_editing_enabled");
    }
    function g() {
        return r("justknobx")._("3531");
    }
    function h() {
        return y(o("WAWebBizAiWebSmartComposerAiListsGateModel").isBizAiWebSmartComposerAiListsGateEnabled());
    }
    function y(e) {
        return !g() && e && C();
    }
    function C() {
        return o("WAWebBizAiSettingsSyncDeviceCapabilityCommon").getPrimarySupportsBizAiSettingsSync() && o("WAWebABProps").getABPropConfigValue("biz_ai_handoff_timing_sync_enabled") === true;
    }
    function b() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_priority_list_item_expire_days");
    }
    const v = 0;
    const S = 1;
    const R = 2;
    function L() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_agent_3p_store_links_enabled");
    }
    function E() {
        return L() !== v;
    }
    function k() {
        return o("WAWebABProps").getABPropConfigValue("ai_maiba_wass_migration_sending") === true;
    }
    function I() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_web_gdrive_enabled") === true;
    }
    function T() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_web_integration_hub_enabled") === true;
    }
    function D() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_web_appointments_enabled") === true;
    }
    function x() {
        return ((e)=>{
            switch(e){
                case "EXPERIMENT":
                    return "EXPERIMENT";
                case "ROLLOUT":
                    return "ROLLOUT";
                default:
                    return "NONE";
            }
        })(o("WAWebABProps").getABPropConfigValue("biz_ai_response_settings_ui_experiment").toUpperCase());
    }
    function $() {
        return o("WAWebABProps").getABPropConfigValue("biz_ai_web_onboarding_notification_dispatch_enabled") === true;
    }
    l.isAiAgentAutoReplyEnabled = e;
    l.isSmartComposerWebEnabled = s;
    l.isSmartComposerCoachingEnabled = u;
    l.isBizAIHubChatNavItemEnabled = c;
    l.isBizAIDownloadEnabled = d;
    l.isBizAiWebAgentChatDisabled = m;
    l.isAiAgentAutoSaveEnabled = p;
    l.isAiReplyFabConfirmModalEnabled = _;
    l.isAiAgentMessageEditingEnabled = f;
    l.isSmartComposerAiListsEmergencyDisabled = g;
    l.isAiListsWebUIEnabled = h;
    l.isAiListsWebUIEnabledWithJointGate = y;
    l.isHandoffRemovalTimingSyncEnabled = C;
    l.getHandoffListExpireDays = b;
    l.MULTI_WEBSITE_DISABLED = v;
    l.MULTI_WEBSITE_BRAZIL = S;
    l.MULTI_WEBSITE_LATAM = R;
    l.getMultiWebsiteMode = L;
    l.isMultiWebsiteEnabled = E;
    l.isMaibaWASSSendingEnabled = k;
    l.isGoogleDriveEnabled = I;
    l.isIntegrationHubEnabled = T;
    l.isAppointmentsEnabled = D;
    l.getResponseSettingsV2TriState = x;
    l.isWebOnboardingNotificationDispatchEnabled = $;
}, 98);