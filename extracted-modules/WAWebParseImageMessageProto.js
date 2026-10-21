__d("WAWebParseImageMessageProto", [
    "WALongInt",
    "WATimeUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBotBaseGating",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebIsAlbumV2ReceiverEnabled",
    "WAWebIsPhotoPollReceiverEnabled",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMediaProtoUtils",
    "WAWebMediaUrlAllowlist",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: n, messageAssociation: r, messageProtobuf: a, msgContext: i, msgMeta: l }) {
        const s = a.imageMessage;
        if (s != null) {
            if (o("WAWebMediaProtoUtils").isEmptyImageMessage(s) && o("WAWebBotBaseGating").isLoadingMediaMessagesEnabled(n)) {
                return {
                    msgData: babelHelpers.extends({}, n, {
                        type: o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA,
                        kind: o("WAWebMsgType").MsgKind.LoadingMedia,
                        subtype: "loading_image"
                    }),
                    contextInfo: s.contextInfo
                };
            }
            const { annotations: u, caption: c, contextInfo: d, directPath: m, height: p, jpegThumbnail: _, mediaKeyTimestamp: f, mimetype: g, qrUrl: h, scanLengths: y, scansSidecar: C, staticUrl: b, thumbnailDirectPath: v, thumbnailEncSha256: S, thumbnailSha256: R, viewOnce: L, width: E } = s;
            const k = o("WAWebMediaMessageGetValidatedProperties").getValidatedMediaMessageProperties(s, n, i, o("WAWebMsgType").MSG_TYPE.IMAGE);
            const { fileEncSha256: I, fileLength: T, fileSha256: D, mediaKey: x, url: $ } = k;
            const P = babelHelpers.extends({}, n, {
                type: o("WAWebMsgType").MSG_TYPE.IMAGE,
                kind: o("WAWebMsgType").MsgKind.Image,
                deprecatedMms3Url: o("WAWebE2EProtoParserApi").decodeUrl($),
                directPath: m || "",
                staticUrl: o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(b) ?? "",
                qrUrl: h,
                mimetype: g || "",
                caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(c),
                filehash: o("WAWebE2EProtoParserApi").decodeBytes(D),
                encFilehash: o("WAWebE2EProtoParserApi").decodeBytes(I),
                size: T,
                height: p || 0,
                width: E || 0,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(x),
                mediaKeyTimestamp: f != null ? o("WALongInt").numberOrThrowIfTooLarge(f) : o("WATimeUtils").unixTime(),
                body: o("WAWebE2EProtoParserApi").decodeBytes(_) || "",
                interactiveAnnotations: u,
                scanLengths: y,
                scansSidecar: C,
                isViewOnce: L === true,
                thumbnailDirectPath: v,
                thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(R),
                thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(S),
                statusMentioned: l?.statusMentioned
            });
            o("WAWebE2EProtoParserApi").validateRequiredMediaProperties(P, s);
            if (r) {
                const N = o("WAWebAssociationProtoUtils").getValidatedAssociationFieldsFromProto(r, n, i);
                const { associationParentMsgKey: M, associationType: w, viewMode: A } = N;
                if (w === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL && !o("WAWebIsPhotoPollReceiverEnabled").isPhotoPollReceiverEnabled(n)) {
                    return {
                        msgData: babelHelpers.extends({}, n, {
                            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                            kind: o("WAWebMsgType").MsgKind.Unknown,
                            futureproofType: o("WAWebMsgType").MSG_TYPE.IMAGE
                        }),
                        contextInfo: d
                    };
                }
                if (w === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM && !o("WAWebIsAlbumV2ReceiverEnabled").isAlbumV2MsgReceiverEnabled(n)) {
                    return {
                        msgData: babelHelpers.extends({}, n, {
                            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                            kind: o("WAWebMsgType").MsgKind.Unknown,
                            futureproofType: o("WAWebMsgType").MSG_TYPE.IMAGE,
                            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN
                        }),
                        contextInfo: d
                    };
                }
                const F = babelHelpers.extends({}, P, {
                    kind: "associatedImage",
                    parentMsgKey: M,
                    associationType: w,
                    viewMode: A
                });
                return {
                    msgData: F,
                    contextInfo: d
                };
            }
            return {
                msgData: P,
                contextInfo: d
            };
        }
    }
    l.default = e;
}, 98);