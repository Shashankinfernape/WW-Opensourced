__d("WAWebPDFNLogging", [
    "WAWebPDFNTypes",
    "WAWebUserNoticeWamEvent",
    "WAWebWamEnumUserNoticeEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ noticeContentVersion, noticeEvent, noticeId, noticeType }) {
        const i = new (o("WAWebUserNoticeWamEvent")).UserNoticeWamEvent({
            userNoticeId: noticeId,
            userNoticeContentVersion: noticeContentVersion,
            userNoticeEvent: noticeEvent,
            noticeType
        });
        i.commit();
    }
    function s(e) {
        switch(e){
            case o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED:
                return o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.PDFN_ACCEPTED;
            case o("WAWebPDFNTypes").DISCLOSURE_STAGE.OK:
                return o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.PDFN_OK;
            case o("WAWebPDFNTypes").DISCLOSURE_STAGE.SHOWN_0:
                return o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.PDFN_SHOWN_0;
            case o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN:
                return o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.PDFN_SOFT_OPT_IN;
        }
    }
    l.logUserNoticeEvent = e;
    l.getNoticeEventFromDisclosureStage = s;
}, 98);