__d("WASmaxInGroupsProfilePictureUrlOrBlobResponseMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsProfilePictureBlobResponseMixin",
    "WASmaxInGroupsProfilePictureUrlResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsProfilePictureUrlResponseMixin").parseProfilePictureUrlResponseMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ProfilePictureUrlResponse",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsProfilePictureBlobResponseMixin").parseProfilePictureBlobResponseMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "ProfilePictureBlobResponse",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ProfilePictureUrlResponse",
            "ProfilePictureBlobResponse"
        ], [
            t,
            n
        ]);
    }
    l.parseProfilePictureUrlOrBlobResponseMixinGroup = e;
}, 98);