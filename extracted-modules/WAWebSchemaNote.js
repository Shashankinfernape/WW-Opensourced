__d("WAWebSchemaNote", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addIndex: r, addUserDefinedPrimaryKey: a } = t;
        e.add("note").version(o("WAWebModelStorageVersions").noteCreateTable(), [
            a("id"),
            n("type"),
            r("type"),
            n("chatJid"),
            r("chatJid"),
            n("content"),
            n("createdAt"),
            n("modifiedAt")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("note");
    }
    l.addTable = e;
    l.getNoteTable = s;
}, 98);