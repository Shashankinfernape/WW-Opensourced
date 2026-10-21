__d("WAWebGroupHistoryRestrictionHelper", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (o("WAWebBotUtils").isMetaAiBot(e) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)) {
            return true;
        }
        return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function s(t) {
        const historyReceivers = [];
        const nonHistoryReceivers = [];
        for (const a of t){
            if (e(a)) {
                nonHistoryReceivers.push(o("WAWebWidFactory").asUserWidOrThrow(a));
            } else {
                historyReceivers.push(o("WAWebWidFactory").asUserWidOrThrow(a));
            }
        }
        return {
            historyReceivers,
            nonHistoryReceivers
        };
    }
    function u(t) {
        return t.some((t)=>!e(t.id));
    }
    l.isHistoryRestrictedWid = e;
    l.filterParticipants = s;
    l.hasUnrestrictedParticipants = u;
}, 98);