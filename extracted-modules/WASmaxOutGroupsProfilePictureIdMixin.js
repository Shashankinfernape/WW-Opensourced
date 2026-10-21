__d("WASmaxOutGroupsProfilePictureIdMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ pictureId }) {
        const n = o("WASmaxJsx").smax("picture", {
            id: o("WAWap").CUSTOM_STRING(pictureId)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeProfilePictureIdMixin = s;
}, 98);