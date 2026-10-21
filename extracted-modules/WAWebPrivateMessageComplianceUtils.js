__d("WAWebPrivateMessageComplianceUtils", [
    "fbt",
    "WAWebComplianceUtil",
    "WAWebContactFormsUrl",
    "WAWebReportGatingUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg, reportId }) {
        if (msg != null && reportId != null && o("WAWebReportGatingUtils").isAusOSAReportingEnabled()) {
            return {
                learnMoreUrl: o("WAWebContactFormsUrl").getReportContentAUSFormUrl(reportId, o("WAWebComplianceUtil").WA_CF_RES_OSA_ID, o("WAWebComplianceUtil").WA_CF_RES_OSA),
                bannerText: s._("You can send an additional report under the Australian Online Safety Act."),
                actionText: s._("Learn more"),
                showViewReport: false
            };
        }
        return null;
    }
    l.getPrivateMessageReportComplianceConfig = e;
}, 226);