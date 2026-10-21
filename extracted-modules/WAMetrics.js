__d("WAMetrics", [
    "Promise",
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        const t = o("WATimeUtils").performanceAbsoluteNow();
        return new (e || (e = n("Promise")))(function(e) {
            setTimeout(()=>{
                e(o("WATimeUtils").performanceAbsoluteNow() - t);
            }, 0);
        });
    }
    l.getEventLoopDelay = s;
}, 98);