__d("WAWebPollsPendingUpdatesSchema", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositeIndex: r, addCompositePrimaryKey: a, addEncryptedColumn: i, addIndex: l } = t;
        e.add("poll-pending-updates").version(o("WAWebModelStorageVersions").pollPendingUpdatesCreateTable(), [
            a([
                "parentMsgKey",
                "sender",
                "payloadType",
                "payloadKey"
            ]),
            n("dependencyType"),
            n("dependencyId"),
            n("msgKey"),
            n("senderTimestampMs"),
            n("pollNameHash"),
            i("selectedOptionLocalIds", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
            i("unresolvedOptionHashes", o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER),
            n("t"),
            n("createdAtMs"),
            r([
                "parentMsgKey",
                "dependencyType",
                "dependencyId"
            ]),
            l("parentMsgKey"),
            l("createdAtMs")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("poll-pending-updates");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);