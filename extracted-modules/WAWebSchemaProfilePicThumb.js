__d("WAWebSchemaProfilePicThumb", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("profile-pic-thumb").version(o("WAWebModelStorageVersions").profilePicThumbCreateTable(), [
            r("id"),
            n("tag"),
            n("eurl"),
            n("previewEurl"),
            n("timestamp"),
            n("previewDirectPath"),
            n("fullDirectPath"),
            n("filehash")
        ]).view(function(e) {
            return {
                id: e.id,
                tag: e.tag,
                eurl: e.eurl,
                previewEurl: e.previewEurl,
                timestamp: e.timestamp,
                previewDirectPath: e.previewDirectPath,
                fullDirectPath: e.fullDirectPath,
                filehash: e.filehash
            };
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("profile-pic-thumb");
    }
    l.addTable = e;
    l.getProfilePicThumbTable = s;
}, 98);