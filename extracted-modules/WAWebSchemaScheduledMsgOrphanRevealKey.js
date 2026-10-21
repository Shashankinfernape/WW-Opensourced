__d("WAWebSchemaScheduledMsgOrphanRevealKey", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("scheduled-msg-orphan-reveal-key").version(o("WAWebModelStorageVersions").scheduledMsgOrphanRevealKeyCreateTable(), [
            a("revealKeyId"),
            n("revealKey"),
            n("createdAt"),
            r("createdAt")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("scheduled-msg-orphan-reveal-key");
    }
    l.addTable = e;
    l.getScheduledMsgOrphanRevealKeyTable = s;
}, 98);