__d("FalcoLoggerInternalState", [
    "AnalyticsCoreData",
    "BaseEventEmitter",
    "FalcoUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t() {
            let t;
            this.queuesMap = new Map;
            const n = (t = o("FalcoUtils")).identityToString((e || (e = r("AnalyticsCoreData"))).identity);
            this.observable = new (r("BaseEventEmitter"));
            this.logQueue = o("FalcoUtils").createQueue("falco_queue_log", n, this.queuesMap);
            this.logImmediatelyQueue = o("FalcoUtils").createQueue("falco_queue_immediately", n, this.queuesMap);
            this.logCriticalQueue = o("FalcoUtils").createQueue("falco_queue_critical", n, this.queuesMap);
        }
        t.getInstance = function() {
            if (!t.$1) {
                t.$1 = new t;
            }
            return t.$1;
        };
        return t;
    })();
    s.$1 = null;
    l.default = s;
}, 98);