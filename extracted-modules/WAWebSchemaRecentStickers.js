__d("WAWebSchemaRecentStickers", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("recent-stickers").version(o("WAWebModelStorageVersions").recentStickersCreateTable(), [
            r("id"),
            n("timestamp"),
            n("sticker"),
            n("msgId"),
            n("weight"),
            n("isNewSticker")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("recent-stickers");
    }
    l.addTable = e;
    l.getRecentStickersTable = s;
}, 98);