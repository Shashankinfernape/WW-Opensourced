__d("WASmaxInNewslettersSubscribeToLiveUpdatesResponseServerError", [
    "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin").parseInternalServerErrorIQErrorResponseMixin(e, t);
        r.success;
        return r;
    }
    l.parseSubscribeToLiveUpdatesResponseServerError = e;
}, 98);