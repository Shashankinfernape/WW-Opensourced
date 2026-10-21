__d("WASmaxInStatusDeliverStatusNewsletterMediaMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEnums",
    "WASmaxInStatusDeliverNewsletterPlaintextPayloadMixin",
    "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(n.value, "mediatype", o("WASmaxInStatusDeliverEnums").ENUM_AUDIO_GIF_IMAGE_VIDEO);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInStatusDeliverNewsletterPlaintextPayloadMixin").parseNewsletterPlaintextPayloadMixin(n.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInStatusDeliverStatusContentTypeMediaMixin").parseStatusContentTypeMediaMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                plaintextMediatype: r.value,
                plaintextNewsletterPlaintextPayloadMixin: a.value
            }, i.value));
        }
        return i;
    }
    l.parseStatusNewsletterMediaMixin = e;
}, 98);