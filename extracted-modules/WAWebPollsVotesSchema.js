__d("WAWebPollsVotesSchema", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r, addEncryptedColumn: a, addIndex: i } = t;
        e.add("poll-votes").version(o("WAWebModelStorageVersions").pollVotesCreateTable(), [
            r([
                "parentMsgKey",
                "sender"
            ]),
            n("msgKey"),
            i("parentMsgKey"),
            a("selectedOptionLocalIds", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
            n("senderTimestampMs"),
            n("ack"),
            n("t"),
            n("read"),
            a("lastSuccessfulSelectedOptionLocalIds", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER)
        ]).version(o("WAWebModelStorageVersions").pollVotesAddMsgKeyIndex(), [
            i("msgKey")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("poll-votes");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);