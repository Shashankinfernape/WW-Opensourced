__d("WAWebExtractVideoFieldsFromScheduledMsg", [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ videoMessage: t }) {
        if (t == null) {
            return null;
        }
        const { accessibilityLabel: n, annotations: r, caption: a, directPath: i, fileEncSha256: l, fileLength: s, fileSha256: u, gifAttribution: c, gifPlayback: d, height: m, interactiveAnnotations: p, jpegThumbnail: _, mediaKey: f, mediaKeyTimestamp: g, mimetype: h, seconds: y, staticUrl: C, streamingSidecar: b, thumbnailDirectPath: v, thumbnailEncSha256: S, thumbnailSha256: R, url: L, viewOnce: E, width: k } = t;
        return {
            type: o("WAWebMsgType").MSG_TYPE.VIDEO,
            kind: o("WAWebMsgType").MsgKind.Video,
            deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(L),
            directPath: i || "",
            staticUrl: C || "",
            mimetype: h || "",
            caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(a),
            filehash: o("WAWebE2EProtoParserApi").decodeBytes(u),
            encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(l),
            size: s != null ? o("WALongInt").numberOrThrowIfTooLarge(s) : void 0,
            height: m || 0,
            width: k || 0,
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(f),
            mediaKeyTimestamp: g != null ? o("WALongInt").numberOrThrowIfTooLarge(g) : o("WATimeUtils").unixTime(),
            duration: `${y || 0}`,
            body: o("WAWebE2EProtoParserApi").decodeBytes(_) || "",
            interactiveAnnotations: p != null && p.length > 0 ? p : r,
            isViewOnce: E === true,
            thumbnailDirectPath: v,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(R),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(S),
            isGif: d,
            gifAttribution: c,
            accessibilityLabel: n,
            streamingSidecar: b
        };
    }
    l.extractVideoFieldsFromScheduledMsg = e;
}, 98);