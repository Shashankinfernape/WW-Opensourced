__d("WAWebSchemaBlocklist", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const n = t.addUserDefinedPrimaryKey;
        e.add("blocklist").version(o("WAWebModelStorageVersions").blocklistCreateTable(), [
            n("id")
        ]).view(function(e) {
            return {
                id: e.id
            };
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("blocklist");
    }
    l.addTable = e;
    l.getBlocklistTable = s;
}, 98);