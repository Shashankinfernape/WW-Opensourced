__d("WAWebSchemaUnifiedAddons", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("addons-unified").version(o("WAWebModelStorageVersions").createUnifiedAddonsTable(), [
            a("msgKey"),
            n("targetMsgKey"),
            r("targetMsgKey"),
            n("arbitraryIndex"),
            r("arbitraryIndex"),
            n("rowType"),
            r("rowType"),
            n("ack"),
            n("t"),
            n("read"),
            n("addonProps")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("addons-unified");
    }
    l.addTable = e;
    l.getTable = s;
}, 98);