__d("WASmaxInWaffleWFPingResponseSuccess", [
    "WAResultOrError",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "ping_interval");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").contentInt(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInWaffleIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                pingIntervalElementValue: a.value
            }, i.value));
        }
        return i;
    }
    l.parseWFPingResponseSuccess = e;
}, 98);