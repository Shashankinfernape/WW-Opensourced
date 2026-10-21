__d("WAWebParseExtendedTextMessageProtoUtils", [
    "WALongInt",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return !!(e != null && e.matchedText) || !!(e != null && e.description) || !!(e != null && e.title);
    }
    function s({ baseMessage: t, messageProtobuf: n, msgMeta: r }) {
        const a = n.extendedTextMessage;
        if (a != null) {
            const i = o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType;
            let l;
            if (a?.font != null) {
                switch(a.font){
                    case i.SYSTEM:
                    case i.SYSTEM_TEXT:
                    case i.FB_SCRIPT:
                    case i.SYSTEM_BOLD:
                    case i.MORNINGBREEZE_REGULAR:
                    case i.CALISTOGA_REGULAR:
                    case i.EXO2_EXTRABOLD:
                    case i.COURIERPRIME_BOLD:
                        l = a.font;
                        break;
                }
            }
            const s = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.CHAT,
                kind: o("WAWebMsgType").MsgKind.Chat,
                body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(a?.text || ""),
                matchedText: a?.matchedText,
                description: a?.description,
                title: a?.title,
                thumbnail: o("WAWebE2EProtoParserApi").decodeBytes(a?.jpegThumbnail) || "",
                richPreviewType: a?.previewType,
                doNotPlayInline: a?.doNotPlayInline,
                textColor: a?.textArgb,
                backgroundColor: a?.backgroundArgb,
                mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(a?.mediaKey),
                mediaKeyTimestamp: a?.mediaKeyTimestamp != null ? o("WALongInt").numberOrThrowIfTooLarge(a.mediaKeyTimestamp) : t.mediaKeyTimestamp,
                thumbnailDirectPath: a?.thumbnailDirectPath,
                thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(a?.thumbnailSha256),
                thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(a?.thumbnailEncSha256),
                thumbnailHeight: a?.thumbnailHeight,
                thumbnailWidth: a?.thumbnailWidth,
                inviteGrpType: a?.inviteLinkGroupTypeV2 != null ? o("WAWebE2EProtoParserApi").parseInviteGrpType(a?.inviteLinkGroupTypeV2) : t.inviteGrpType,
                font: l ?? t.font,
                paymentLinkMetadata: a?.paymentLinkMetadata,
                faviconMMSMetadata: u(a?.faviconMmsMetadata, t.mediaKeyTimestamp),
                statusMentioned: r?.statusMentioned
            });
            return {
                msgData: s,
                contextInfo: a?.contextInfo
            };
        }
    }
    function u(e, t) {
        if (e == null) {
            return null;
        }
        return {
            mediaKey: o("WAWebE2EProtoParserApi").decodeBytes(e.mediaKey),
            mediaKeyTimestamp: e.mediaKeyTimestamp != null ? o("WALongInt").numberOrThrowIfTooLarge(e.mediaKeyTimestamp) : t,
            thumbnailDirectPath: e.thumbnailDirectPath,
            thumbnailSha256: o("WAWebE2EProtoParserApi").decodeBytes(e.thumbnailSha256),
            thumbnailEncSha256: o("WAWebE2EProtoParserApi").decodeBytes(e.thumbnailEncSha256),
            thumbnail: null
        };
    }
    l.isUrlExtendedTextMessage = e;
    l.parseExtendedTextMessageProto = s;
    l.parseFaviconMMSMetadata = u;
}, 98);