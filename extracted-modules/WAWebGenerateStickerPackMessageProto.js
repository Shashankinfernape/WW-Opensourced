__d("WAWebGenerateStickerPackMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json, mediaMetadata = {} }) {
        return {
            stickerPackMessage: {
                stickerPackId: json.stickerPackId,
                name: json.filename,
                publisher: json.stickerPackPublisher,
                fileSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.filehash),
                fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.encFilehash),
                mediaKey: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.mediaKey),
                directPath: json.directPath,
                caption: json.caption,
                packDescription: json.description,
                thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.thumbnailSha256),
                thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata.thumbnailEncSha256),
                thumbnailDirectPath: json.thumbnailDirectPath,
                stickers: json.stickers,
                fileLength: json.size,
                trayIconFileName: json.trayIconFileName,
                stickerPackSize: json.stickerPackSize
            }
        };
    }
    l.default = e;
}, 98);