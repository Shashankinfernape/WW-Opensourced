__d("WAWebSchemaNewsletterMyVotes", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r } = t;
        e.add("newsletter-my-votes").version(o("WAWebModelStorageVersions").newsletterMyVotesCreateTable(), [
            r([
                "chatJid",
                "msgServerId"
            ]),
            n("serverTimestampMs"),
            n("votes"),
            n("ack"),
            n("t"),
            n("read"),
            n("msgKey")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("newsletter-my-votes");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);