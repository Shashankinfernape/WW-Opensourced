__d("WASmaxInNewslettersSubscribeToLiveUpdatesResponseSuccess", [
    "WAResultOrError",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "live_updates");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrIntRange(r.value, "duration", 30, 600);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInNewslettersIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                liveUpdatesDuration: a.value
            }, i.value));
        }
        return i;
    }
    l.parseSubscribeToLiveUpdatesResponseSuccess = e;
}, 98);