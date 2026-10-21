__d("WAWebUtmBizUtils", [
    "WAWebABProps",
    "WAWebMsgGetters",
    "WAWebStateUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return e.contact.isEnterprise && !c(t) && !s(e, t);
    }
    function s(e, t) {
        const n = u(e);
        if (n == null || n.t == null) {
            return false;
        }
        const r = n.t * 1000;
        return r > t.addedTime;
    }
    function u(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        for(let n = t.msgs.length - 1; n >= 0; n--){
            const r = t.msgs.at(n);
            if (r && !o("WAWebMsgGetters").getIsSentByMe(r)) {
                return r;
            }
        }
    }
    function c(e) {
        const t = Date.now();
        const n = o("WAWebABProps").getABPropConfigValue("utm_tracking_expiration_hours") * 60 * 60 * 1000;
        return e.addedTime + n <= t;
    }
    l.isUtmValid = e;
    l.hasUtmExpired = c;
}, 98);