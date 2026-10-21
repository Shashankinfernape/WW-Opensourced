__d("WASmaxInGroupsProfilePictureTypeMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStringEnum(e, "type", o("WASmaxInGroupsEnums").ENUM_IMAGE_PREVIEW);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                type: n.value
            });
        }
        return n;
    }
    l.parseProfilePictureTypeMixin = e;
}, 98);