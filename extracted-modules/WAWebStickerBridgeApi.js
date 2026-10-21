__d("WAWebStickerBridgeApi", [
    "WAWebFavoriteStickerCollection",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaFavoriteStickers",
    "WAWebSchemaRecentStickers",
    "WAWebSchemaStickerDownload",
    "WAWebStickerDownloadCollection"
], function(t, n, r, o, a, i, l) {
    const e = {
        restoreFavoriteStickers: function() {
            return o("WAWebSchemaFavoriteStickers").getFavoriteStickersTable().all().then((e)=>o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.initializeFromCache(e));
        },
        restoreRecentStickers: function() {
            return o("WAWebSchemaRecentStickers").getRecentStickersTable().all().then((e)=>o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.initializeFromCache(e));
        },
        restoreStickerDownload: function() {
            return o("WAWebSchemaStickerDownload").getStickerDownloadTable().all().then((e)=>o("WAWebStickerDownloadCollection").StickerDownloadCollection.initializeFromCache(e));
        }
    };
    l.StickerBridgeApi = e;
}, 98);