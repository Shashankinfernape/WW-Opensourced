__d("WASmaxInGroupsGetGroupProfilePicturesResponseSuccessGroupPictures", [
    "WAResultOrError",
    "WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInGroupsGetGroupProfilePicturesProfilePicturesResponseMixin").parseGetGroupProfilePicturesProfilePicturesResponseMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, a.value));
        }
        return a;
    }
    l.parseGetGroupProfilePicturesResponseSuccessGroupPictures = e;
}, 98);