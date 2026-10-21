__d("JSSPLongTaskMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { performanceEntryList }) {
                if (performanceEntryList == null) {
                    return e;
                }
                const a = e;
                e.samples.forEach((e)=>{
                    performanceEntryList.forEach((t)=>{
                        if (t.entryType === "longtask") {
                            const n = t.startTime;
                            const r = t.startTime + t.duration;
                            if (e.timestamp >= n && e.timestamp <= r) {
                                o("JSSelfProfilerUtils").addMarkerToSample(e, "longtask");
                                e.longtaskDuration = t.duration;
                            }
                        }
                    });
                });
                return a;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPTraceBaseTransformer"));
    l.default = e;
}, 98);