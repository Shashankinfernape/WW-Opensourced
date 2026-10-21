__d("WAWebStickersParseStickerMessageProto", [
    "WABase64Sanitize",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebE2EProtoParserApi",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMsgType",
    "WAWebStickerPngThumbnailValidation",
    "WAWebStickerPremiumStatus",
    "WAWebStickersParseStickerAudio"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ baseMessage: i, messageProtobuf: l, msgContext: s }) {
        const c = l?.lottieStickerMessage;
        const d = c?.message?.stickerMessage;
        let m = l?.stickerMessage;
        if (d != null) {
            m = d;
        }
        if (m != null) {
            const p = o("WAWebMediaMessageGetValidatedProperties").getValidatedMediaMessageProperties(m, i, s, o("WAWebMsgType").MSG_TYPE.STICKER);
            const { fileEncSha256: _, fileLength: f, fileSha256: g, mediaKey: h, url: y } = p;
            const C = babelHelpers.extends({}, i, {
                type: o("WAWebMsgType").MSG_TYPE.STICKER,
                kind: o("WAWebMsgType").MsgKind.Sticker,
                deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(y),
                directPath: m.directPath || "",
                mimetype: m.mimetype || "",
                filehash: o("WAWebE2EProtoParserApi").decodeBytes(g),
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(_),
                mediaKey: r("WABase64Sanitize")(o("WAWebE2EProtoParserApi").decodeBytes(h)),
                mediaKeyTimestamp: m.mediaKeyTimestamp != null ? o("WALongInt").numberOrThrowIfTooLarge(m.mediaKeyTimestamp) : o("WATimeUtils").unixTime(),
                size: f,
                height: m.height || 0,
                width: m.width || 0,
                firstFrameLength: m.firstFrameLength,
                firstFrameSidecar: m.firstFrameSidecar,
                isAnimated: m.isAnimated,
                isAiSticker: m.isAiSticker,
                isLottie: m.isLottie,
                stickerPremiumStatus: o("WAWebStickerPremiumStatus").StickerPremiumStatus.cast(m.premium) ?? o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE,
                stickerSentTs: o("WALongInt").maybeNumberOrThrowIfTooLarge(m.stickerSentTs),
                isAvatar: m.isAvatar,
                emojis: m.emojis?.split(" ").filter(Boolean),
                mediaPngThumbnail: u(m.pngThumbnail),
                stickerAudio: r("WAWebStickersParseStickerAudio")({
                    audioMessage: m.audioMessage,
                    baseMessage: i,
                    msgContext: s
                })
            });
            o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(C, m);
            return {
                msgData: C,
                contextInfo: m.contextInfo
            };
        }
    }
    function u(t) {
        if (!(t == null || t.byteLength === 0)) {
            if (!o("WAWebStickerPngThumbnailValidation").isRenderablePngThumbnail(t)) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker] dropping unusable png thumbnail"
                ]))).sendLogs("sticker-png-thumbnail-rejected", {
                    sampling: 0.01
                });
                return;
            }
            if (o("WAWebABProps").getABPropConfigValue("enable_sticker_thumbnails_in_chat_list")) {
                return o("WAWebE2EProtoParserApi").decodeBytes(t);
            }
        }
    }
    l.default = s;
}, 98);