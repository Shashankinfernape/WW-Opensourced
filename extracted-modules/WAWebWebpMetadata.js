__d("WAWebWebpMetadata", [
    "$InternalEnum",
    "WAWebStickerMetadataParsing",
    "WAWebWamEnumStickerMakerSourceType"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        CutoutImage: 1,
        WebStickerMaker: 2,
        IosStickerMaker: 3,
        AndroidStickerMaker: 4,
        TransparentImage: 5,
        GIF: 6
    });
    function s(e) {
        return o("WAWebStickerMetadataParsing").toStickerMetadata(e);
    }
    function u(e) {
        const t = {};
        if (e.isFirstParty != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.isFirstParty] = e.isFirstParty ? 1 : 0;
        }
        if (e.isFromStickerMaker != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.isFromStickerMaker] = e.isFromStickerMaker ? 1 : 0;
        }
        if (e.emojis != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.emojis] = e.emojis;
        }
        if (e.stickerPackId != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.stickerPackId] = e.stickerPackId;
        }
        if (e.stickerPackName != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.stickerPackName] = e.stickerPackName;
        }
        if (e.stickerPackPublisher != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.stickerPackPublisher] = e.stickerPackPublisher;
        }
        if (e.stickerPackPlayStoreLink != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.stickerPackPlayStoreLink] = e.stickerPackPlayStoreLink;
        }
        if (e.stickerPackAppleStoreLink != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.stickerPackAppleStoreLink] = e.stickerPackAppleStoreLink;
        }
        if (e.isAvatar != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.isAvatar] = e.isAvatar ? 1 : 0;
        }
        if (e.isAiSticker != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.isAiSticker] = e.isAiSticker ? 1 : 0;
        }
        if (e.stickerMakerSourceType != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.stickerMakerSourceType] = e.stickerMakerSourceType;
        }
        if (e.accessibilityLabel != null) {
            t[o("WAWebStickerMetadataParsing").STICKER_METADATA_FIELDS.accessibilityLabel] = e.accessibilityLabel;
        }
        return t;
    }
    function c(t) {
        if (t == null) {
            return null;
        }
        if (t === e.CutoutImage) {
            return o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE.CUTOUT_IMAGE;
        }
        if (t === e.WebStickerMaker) {
            return o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE.WEB_STICKER_MAKER;
        }
        if (t === e.IosStickerMaker) {
            return o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE.IOS_STICKER_MAKER;
        }
        if (t === e.AndroidStickerMaker) {
            return o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE.ANDROID_STICKER_MAKER;
        }
        if (t === e.TransparentImage) {
            return o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE.TRANSPARENT_IMAGE;
        }
        if (t === e.GIF) {
            return o("WAWebWamEnumStickerMakerSourceType").STICKER_MAKER_SOURCE_TYPE.GIF;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })();
    }
    l.StickerMakerSourceType = e;
    l.toWebpMetadata = s;
    l.toRawWebpMetadata = u;
    l.getStickerMakerSourceType = c;
}, 98);