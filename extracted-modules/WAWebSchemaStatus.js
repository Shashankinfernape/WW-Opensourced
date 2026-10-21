__d("WAWebSchemaStatus", [
    "WAWebStatusStorageUtils",
    "WAWebStatusStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("WAWebStorageMutationBuilder").columnBuilder();
    const { addAutoIncrementingPrimaryKey: s, addColumn: u, addUniqueIndex: c } = e;
    function d() {
        const e = o("WAWebStatusStorageUtils").getStorage();
        e.add("status").version(o("WAWebStatusStorageVersions").statusCreateTable(), [
            s("id"),
            u("status_uuid"),
            c("status_uuid"),
            u("sender_user_jid"),
            u("type"),
            u("timestamp"),
            u("state"),
            u("is_archived"),
            u("media_row_id"),
            u("secret")
        ]);
    }
    l.addTable = d;
}, 98);