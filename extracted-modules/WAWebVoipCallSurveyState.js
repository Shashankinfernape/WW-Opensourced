__d("WAWebVoipCallSurveyState", [
    "WALogger",
    "WAWebABProps",
    "WAWebUserPrefsVoip"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m = null;
    let p = false;
    function _() {
        if (!p) {
            m = o("WAWebUserPrefsVoip").getLastCallRatingTime();
            p = true;
        }
        return m;
    }
    function f(t) {
        if (t < 0) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[shouldShowSurveyBasedOnInterval] disabled by stack (user=",
                ")"
            ])), t);
            return false;
        }
        const n = o("WAWebABProps").getABPropConfigValue("new_end_call_survey_pop_up_user_interval_s");
        const r = n != null && n >= 0 ? n : t;
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[shouldShowSurveyBasedOnInterval] abProp=",
            " user=",
            " eff=",
            ""
        ])), n, t, r);
        const a = Math.floor(Date.now() / 1000);
        const i = _();
        if (i == null) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[shouldShowSurveyBasedOnInterval] no prev, allow int=",
                ""
            ])), r);
            return true;
        }
        const l = a - i;
        const d = l >= r;
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[shouldShowSurveyBasedOnInterval] last=",
            " since=",
            " int=",
            " show=",
            ""
        ])), i, l, r, d);
        return d;
    }
    function g() {
        const e = Math.floor(Date.now() / 1000);
        m = e;
        o("WAWebUserPrefsVoip").setLastCallRatingTime(e);
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "[recordSurveyShown] ",
            ""
        ])), e);
    }
    l.shouldShowSurveyBasedOnInterval = f;
    l.recordSurveyShown = g;
}, 98);