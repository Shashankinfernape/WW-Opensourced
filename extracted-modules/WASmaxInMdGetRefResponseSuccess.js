__d("WASmaxInMdGetRefResponseSuccess", [
    "WAResultOrError",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "ref");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").contentBytes(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                refElementValue: a.value
            }, i.value));
        }
        return i;
    }
    l.parseGetRefResponseSuccess = e;
}, 98);