__d("WASmaxInNewslettersMessageAssociationTypeMixin", [
    "WAResultOrError",
    "WASmaxInNewslettersEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "message");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(n.value, "message_association_type", o("WASmaxInNewslettersEnums").ENUM_AV1VIDEODUALUPLOAD_HDIMAGEDUALUPLOAD_HDVIDEODUALUPLOAD_HEVCVIDEODUALUPLOAD_MEDIAPOLL_MOTIONPHOTO_POLLADDOPTION_STICKERANNOTATION);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaMessageAssociationType: r.value
            });
        }
        return r;
    }
    l.parseMessageAssociationTypeMixin = e;
}, 98);