__d("WAWebVoipBrowserMuteState", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set;
    let l = false;
    let s = null;
    let u = false;
    function c(t) {
        if (t !== l) {
            l = t;
            for (const n of e){
                n(t);
            }
        }
    }
    function d(t) {
        e.add(t);
        if (l) {
            t(true);
        }
        return function() {
            e.delete(t);
        };
    }
    function m(e) {
        if (s === e) {
            return false;
        }
        s = e;
        return true;
    }
    function p(e) {
        u = e;
    }
    function _() {
        return u;
    }
    function f() {
        e.clear();
        l = false;
        s = null;
        u = false;
    }
    i.reportBrowserMuteSuspected = c;
    i.subscribeToBrowserMuteSuspected = d;
    i.claimBrowserMuteToast = m;
    i.recordPlaybackBrowserMuted = p;
    i.wasLastPlaybackBrowserMuted = _;
    i.resetBrowserMuteStateForTesting = f;
}, 66);