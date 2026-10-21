__d("WASmaxOutGroupsReportMessagesRequest", [
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const e_reportMessageId = e.reportMessageId;
        const n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("reports", null, o("WASmaxJsx").smax("report", {
            message_id: o("WAWap").STANZA_ID(e_reportMessageId)
        }))), e);
        return n;
    }
    l.makeReportMessagesRequest = e;
}, 98);