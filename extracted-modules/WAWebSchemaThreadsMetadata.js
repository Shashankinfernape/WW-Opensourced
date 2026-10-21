__d("WAWebSchemaThreadsMetadata", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "thread-metadata";
    function s() {
        const t = o("WAWebModelStorageUtils").getStorage();
        const n = o("WAWebStorageMutationBuilder").columnBuilder(t.config);
        const { addColumn: r, addIndex: a, addUserDefinedPrimaryKey: i } = n;
        t.add(e).version(o("WAWebModelStorageVersions").threadsMetadataCreateTable(), [
            i("id"),
            r("aiThreadInfo")
        ]).version(o("WAWebModelStorageVersions").addThreadsMetadataTableInternalIdIndex(), [
            r("internalId"),
            a("internalId"),
            r("creationTimestamp"),
            r("lastMessageTimestamp"),
            r("pinThreadTimestamp"),
            r("unreadCount"),
            r("botModeSelection"),
            r("botModeOverride"),
            r("lastReceivedKey"),
            r("unreadEditTimestampMs")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    l.addTable = s;
    l.getThreadsMetadataTable = u;
}, 98);