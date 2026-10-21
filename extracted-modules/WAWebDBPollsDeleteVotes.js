__d("WAWebDBPollsDeleteVotes", [
    "Promise",
    "WAWebDBMessageDelete",
    "WAWebPollsVotesSchema",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = yield o("WAWebPollsVotesSchema").getTable().anyOf([
                "parentMsgKey"
            ], t);
            if (r.length !== 0) {
                const a = r.map((e)=>e.msgKey);
                const i = r.map((e)=>[
                        e.parentMsgKey,
                        e.sender
                    ]);
                const l = yield (e || (e = n("Promise"))).allSettled([
                    o("WAWebDBMessageDelete").removeMessagesFromHistory(a, {
                        deleteAssociatedMsgs: false
                    }),
                    o("WAWebPollsVotesSchema").getTable().bulkRemove(i)
                ]);
                for (const s of l){
                    if (s.status === "rejected") {
                        throw s.reason;
                    }
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.deleteVotesByParentMsgKeys = s;
}, 98);