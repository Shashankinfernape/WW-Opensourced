__d("WAWebSchemaReportingToken", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("reporting-token").version(o("WAWebModelStorageVersions").reportingTokenTable(), [
            a("id"),
            n("reportingTag"),
            n("reportingTokenContent"),
            n("version")
        ]).version(o("WAWebModelStorageVersions").reportingTokenTableTsIndex(), [
            n("ts"),
            r("ts")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("reporting-token");
    }
    l.addTable = e;
    l.getReportingTokenTable = s;
}, 98);