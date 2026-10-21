__d("WASmaxOutGroupsGetGroupProfilePicturesProfilePicturesRequestMixin", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsParentOrSubGroupMixinGroup",
    "WASmaxOutGroupsProfilePictureIdMixin",
    "WASmaxOutGroupsProfilePictureQueryMixin",
    "WASmaxOutGroupsProfilePictureTypeMixin",
    "WASmaxOutGroupsSubGroupHintMixin"
], function(t, n, r, o, a, i, l) {
    function e({ profilePictureIdMixinArgs, profilePictureTypeMixinArgs, profilePictureQueryMixinArgs, parentOrSubGroupMixinGroupArgs }) {
        const i = o("WASmaxOutGroupsParentOrSubGroupMixinGroup").mergeParentOrSubGroupMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsProfilePictureQueryMixin").mergeProfilePictureQueryMixin, o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsProfilePictureTypeMixin").mergeProfilePictureTypeMixin, o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsProfilePictureIdMixin").mergeProfilePictureIdMixin, o("WASmaxJsx").smax("picture", null), profilePictureIdMixinArgs), profilePictureTypeMixinArgs), profilePictureQueryMixinArgs), parentOrSubGroupMixinGroupArgs);
        return i;
    }
    function s({ pictureArgs, subGroupHintMixinArgs }) {
        const a = o("WASmaxJsx").smax("smax$any", null, o("WASmaxMixins").optionalMerge(o("WASmaxOutGroupsSubGroupHintMixin").mergeSubGroupHintMixin, o("WASmaxJsx").smax("pictures", null, o("WASmaxChildren").REPEATED_CHILD(e, pictureArgs, 1, 1000)), subGroupHintMixinArgs));
        return a;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeGetGroupProfilePicturesProfilePicturesRequestPicturesPicture = e;
    l.mergeGetGroupProfilePicturesProfilePicturesRequestMixin = u;
}, 98);