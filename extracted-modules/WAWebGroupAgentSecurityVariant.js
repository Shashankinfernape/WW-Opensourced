__d("WAWebGroupAgentSecurityVariant", [
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebGroupAgentProfileRouting"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        META_AI: "meta_ai",
        MUSE: "muse",
        GENERIC: "generic"
    });
    const s = n("$InternalEnum")({
        META_AI_OPEN: "meta_ai_open",
        MUSE: "muse",
        OTHER: "other"
    });
    function u(t) {
        const n = [];
        for (const r of t){
            const a = d(r);
            if (a != null) {
                n.push(a);
            }
        }
        if (n.length === 0) {
            return null;
        }
        if (n.length === 1 && n[0] === s.META_AI_OPEN) {
            return e.META_AI;
        }
        if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            if (n.every((e)=>e === s.MUSE)) {
                return e.MUSE;
            }
            return e.GENERIC;
        }
        return null;
    }
    function c(t, n) {
        if (o("WAWebGroupAgentProfileRouting").isOpenGroupAiAgent(t, n)) {
            if (m(t)) {
                return e.MUSE;
            }
            return e.GENERIC;
        }
        return null;
    }
    function d(e) {
        if (e.isFbidBot()) {
            if (e.equals(o("WAWebBotUtils").META_BOT_FBID_WID)) {
                return s.META_AI_OPEN;
            }
            if (o("WAWebBotStaticProfiles").isStaticProfile(e)) {
                return null;
            }
            if (m(e)) {
                return s.MUSE;
            }
            return s.OTHER;
        }
        return null;
    }
    function m(e) {
        const t = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
        if (t?.lastFetchedTimeMs == null) {
            return false;
        }
        return o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled() && o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(e, o("WAWebBotProduct").botProductFromServerValue(t.product));
    }
    l.GroupAgentSecurityVariant = e;
    l.getGroupAgentSecurityVariant = u;
    l.getPrivacyNoticeSecurityVariant = c;
}, 98);