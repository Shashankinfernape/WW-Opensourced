__d("NestedTimeRange", [
    "SimpleHook",
    "performance",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = new (o("SimpleHook")).SimpleHook;
    const c = new (o("SimpleHook")).SimpleHook;
    const d = "/";
    function m(e, t) {
        return `${e}${d}${t}`;
    }
    class p {
        constructor(e, t = null){
            this.$3 = 0;
            this.$1 = e;
            this.$2 = t;
        }
        isRunning() {
            return this.$3 > 0;
        }
        fullname() {
            if (this.$2 !== null) {
                return m(this.$2.fullname(), this.$1);
            }
            return this.$1;
        }
        start(n = (e || (e = r("performanceAbsoluteNow")))()) {
            if (this.$3 === 0) {
                this.$2?.start(n);
                this.__onStart(n);
            }
            ++this.$3;
            return n;
        }
        __onStart(t) {
            u.call(this, t);
        }
        stop(n = (e || (e = r("performanceAbsoluteNow")))()) {
            --this.$3;
            if (this.$3 === 0) {
                this.__onStop(n);
                this.$2?.stop(n);
            }
            return n;
        }
        __onStop(t) {
            c.call(this, t);
        }
    }
    function _() {
        if ((s || (s = r("performance"))).mark && (s || (s = r("performance"))).measure) {
            u.add(function(e, t) {
                (s || (s = r("performance"))).mark(`${e.fullname()}_start`);
            });
            c.add(function(e, t) {
                (s || (s = r("performance"))).measure(e.fullname(), `${e.fullname()}_start`);
            });
        }
    }
    l.OnRangeStart = u;
    l.OnRangeStop = c;
    l.TIME_RANGE_LEVEL_SEPARATOR = d;
    l.rangeFullName = m;
    l.NestedTimeRange = p;
    l.enableDevConsoleTimeline = _;
}, 98);