__d("WAWebSendForAdminReviewUtils", [
    "WAWebDBGroupsGroupMetadata"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e.id, {
            lastReportToAdminTimestamp: null
        }).then(()=>{
            e.groupMetadata?.set("lastReportToAdminTimestamp", null);
        });
    }
    l.clearLastReportTimestamp = e;
}, 98);