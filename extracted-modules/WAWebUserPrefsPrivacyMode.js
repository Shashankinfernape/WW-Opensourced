__d("WAWebUserPrefsPrivacyMode", [
    "$InternalEnum",
    "WAWebPrivacyModeBlurConfig",
    "WAWebPrivacyModeGating",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const s = n("$InternalEnum").Mirrored([
        "PrivacyScreenEnabled",
        "BlurPresetGeneral",
        "BlurPresetMedia"
    ]);
    function u() {
        if (o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
            return r("WAWebUserPrefsStore").getUser(s.PrivacyScreenEnabled) === true;
        }
        return false;
    }
    function c(e) {
        r("WAWebUserPrefsStore").setUser(s.PrivacyScreenEnabled, e);
    }
    const d = {
        [o("WAWebPrivacyModeBlurConfig").BlurCategory.General]: s.BlurPresetGeneral,
        [o("WAWebPrivacyModeBlurConfig").BlurCategory.Media]: s.BlurPresetMedia
    };
    function m(e) {
        if (!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) {
            return o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(e);
        }
        const t = r("WAWebUserPrefsStore").getUser(d[e]);
        if (t != null && typeof t === "string") {
            const n = o("WAWebPrivacyModeBlurConfig").BlurPreset.cast(t);
            if (n != null) {
                return n;
            }
        }
        return o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(e);
    }
    function p(e, t) {
        r("WAWebUserPrefsStore").setUser(d[e], t);
    }
    l.isPrivacyScreenEnabled = u;
    l.setPrivacyScreenEnabled = c;
    l.getBlurPreset = m;
    l.setBlurPreset = p;
}, 98);