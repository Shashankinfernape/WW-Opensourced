__d("WAWebSchemaSubgroupSuggestion", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("subgroup-suggestion").version(o("WAWebModelStorageVersions").subgroupSuggestionCreateTable(), [
            a("id"),
            n("parentGroupId"),
            r("parentGroupId"),
            n("subject"),
            n("desc"),
            n("owner"),
            n("t")
        ]).view(function(e) {
            return e;
        });
    }
    l.addTable = e;
}, 98);