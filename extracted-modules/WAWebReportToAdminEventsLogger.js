__d("WAWebReportToAdminEventsLogger", [
    "WAWebReportToAdminEventsWamEvent"
], function(t, n, r, o, a, i, l) {
    function e({ groupId, reportToAdminInteraction }) {
        new (o("WAWebReportToAdminEventsWamEvent")).ReportToAdminEventsWamEvent({
            reportToAdminInteraction,
            rtaGroupId: groupId
        }).commit();
    }
    l.logRTAReportingEvent = e;
}, 98);