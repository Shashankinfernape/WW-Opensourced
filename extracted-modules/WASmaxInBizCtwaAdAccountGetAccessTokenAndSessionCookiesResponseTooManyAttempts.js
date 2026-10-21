__d("WASmaxInBizCtwaAdAccountGetAccessTokenAndSessionCookiesResponseTooManyAttempts", [
    "WAResultOrError",
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
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "code", "431");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "text", "TOO_MANY_ATTEMPTS");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e, t);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorCode: a.value,
                errorText: i.value
            }, l.value));
        }
        return l;
    }
    l.parseGetAccessTokenAndSessionCookiesResponseTooManyAttempts = e;
}, 98);