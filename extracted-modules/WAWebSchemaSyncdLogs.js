__d("WAWebSchemaSyncdLogs", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addAutoIncrementingPrimaryKey: s, addColumn: u, addIndex: c } = e;
    function d() {
        const e = o("WAWebModelStorageUtils").getStorage();
        e.add("syncd-logs").version(o("WAWebModelStorageVersions").syncdLogsCreateTable(), [
            s("id"),
            u("ts"),
            u("collection"),
            c("collection"),
            u("log")
        ]).view(function(e) {
            return e;
        });
    }
    function m() {
        return o("WAWebModelStorageUtils").getStorage().table("syncd-logs");
    }
    l.addTable = d;
    l.getSyncdLogsTable = m;
}, 98);