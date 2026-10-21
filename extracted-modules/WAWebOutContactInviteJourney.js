__d("WAWebOutContactInviteJourney", [
    "WAWebOutContactUserPrefs"
], function(t, n, r, o, a, i, l) {
    function e() {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    function s() {
        const t = e();
        o("WAWebOutContactUserPrefs").setInviteJourneySessionId(t);
        return t;
    }
    function u() {
        return o("WAWebOutContactUserPrefs").getInviteJourneySessionId();
    }
    function c() {
        o("WAWebOutContactUserPrefs").clearInviteJourneySessionId();
    }
    l.createCompanionInviteSessionId = e;
    l.startOutContactInviteJourney = s;
    l.getOutContactInviteSessionId = u;
    l.clearOutContactInviteJourney = c;
}, 98);