__d("WAWebUserPrefsStatusTab", [
    "$InternalEnum",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "StatusTabLastSeenTimestamp"
    ]);
    const e_StatusTabLastSeenTimestamp = e.StatusTabLastSeenTimestamp;
    function u() {
        const e = r("WAWebUserPrefsStore").get(e_StatusTabLastSeenTimestamp);
        if (typeof e === "number") {
            return e;
        }
        return 0;
    }
    function c(e) {
        r("WAWebUserPrefsStore").set(e_StatusTabLastSeenTimestamp, e);
    }
    l.StatusTabUserPrefs = e;
    l.getStatusTabLastSeenTimestamp = u;
    l.saveStatusTabLastSeenTimestamp = c;
}, 98);