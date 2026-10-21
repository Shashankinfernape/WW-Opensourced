__d("WAWebHatchGating", [
    "WAWebABProps",
    "WAWebHatchConnectInfoDecoder"
], function(t, n, r, o, a, i, l) {
    function e({ primaryAiHatchIntegrationEnabled: t }) {
        return t && o("WAWebABProps").getABPropConfigValue("ai_hatch_integration_enabled");
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("ai_hatch_commands_enabled");
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("ai_hatch_video_upload_enabled");
    }
    function c() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_hatch_document_upload_size_limit_mb");
        return e * 1024 * 1024;
    }
    const d = 1;
    function m() {
        return Math.max(o("WAWebABProps").getABPropConfigValue("ai_hatch_media_upload_count_limit"), d);
    }
    function p() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_hatch_connectors_supported_types");
        const t = e.toLowerCase().split(",").map((e)=>e.trim()).filter((e)=>o("WAWebHatchConnectInfoDecoder").RUNNABLE_CONNECT_ACTION_TYPES.has(e));
        return Array.from(new Set(t));
    }
    function _() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_hatch_integration_bot_profile");
        if (e !== "") {
            try {
                const t = JSON.parse(e);
                if (typeof t.name === "string") {
                    return t.name;
                }
            } catch (e) {
                return "";
            }
        }
        return "";
    }
    function f() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_hatch_integration_bot_profile");
        if (e !== "") {
            try {
                const t = JSON.parse(e);
                if (typeof t.profile_thumb === "string") {
                    return t.profile_thumb;
                }
            } catch (e) {
                return "";
            }
        }
        return "";
    }
    l.isHatchIntegrationEnabledForPrimaryFeature = e;
    l.isHatchCommandsEnabled = s;
    l.isHatchVideoUploadEnabled = u;
    l.getHatchDocumentUploadSizeLimitBytes = c;
    l.getHatchMediaUploadCountLimit = m;
    l.getHatchSupportedConnectActions = p;
    l.getHatchBotName = _;
    l.getHatchBotProfileThumb = f;
}, 98);