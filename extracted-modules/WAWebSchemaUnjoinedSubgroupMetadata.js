__d("WAWebSchemaUnjoinedSubgroupMetadata", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("unjoined-subgroup-metadata").version(o("WAWebModelStorageVersions").unjoinedSubgroupMetadataCreateTable(), [
            a("id"),
            n("subject"),
            n("subjectTime"),
            n("defaultSubgroup"),
            n("generalSubgroup"),
            n("parentGroup"),
            n("membershipApprovalMode"),
            n("membershipApprovalRequest"),
            n("hiddenSubgroup"),
            n("size")
        ]).version(o("WAWebModelStorageVersions").unjoinedSubgroupParentGroupIndex(), [
            r("parentGroup")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("unjoined-subgroup-metadata");
    }
    l.addTable = e;
    l.getUnjoinedSubgroupMetadataTable = s;
}, 98);