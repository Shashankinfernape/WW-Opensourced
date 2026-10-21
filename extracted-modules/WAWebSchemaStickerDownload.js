__d("WAWebSchemaStickerDownload", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("sticker-download").version(o("WAWebModelStorageVersions").stickerDownloadCreateTable(), [
            r("id"),
            n("timestamp")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("sticker-download");
    }
    l.addTable = e;
    l.getStickerDownloadTable = s;
}, 98);