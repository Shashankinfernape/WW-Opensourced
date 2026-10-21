__d("WASmaxInPreKeysSetResponsePreKeySuccessVnameFailure", [
    "WAResultOrError",
    "WASmaxInPreKeysIQErrorResponseMixin",
    "WASmaxInPreKeysVnameFailures",
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
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "error");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrString(r.value, "text");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, r.value, "code", 207);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").attrIntRange(a.value, "code", 400, 599);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxInPreKeysIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxInPreKeysVnameFailures").parseVnameFailures(a.value);
        if (c.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorText: i.value,
                errorCode: l.value,
                errorErrorCode: s.value
            }, u.value, {
                errorErrorVnameFailures: c.value
            }));
        }
        return c;
    }
    l.parseSetResponsePreKeySuccessVnameFailure = e;
}, 98);