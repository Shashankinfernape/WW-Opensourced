__d("WAWebRemoveStickerJob", [
    "Promise",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickersRemoveRecentSyncAction",
    "WAWebSyncdCoreApi"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const a = r("WAWebStickersRemoveRecentSyncAction").generateRemoveStickerMutation(t);
        return o("WAWebSyncdCoreApi").lockForSync([], [
            a
        ], function() {
            return (e || (e = n("Promise"))).resolve();
        }).then(()=>{
            o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.removeAndSave(t.id);
        });
    }
    l.sendRemoveStickerFromRecent = s;
}, 98);