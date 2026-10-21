__d("WAWebHasBlockingCallState", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipPostCallSurveyVisibility",
    "WAWebVoipUiPopoutWindowPortalContainer.react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        const activeCall = r("WAWebCallCollection").activeCall;
        const lastActiveCall = r("WAWebCallCollection").lastActiveCall;
        if (activeCall != null) {
            return true;
        }
        const a = lastActiveCall?.shouldShowPostCallSurvey === true && lastActiveCall.postCallSurveyInteracted !== true;
        if (a) {
            const i = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
            if (i) {
                if (!o("WAWebVoipUiPopoutWindowPortalContainer.react").isPopoutWindowAlive()) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[hasBlockingCallState] popout stale, clearing survey"
                    ])));
                    if (lastActiveCall != null) {
                        lastActiveCall.shouldShowPostCallSurvey = false;
                    }
                }
                return false;
            }
            return o("WAWebVoipPostCallSurveyVisibility").getIsPostCallSurveyVisible();
        }
        return false;
    }
    l.default = s;
}, 98);