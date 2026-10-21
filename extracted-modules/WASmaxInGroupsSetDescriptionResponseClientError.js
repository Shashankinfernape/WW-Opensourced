__d("WASmaxInGroupsSetDescriptionResponseClientError", [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorResponseMixin",
    "WASmaxInGroupsSetDescriptionClientErrors",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInGroupsIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInGroupsSetDescriptionClientErrors").parseSetDescriptionClientErrors(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorSetDescriptionClientErrors: i.value
            }));
        }
        return i;
    }
    l.parseSetDescriptionResponseClientError = e;
}, 98);