__d("WAWebParseStickerPackMessageProto", [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: a, messageProtobuf: i, msgContext: l }) {
        const s = i.stickerPackMessage;
        if (s == null) {
            return null;
        }
        const u = s.caption;
        const c = o("WAWebMediaMessageGetValidatedProperties").getValidatedMediaMessageProperties(s, a, l, o("WAWebMsgType").MSG_TYPE.STICKER_PACK);
        const { fileEncSha256: d, fileSha256: m, mediaKey: p, url: _ } = c;
        const f = [];
        s.stickers?.forEach(function(e) {
            f.push({
                fileName: e.fileName,
                emojis: e.emojis,
                isLottie: e.isLottie,
                mimetype: e.mimetype,
                isAnimated: e.isAnimated,
                accessibilityLabel: e.accessibilityLabel
            });
        });
        const g = babelHelpers.extends({}, a, {
            type: o("WAWebMsgType").MSG_TYPE.STICKER_PACK,
            kind: o("WAWebMsgType").MsgKind.StickerPack,
            caption: u,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(_),
            description: s.packDescription,
            isCaptionByUser: u != null,
            filename: s.name,
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(m),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(d),
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(p),
            directPath: s.directPath,
            stickerPackId: s.stickerPackId,
            thumbnailDirectPath: s.thumbnailDirectPath,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(s.thumbnailSha256),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(s.thumbnailEncSha256),
            mediaKeyTimestamp: s.mediaKeyTimestamp != null ? o("WALongInt").numberOrThrowIfTooLarge(s.mediaKeyTimestamp) : o("WATimeUtils").unixTime(),
            stickers: f,
            stickerPackPublisher: s.publisher,
            stickerPackSize: o("WALongInt").numberOrThrowIfTooLarge(s.stickerPackSize ?? 0),
            trayIconFileName: s.trayIconFileName,
            size: o("WALongInt").numberOrThrowIfTooLarge(s.fileLength ?? 0)
        });
        return {
            msgData: g,
            contextInfo: null
        };
    }
    l.default = e;
}, 98);