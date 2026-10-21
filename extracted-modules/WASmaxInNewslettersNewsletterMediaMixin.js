__d("WASmaxInNewslettersNewsletterMediaMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeMediaMixin",
    "WASmaxInNewslettersEnums",
    "WASmaxInNewslettersMediaMetaMixin",
    "WASmaxInNewslettersMessageAssociationTypeMixin",
    "WASmaxInNewslettersPayloadMixin",
    "WASmaxInNewslettersWAMOSubMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(n.value, "mediatype", o("WASmaxInNewslettersEnums").ENUM_1PSTICKER_AUDIO_AVATARSTICKER_CATALOGLINK_COLLECTION_DOCUMENT_GENAISTICKER_GIF_IMAGE_MOTIONPHOTO_MOTIONVIDEO_PRODUCTLINK_PTT_PTV_STICKER_STICKERPACK_URL_USERCREATEDSTICKER_VCARD_VIDEO);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInNewslettersPayloadMixin").parsePayloadMixin(n.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInNewslettersContentTypeMediaMixin").parseContentTypeMediaMixin(e);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e);
        const s = o("WASmaxInNewslettersMessageAssociationTypeMixin").parseMessageAssociationTypeMixin(e);
        const u = o("WASmaxInNewslettersMediaMetaMixin").parseMediaMetaMixin(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({
            plaintextMediatype: r.value,
            plaintextPayloadMixin: a.value
        }, i.value, {
            wAMOSubMixin: l.success ? l.value : null,
            messageAssociationTypeMixin: s.success ? s.value : null,
            mediaMetaMixin: u.success ? u.value : null
        }));
    }
    l.parseNewsletterMediaMixin = e;
}, 98);