__d("UserTimingUtils.shared", [
    "UserTimingUtils",
    "asyncToGeneratorRuntime",
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = typeof (e || (e = r("performance"))).mark === "function" && typeof (e || (e = r("performance"))).clearMarks === "function" && typeof (e || (e = r("performance"))).measure === "function" && typeof (e || (e = r("performance"))).clearMeasures === "function";
    let u = false;
    if (s && (e || (e = r("performance"))).mark != null) {
        const c = "__v3";
        const d = {};
        Object.defineProperty(d, "startTime", {
            get: function() {
                u = true;
            }
        });
        try {
            (e || (e = r("performance"))).mark(c, d);
        } catch (e) {} finally{
            (e || (e = r("performance"))).clearMarks(c);
        }
    }
    function m() {
        return u;
    }
    function p(t) {
        if (s) {
            (e || (e = r("performance"))).mark(t);
        }
    }
    function _(t, n, o = true) {
        if (s) {
            try {
                (e || (e = r("performance"))).measure(t, n);
            } catch (e) {}
            if (o) {
                (e || (e = r("performance"))).clearMarks(n);
            }
            (e || (e = r("performance"))).clearMeasures(t);
        }
    }
    function f(t) {
        if (s) {
            try {
                const n = (e || (e = r("performance"))).getEntriesByName(t, "mark");
                if (n != null && n.length > 0) {
                    return true;
                }
            } catch (e) {}
            return false;
        }
    }
    function g(t) {
        if (s) {
            try {
                (e || (e = r("performance"))).clearMarks(t);
            } catch (e) {}
        }
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = (e || (e = r("performance"))).now();
            const i = yield n();
            const l = e.now();
            o("UserTimingUtils").measureModern(t, {
                end: l,
                start: a
            });
            return i;
        });
        return y.apply(this, arguments);
    }
    function C(e, t, n) {}
    function b(e, t) {}
    function v(t, n, a) {
        const i = (e || (e = r("performance"))).now();
        n();
        const l = e.now();
        o("UserTimingUtils").measureModern(t, {
            end: l,
            start: i
        }, a);
    }
    l.isUserTimingV3Supported = m;
    l.measureStart = p;
    l.measureEnd = _;
    l.hasMark = f;
    l.clearMarks = g;
    l.asyncMeasure = h;
    l.measureReactCommit = C;
    l.measureReactPostCommit = b;
    l.measureCallback = v;
}, 98);