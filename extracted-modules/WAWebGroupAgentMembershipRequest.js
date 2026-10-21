__d("WAWebGroupAgentMembershipRequest", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (!e.isFbidBot() || !t.isFbidBot() || e.equals(t)) {
            return false;
        }
        return o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) !== o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    l.isAgentRequestIncompatibleWithJoinedAgent = e;
}, 98);