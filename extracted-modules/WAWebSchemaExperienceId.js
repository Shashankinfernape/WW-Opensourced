__d("WAWebSchemaExperienceId", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("experience-id").version(o("WAWebModelStorageVersions").experienceIdCreateTable(), [
            r("msgKey"),
            n("experienceIds"),
            n("storedAtMs")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("experience-id");
    }
    l.addTable = e;
    l.getExperienceIdTable = s;
}, 98);