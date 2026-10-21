__d("WAWebGenerateExtendedTextMessageProtoUtils", [
    "WATypeUtils",
    "WAWebE2EProtoUtils",
    "WAWebGroupType",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    function e({ contextInfo, json }) {
        const r = json.faviconMMSMetadata != null;
        return {
            extendedTextMessage: {
                text: json.body,
                matchedText: json.matchedText,
                description: json.description,
                title: json.title,
                jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(json.thumbnail),
                previewType: json.richPreviewType,
                contextInfo,
                mediaKey: o("WAWebE2EProtoUtils").encodeBytes(json.mediaKey),
                mediaKeyTimestamp: o("WATypeUtils").isNumber(json.mediaKeyTimestamp) ? json.mediaKeyTimestamp : undefined,
                thumbnailDirectPath: json.thumbnailDirectPath,
                thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(json.thumbnailSha256),
                thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(json.thumbnailEncSha256),
                thumbnailHeight: json.thumbnailHeight,
                thumbnailWidth: json.thumbnailWidth,
                inviteLinkGroupTypeV2: s(json.inviteGrpType),
                backgroundArgb: json.backgroundColor,
                font: json.font,
                paymentLinkMetadata: json.paymentLinkMetadata,
                faviconMmsMetadata: r ? {
                    mediaKey: o("WAWebE2EProtoUtils").encodeBytes(json.faviconMMSMetadata.mediaKey),
                    mediaKeyTimestamp: o("WATypeUtils").isNumber(json.faviconMMSMetadata.mediaKeyTimestamp) ? json.faviconMMSMetadata.mediaKeyTimestamp : undefined,
                    thumbnailDirectPath: json.faviconMMSMetadata.thumbnailDirectPath,
                    thumbnailSha256: o("WAWebE2EProtoUtils").encodeBytes(json.faviconMMSMetadata.thumbnailSha256),
                    thumbnailEncSha256: o("WAWebE2EProtoUtils").encodeBytes(json.faviconMMSMetadata.thumbnailEncSha256)
                } : undefined
            }
        };
    }
    function s(inviteGrpType) {
        switch(inviteGrpType){
            case o("WAWebGroupType").GroupType.COMMUNITY:
                return o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$InviteLinkGroupType.PARENT;
            case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
                return o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$InviteLinkGroupType.SUB;
            case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                return o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT_SUB;
            default:
                return o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT;
        }
    }
    l.default = e;
}, 98);