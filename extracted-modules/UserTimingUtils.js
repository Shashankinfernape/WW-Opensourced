__d("UserTimingUtils", [
    "UserTimingUtils.shared",
    "performance",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(e, t, n, a) {
        if (o("UserTimingUtils.shared").isUserTimingV3Supported()) {
            let i = t;
            if (n != null) {
                let devtools = t?.detail?.devtools ?? undefined;
                devtools = devtools ?? {
                    dataType: "track-entry",
                    track: n,
                    trackGroup: a
                };
                devtools.track = n;
                const detail = t?.detail ?? {
                    devtools
                };
                i = babelHelpers.extends({}, t, {
                    detail
                });
            }
            try {
                (s || (s = r("performance"))).measure(e, i);
                s.clearMeasures(e);
            } catch (e) {}
        }
    }
    function d(e, t, n, a) {
        if (o("UserTimingUtils.shared").isUserTimingV3Supported()) {
            let i = t;
            if (n != null) {
                i = {
                    startTime: t?.startTime ?? (u || (u = r("performanceNow")))(),
                    detail: babelHelpers.extends({}, t, {
                        devtools: {
                            dataType: "track-entry",
                            track: n,
                            trackGroup: a
                        }
                    })
                };
            }
            (s || (s = r("performance"))).mark(e, i);
            s.clearMarks(e);
        }
    }
    l.measureStart = (e = o("UserTimingUtils.shared")).measureStart;
    l.measureEnd = e.measureEnd;
    l.hasMark = e.hasMark;
    l.clearMarks = e.clearMarks;
    l.asyncMeasure = e.asyncMeasure;
    l.measureReactCommit = e.measureReactCommit;
    l.measureReactPostCommit = e.measureReactPostCommit;
    l.measureModern = c;
    l.markModern = d;
}, 98);