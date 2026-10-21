__d("WAWebCallInfoLoggingUtils", [
    "WAWebVoipGatingUtils",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumCallSizeBucket",
    "WAWebWamEnumCallSizeType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType(e)) {
            if (e.isCallLink === true) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_CALL_LINK;
            }
            if (e.isAdHocGroupCall) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_AHGC;
            }
            if (e.isGroup) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_LGC;
            }
            return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_1X1;
        }
        return u(e);
    }
    function s(e) {
        if (o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType(e)) {
            if (e.isCallLink === true) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_CALL_LINK_MINI_CONTACT_SHEET;
            }
            if (e.isAdHocGroupCall) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_AHGC_MINI_CONTACT_SHEET;
            }
            if (e.isGroup) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_LGC_MINI_CONTACT_SHEET;
            }
            return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO_1X1;
        }
        return u(e);
    }
    function u({ isAdHocGroupCall, isCallLink, isGroup }) {
        const a = isCallLink === true || isAdHocGroupCall || isGroup;
        if (a) {
            return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CALL_INFO;
        }
        return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_INFO;
    }
    function c(e) {
        if (e.isCallLink === true) {
            return o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE.CALL_LINK;
        }
        if (e.isAdHocGroupCall) {
            return o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE.ADHOC;
        }
        if (e.isGroup) {
            return o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE.LGC;
        }
        return o("WAWebWamEnumCallSizeType").CALL_SIZE_TYPE.ONE_TO_ONE;
    }
    function d(e) {
        if (e < 2) {
            return null;
        }
        if (e <= 8) {
            return o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET.SMALL;
        }
        if (e <= 16) {
            return o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET.MEDIUM;
        }
        if (e <= 32) {
            return o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET.LARGE;
        }
        return o("WAWebWamEnumCallSizeBucket").CALL_SIZE_BUCKET.XLARGE;
    }
    l.getCallInfoHeaderCallFromUI = e;
    l.getCallInfoParticipantMiniContactSheetCallFromUI = s;
    l.getCallSizeTypeForCallInfo = c;
    l.getCallGroupSizeBucket = d;
}, 98);