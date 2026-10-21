__d("WAWebSchemaMessageAssociation", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addCompositePrimaryKey: r, addIndex: a } = t;
        e.add("message-association").version(o("WAWebModelStorageVersions").messageAssociationCreateTable(), [
            r([
                "msgKey",
                "associationType"
            ]),
            n("parentMsgKey"),
            n("msgKeyInternalId"),
            a("parentMsgKey")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("message-association");
    }
    l.addTable = e;
    l.getMessageAssociationTable = s;
}, 98);