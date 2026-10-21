__d("VisibilityAPI", [
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    let u;
    const c = self.document?.visibilityState !== undefined || self.document?.hidden !== undefined;
    function d() {
        if (c) {
            if (document.visibilityState !== undefined) {
                return document.visibilityState === "hidden";
            }
            return document.hidden;
        }
        return false;
    }
    function m(e) {
        const t = function(n) {
            const o = n?.timeStamp ?? (u || (u = r("performanceNow")))();
            e(o);
        };
        document.addEventListener("visibilitychange", t);
        return t;
    }
    function p(e) {
        document.removeEventListener("visibilitychange", e);
    }
    function _() {
        return 0;
    }
    l.canUseVisibilityAPI = c;
    l.isVisibilityHidden = d;
    l.onVisibilityChange = m;
    l.removeVisibiltyChangeListener = p;
    l.getEarliestHiddenStartTime = _;
}, 98);