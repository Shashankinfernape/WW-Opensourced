__d("WASmaxInMessageDeliverNewsletterMediaMixin", [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverMediaMetaMixin",
    "WASmaxInMessageDeliverMessageAssociationTypeMixin",
    "WASmaxInMessageDeliverPayloadMixin",
    "WASmaxInMessageDeliverWAMOSubMixin",
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
        const r = o("WASmaxParseUtils").attrStringEnum(n.value, "mediatype", o("WASmaxInMessageDeliverEnums").ENUM_1PSTICKER_AUDIO_AVATARSTICKER_CATALOGLINK_COLLECTION_DOCUMENT_GENAISTICKER_GIF_IMAGE_MOTIONPHOTO_MOTIONVIDEO_PRODUCTLINK_PTT_PTV_STICKER_STICKERPACK_URL_USERCREATEDSTICKER_VCARD_VIDEO);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInMessageDeliverPayloadMixin").parsePayloadMixin(n.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMessageDeliverContentTypeMediaMixin").parseContentTypeMediaMixin(e);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInMessageDeliverWAMOSubMixin").parseWAMOSubMixin(e);
        const s = o("WASmaxInMessageDeliverMessageAssociationTypeMixin").parseMessageAssociationTypeMixin(e);
        const u = o("WASmaxInMessageDeliverMediaMetaMixin").parseMediaMetaMixin(e);
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