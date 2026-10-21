__d("WAWebNotificationsMissedCallTracker", [], function(t, n, r, o, a, i) {
    const e = 300;
    let l = null;
    function s(e) {
        l = e;
    }
    function u(t) {
        const n = l;
        l = null;
        return n != null && t - n <= e;
    }
    function c() {
        l = null;
    }
    i.markCallMissedWhileHidden = s;
    i.consumeRecentMissedCallWhileHidden = u;
    i.resetForTesting = c;
}, 66);