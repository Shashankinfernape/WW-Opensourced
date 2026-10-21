__d("WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin", [
    "WAResultOrError",
    "WASmaxInGroupsGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup",
    "WASmaxInGroupsParentOrSubGroupMixinGroup",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsParentOrSubGroupMixinGroup").parseParentOrSubGroupMixinGroup(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup").parseGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                parentOrSubGroupMixinGroup: n.value,
                getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup: r.value
            });
        }
        return r;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").flattenedChildWithTag(t, "pictures");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").mapChildrenWithTag(n.value, "picture", 1, 1000, e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                picturesPicture: r.value
            });
        }
        return r;
    }
    l.parseGetGroupProfilePicturesProfilePicturesResponsePicturesPicture = e;
    l.parseGetGroupProfilePicturesProfilePicturesResponseMixin = s;
}, 98);