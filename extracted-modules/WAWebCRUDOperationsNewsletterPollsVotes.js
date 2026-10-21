__d("WAWebCRUDOperationsNewsletterPollsVotes", [
    "WAWebModelStorageUtils",
    "WAWebSchemaNewsletterPollsVotes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "newsletter-polls-votes"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = new Map(e.map((e)=>[
                        e.parentMsgKey,
                        e
                    ]));
                const o = (yield n.bulkGet(e.map((e)=>e.parentMsgKey))).filter(Boolean);
                o.forEach((e)=>{
                    const t = r.get(e.parentMsgKey);
                    if (t != null && t.serverTimestamp < e.serverTimestamp) {
                        r.delete(e.parentMsgKey);
                    }
                });
                yield n.bulkCreateOrReplace(Array.from(r.values()));
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function s(e) {
        return o("WAWebSchemaNewsletterPollsVotes").getTable().bulkRemove(e);
    }
    function u(e) {
        return o("WAWebSchemaNewsletterPollsVotes").getTable().get(e);
    }
    l.bulkCreateOrUpdateVotes = e;
    l.bulkDeleteVotes = s;
    l.getVote = u;
}, 98);