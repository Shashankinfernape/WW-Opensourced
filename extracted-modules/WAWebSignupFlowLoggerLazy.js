__d("WAWebSignupFlowLoggerLazy", [
    "JSResourceForInteraction",
    "WAWebABProps",
    "WAWebNoop",
    "WAWebWamEnumSignupUserJourneyOperation"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (o("WAWebABProps").getABPropConfigValue("inapp_signup_m1_logging_enabled")) {
            r("JSResourceForInteraction")("WAWebSignupFlowLogger").__setRef("WAWebSignupFlowLoggerLazy").load().then(({ logSignupFlowOp: n })=>{
                n(e);
            }).catch(r("WAWebNoop"));
        }
    }
    function s(t) {
        e(babelHelpers.extends({}, t, {
            operation: o("WAWebWamEnumSignupUserJourneyOperation").SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_WEBSITE_CTA_CLICKED
        }));
    }
    l.SIGNUP_USER_JOURNEY_OPERATION = o("WAWebWamEnumSignupUserJourneyOperation").SIGNUP_USER_JOURNEY_OPERATION;
    l.logSignupOp = e;
    l.logWebsiteCtaClicked = s;
}, 98);