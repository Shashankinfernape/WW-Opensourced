__d("WAWebStickersGenerateStickerMessageProto", [
    "invariant",
    "WALogger",
    "WATypeUtils",
    "WAWebABProps",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebSoundStickerGating",
    "WAWebStickerMimeUtils",
    "WAWebWid",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u({ contextInfo, json, mediaMetadata, msgContext }) {
        if (mediaMetadata == null) {
            s(0, 66810);
        }
        if (mediaMetadata.mimetype != null && !o("WAWebStickerMimeUtils").getValidStickerMimeTypes().has(mediaMetadata.mimetype)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "invalid sticker mimetype: ",
                ""
            ])), mediaMetadata.mimetype);
            throw r("err")("invalid sticker mimetype");
        }
        const stickerMessage = {
            url: mediaMetadata.url,
            mimetype: mediaMetadata.mimetype,
            directPath: mediaMetadata.directPath,
            fileSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.filehash),
            fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.encFilehash),
            mediaKey: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.mediaKey),
            mediaKeyTimestamp: o("WATypeUtils").isNumber(mediaMetadata.mediaKeyTimestamp) ? mediaMetadata.mediaKeyTimestamp : undefined,
            fileLength: o("WATypeUtils").isNumber(json.size) ? json.size : undefined,
            height: json.height,
            width: json.width,
            firstFrameLength: mediaMetadata.firstFrameLength,
            firstFrameSidecar: json.firstFrameSidecar || undefined,
            isAnimated: mediaMetadata.isAnimated,
            isAiSticker: (json.isAiSticker === true || mediaMetadata.isAiSticker === true) && o("WAWebABProps").getABPropConfigValue("web_ai_sticker_emission_enabled") ? true : undefined,
            isLottie: mediaMetadata.isLottie,
            premium: mediaMetadata.stickerPremiumStatus ?? undefined,
            stickerSentTs: json.stickerSentTs,
            emojis: json.emojis?.join(" "),
            contextInfo,
            audioMessage: c(json.stickerAudio, msgContext)
        };
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(o("WAWebMsgType").MSG_TYPE.STICKER, stickerMessage, r("WAWebWid").isNewsletter(json.to));
        return {
            stickerMessage
        };
    }
    function c(stickerAudio, msgContext) {
        if (!(stickerAudio == null || msgContext === "quoted" || !o("WAWebSoundStickerGating").isSoundStickerCreationEnabled())) {
            return {
                url: d(stickerAudio.deprecatedMms3Url),
                directPath: d(stickerAudio.directPath),
                mediaKey: o("WAWebE2EProtoUtils").encodeBytes(stickerAudio.mediaKey),
                mediaKeyTimestamp: stickerAudio.mediaKeyTimestamp ?? undefined,
                fileSha256: o("WAWebE2EProtoUtils").encodeBytes(stickerAudio.filehash),
                fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(stickerAudio.encFilehash),
                fileLength: stickerAudio.size > 0 ? stickerAudio.size : undefined,
                seconds: stickerAudio.duration ?? undefined,
                mimetype: d(stickerAudio.mimetype)
            };
        }
    }
    function d(e) {
        if (e != null && e !== "") {
            return e;
        }
    }
    l.default = u;
}, 98);