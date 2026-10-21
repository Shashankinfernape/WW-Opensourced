__d("WAWebSetUserDisclosureStageAction", [
    "WAWebPDFNLogging",
    "WAWebSetUserDisclosureStageJob",
    "WAWebWamEnumNoticeType",
    "WAWebWamEnumUserNoticeEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            try {
                const r = yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(e, t);
                if (r) {
                    o("WAWebPDFNLogging").logUserNoticeEvent({
                        noticeId: e,
                        noticeEvent: o("WAWebPDFNLogging").getNoticeEventFromDisclosureStage(t),
                        noticeContentVersion: n?.disclosureContentVersion,
                        noticeType: o("WAWebWamEnumNoticeType").NOTICE_TYPE.PDFN_DISCLOSURE
                    });
                }
                return r;
            } catch (error) {
                o("WAWebPDFNLogging").logUserNoticeEvent({
                    noticeId: e,
                    noticeContentVersion: n?.disclosureContentVersion,
                    noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.PDFN_ERROR_UNKNOWN,
                    noticeType: o("WAWebWamEnumNoticeType").NOTICE_TYPE.PDFN_DISCLOSURE
                });
                throw error;
            }
        });
        return s.apply(this, arguments);
    }
    l.updateUserDisclosureStateAction = e;
}, 98);