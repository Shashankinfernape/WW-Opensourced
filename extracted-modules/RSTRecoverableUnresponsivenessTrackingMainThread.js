__d("RSTRecoverableUnresponsivenessTrackingMainThread", [
    "RSTConfig",
    "one-trace",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set([
        "INP",
        "LONGTASK"
    ]);
    function u() {
        r("one-trace").subscribe("trace-end", function(e) {
            if (s.has(e.traceType)) {
                d.getInstance().addEvent(babelHelpers.extends({}, e));
            }
        });
    }
    function c() {
        return d.getInstance().getStats();
    }
    var d = (()=>{
        function t() {
            this.WINDOW_MS = r("RSTConfig").TRACE_STATS_WINDOW_SIZE_MS;
            this.MAX_EVENTS = r("RSTConfig").TRACE_STATS_MAX_QUEUE_SIZE;
            this.eventQueue = [];
        }
        t.getInstance = function() {
            if (!t.instance) {
                t.instance = new t;
            }
            return t.instance;
        };
        const t_prototype = t.prototype;
        t_prototype.addEvent = function(t) {
            if (!(t.startTime == null || t.endTime == null)) {
                const e = {
                    traceType: t.traceType,
                    startTime: t.startTime,
                    duration: t.endTime - t.startTime,
                    endTime: t.endTime
                };
                this.eventQueue.push(e);
                this.cleanupOldEvents();
                if (this.eventQueue.length >= this.MAX_EVENTS) {
                    this.eventQueue.shift();
                }
            }
        };
        t_prototype.getStats = function() {
            this.cleanupOldEvents();
            const e = {};
            this.eventQueue.forEach((t)=>{
                if (t.traceType in e) {
                    e[t.traceType].count++;
                    e[t.traceType].totalDurationMs += t.duration;
                } else {
                    e[t.traceType] = {
                        count: 1,
                        totalDurationMs: t.duration,
                        averageDurationMs: 0
                    };
                }
            });
            for (const t of Object.keys(e)){
                const n = e[t].totalDurationMs / e[t].count;
                e[t].averageDurationMs = Math.floor(n);
            }
            return e;
        };
        t_prototype.cleanupOldEvents = function() {
            const t = (e || (e = r("performanceNow")))();
            while(this.eventQueue.length > 0){
                const n = this.eventQueue[0];
                if (n.endTime >= t - this.WINDOW_MS) {
                    break;
                }
                this.eventQueue.shift();
            }
        };
        return t;
    })();
    d.instance = null;
    l.start = u;
    l.getStats = c;
}, 98);