__d("WAWebOutContactServerSentInviteEligibility", [
    "WALogger",
    "WAWebABProps",
    "WAWebL10NCountryCodes",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1;
    const u = "US";
    function c(e) {
        return d(e) && C();
    }
    function d(e) {
        return _() && h() && y(e);
    }
    let m = null;
    function p() {
        m = null;
    }
    function _() {
        if (m != null) {
            return m;
        }
        const t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        if (t == null) {
            return false;
        }
        const n = v(t);
        m = n;
        return n;
    }
    let f = null;
    function g() {
        f = null;
    }
    function h() {
        if (f != null) {
            return f;
        }
        const e = o("WAWebUserPrefsGeneral").getPushname();
        if (e == null || e === "") {
            return false;
        }
        const t = b(e);
        if (t) {
            f = t;
        }
        return t;
    }
    function y(e) {
        return v(e);
    }
    function C() {
        return o("WAWebABProps").getABPropConfigValue("server_sent_invites_web_enabled") === s;
    }
    function b(e) {
        for(let t = 0; t < e.length; t++){
            const n = e.charCodeAt(t);
            if (n < 32 || n > 126) {
                return false;
            }
        }
        return true;
    }
    function v(t) {
        try {
            return o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t) === u;
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "isServerSentInviteEligible failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("out-contact-server-sent-invite-eligibility-failed");
            return false;
        }
    }
    l.isServerSentInviteEligible = c;
    l.areServerSentInvitePrerequisitesMet = d;
    l.clearIsServerSentInviteSenderEligibleCacheForTest = p;
    l.isServerSentInviteSenderEligible = _;
    l.clearIsServerSentInviteSenderPushNameEligibleCacheForTest = g;
    l.isServerSentInviteSenderPushNameEligible = h;
    l.isServerSentInviteReceiverEligible = y;
    l.isServerSentInviteAbPropEnabled = C;
}, 98);