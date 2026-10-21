__d("WAWebGroupAgentPrivacyNoticeKind", [
    "$InternalEnum",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebGroupAgentPrivacyNoticeParams",
    "WAWebGroupAgentProfileRouting"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        META_AI: "meta_ai",
        MUSE: "muse",
        GENERIC: "generic",
        THIRD_PARTY: "third_party"
    });
    function s(t) {
        if (o("WAWebGroupAgentPrivacyNoticeParams").isGroupAgentPrivacyNoticeParams(t)) {
            return {
                agent: null,
                kind: e.MUSE
            };
        }
        if (o("WAWebGroupAgentPrivacyNoticeParams").isGenericGroupAgentPrivacyNoticeParams(t)) {
            return {
                agent: null,
                kind: e.GENERIC
            };
        }
        const n = o("WAWebGroupAgentPrivacyNoticeParams").getThirdPartyGroupAgentPrivacyNoticeAgent(t);
        if (n != null) {
            return {
                agent: n,
                kind: e.THIRD_PARTY
            };
        }
        const r = o("WAWebGroupAgentPrivacyNoticeParams").getSyncedGroupAgentPrivacyNoticeAgent(t);
        if (r == null) {
            return {
                agent: null,
                kind: e.META_AI
            };
        }
        return {
            agent: r,
            kind: c(r)
        };
    }
    function u(e) {
        return o("WAWebGroupAgentPrivacyNoticeParams").getThirdPartyGroupAgentPrivacyNoticeAgent(e) ?? o("WAWebGroupAgentPrivacyNoticeParams").getSyncedGroupAgentPrivacyNoticeAgent(e);
    }
    function c(t) {
        const r = o("WAWebBotProduct").botProductFromServerValue(o("WAWebBotProfileCollection").BotProfileCollection.get(t)?.product);
        if (o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(t, r)) {
            return e.MUSE;
        }
        if (r === o("WAWebBotProduct").BotProduct.THIRD_PARTY) {
            return e.THIRD_PARTY;
        }
        return e.GENERIC;
    }
    l.GroupAgentPrivacyNoticeKind = e;
    l.getGroupAgentPrivacyNotice = s;
    l.getGroupAgentPrivacyNoticeProfileAgent = u;
}, 98);