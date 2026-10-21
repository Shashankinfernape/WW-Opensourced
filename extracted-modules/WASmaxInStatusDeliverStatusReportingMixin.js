__d("WASmaxInStatusDeliverStatusReportingMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverClientReportingTokenMixin",
    "WASmaxInStatusDeliverServerReportingTokenMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInStatusDeliverServerReportingTokenMixin").parseServerReportingTokenMixin(e);
        const r = o("WASmaxInStatusDeliverClientReportingTokenMixin").parseClientReportingTokenMixin(e);
        return o("WAResultOrError").makeResult({
            serverReportingTokenMixin: n.success ? n.value : null,
            clientReportingTokenMixin: r.success ? r.value : null
        });
    }
    l.parseStatusReportingMixin = e;
}, 98);