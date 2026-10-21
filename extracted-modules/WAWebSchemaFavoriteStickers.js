__d("WAWebSchemaFavoriteStickers", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("favorite-stickers").version(o("WAWebModelStorageVersions").favoriteStickersCreateTable(), [
            r("id"),
            n("timestamp"),
            n("sticker"),
            n("stickerHashWithoutMeta"),
            n("isFavorite"),
            n("deviceId")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("favorite-stickers");
    }
    l.addTable = e;
    l.getFavoriteStickersTable = s;
}, 98);