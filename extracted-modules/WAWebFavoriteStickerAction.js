__d("WAWebFavoriteStickerAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebAuraGating",
    "WAWebFavoriteStickerCollection",
    "WAWebFavoriteStickerJob",
    "WAWebMiscGatingUtils",
    "WAWebMsgType",
    "WAWebSoundStickerUtils",
    "WAWebStickerAddToFavoriteWamEvent",
    "WAWebStickerModel",
    "WAWebStickerPremiumStatus"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(t) {
        const n = t.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.STICKER && o("WAWebSoundStickerUtils").canFavoriteStickerMsg(e)).filter((e)=>r("WAWebAuraGating").canUsePremiumSticker(e.stickerPremiumStatus) && r("WAWebAuraGating").canUsePremiumSticker(e.mediaData?.stickerPremiumStatus));
        if (n.length !== 0) {
            const a = n.map((e)=>new (o("WAWebStickerModel")).StickerModel({
                    id: e.filehash,
                    mimetype: e.mimetype,
                    width: e.width,
                    height: e.height,
                    filehash: e.filehash,
                    encFilehash: e.encFilehash,
                    directPath: e.directPath,
                    mediaKey: e.mediaKey,
                    mediaKeyTimestamp: e.mediaKeyTimestamp,
                    stickerAudio: e.stickerAudio
                }));
            for (const i of n){
                y(i);
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Favorite Stickers: add favorite sticker by starring msgs."
            ])));
            o("WAWebFavoriteStickerJob").sendFavoriteStickerMutation(a, true, o("WATimeUtils").unixTimeMs()).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Favorite Stickers: failed to add favorite sticker by starring msgs: ",
                    ""
                ])), e).sendLogs("favorite-sticker-add-from-msgs-failed");
            });
        }
    }
    function f(e) {
        if (r("WAWebAuraGating").canUsePremiumSticker(e.mediaData.stickerPremiumStatus)) {
            h(e);
            if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
                o("WAWebFavoriteStickerJob").sendFavoriteStickerMutation([
                    e
                ], true, o("WATimeUtils").unixTimeMs()).catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Favorite Stickers: failed to add favorite sticker: ",
                        ""
                    ])), e).sendLogs("favorite-sticker-add-failed");
                });
            } else {
                o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.addOrUpdateStickers([
                    new (o("WAWebStickerModel")).StickerModel({
                        id: e.id,
                        mimetype: e.mimetype,
                        width: e.width,
                        height: e.height,
                        filehash: e.filehash,
                        encFilehash: e.encFilehash,
                        directPath: e.directPath,
                        mediaKey: e.mediaKey,
                        mediaKeyTimestamp: e.mediaKeyTimestamp,
                        stickerAudio: e.stickerAudio
                    })
                ], o("WATimeUtils").unixTimeMs()).catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Favorite Stickers: failed to add favorite sticker locally: ",
                        ""
                    ])), e).sendLogs("favorite-sticker-local-add-failed");
                });
            }
        }
    }
    function g(e) {
        if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
            o("WAWebFavoriteStickerJob").sendFavoriteStickerMutation([
                e
            ], false, o("WATimeUtils").unixTimeMs()).catch((e)=>{
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Favorite Stickers: failed to remove favorite sticker: ",
                    ""
                ])), e).sendLogs("favorite-sticker-remove-failed");
            });
        } else {
            o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.removeAndSave(e.filehash);
        }
    }
    function h(e) {
        let t;
        let n;
        let r;
        new (o("WAWebStickerAddToFavoriteWamEvent")).StickerAddToFavoriteWamEvent({
            stickerIsAnimated: !!((t = e.mediaData) != null && t.isAnimated),
            stickerIsFirstParty: !!((n = e.mediaData) != null && n.isFirstParty),
            stickerIsFromStickerMaker: !!((r = e.mediaData) != null && r.isFromStickerMaker),
            stickerIsPremium: e.mediaData?.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM
        }).commit();
    }
    function y(e) {
        let t;
        let n;
        let r;
        new (o("WAWebStickerAddToFavoriteWamEvent")).StickerAddToFavoriteWamEvent({
            stickerIsAnimated: !!((t = e.mediaData) != null && t.isAnimated),
            stickerIsFirstParty: !!((n = e.mediaData) != null && n.isFirstParty),
            stickerIsFromStickerMaker: !!((r = e.mediaData) != null && r.isFromStickerMaker),
            stickerIsPremium: e.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM || e.mediaData?.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM
        }).commit();
    }
    function C(e) {
        const t = new (o("WAWebStickerModel")).StickerModel({
            id: e.filehash,
            mimetype: e.mimetype,
            width: e.width,
            height: e.height,
            filehash: e.filehash,
            encFilehash: e.encFilehash,
            directPath: e.directPath,
            mediaKey: e.mediaKey,
            mediaKeyTimestamp: e.mediaKeyTimestamp
        });
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "Favorite Stickers: remove favorite sticker with msg."
        ])));
        o("WAWebFavoriteStickerJob").sendFavoriteStickerMutation([
            t
        ], false, o("WATimeUtils").unixTimeMs()).catch((e)=>{
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "Favorite Stickers: failed to remove favorite sticker from msg: ",
                ""
            ])), e).sendLogs("favorite-sticker-remove-from-msg-failed");
        });
    }
    function b(e) {
        return o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(e) != null;
    }
    l.addStickerMsgsToFavorites = _;
    l.addStickerToFavorites = f;
    l.removeStickerFromFavorites = g;
    l.removeStickerMsgFromFavorites = C;
    l.isStickerFilehashFavorited = b;
}, 98);