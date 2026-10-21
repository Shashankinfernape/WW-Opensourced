__d("WAWebLimitSharingAIGroupBlock", [
    "fbt",
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatGroupUtils",
    "WAWebStateUtils"
], function(t, n, r, o, a, i, l, s) {
    const e = n("$InternalEnum")({
        GROUP_AGENT: "group_agent",
        META_AI: "meta_ai"
    });
    function u(t) {
        if (m(t)) {
            return e.GROUP_AGENT;
        }
        if (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() && o("WAWebChatGroupUtils").isAIGroupOpen(t) || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && o("WAWebChatGroupUtils").isAIGroupTee(t)) {
            return e.META_AI;
        }
        return null;
    }
    function c() {
        return s._("Advanced chat privacy and AI agents");
    }
    function d() {
        return s._("AI agents are in this chat. To turn on advanced chat privacy, AI agents must first be removed from this chat.");
    }
    function m(e) {
        if (e == null) {
            return false;
        }
        const n = o("WAWebStateUtils").unproxy(e).groupMetadata?.participants;
        const r = n?.some(function(e) {
            return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e.id) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id);
        }) === true;
        return r && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    l.LimitSharingAIGroupBlock = e;
    l.getLimitSharingAIGroupBlock = u;
    l.getLimitSharingBlockedByGroupAgentTitle = c;
    l.getLimitSharingBlockedByGroupAgentText = d;
}, 226);