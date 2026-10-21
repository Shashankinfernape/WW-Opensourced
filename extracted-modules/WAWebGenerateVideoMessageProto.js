__d("WAWebGenerateVideoMessageProto", [
    "WATypeUtils",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebE2EProtoUtils",
    "WAWebMediaGatingUtils",
    "WAWebMsgType",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json, mediaMetadata }) {
        const i = mediaMetadata?.duration;
        const l = i != null && o("WATypeUtils").isString(i) ? parseInt(i, 10) : i;
        const json_caption = json.caption;
        const u = json.mimetype || mediaMetadata?.mimetype;
        let c = {};
        if (o("WAWebMediaGatingUtils").isThumbnailGenerationForMsgOnServerEnabled(json)) {
            c = {
                thumbnailDirectPath: mediaMetadata?.thumbnailDirectPath,
                thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata?.thumbnailSha256)
            };
        }
        const d = babelHelpers.extends({
            url: mediaMetadata?.url,
            mimetype: u,
            directPath: mediaMetadata?.directPath,
            fileSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata?.filehash),
            fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata?.encFilehash),
            height: mediaMetadata?.height,
            width: mediaMetadata?.width,
            seconds: l,
            caption: json_caption,
            fileLength: o("WATypeUtils").isNumber(json.size) ? json.size : undefined,
            mediaKey: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata?.mediaKey),
            mediaKeyTimestamp: o("WATypeUtils").isNumber(mediaMetadata?.mediaKeyTimestamp) ? mediaMetadata.mediaKeyTimestamp : undefined,
            jpegThumbnail: json.isViewOnce ? undefined : o("WAWebE2EProtoUtils").encodeBytes(json.body),
            gifPlayback: json.isGif,
            gifAttribution: json.gifAttribution,
            accessibilityLabel: json.accessibilityLabel,
            contextInfo,
            streamingSidecar: json.streamingSidecar,
            viewOnce: json.isViewOnce,
            annotations: json.interactiveAnnotations,
            metadataUrl: mediaMetadata?.metadataUrl != null && o("WAWebChannelVideoServerTranscodeGating").isChannelVideoServerTranscodeUploadEnabled() ? mediaMetadata.metadataUrl : undefined,
            dashManifestUrl: mediaMetadata?.dashManifestUrl != null && o("WAWebChannelVideoServerTranscodeGating").isChannelVideoServerTranscodeUploadEnabled() ? mediaMetadata.dashManifestUrl : undefined
        }, c);
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(json.type, d, r("WAWebWid").isNewsletter(json.to));
        if (json.type === o("WAWebMsgType").MSG_TYPE.PTV) {
            return {
                ptvMessage: d
            };
        }
        return {
            videoMessage: d
        };
    }
    l.default = e;
}, 98);