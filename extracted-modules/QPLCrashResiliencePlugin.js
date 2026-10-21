__d("QPLCrashResiliencePlugin", [
    "FBLogger",
    "QPLEvent",
    "QPLMarkerMap",
    "QuickPerformanceLogger",
    "RSTLogForCrash",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        if (r("gkx")("11050") !== false) {
            const e = new m().getListener();
            (s || (s = r("QuickPerformanceLogger"))).addListener(e);
        }
    }
    const totalLimit = 100;
    const perMarkerLimit = 10;
    class m {
        constructor(){
            var e = this;
            this.$2 = false;
            this.$1 = new (r("QPLMarkerMap"))({
                totalLimit,
                perMarkerLimit
            });
            o("RSTLogForCrash").logForCrashReadyPromise.getPromise().then(()=>{
                e.$2 = true;
                e.$3();
            }).catch(()=>{});
        }
        $3() {
            const e = this;
            (s || (s = r("QuickPerformanceLogger"))).activeMarkers.forEach((t, n)=>{
                t.forEach((t, r)=>{
                    if (t.isCrashResilient) {
                        e.$1.set(n, r, 1);
                    }
                });
            });
            this.$4();
        }
        $4() {
            if (this.$2) {
                let e = this.$1.toString();
                if (!o("RSTLogForCrash").isValidStringValue(e)) {
                    e = "{}";
                    r("FBLogger")("qpl-crash-resilience-js").warn("Exceeded RST log limit");
                }
                o("RSTLogForCrash").logForCrash("active_qpls", e, o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE, {
                    immediateFlush: true
                });
            }
        }
        getListener() {
            const e = this;
            const t = this;
            return {
                onMarkerStarted: function(n, r, o, a) {
                    t.onMarkerStarted(n, r, o, a);
                },
                onMarkerEnd: function(n, r, o, a, i) {
                    return e.onMarkerEnd(n, r, o, a, i);
                },
                onMarkerDrop: function(n, r, o, a) {
                    t.onMarkerDrop(n, r, o, a);
                }
            };
        }
        onMarkerStarted(n, r, a, i) {
            const l = i.isCrashResilient ?? false;
            if (l) {
                this.$1.set((e || (e = o("QPLEvent"))).getMarkerId(n), r, 1);
                this.$4();
            }
        }
        onMarkerEnd(n, r, a, i, l) {
            const s = l.isCrashResilient ?? false;
            if (!(!l.passesSampling || !s)) {
                this.$1.delete((e || (e = o("QPLEvent"))).getMarkerId(r), a);
                this.$4();
            }
        }
        onMarkerDrop(n, r, a, i) {
            const l = i.isCrashResilient ?? false;
            if (!(!i.passesSampling || !l)) {
                this.$1.delete((e || (e = o("QPLEvent"))).getMarkerId(n), r);
                this.$4();
            }
        }
    }
    l.startQPLCrashResilience = u;
}, 98);