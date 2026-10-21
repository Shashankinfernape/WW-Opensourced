__d("WAWebGroupAgentAuthorName", [
    "fbt",
    "WAWebBotExposedName",
    "WAWebBotFrontendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebGroupAgentProfileRouting",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l, s) {
    const e = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]+$/;
    function u({ agentWid, chat, product, profileName }) {
        if (chat == null || !o("WAWebChatGetters").getIsGroup(chat) || !m(agentWid) || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return false;
        }
        const l = o("WAWebBotProduct").botProductFromServerValue(product);
        if (l == null || r("isStringNullOrEmpty")(profileName?.trim()) || d(agentWid, l, profileName)) {
            return true;
        }
        return o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() && o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(agentWid, l);
    }
    function c({ agentWid, product, profileName, pushname }) {
        const l = o("WAWebBotProduct").botProductFromServerValue(product);
        if (d(agentWid, l, profileName)) {
            return s._("Muse").toString();
        }
        const u = profileName?.trim();
        if (l != null && !r("isStringNullOrEmpty")(u)) {
            return u;
        }
        const c = pushname?.trim();
        if (!r("isStringNullOrEmpty")(c) && c !== "Meta AI" && c !== o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName()) {
            return c;
        }
        return o("WAWebBotExposedName").getUnknownAccountName();
    }
    function d(agentWid, n, profileName) {
        return o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() && o("WAWebBotProduct").isMuseAgentProduct(agentWid, n) && profileName != null && e.test(profileName);
    }
    function m(agentWid) {
        return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(agentWid) && !o("WAWebBotUtils").isAnyMetaAiBot(agentWid) && !o("WAWebBotUtils").isHatchBot(agentWid) && !o("WAWebBotStaticProfiles").isStaticProfile(agentWid);
    }
    l.shouldUseGroupAgentAuthorName = u;
    l.getGroupAgentAuthorName = c;
}, 226);