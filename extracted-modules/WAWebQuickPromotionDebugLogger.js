__d("WAWebQuickPromotionDebugLogger", [
    "Random",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    const e = [];
    let s = "";
    let u = "";
    function c() {
        return o("Random").random().toString(36).slice(2, 10);
    }
    function d(e) {
        if (e === "12015") {
            return o("WAWebABProps").getABPropConfigValue("smb_qp_web_debug_recunit") === true;
        }
        return false;
    }
    function m(e) {
        u = e;
        s = c();
        return s;
    }
    function p(t, n) {
        if (d(u)) {
            e.push({
                ts: Date.now(),
                sessionId: s,
                event: t,
                data: n
            });
        }
    }
    function _() {
        return e.slice();
    }
    l.isDebugEnabledForSurface = d;
    l.startQPDebugSession = m;
    l.qpLog = p;
    l.getQPDebugLogs = _;
}, 98);