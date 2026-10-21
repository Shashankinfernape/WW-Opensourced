__d("WAWebSchemaReactions", [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "ParentMsgPlaceholder",
        "ParentMsgMissing",
        "ParentMsgFutureproof"
    ]);
    function s() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositeIndex: r, addCompositePrimaryKey: a, addIndex: i } = t;
        e.add("reactions").version(o("WAWebModelStorageVersions").reactionsCreateTable(), [
            a([
                "parentMsgKey",
                "senderUserJid"
            ]),
            n("msgKey"),
            n("reactionText"),
            n("timestamp"),
            n("orphan"),
            n("orphanReason"),
            n("read"),
            n("ack"),
            i("parentMsgKey"),
            i("orphan"),
            n("t")
        ]).version(o("WAWebModelStorageVersions").addReactionTableOrphanIndex(), [
            r([
                "parentMsgKey",
                "orphan"
            ])
        ]).version(o("WAWebModelStorageVersions").addReactionTableMsgKeyIndex(), [
            i("msgKey")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table("reactions");
    }
    l.addTable = s;
    l.getReactionsTable = u;
}, 98);