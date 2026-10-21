__d("WAWebUpdateOrphanReactionsMsgAction", [
    "WAWebReactionsCollection"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.forEach((e)=>{
            const t = o("WAWebReactionsCollection").ReactionsCollection.get(e.parentMsgKey);
            if (t) {
                o("WAWebReactionsCollection").ReactionsCollection.addOrUpdateReaction(e);
            }
        });
    }
    l.checkUpdateForOrphanReactions = e;
}, 98);