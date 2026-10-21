__d("WAWebExtractImageFieldsFromScheduledMsg", [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMediaUrlAllowlist",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ imageMessage: n }) {
        if (n == null) {
            return null;
        }
        const { annotations: r, caption: a, directPath: i, fileEncSha256: l, fileLength: s, fileSha256: u, height: c, jpegThumbnail: d, mediaKey: m, mediaKeyTimestamp: p, mimetype: _, qrUrl: f, scanLengths: g, scansSidecar: h, staticUrl: y, thumbnailDirectPath: C, thumbnailEncSha256: b, thumbnailSha256: v, url: S, viewOnce: R, width: L } = n;
        return {
            type: o("WAWebMsgType").MSG_TYPE.IMAGE,
            kind: o("WAWebMsgType").MsgKind.Image,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(S),
            directPath: i || "",
            staticUrl: o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(y) ?? "",
            qrUrl: f,
            mimetype: _ || "",
            caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(a),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(u),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(l),
            size: s != null ? o("WALongInt").numberOrThrowIfTooLarge(s) : void 0,
            height: c || 0,
            width: L || 0,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(m),
            mediaKeyTimestamp: p != null ? o("WALongInt").numberOrThrowIfTooLarge(p) : o("WATimeUtils").unixTime(),
            body: o("WAWebE2EProtoParserApi").decodeBytes(d) || "",
            interactiveAnnotations: r,
            scanLengths: g,
            scansSidecar: h,
            isViewOnce: R === true,
            thumbnailDirectPath: C,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(v),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(b)
        };
    }
    l.extractImageFieldsFromScheduledMsg = e;
}, 98);