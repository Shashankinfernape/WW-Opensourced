__d("WAWebMediaMetadata", [
    "WALogger",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMsgGetters",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        const t_mediaObject = t.mediaObject;
        if (!t_mediaObject) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "id: ",
                " type: ",
                ""
            ])), t.id.toString(), t.type).sendLogs("media-fault: mediaMetadata msg without mediaObject");
            throw r("err")("msg.mediaMetadata with no mediaObject");
        }
        const a = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(t) ? t_mediaObject.entries.getEntryByEncFilehash({
            encFilehash: t.encFilehash,
            deprecatedMms3Url: t.deprecatedMms3Url
        }) : t_mediaObject.entries.getUnencryptedEntry(t.filehash, t.directPath);
        if (!a) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "id: ",
                " type: ",
                ""
            ])), t.id.toString(), t.type).sendLogs("media-fault: mediaMetadata no entry");
            throw r("err")("msg.mediaMetadata with entry mismatch");
        }
        const t_mediaData = t.mediaData;
        return {
            url: c(t, a.deprecatedMms3Url),
            directPath: a.directPath,
            encFilehash: a.getEncfilehash(),
            mediaKey: a.getMediaKey(),
            mediaKeyTimestamp: a.getMediaKeyTimestamp(),
            filehash: t.filehash,
            type: t_mediaData.type,
            mimetype: t_mediaData.mimetype,
            filename: t_mediaData.filename,
            duration: t_mediaData.duration,
            width: t_mediaData.fullWidth,
            height: t_mediaData.fullHeight,
            firstFrameLength: t_mediaData.firstFrameLength,
            isAnimated: t_mediaData.isAnimated,
            isLottie: t_mediaData.isLottie,
            isAiSticker: t_mediaData.isAiSticker,
            stickerPremiumStatus: t_mediaData.stickerPremiumStatus,
            thumbnailDirectPath: t.thumbnailDirectPath,
            thumbnailSha256: t.thumbnailSha256,
            thumbnailEncSha256: t.thumbnailEncSha256,
            thumbnailHeight: t.thumbnailHeight,
            thumbnailWidth: t.thumbnailWidth,
            metadataUrl: t.metadataUrl,
            dashManifestUrl: t.dashManifestUrl,
            waveform: t.waveform,
            staticUrl: t.staticUrl
        };
    }
    function c(e, deprecatedMms3Url) {
        if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e)) {
            return deprecatedMms3Url;
        }
        if (o("WAWebMsgGetters").getIsStatus(e)) {
            return e.deprecatedMms3Url ?? null;
        }
        return null;
    }
    l.mediaMetadata = u;
}, 98);