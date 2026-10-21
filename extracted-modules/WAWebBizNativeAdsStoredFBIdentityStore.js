__d("WAWebBizNativeAdsStoredFBIdentityStore", [
    "WAWebUserPrefsCTWA",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    let u = o("WAWebUserPrefsCTWA").getFBIdentity();
    const c = new Set;
    function d(e) {
        c.add(e);
        return function() {
            c.delete(e);
        };
    }
    function m() {
        u = o("WAWebUserPrefsCTWA").getFBIdentity();
        c.forEach((e)=>e());
    }
    function p(e) {
        o("WAWebUserPrefsCTWA").setFbIdentity(e);
        m();
    }
    function _() {
        o("WAWebUserPrefsCTWA").clearFBIdentity();
        m();
    }
    function f() {
        return u;
    }
    function useG() {
        return useSyncExternalStore(d, f);
    }
    l.storeFBIdentity = p;
    l.clearStoredFBIdentity = _;
    l.useStoredFBIdentity = useG;
}, 98);