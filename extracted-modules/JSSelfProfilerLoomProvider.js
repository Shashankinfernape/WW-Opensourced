__d("JSSelfProfilerLoomProvider", [
    "JSSPSetting",
    "JSSelfProfiler",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e(e) {
            this.$5 = false;
            this.$5 = false;
            if (this.$5) {
                this.$4 = performance.now();
                return;
            }
            this.$1 = e;
            const a = o("JSSelfProfilerUtils").getProfilerInitConfig();
            const { maxBufferSize, sampleInterval } = a;
            const s = this.$1?.triggerInfo ?? {};
            this.$2 = r("JSSelfProfiler").startRecording(sampleInterval, maxBufferSize, {
                triggerInfo: babelHelpers.extends({}, s),
                annotations: [
                    "fast-profiler"
                ]
            });
            const u = Math.min(sampleInterval * 10, 100);
            if (u > sampleInterval) {
                this.$3 = r("JSSelfProfiler").startRecording(u, maxBufferSize * 2, {
                    triggerInfo: babelHelpers.extends({}, s),
                    annotations: [
                        "slow-profiler"
                    ]
                });
            }
            this.$4 = performance.now();
        }
        const e_prototype = e.prototype;
        e_prototype.loomTraceWillEnd = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!this.$5) {
                    const e = this.$1;
                    const t = this.$2;
                    const n = this.$3;
                    if (e == null) {
                        yield t?.abort();
                        yield n?.abort();
                    } else {
                        const r = performance.now() - this.$4;
                        const a = r > o("JSSPSetting").slowProfilerSpan && this.$3 != null;
                        const i = a ? n : t;
                        const l = a ? t : n;
                        yield l?.abort();
                        e.jsSelfProfilerData = yield i?.stopRecording();
                        i?.logStats();
                    }
                    this.$1 = null;
                    this.$2 = null;
                    this.$3 = null;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    const s = {
        loomProviderId: "JSSelfProfiler",
        isSupported: function() {
            return r("JSSelfProfiler").isSupported();
        },
        getInstance: function(n) {
            return new e(n);
        }
    };
    l.default = s;
}, 98);