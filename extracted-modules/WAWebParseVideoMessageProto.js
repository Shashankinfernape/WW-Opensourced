__d("WAWebParseVideoMessageProto", [
    "WALongInt",
    "WATimeUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebIsAlbumV2ReceiverEnabled",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaProtoUtils",
    "WAWebMediaUrlAllowlist",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: n, messageAssociation: r, messageProtobuf: a, msgContext: i, msgMeta: l }) {
        const s = a.videoMessage;
        if (s != null) {
            if (o("WAWebMediaProtoUtils").isEmptyVideoMessage(s) && o("WAWebBotBaseGating").isLoadingMediaMessagesEnabled(n)) {
                return {
                    msgData: babelHelpers.extends({}, n, {
                        type: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
                        kind: o("WAWebMsgType").MsgKind.LoadingMedia,
                        subtype: "loading_video"
                    }),
                    contextInfo: s.contextInfo
                };
            }
            const { accessibilityLabel: u, annotations: c, caption: d, contextInfo: m, dashManifestUrl: p, directPath: _, gifAttribution: f, gifPlayback: g, height: h, interactiveAnnotations: y, jpegThumbnail: C, mediaKeyTimestamp: b, mimetype: v, seconds: S, staticUrl: R, streamingSidecar: L, thumbnailDirectPath: E, thumbnailEncSha256: k, thumbnailSha256: I, viewOnce: T, width: D } = s;
            const x = o("WAWebMediaMessageGetValidatedProperties").getValidatedMediaMessageProperties(s, n, i, o("WAWebMsgType").MSG_TYPE.VIDEO);
            const { fileEncSha256: $, fileLength: P, fileSha256: N, mediaKey: M, url: w } = x;
            const A = babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.VIDEO,
                kind: o("WAWebMsgType").MsgKind.Video,
                deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl(w),
                directPath: _,
                staticUrl: o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(R) ?? "",
                dashManifestUrl: p,
                mimetype: v,
                caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(d),
                filehash: o("WAWebE2EProtoParserApi").decodeBytes(N),
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes($),
                size: P,
                height: h,
                width: D,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(M),
                mediaKeyTimestamp: b != null ? o("WALongInt").numberOrThrowIfTooLarge(b) : o("WATimeUtils").unixTime(),
                duration: `${S || 0}`,
                body: o("WAWebE2EProtoParserApi").decodeBytes(C) || "",
                interactiveAnnotations: y != null && y.length > 0 ? y : c,
                isViewOnce: T === true,
                thumbnailDirectPath: E,
                thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(I),
                thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(k),
                isGif: g,
                gifAttribution: f,
                accessibilityLabel: u,
                streamingSidecar: L,
                statusMentioned: l?.statusMentioned
            });
            o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(A, s);
            if (r) {
                const F = o("WAWebAssociationProtoUtils").getValidatedAssociationFieldsFromProto(r, n, i);
                const { associationParentMsgKey: O, associationType: B, viewMode: W } = F;
                if (B === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM && !o("WAWebIsAlbumV2ReceiverEnabled").isAlbumV2MsgReceiverEnabled(n)) {
                    return {
                        msgData: babelHelpers.extends({}, n, {
                            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                            kind: o("WAWebMsgType").MsgKind.Unknown,
                            futureproofType: o("WAWebMsgType").MSG_TYPE.VIDEO,
                            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN
                        }),
                        contextInfo: m
                    };
                }
                const q = babelHelpers.extends({}, A, {
                    kind: "associatedVideo",
                    parentMsgKey: O,
                    associationType: B,
                    viewMode: W
                });
                return {
                    msgData: q,
                    contextInfo: m
                };
            }
            return {
                msgData: A,
                contextInfo: m
            };
        }
    }
    l.default = e;
}, 98);