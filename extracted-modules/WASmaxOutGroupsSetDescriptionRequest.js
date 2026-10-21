__d("WASmaxOutGroupsSetDescriptionRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ bodyElementValue }) {
        const n = o("WASmaxJsx").smax("body", null, bodyElementValue);
        return n;
    }
    function s(t) {
        const { bodyArgs, descriptionId, descriptionPrev, hasDescriptionDeleteTrue } = t;
        const l = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("description", {
            id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, descriptionId),
            prev: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, descriptionPrev),
            delete: o("WASmaxAttrs").OPTIONAL_LITERAL("true", hasDescriptionDeleteTrue)
        }, o("WASmaxChildren").OPTIONAL_CHILD(e, bodyArgs))), t);
        return l;
    }
    l.makeSetDescriptionRequestDescriptionBody = e;
    l.makeSetDescriptionRequest = s;
}, 98);