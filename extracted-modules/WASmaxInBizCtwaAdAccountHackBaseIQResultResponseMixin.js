__d("WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin", [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountIQResultResponseMixin",
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
        const a = o("WASmaxInBizCtwaAdAccountIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                to: r.value
            }, a.value));
        }
        return a;
    }
    l.parseHackBaseIQResultResponseMixin = e;
}, 98);