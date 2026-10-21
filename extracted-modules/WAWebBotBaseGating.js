__d("WAWebBotBaseGating", [
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebMobilePlatforms",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t) {
        u = t;
        e = null;
    }
    function d(e) {
        const t = u;
        if (t == null) {
            return false;
        }
        for (const n of e.split(",")){
            if (n.trim().toLowerCase() === t) {
                return true;
            }
        }
        return false;
    }
    function m() {
        if (u == null) {
            return false;
        }
        const n = o("WAWebABProps").getABPropConfigValue("bonsai_supported_languages") ?? "en";
        if (s !== n || e == null) {
            s = n;
            e = d(n);
        }
        return e;
    }
    function p() {
        return o("WAWebABProps").getABPropConfigValue("bonsai_enabled") === true || o("WAWebABProps").getABPropConfigValue("wa_web_expansion_countries_bonsai_enabled") === true;
    }
    function _() {
        return C() && o("WAWebABProps").getABPropConfigValue("ai_chat_meta_ai_home_web_enabled") === true;
    }
    function f() {
        return _() && o("WAWebABProps").getABPropConfigValue("ai_chat_meta_ai_home_default_landing_enabled");
    }
    function g() {
        return C() && !r("justknobx")._("4767") && o("WAWebABProps").getABPropConfigValue("ai_retrigger_null_state_main_gate_v2_enabled") === true;
    }
    function h() {
        return C() && o("WAWebABProps").getABPropConfigValue("ai_reminders_enabled") === true;
    }
    function y() {
        return o("WAWebABProps").getABPropConfigValue("ai_all_languages_enabled");
    }
    function C() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return o("WAWebABProps").getABPropConfigValue("smb_web_meta_ai_assistant_enabled") === true;
        }
        if (!m() && !y()) {
            return false;
        }
        return p();
    }
    function b() {
        return o("WAWebABProps").getABPropConfigValue("bot_3p_status") !== 0;
    }
    function v() {
        return o("WAWebABProps").getABPropConfigValue("ai_3p_bot_product_chat_rendering_enabled");
    }
    function S() {
        return o("WAWebABProps").getABPropConfigValue("wabai_message_rendering_enabled");
    }
    function R() {
        return o("WAWebABProps").getABPropConfigValue("ai_forward_attribution_enabled");
    }
    function L() {
        return o("WAWebABProps").getABPropConfigValue("ai_subscription_metering_enabled");
    }
    function E() {
        return o("WAWebABProps").getABPropConfigValue("ai_subscription_enabled");
    }
    function k() {
        return o("WAWebABProps").getABPropConfigValue("ai_account_linking_enabled");
    }
    function I() {
        return o("WAWebABProps").getABPropConfigValue("ai_mode_selector_media_editor_enabled");
    }
    function T() {
        return o("WAWebABProps").getABPropConfigValue("ai_dynamic_mode_selector_enabled");
    }
    function D() {
        return o("WAWebABProps").getABPropConfigValue("ai_chat_threads_infra_enabled");
    }
    function x() {
        return o("WAWebABProps").getABPropConfigValue("ai_rich_response_forward_receiving_enabled");
    }
    function $() {
        return o("WAWebABProps").getABPropConfigValue("ai_rich_response_forward_media_receiving_enabled");
    }
    function P() {
        return o("WAWebABProps").getABPropConfigValue("ai_rich_response_forward_sending_enabled");
    }
    function N() {
        return o("WAWebABProps").getABPropConfigValue("ai_rich_response_jarvis_forward_sending_enabled");
    }
    function M() {
        return o("WAWebABProps").getABPropConfigValue("ai_rich_response_jarvis_forward_receiving_enabled");
    }
    function w(e) {
        return o("WAWebBotUtils").isMetaAiBot(e.from) && r("justknobx")._("5352");
    }
    l.setBonsaiUserLanguage = c;
    l.isDeviceLanguageInLanguages = d;
    l.isMetaAIHomeEnabled = _;
    l.isMetaAIHomeDefaultLandingEnabled = f;
    l.isMetaAiNullStateEnabled = g;
    l.isMetaAiTasksEnabled = h;
    l.isBotEnabled = C;
    l.isBizBot3pEnabled = b;
    l.is3pAgentProductEnabled = v;
    l.isBizBot1pEnabled = S;
    l.isAiForwardAttributionEnabled = R;
    l.isAiSubscriptionMeteringEnabled = L;
    l.isAiSubscriptionEnabled = E;
    l.isAiAccountLinkingEnabled = k;
    l.isAiModeSelectorMediaEditorEnabled = I;
    l.isDynamicModeSelectorEnabled = T;
    l.isAiChatThreadsInfraEnabled = D;
    l.isRichResponseForwardReceivingEnabled = x;
    l.isRichResponseForwardMediaReceivingEnabled = $;
    l.isRichResponseForwardSendingEnabled = P;
    l.isRichResponseJarvisForwardSendingEnabled = N;
    l.isRichResponseJarvisForwardReceivingEnabled = M;
    l.isLoadingMediaMessagesEnabled = w;
}, 98);