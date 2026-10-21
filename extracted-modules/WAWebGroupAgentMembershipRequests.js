__d("WAWebGroupAgentMembershipRequests", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || e.length === 0 || t.length === 0) {
            return [];
        }
        const r = new Set(t.flatMap((e)=>u(e, n.getAlternateUserWid)));
        return e.filter((e)=>r.has(String(e.addedBy)) && c(e.id, n.getAgentProfile));
    }
    function s(e) {
        return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    function u(e, t) {
        const n = e.isBot() ? null : t(o("WAWebWidFactory").asUserWidOrThrow(e));
        if (n == null) {
            return [
                String(e)
            ];
        }
        return [
            String(e),
            String(n)
        ];
    }
    function c(e, t) {
        if (!s(e)) {
            return false;
        }
        const n = t(e);
        if (n?.lastFetchedTimeMs == null) {
            return true;
        }
        const r = o("WAWebBotProduct").botProductFromServerValue(n.product);
        return r === o("WAWebBotProduct").BotProduct.MUSE || r === o("WAWebBotProduct").BotProduct.HATCH && !e.equals(o("WAWebBotUtils").HATCH_BOT_FBID_WID);
    }
    l.selectMuseAgentRequestsOfRemovedMembers = e;
    l.isMuseAgentRequestCandidate = s;
}, 98);