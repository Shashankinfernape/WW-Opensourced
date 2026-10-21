__d("WAWebSchemaDanglingReceipt", [
    "WAWebOffdStorageUtils",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addAutoIncrementingPrimaryKey: s, addColumn: u } = e;
    function c() {
        o("WAWebOffdStorageUtils").getStorage().add("dangling-receipt").version(o("WAWebOffdStorageUtils").getStorage().versions.version(1), [
            s("id"),
            u("receipts"),
            u("acks")
        ]).view(function(e) {
            return e;
        });
    }
    function d() {
        return o("WAWebOffdStorageUtils").getStorage().table("dangling-receipt");
    }
    l.addTable = c;
    l.getTable = d;
}, 98);