__d("WAWebBotTosIds", [
    "WAWebABProps",
    "WAWebBotGating",
    "WAWebBotLogging",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    const e = "20230901";
    const s = "20230902";
    const u = "20240216";
    const c = "20231027";
    const d = "20240729";
    const m = new Set([
        e,
        s,
        u
    ]);
    function p() {
        return [
            f(),
            _()
        ].filter(Boolean);
    }
    function _() {
        return y(o("WAWebABProps").getABPropConfigValue("ai_pdfn_nux_ai_group_muse_non_initiator_notice_id"));
    }
    function f() {
        return y(o("WAWebABProps").getABPropConfigValue("ai_pdfn_nux_ai_group_muse_initiator_notice_id"));
    }
    function g() {
        return y(o("WAWebABProps").getABPropConfigValue("ai_pdfn_nux_ai_group_notice_id"));
    }
    function h() {
        return y(o("WAWebABProps").getABPropConfigValue("ai_pdfn_nux_ai_group_tee_notice_id"));
    }
    function y(e) {
        const t = e.trim();
        if (!/^\d+$/.test(t)) {
            return null;
        }
        const n = Number(t);
        if (Number.isSafeInteger(n) && n > 0) {
            return t;
        }
        return null;
    }
    function C() {
        const t = o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id").trim();
        const n = t != null && t !== "" ? t : e;
        return n;
    }
    function b() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id").trim();
        const t = e != null && e !== "" ? e : u;
        return t;
    }
    function v() {
        const e = o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_invoke_notice_id").trim();
        const t = e != null && e !== "" ? e : s;
        return t;
    }
    function S() {
        return u;
    }
    function R() {
        return s;
    }
    function L() {
        return c;
    }
    function E(e) {
        const t = o("WAWebBotGating").getMasterBotNoticeId();
        if (t != null) {
            return t;
        }
        switch(e){
            case o("WAWebBotLogging").BotEntryPointType.Shortcut:
            case o("WAWebBotLogging").BotEntryPointType.Search:
                return Number(b());
            case o("WAWebBotLogging").BotEntryPointType.Invoke:
                return Number(v());
        }
    }
    function k() {
        return d;
    }
    function I() {
        if (!o("WAWebMobilePlatforms").isSMB()) {
            return null;
        }
        const e = o("WAWebABProps").getABPropConfigValue("smb_meta_ai_tos_notice_id").trim();
        if (!/^\d+$/.test(e)) {
            return null;
        }
        const t = Number(e);
        if (Number.isSafeInteger(t) && t > 0) {
            return t;
        }
        return null;
    }
    l.supportedTosNoticeIds = m;
    l.getMuseGroupTosNoticeIds = p;
    l.getMuseGroupNonInitiatorNoticeId = _;
    l.getMuseGroupInitiatorNoticeId = f;
    l.getMetaAiOpenGroupNoticeId = g;
    l.getMetaAiTeeGroupNoticeId = h;
    l.getBotAgentTosId = C;
    l.getBotShortcutTosId = b;
    l.getBotInvokeTosId = v;
    l.getBotLegacyShortcutTosId = S;
    l.getBotLegacyInvokeTosId = R;
    l.getBizBotTosId = L;
    l.getApplicableBotNoticeId = E;
    l.getUgcAiStudioTosId = k;
    l.getBusinessAssistantLegacyNoticeId = I;
}, 98);