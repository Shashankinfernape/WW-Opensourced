__d("WASmaxOutGroupsProfilePictureTypeMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ pictureType }) {
        const n = o("WASmaxJsx").smax("picture", {
            type: o("WAWap").CUSTOM_STRING(pictureType)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeProfilePictureTypeMixin = s;
}, 98);