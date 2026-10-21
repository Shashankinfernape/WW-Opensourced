__d("WAWebBotGating", [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebImplicitThreadRoutingStrategy",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProductFeature",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
    "WAWebUserPrefsBot"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebBotUtils").isHatchBot(e)) {
            return true;
        }
        if (o("WAWebBotBaseGating").isBotEnabled()) {
            return o("WAWebBotBaseGating").isDeviceLanguageInLanguages(o("WAWebABProps").getABPropConfigValue("ai_ptt_main_gate_supported_languages") ?? "en");
        }
        return false;
    }
    function s(e) {
        if (!o("WAWebBotBaseGating").isBotEnabled()) {
            return false;
        }
        const t = o("WAWebMsgGetters").getSender(e);
        if (e.id.remote.isGroup() && t != null && t.isBot() && !o("WAWebBotUtils").isAnyMetaAiBot(t) || o("WAWebMsgGetters").getUnifiedResponse(e) != null && o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(e.t)) {
            return false;
        }
        return !!o("WAWebMsgGetters").getIsMetaBotResponse(e) || e.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE;
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("bot_3p_status") === 2;
    }
    function c() {
        return !o("WAWebProductFeature").isInternalProduct() && v() && o("WAWebABProps").getABPropConfigValue("bonsai_chat_list_entry_point_enabled");
    }
    function d() {
        return !o("WAWebProductFeature").isInternalProduct() && v() && !c();
    }
    function m() {
        return o("WAWebABProps").getABPropConfigValue("ai_home_bot_profile_sync_interval_sec") * 1000;
    }
    function p(e) {
        if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e.unsafe())) {
            return true;
        }
        return e.richResponse.parseState !== o("WAWebRichResponse.flow").RichResponseParseState.Unparsed;
    }
    function _(e) {
        return f(e.type, o("WAWebMsgGetters").getIsBotSearchResponse(e));
    }
    function f(e, t) {
        return e !== o("WAWebMsgType").MSG_TYPE.REVOKED && t;
    }
    function g() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_non_blocking_notices");
        return e.split(",").map((e)=>e.trim()).filter((e)=>!isNaN(e) && e !== "").map(Number);
    }
    function h() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_inline_notices");
        return e.split(",").map((e)=>e.trim()).filter((e)=>!isNaN(e) && e !== "").map(Number);
    }
    function y() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            const e = C(o("WAWebABProps").getABPropConfigValue("smb_web_ai_tos_master_notice_id"));
            if (e != null) {
                return e;
            }
        }
        return C(o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_master_notice_id"));
    }
    function C(e) {
        if (e.trim() === "") {
            return null;
        }
        const t = Number(e);
        if (isNaN(t)) {
            return null;
        }
        return t;
    }
    function b() {
        return o("WAWebABProps").getABPropConfigValue("ai_migrate_away_from_inline_tos_enabled");
    }
    function v() {
        return !(o("WAWebMobilePlatforms").isSMB() || !o("WAWebBotBaseGating").isBotEnabled() || !o("WAWebBotTos").hasSeenShortcutTos() && !o("WAWebBotTos").canShowBotTos(o("WAWebBotTosIds").getBotShortcutTosId()));
    }
    function S() {
        return !o("WAWebProductFeature").isInternalProduct() && v() && o("WAWebABProps").getABPropConfigValue("ai_search_ask_button_web_enabled");
    }
    function R() {
        const e = o("WAWebUserPrefsBot").getPrimaryAiThreadSupportLevelFromLocalStorage();
        return e === o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.INFRA || e === o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.FULL;
    }
    function L() {
        return R() && o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled");
    }
    function E() {
        return o("WAWebABProps").getABPropConfigValue("ai_meta_ai_thread_rendering_enabled");
    }
    function k() {
        return v() && o("WAWebABProps").getABPropConfigValue("ai_web_ask_meta_ai_improvement_enabled");
    }
    function I() {
        return o("WAWebABProps").getABPropConfigValue("is_ai_mode_selector_visible");
    }
    function T() {
        return o("WAWebBotBaseGating").isBotEnabled() && o("WAWebABProps").getABPropConfigValue("ai_chat_threads_historical_messages_migration_enabled");
    }
    function D() {
        if (o("WAWebBotBaseGating").isBotEnabled()) {
            return o("WAWebBotBaseGating").isDeviceLanguageInLanguages(o("WAWebABProps").getABPropConfigValue("ai_metabot_image_input_languages") ?? "en");
        }
        return false;
    }
    function x() {
        if (!o("WAWebMobilePlatforms").isSMB() || !o("WAWebBotBaseGating").isBotEnabled()) {
            return false;
        }
        return o("WAWebBotBaseGating").isDeviceLanguageInLanguages(o("WAWebABProps").getABPropConfigValue("smb_web_meta_ai_image_input_languages") ?? "");
    }
    function $(e) {
        if (o("WAWebBotUtils").isMetaAiBot(e)) {
            return w();
        }
        if (o("WAWebBotUtils").isBusinessAssistantBot(e)) {
            return x();
        }
        return false;
    }
    function P() {
        if (o("WAWebBotBaseGating").isBotEnabled()) {
            return o("WAWebBotBaseGating").isDeviceLanguageInLanguages(o("WAWebABProps").getABPropConfigValue("ai_video_upload_support_languages") ?? "") && o("WAWebABProps").getABPropConfigValue("ai_video_upload_web_enabled");
        }
        return false;
    }
    function N() {
        if (!o("WAWebBotBaseGating").isBotEnabled() || !o("WAWebBotBaseGating").isDeviceLanguageInLanguages(o("WAWebABProps").getABPropConfigValue("ai_metabot_document_upload_enabled") ?? "en")) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("ai_web_meta_ai_pdf_document_input_enabled");
    }
    function M() {
        return D() || P();
    }
    function w() {
        return M() || N();
    }
    const A = "pdf";
    function F() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_file_upload_supported_file_types");
        if (e !== "") {
            return e;
        }
        return A;
    }
    function O() {
        return o("WAWebABProps").getABPropConfigValue("ai_file_upload_count_limit");
    }
    function B() {
        return o("WAWebABProps").getABPropConfigValue("ai_metabot_send_image_limit");
    }
    function W() {
        return o("WAWebABProps").getABPropConfigValue("ai_metabot_document_ocr_image_conversion_enabled");
    }
    function q(e, t) {
        return t != null && o("WAWebBotUtils").isMetaAiBot(e) && L();
    }
    function U(e) {
        return o("WAWebBotUtils").isMetaAiBot(e) && L();
    }
    function V() {
        const t = o("WAWebABProps").getABPropConfigValue("ai_chat_threads_implicit_routing_strategy");
        return o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy.cast(t) ?? o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy.NewThread;
    }
    function H() {
        return V() !== o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy.NewThread;
    }
    function G() {
        return V() === o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy.DefaultThread;
    }
    function z() {
        return L() && o("WAWebABProps").getABPropConfigValue("ai_chat_threads_pin_enabled") === true;
    }
    function j() {
        return o("WAWebABProps").getABPropConfigValue("ai_chat_threads_pin_max_count");
    }
    function K() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_bot_orphan_logic_enabled");
    }
    function Q() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_file_upload_size_limit_mb");
        return e * 1024 * 1024;
    }
    function X() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_video_upload_size_limit_mb");
        return e * 1024 * 1024;
    }
    l.isBotPttEnabled = e;
    l.shouldAnimateAsBotStream = s;
    l.isBizBot3pAvailable = u;
    l.isBotShortcutEntryPointEnabled = c;
    l.isBotNewChatEntryPointEnabled = d;
    l.ugcBotProfileSyncInterval = m;
    l.shouldRenderStructuredRichResponseMsg = p;
    l.showBotSearchPlugin = _;
    l.showBotSearchPluginFor = f;
    l.getNonBlockingBotNoticeIds = g;
    l.getInlineBotNoticeIds = h;
    l.getMasterBotNoticeId = y;
    l.isMigrateAwayFromInlineBotTosEnabled = b;
    l.isMetaAIChatInteractionEnabled = v;
    l.isAiSearchAskButtonEnabled = S;
    l.isAiChatThreadsEnabled = L;
    l.isMetaAiThreadRenderingEnabled = E;
    l.isAskMetaAiImprovementEnabled = k;
    l.isAiModeSelectorInteractive = I;
    l.isAiChatThreadsHistoricalMessageMigrationEnabled = T;
    l.isMetaAiImageInputEnabled = D;
    l.isBusinessAssistantImageInputEnabled = x;
    l.isMediaInputEnabledForAssistantBotChat = $;
    l.isMetaAiVideoInputEnabled = P;
    l.isMetaAiDocUploadEnabled = N;
    l.isAnyMetaAiMediaInputEnabled = M;
    l.isAnyMetaAiAttachmentInputEnabled = w;
    l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = A;
    l.getMetaAiSupportedFileTypes = F;
    l.getMetaAiFileUploadCountLimit = O;
    l.getMetaAiImageSendLimit = B;
    l.isMetaAiDocumentOcrImageConversionEnabled = W;
    l.shouldSkipMetaAiChatlistHighlight = q;
    l.isMetaAiChatInThreadsMode = U;
    l.getImplicitThreadRoutingStrategy = V;
    l.isImplicitThreadRoutingEnabled = H;
    l.isDefaultThreadRoutingEnabled = G;
    l.isAiThreadPinEnabled = z;
    l.getAiThreadPinMaxCount = j;
    l.isBotOrphanMsgEnabled = K;
    l.getMetaAiDocumentUploadSizeLimitBytes = Q;
    l.getMetaAiVideoUploadSizeLimitBytes = X;
}, 98);