__d("WAWebBrowserMetricsTracker", [
    "WALogger",
    "WAShiftTimer",
    "WAWebAppTracker",
    "WAWebWamMemoryStat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 5000;
    const sampleInterval = 1000;
    const _ = 0.9;
    const f = [
        "nominal",
        "fair",
        "serious",
        "critical"
    ];
    const g = (()=>{
        function t(e) {
            this.pressureObserver = null;
            this.pressureObserverPromise = null;
            this.pressureStartTime = 0;
            this.lastPressureChangeTime = 0;
            this.currentPressureState = "nominal";
            this.pressureTimeBuckets = {
                nominal: 0,
                fair: 0,
                serious: 0,
                critical: 0
            };
            this.wasCpuPressureHigh = false;
            this.memoryTimer = null;
            this.peakUsedMb = 0;
            this.minUsedMb = Infinity;
            this.aggregatedUsedMb = 0;
            this.memorySampleCount = 0;
            this.lastLimitMb = 0;
            this.lastTotalMb = 0;
            this.wasMemoryPressureHigh = false;
            this.active = false;
            this.logTag = e;
        }
        const t_prototype = t.prototype;
        t_prototype.start = function() {
            if (this.active) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " already active, skipping start"
                ])), this.logTag);
                return;
            }
            this.active = true;
            this.resetState();
            const t = self.performance.now();
            this.pressureStartTime = t;
            this.lastPressureChangeTime = t;
            this.pressureObserverPromise = this.startPressureObserver();
            this.sampleMemory();
            this.scheduleMemorySampling();
            const n = this.getCapabilities();
            const r = n.browserCpuPressureSupported.toString();
            const a = n.browserMemorySupported.toString();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " started (cpu=",
                ", mem=",
                ")"
            ])), this.logTag, r, a);
        };
        t_prototype.stop = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.active) {
                    this.active = false;
                    if (this.pressureObserverPromise != null) {
                        yield this.pressureObserverPromise;
                        this.pressureObserverPromise = null;
                    }
                    this.stopPressureObserver();
                    if (this.memoryTimer != null) {
                        this.memoryTimer.cancel();
                        this.memoryTimer = null;
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.reset = function() {
            const e = self.performance.now();
            for (const t of f){
                this.pressureTimeBuckets[t] = 0;
            }
            this.pressureStartTime = e;
            this.lastPressureChangeTime = e;
            this.peakUsedMb = 0;
            this.minUsedMb = Infinity;
            this.aggregatedUsedMb = 0;
            this.memorySampleCount = 0;
        };
        t_prototype.isActive = function() {
            return this.active;
        };
        t_prototype.getCapabilities = function() {
            return {
                browserCpuPressureSupported: this.canUsePressureObserver(),
                browserMemorySupported: o("WAWebWamMemoryStat").isPerformanceMemoryApiSupported()
            };
        };
        t_prototype.sampleMemory = function() {
            const e = o("WAWebWamMemoryStat").readMemoryInfo();
            if (e != null) {
                const t = e.usedJsHeapSize;
                this.peakUsedMb = Math.max(this.peakUsedMb, t);
                this.minUsedMb = Math.min(this.minUsedMb, t);
                this.aggregatedUsedMb += t;
                this.memorySampleCount++;
                this.lastLimitMb = e.jsHeapSizeLimit;
                this.lastTotalMb = e.totalJsHeapSize;
                const n = e.jsHeapSizeLimit > 0 && t / e.jsHeapSizeLimit >= _;
                if (n && !this.wasMemoryPressureHigh) {
                    o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.MemPressureHigh);
                }
                this.wasMemoryPressureHigh = n;
            }
        };
        t_prototype.finalizePressurePcts = function() {
            const e = self.performance.now();
            this.pressureTimeBuckets[this.currentPressureState] += e - this.lastPressureChangeTime;
            const t = e - this.pressureStartTime;
            if (t <= 0) {
                return {
                    nominalPct: null,
                    fairPct: null,
                    seriousPct: null,
                    criticalPct: null
                };
            }
            const pressureTimeBuckets = this.pressureTimeBuckets;
            return {
                nominalPct: Math.round(pressureTimeBuckets.nominal / t * 100),
                fairPct: Math.round(pressureTimeBuckets.fair / t * 100),
                seriousPct: Math.round(pressureTimeBuckets.serious / t * 100),
                criticalPct: Math.round(pressureTimeBuckets.critical / t * 100)
            };
        };
        t_prototype.finalizeMemoryStats = function() {
            if (this.memorySampleCount === 0) {
                return {
                    avgUsedMb: null,
                    peakUsedMb: null,
                    minUsedMb: null,
                    limitMb: null,
                    totalMb: null
                };
            }
            return {
                avgUsedMb: Math.round(this.aggregatedUsedMb / this.memorySampleCount),
                peakUsedMb: this.peakUsedMb,
                minUsedMb: this.minUsedMb,
                limitMb: this.lastLimitMb,
                totalMb: this.lastTotalMb
            };
        };
        t_prototype.canUsePressureObserver = function() {
            if (self.PressureObserver == null) {
                return false;
            }
            const t = document.featurePolicy ?? document.permissionsPolicy;
            if (t != null && typeof t.allowsFeature === "function") {
                return t.allowsFeature("compute-pressure");
            }
            return true;
        };
        t_prototype.scheduleMemorySampling = function() {
            const e = this;
            this.memoryTimer = new (o("WAShiftTimer")).ShiftTimer(function() {
                e.sampleMemory();
                if (e.active) {
                    e.scheduleMemorySampling();
                }
            });
            this.memoryTimer.onOrAfter(m);
        };
        t_prototype.onPressureChange = function(t) {
            const e = self.performance.now();
            this.pressureTimeBuckets[this.currentPressureState] += e - this.lastPressureChangeTime;
            this.currentPressureState = t;
            this.lastPressureChangeTime = e;
            const n = t === "serious" || t === "critical";
            if (n && !this.wasCpuPressureHigh) {
                o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.CpuPressureCritical);
            }
            this.wasCpuPressureHigh = n;
        };
        t_prototype.startPressureObserver = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                const self_PressureObserver = self.PressureObserver;
                if (!(self_PressureObserver == null || !this.canUsePressureObserver())) {
                    try {
                        const n = new self_PressureObserver(function(t) {
                            for (const n of t){
                                e.onPressureChange(n.state);
                            }
                        });
                        yield n.observe("cpu", {
                            sampleInterval
                        });
                        if (!this.active) {
                            n.disconnect();
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                " PressureObserver started but already stopped, disconnecting"
                            ])), this.logTag);
                            return;
                        }
                        this.pressureObserver = n;
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " PressureObserver started"
                        ])), this.logTag);
                    } catch (error) {
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " PressureObserver failed to start: ",
                            ""
                        ])), this.logTag, error);
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.stopPressureObserver = function() {
            if (this.pressureObserver != null) {
                this.pressureObserver.disconnect();
                this.pressureObserver = null;
            }
        };
        t_prototype.resetState = function() {
            this.pressureObserver = null;
            this.pressureObserverPromise = null;
            this.pressureStartTime = 0;
            this.lastPressureChangeTime = 0;
            this.currentPressureState = "nominal";
            this.wasCpuPressureHigh = false;
            for (const e of f){
                this.pressureTimeBuckets[e] = 0;
            }
            this.memoryTimer = null;
            this.peakUsedMb = 0;
            this.minUsedMb = Infinity;
            this.aggregatedUsedMb = 0;
            this.memorySampleCount = 0;
            this.lastLimitMb = 0;
            this.lastTotalMb = 0;
            this.wasMemoryPressureHigh = false;
        };
        return t;
    })();
    l.default = g;
}, 98);