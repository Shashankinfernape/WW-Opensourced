__d("ScheduledServerJSDefine", [
    "JSScheduler",
    "ServerJSDefine"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n) {
        t.forEach((t)=>{
            let a = t;
            if (n != null) {
                a = [].concat(t, [
                    n
                ]);
            }
            (e || (e = o("JSScheduler"))).deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function() {
                r("ServerJSDefine").handleDefine.apply(null, a);
            });
        });
    }
    l.handleDefines = s;
}, 98);