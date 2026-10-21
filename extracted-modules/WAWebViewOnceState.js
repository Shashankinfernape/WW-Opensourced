__d("WAWebViewOnceState", [
    "WATimeUtils",
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebStateUtils"
], function(t, n, r, o, a, i, l) {
    const e = 1209600;
    function s(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (t != null) {
            return o("WAWebFrontendMsgGetters").getAsViewOnce(t.unsafe());
        }
        return null;
    }
    function u(e) {
        return !c(e) && !d(e);
    }
    function c(e) {
        return _(s(e)?.ack);
    }
    function d(e) {
        const t = s(e);
        if (t == null) {
            return false;
        }
        return f(t.ack, o("WAWebStateUtils").unproxy(t).t);
    }
    function m(e, t) {
        if (_(e)) {
            return "viewed";
        }
        if (f(e, t)) {
            return "expired";
        }
        return "unviewed";
    }
    function p(e, t) {
        return !_(e) && !f(e, t);
    }
    function _(e) {
        return e === o("WAWebAck").ACK.PLAYED;
    }
    function f(t, n) {
        return !_(t) && o("WATimeUtils").unixTime() - n >= e;
    }
    l.VIEW_ONCE_EXPIRE_AFTER = e;
    l.isUnviewed = u;
    l.isViewed = c;
    l.isExpired = d;
    l.getViewOnceStatusFor = m;
    l.isUnviewedFor = p;
    l.isViewedFor = _;
    l.isExpiredFor = f;
}, 98);