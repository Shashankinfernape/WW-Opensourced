__d("WAWebCanonicalUtils", [
    "CurrentUser",
    "Promise",
    "WAResolvable"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = false;
    let u = new (o("WAResolvable")).Resolvable;
    function c(e) {
        s = e;
        if (e) {
            u.resolve();
        }
    }
    function d() {
        return s;
    }
    function m() {
        return r("CurrentUser").isLoggedIn() || s;
    }
    function p() {
        if (m()) {
            return (e || (e = n("Promise"))).resolve();
        }
        if (u.resolveWasCalled()) {
            u = new (o("WAResolvable")).Resolvable;
        }
        return u.promise;
    }
    let _ = false;
    function f() {
        return _;
    }
    function g(e) {
        _ = e;
    }
    let h = false;
    function y() {
        return h;
    }
    function C(e) {
        h = e;
    }
    l.setCanonicalTokenPresent = c;
    l.isCanonicalTokenPresent = d;
    l.isCanonicalPresent = m;
    l.waitForCanonicalPresent = p;
    l.isCanonicalReloadPending = f;
    l.setCanonicalReloadPending = g;
    l.isDebugForceTokenRefresh = y;
    l.setDebugForceTokenRefresh = C;
}, 98);