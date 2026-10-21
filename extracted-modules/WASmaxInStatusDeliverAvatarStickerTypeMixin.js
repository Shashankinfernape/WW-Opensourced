__d("WASmaxInStatusDeliverAvatarStickerTypeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "sticker_type", "avatar");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                stickerType: n.value
            });
        }
        return n;
    }
    l.parseAvatarStickerTypeMixin = e;
}, 98);