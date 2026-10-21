__d("WAWebSchemaOrgContact", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e({ lid: t, orgId: n }) {
        return [
            n,
            t
        ];
    }
    function s() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r, addIndex: a } = t;
        e.add("org-contacts").version(o("WAWebModelStorageVersions").orgContactCreateTable(), [
            r([
                "orgId",
                "lid"
            ]),
            n("memberName"),
            n("memberTag"),
            n("role"),
            n("username"),
            n("phoneNumber"),
            a("lid")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table("org-contacts");
    }
    l.createOrgContactPrimaryKey = e;
    l.addTable = s;
    l.getOrgContactTable = u;
}, 98);