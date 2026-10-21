__d("WAWebVoipJoinWithoutCamera", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    let l = null;
    function s(callId) {
        e = {
            callId,
            isStart: false
        };
    }
    function u(callId, n) {
        l = n ? callId : null;
        if (n) {
            e = {
                callId,
                isStart: true
            };
        } else if (e?.isStart === true) {
            e = null;
        }
    }
    function c(t) {
        const n = e;
        if (n == null || (t != null ? t !== n.callId : !n.isStart)) {
            return false;
        }
        e = null;
        return true;
    }
    function d(e) {
        return e != null && e === l;
    }
    function m(t) {
        if (e != null && (e.callId === t || e.isStart)) {
            e = null;
        }
        p(t);
    }
    function p(e) {
        if (l === e) {
            l = null;
        }
    }
    function _() {
        e = null;
        l = null;
    }
    i.markJoinWithoutCamera = s;
    i.setStartWithoutCamera = u;
    i.consumeJoinWithoutCamera = c;
    i.isCallStartedWithoutCamera = d;
    i.clearJoinWithoutCamera = m;
    i.resetJoinWithoutCameraForTesting = _;
}, 66);