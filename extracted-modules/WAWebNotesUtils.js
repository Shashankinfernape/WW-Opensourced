__d("WAWebNotesUtils", [
    "WAWebABProps",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMobilePlatforms",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("WAWebABProps").getABPropConfigValue("smb_notes_content_max_limit");
    function s(e) {
        return e != null && e.isUser() && !e.isPSA() && !e.isOfficialBizAccount() && !e.isAiHub() && !e.isIAS() && !e.isSupportAccount() && !e.isCAPISupportAccount() && !e.isBot() && o("WAWebMobilePlatforms").isSMB();
    }
    function u(e) {
        if (e == null || (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) && e?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) {
            return false;
        }
        const t = o("WAWebFrontendMsgGetters").getText(e);
        if (t == null || t.trim() === "") {
            return false;
        }
        const n = o("WAWebFrontendMsgGetters").getChat(e);
        if (n == null) {
            return false;
        }
        return s(n.id);
    }
    l.MAX_NOTE_LENGTH = e;
    l.shouldEnableNotesForWid = s;
    l.shouldEnableNotesForMsg = u;
}, 98);