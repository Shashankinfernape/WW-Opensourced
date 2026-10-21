__d("WAWebVoipMicrophoneRefusalState", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set;
    let l = null;
    function s(e) {
        if (l !== e) {
            l = e;
            m();
        }
    }
    function u(e) {
        if (l === e) {
            l = null;
            m();
        }
    }
    function c() {
        return l;
    }
    function d(t) {
        e.add(t);
        return function() {
            e.delete(t);
        };
    }
    function m() {
        for (const t of e){
            t();
        }
    }
    function p() {
        e.clear();
        l = null;
    }
    i.reportMicrophoneRefused = s;
    i.clearMicrophoneRefused = u;
    i.getMicrophoneRefusedCallId = c;
    i.subscribeToMicrophoneRefused = d;
    i.resetMicrophoneRefusedForTesting = p;
}, 66);