__d("WAWebSchemaMembershipApprovalRequest", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r, addIndex: a } = t;
        e.add("pending-membership-approval-request").version(o("WAWebModelStorageVersions").membershipApprovalRequestCreateTable(), [
            r([
                "groupId",
                "id"
            ]),
            a("groupId"),
            n("t"),
            n("addedBy"),
            n("requestMethod"),
            n("parentGroupId")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("pending-membership-approval-request");
    }
    l.addTable = e;
    l.getMembershipApprovalRequestTable = s;
}, 98);