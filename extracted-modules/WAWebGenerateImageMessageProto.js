__d("WAWebGenerateImageMessageProto", [
    "WATypeUtils",
    "WAWebE2EProtoUtils",
    "WAWebMediaGatingUtils",
    "WAWebWid",
    "err"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json, mediaMetadata }) {
        if (mediaMetadata == null) {
            throw r("err")("generateImageMessageProto: generating image protobuf without mediaMetadata");
        }
        const i = json.mimetype || mediaMetadata.mimetype;
        let l = {};
        if (r("WAWebWid").isStatus(json.to)) {
            l = {
                thumbnailDirectPath: mediaMetadata.thumbnailDirectPath,
                thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.thumbnailSha256),
                thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.thumbnailEncSha256)
            };
        }
        if (o("WAWebMediaGatingUtils").isThumbnailGenerationForMsgOnServerEnabled(json)) {
            l = {
                thumbnailDirectPath: mediaMetadata.thumbnailDirectPath,
                thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.thumbnailSha256)
            };
        }
        const imageMessage = babelHelpers.extends({
            url: mediaMetadata.url,
            mimetype: i,
            caption: json.caption,
            directPath: mediaMetadata.directPath,
            fileSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.filehash),
            fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.encFilehash),
            height: mediaMetadata.height,
            width: mediaMetadata.width,
            fileLength: o("WATypeUtils").isNumber(json.size) ? json.size : undefined,
            mediaKey: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.mediaKey),
            mediaKeyTimestamp: o("WATypeUtils").isNumber(mediaMetadata.mediaKeyTimestamp) ? mediaMetadata.mediaKeyTimestamp : undefined,
            jpegThumbnail: json.isViewOnce ? undefined : o("WAWebE2EProtoUtils").encodeBytes(json.body),
            contextInfo,
            viewOnce: json.isViewOnce
        }, l);
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(json.type, imageMessage, r("WAWebWid").isNewsletter(json.to));
        return {
            imageMessage
        };
    }
    l.default = e;
}, 98);