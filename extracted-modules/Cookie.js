__d("Cookie", [
    "CookieConsent",
    "CookieCore",
    "InitialCookieConsent",
    "ODS"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        if ((c || (c = r("CookieConsent"))).hasFirstPartyConsent()) {
            return true;
        }
        (s || (s = o("ODS"))).bumpEntityKey(798, "defer_cookies", `set.${e}`);
        return false;
    }
    function m() {
        return !(u || (u = r("InitialCookieConsent"))).noCookies;
    }
    function set(e, t) {
        if (!(!m() || !d(e))) {
            o("CookieCore").set(e, t);
        }
    }
    function setWithoutCheckingUserConsent_DANGEROUS(e, t) {
        if (m()) {
            o("CookieCore").set(e, t);
        }
    }
    function setWithoutChecks(e, t, n, r, a, i) {
        if (!(!m() || !d(e))) {
            o("CookieCore").setWithoutChecks(e, t, n, r, a, null, i);
        }
    }
    const g = {
        clear: (e = o("CookieCore")).clear,
        get: e.get,
        set,
        setIfFirstPartyContext: e.setIfFirstPartyContext,
        setWithoutCheckingUserConsent_DANGEROUS,
        setWithoutChecks,
        setWithoutChecksIfFirstPartyContext: e.setWithoutChecksIfFirstPartyContext
    };
    l.default = g;
}, 98);