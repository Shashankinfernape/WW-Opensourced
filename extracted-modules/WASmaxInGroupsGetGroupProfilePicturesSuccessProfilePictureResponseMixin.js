__d("WASmaxInGroupsGetGroupProfilePicturesSuccessProfilePictureResponseMixin", [
    "WAResultOrError",
    "WASmaxInGroupsProfilePictureIdMixin",
    "WASmaxInGroupsProfilePictureTypeMixin",
    "WASmaxInGroupsProfilePictureUrlOrBlobResponseMixinGroup",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsProfilePictureIdMixin").parseProfilePictureIdMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsProfilePictureTypeMixin").parseProfilePictureTypeMixin(e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInGroupsProfilePictureUrlOrBlobResponseMixinGroup").parseProfilePictureUrlOrBlobResponseMixinGroup(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, r.value, {
            profilePictureUrlOrBlobResponseMixinGroup: a.success ? a.value : null
        }));
    }
    l.parseGetGroupProfilePicturesSuccessProfilePictureResponseMixin = e;
}, 98);