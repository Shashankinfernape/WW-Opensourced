__d("WAWebSchemaNewsletterPollsVotes", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("newsletter-polls-votes").version(o("WAWebModelStorageVersions").newsletterPollsVotesCreateTable(), [
            r("parentMsgKey"),
            n("serverTimestamp"),
            n("votesMap")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("newsletter-polls-votes");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);