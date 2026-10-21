__d("WAWebUserPrefsIsLoggedIn", [
    "WAWebUserPrefsMultiDevice"
], function(t, n, r, o, a, i, l) {
    let e = false;
    function s() {
        return o("WAWebUserPrefsMultiDevice").isRegistered() && u();
    }
    function u() {
        return e;
    }
    function c() {
        e = true;
    }
    l.isLoggedIn = s;
    l.setIsConnectedAsRegistered = c;
}, 98);