__d("WAWebVoipVideoFrameConsumedSignal", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set;
    function l(t) {
        e.add(t);
        return function() {
            e.delete(t);
        };
    }
    function s() {
        e.forEach((e)=>e());
    }
    i.subscribeToVideoFrameConsumed = l;
    i.notifyVideoFrameConsumed = s;
}, 66);