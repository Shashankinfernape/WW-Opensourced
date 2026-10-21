__d("WAWebAvatarStickerUtils", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        const { isAvatarStickers = false } = t ?? {};
        return e.filter((e)=>e.mediaData.isAvatar === isAvatarStickers);
    }
    i.filterAvatarStickers = e;
}, 66);