__d("WAWebFavoriteStickerJob", [
    "Promise",
    "WAWebFavoriteStickerCollection",
    "WAWebStickersFavoriteSyncAction",
    "WAWebSyncdCoreApi"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, a, i) {
        const l = t.map((e)=>r("WAWebStickersFavoriteSyncAction").generateFavoriteSyncMutation(e, a, i));
        return o("WAWebSyncdCoreApi").lockForSync([], l, function() {
            return (e || (e = n("Promise"))).resolve();
        }).then(()=>{
            if (a) {
                return o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.addOrUpdateStickers(t, i);
            }
            o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.removeAndSave(t.map((e)=>e.filehash));
        });
    }
    l.sendFavoriteStickerMutation = s;
}, 98);