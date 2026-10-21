__d("WASmaxInGroupsSetDescriptionResponseSuccess", [
    "WAResultOrError",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "t", 0, undefined);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                t: r.value
            }, a.value));
        }
        return a;
    }
    l.parseSetDescriptionResponseSuccess = e;
}, 98);