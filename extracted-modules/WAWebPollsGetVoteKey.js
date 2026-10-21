__d("WAWebPollsGetVoteKey", [
    "WAWebLidMigrationUtils",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e({ parentMsgKey, sender }) {
        const r = o("WAWebWidFactory").createWidFromWidLike(sender);
        return `${String(parentMsgKey)}|${String(o("WAWebLidMigrationUtils").toLid(r))}|${String(o("WAWebLidMigrationUtils").toPn(r))}`;
    }
    l.getVoteKey = e;
}, 98);