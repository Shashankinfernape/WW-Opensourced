__d("WAWebPtvParsePtvMessageProto", [
    "WALongInt",
    "WATimeUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaUrlAllowlist",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: n, messageProtobuf: r, msgContext: a }) {
        const i = r.ptvMessage;
        if (i != null) {
            const { accessibilityLabel: l, annotations: s, caption: u, contextInfo: c, directPath: d, gifAttribution: m, gifPlayback: p, height: _, jpegThumbnail: f, mediaKeyTimestamp: g, mimetype: h, seconds: y, staticUrl: C, streamingSidecar: b, thumbnailDirectPath: v, thumbnailEncSha256: S, thumbnailSha256: R, viewOnce: L, width: E } = i;
            const k = o("WAWebMediaMessageGetValidatedProperties").getValidatedMediaMessageProperties(i, n, a, o("WAWebMsgType").MSG_TYPE.PTV);
            const { fileEncSha256: I, fileLength: T, fileSha256: D, mediaKey: x, url: $ } = k;
            const P = babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.PTV,
                kind: o("WAWebMsgType").MsgKind.Ptv,
                deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl($),
                directPath: d,
                staticUrl: o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(C) ?? "",
                mimetype: h,
                caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(u),
                filehash: o("WAWebE2EProtoParserApi").decodeBytes(D),
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(I),
                size: o("WALongInt").numberOrThrowIfTooLarge(T || 0),
                height: _,
                width: E,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(x),
                mediaKeyTimestamp: g != null ? o("WALongInt").numberOrThrowIfTooLarge(g) : o("WATimeUtils").unixTime(),
                duration: `${y || 0}`,
                body: o("WAWebE2EProtoParserApi").decodeBytes(f) || "",
                interactiveAnnotations: s,
                isViewOnce: L === true,
                thumbnailDirectPath: v,
                thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(R),
                thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(S),
                isGif: p,
                gifAttribution: m,
                accessibilityLabel: l,
                streamingSidecar: b
            });
            o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(P, i);
            return {
                msgData: P,
                contextInfo: c
            };
        }
    }
    l.default = e;
}, 98);