__d("WAWebGroupAgentPrivacyNoticeParams", [
    "WAWebBotUtils",
    "WAWebDecodeJid"
], function(t, n, r, o, a, i, l) {
    const e = "group_agent";
    const s = "group_agent_generic";
    const u = "group_agent_third_party";
    function c(t) {
        return t?.[0] === e;
    }
    function d(e) {
        return e?.[0] === s;
    }
    function m(e) {
        const t = e?.[1];
        if (e?.[0] === u && t != null && typeof t !== "string") {
            return t;
        }
        return null;
    }
    function p(e) {
        const t = e?.[0];
        const n = typeof t === "string" ? o("WAWebDecodeJid").decodeJid(t) : t;
        if (n != null && typeof n !== "string" && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n)) {
            return n;
        }
        return null;
    }
    l.GROUP_AGENT_PRIVACY_NOTICE_PARAM = e;
    l.GENERIC_GROUP_AGENT_PRIVACY_NOTICE_PARAM = s;
    l.THIRD_PARTY_GROUP_AGENT_PRIVACY_NOTICE_PARAM = u;
    l.isGroupAgentPrivacyNoticeParams = c;
    l.isGenericGroupAgentPrivacyNoticeParams = d;
    l.getThirdPartyGroupAgentPrivacyNoticeAgent = m;
    l.getSyncedGroupAgentPrivacyNoticeAgent = p;
}, 98);