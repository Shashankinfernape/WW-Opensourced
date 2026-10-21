__d("WAWebOutContactUserPrefs", [
    "$InternalEnum",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "InviteJourneySessionId"
    ]);
    function s() {
        const t = r("WAWebUserPrefsStore").getUser(e.InviteJourneySessionId);
        if (typeof t === "number") {
            return t;
        }
        return null;
    }
    function u(t) {
        r("WAWebUserPrefsStore").setUser(e.InviteJourneySessionId, t, {
            shouldWriteToIdb: false
        });
    }
    function c() {
        r("WAWebUserPrefsStore").setUser(e.InviteJourneySessionId, null, {
            shouldWriteToIdb: false
        });
    }
    l.getInviteJourneySessionId = s;
    l.setInviteJourneySessionId = u;
    l.clearInviteJourneySessionId = c;
}, 98);