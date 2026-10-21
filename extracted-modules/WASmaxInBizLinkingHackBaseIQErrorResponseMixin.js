__d("WASmaxInBizLinkingHackBaseIQErrorResponseMixin", [
    "WAResultOrError",
    "WASmaxInBizLinkingIQErrorResponseMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "to");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInBizLinkingIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                to: r.value
            }, a.value));
        }
        return a;
    }
    l.parseHackBaseIQErrorResponseMixin = e;
}, 98);