__d("WAWebSchemaManifest", [
    "WAWebFtsStorageUtils",
    "WAWebFtsStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = "manifest";
    const s = Object.freeze({
        PREV_VERSION: "prev.version",
        CURR_VERSION: "curr.version",
        NEXT_VERSION: "next.version"
    });
    const u = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addColumn, addUserDefinedPrimaryKey } = u;
    function m() {
        o("WAWebFtsStorageUtils").getStorage().add(e).version(o("WAWebFtsStorageVersions").manifestCreateTable(), [
            addUserDefinedPrimaryKey("key"),
            addColumn("tokenizerVersion"),
            addColumn("schemaVersion"),
            addColumn("isCurrent"),
            addColumn("lastMsgKeyViaFullIndexer"),
            addColumn("isFullIndexingComplete")
        ]).view(function(e) {
            return e || null;
        });
    }
    function p() {
        return o("WAWebFtsStorageUtils").getStorage().table(e);
    }
    l.ManifestKeys = s;
    l.addTable = m;
    l.getTable = p;
}, 98);