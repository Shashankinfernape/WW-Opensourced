__d("WAWebGenerateDocumentMessageProto", [
    "WATypeUtils",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json, mediaMetadata = {} }) {
        const l = json.mimetype || mediaMetadata.mimetype;
        let s;
        let u;
        if (json.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            u = json.caption;
            s = mediaMetadata.filename;
        }
        const documentMessage = {
            url: mediaMetadata.url,
            mimetype: l,
            title: s,
            caption: u,
            directPath: mediaMetadata.directPath,
            fileSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.filehash),
            fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.encFilehash),
            fileName: mediaMetadata.filename,
            fileLength: o("WATypeUtils").isNumber(json.size) ? json.size : undefined,
            mediaKey: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.mediaKey),
            mediaKeyTimestamp: o("WATypeUtils").isNumber(mediaMetadata.mediaKeyTimestamp) ? mediaMetadata.mediaKeyTimestamp : undefined,
            jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(json.body),
            contextInfo,
            contactVcard: json.isVcardOverMmsDocument,
            thumbnailDirectPath: mediaMetadata.thumbnailDirectPath,
            thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.thumbnailSha256),
            thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.thumbnailEncSha256),
            thumbnailHeight: mediaMetadata.thumbnailHeight,
            thumbnailWidth: mediaMetadata.thumbnailWidth
        };
        if (Number.isFinite(json.pageCount) && !Number.isNaN(json.pageCount)) {
            documentMessage.pageCount = json.pageCount;
        }
        o("WAWebE2EProtoUtils").validateOutgoingRequiredMediaProperties(json.type, documentMessage, r("WAWebWid").isNewsletter(json.to));
        return {
            documentMessage
        };
    }
    l.default = e;
}, 98);