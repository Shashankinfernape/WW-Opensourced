__d("WASmaxInGroupsGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup", [
    "WAResultOrError",
    "WASmaxInGroupsGetGroupProfilePicturesPartialProfilePictureResponseMixin",
    "WASmaxInGroupsGetGroupProfilePicturesSuccessProfilePictureResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsGetGroupProfilePicturesSuccessProfilePictureResponseMixin").parseGetGroupProfilePicturesSuccessProfilePictureResponseMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "GetGroupProfilePicturesSuccessProfilePictureResponse",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsGetGroupProfilePicturesPartialProfilePictureResponseMixin").parseGetGroupProfilePicturesPartialProfilePictureResponseMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "GetGroupProfilePicturesPartialProfilePictureResponse",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "SuccessProfilePictureResponse",
            "PartialProfilePictureResponse"
        ], [
            t,
            n
        ]);
    }
    l.parseGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup = e;
}, 98);