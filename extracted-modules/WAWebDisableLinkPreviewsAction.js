__d("WAWebDisableLinkPreviewsAction", [
    "WAWebDisableLinkPreviewsSync",
    "WAWebUserPrefsGeneral"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(disableLinkPreviews) {
        o("WAWebUserPrefsGeneral").setUserPrivacySettings(babelHelpers.extends({}, o("WAWebUserPrefsGeneral").getUserPrivacySettings(), {
            disableLinkPreviews
        }));
    }
    function s(t) {
        e(t);
        return r("WAWebDisableLinkPreviewsSync").sendMutation(t);
    }
    l.setDisableLinkPreviewsToUserPrefs = e;
    l.setDisableLinkPreviews = s;
}, 98);