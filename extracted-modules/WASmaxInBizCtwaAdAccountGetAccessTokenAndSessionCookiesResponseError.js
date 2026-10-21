__d("WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseError", [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountCommonAdAccountErrors",
    "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
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
        const a = o("WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInBizCtwaAdAccountCommonAdAccountErrors").parseCommonAdAccountErrors(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorCommonAdAccountErrors: i.value
            }));
        }
        return i;
    }
    l.parseGetAccessTokenAndSessionCookiesResponseError = e;
}, 98);