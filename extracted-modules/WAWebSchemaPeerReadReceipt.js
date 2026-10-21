__d("WAWebSchemaPeerReadReceipt", [
    "WAWebOffdStorageUtils",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addAutoIncrementingPrimaryKey, addColumn } = e;
    function c() {
        o("WAWebOffdStorageUtils").getStorage().add("peer-read-receipt").version(o("WAWebOffdStorageUtils").getStorage().versions.version(2), [
            addAutoIncrementingPrimaryKey("id"),
            addColumn("msgKeys"),
            addColumn("ts"),
            addColumn("ack")
        ]).view(function(e) {
            return e;
        });
    }
    function d() {
        return o("WAWebOffdStorageUtils").getStorage().table("peer-read-receipt");
    }
    l.addTable = c;
    l.getTable = d;
}, 98);