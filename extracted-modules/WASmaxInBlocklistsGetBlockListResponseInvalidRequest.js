__d("WASmaxInBlocklistsGetBlockListResponseInvalidRequest", [
    "WAResultOrError",
    "WASmaxInBlocklistsGetBlocklistErrors",
    "WASmaxInBlocklistsIQErrorResponseMixin",
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
        const a = o("WASmaxInBlocklistsIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInBlocklistsGetBlocklistErrors").parseGetBlocklistErrors(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorGetBlocklistErrors: i.value
            }));
        }
        return i;
    }
    l.parseGetBlockListResponseInvalidRequest = e;
}, 98);