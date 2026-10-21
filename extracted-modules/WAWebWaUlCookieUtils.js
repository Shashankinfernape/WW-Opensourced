__d("WAWebWaUlCookieUtils", [
    "WAWebUserPrefsMeUser",
    "WAWebWaUlCookie"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
        if (e != null) {
            return null;
        }
        return r("WAWebWaUlCookie").waul_cookie;
    }
    l.getWaUlCookieIfLoggedOut = e;
}, 98);