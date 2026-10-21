__d("WASmaxInGroupsReportMessagesResponseServerError", [
    "WASmaxInGroupsBaseServerErrorMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsBaseServerErrorMixin").parseBaseServerErrorMixin(e, t);
        r.success;
        return r;
    }
    l.parseReportMessagesResponseServerError = e;
}, 98);