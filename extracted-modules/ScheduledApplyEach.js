__d("ScheduledApplyEach", [
    "JSScheduler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n, r) {
        return t.map((t)=>{
            (e || (e = o("JSScheduler"))).deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function() {
                n.apply(r, t);
            });
        });
    }
    l.default = s;
}, 98);