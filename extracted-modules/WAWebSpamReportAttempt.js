__d("WAWebSpamReportAttempt", [
    "WAErrors",
    "WASmaxParsingFailure",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebSpamReportPerfWamEvent",
    "WAWebWamEnumReportStatus",
    "WAWebWiTraceId"
], function(t, n, r, o, a, i, l) {
    const e = Object.freeze({
        SUCCESS: 0,
        DELIVERY_FAILURE: -1,
        NETWORK_UNAVAILABLE: -2,
        UNKNOWN: -3,
        CANCELLED: -4
    });
    function s(reportSpamFlow, reportAttemptCount, r) {
        if (!o("WAWebABProps").getABPropConfigValue("enable_spam_reporting_pre_logging")) {
            return r(undefined);
        }
        const wiTraceId = o("WAWebWiTraceId").generateWiTraceId();
        const i = {
            reportDurationMs: 0,
            reportSpamFlow,
            reportAttemptCount,
            wiTraceId
        };
        new (o("WAWebSpamReportPerfWamEvent")).SpamReportPerfWamEvent(babelHelpers.extends({}, i, {
            reportStatus: o("WAWebWamEnumReportStatus").REPORT_STATUS.STARTED
        })).commit();
        const l = new (o("WAWebSpamReportPerfWamEvent")).SpamReportPerfWamEvent(babelHelpers.extends({}, i, {
            reportStatus: o("WAWebWamEnumReportStatus").REPORT_STATUS.FAILURE
        }));
        l.startReportDurationMs();
        const s = r(wiTraceId);
        s.then(()=>c(l, o("WAWebWamEnumReportStatus").REPORT_STATUS.SUCCESS, e.SUCCESS), (e)=>c(l, o("WAWebWamEnumReportStatus").REPORT_STATUS.FAILURE, u(e)));
        return s;
    }
    function u(t) {
        if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
            return t.statusCode;
        }
        if (t instanceof o("WAErrors").Offline) {
            return e.NETWORK_UNAVAILABLE;
        }
        if (t instanceof o("WAErrors").Disconnected || t instanceof o("WASmaxParsingFailure").SmaxParsingFailure) {
            return e.DELIVERY_FAILURE;
        }
        if (t instanceof o("WAErrors").Aborted) {
            return e.CANCELLED;
        }
        return e.UNKNOWN;
    }
    function c(e, reportStatus, reportErrorCode) {
        e.markReportDurationMs();
        e.set({
            reportStatus,
            reportErrorCode
        });
        e.commit();
    }
    l.SpamReportErrorCode = e;
    l.sendWithSpamReportLogging = s;
    l.getReportErrorCode = u;
}, 98);