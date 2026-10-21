__d("WAWebSchemaOptOutList", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const n = t.addUserDefinedPrimaryKey;
        e.add("optoutlist").version(o("WAWebModelStorageVersions").optOutListCreateTable(), [
            n("id")
        ]).view(function(e) {
            return {
                id: e.id
            };
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("optoutlist");
    }
    l.addTable = e;
    l.getOptOutListTable = s;
}, 98);