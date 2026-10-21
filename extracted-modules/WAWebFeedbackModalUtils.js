__d("WAWebFeedbackModalUtils", [
    "WAWebFeedbackIntroNuxModalLoadable",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSendFeedbackModal.react",
    "WAWebUserPrefsNuxPreferences",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(bugReportingEntryPoint) {
        if (o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.FEEDBACK_INTRO)) {
            const Component = o("WAWebFeedbackIntroNuxModalLoadable").FeedbackIntroNuxModalLoadable;
            o("WAWebModalManager").ModalManager.open(<Component onAcknowledge={function() {
                o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSendFeedbackModal.react"), {
                    bugReportingEntryPoint
                }));
            }}/>);
        } else {
            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSendFeedbackModal.react"), {
                bugReportingEntryPoint
            }));
        }
    }
    l.openFeedbackModal = u;
}, 98);