__d("JSSelfProfiler", [
    "CurrentUser",
    "FBLogger",
    "JSSPConfigInit",
    "JSSPSetting",
    "JSSelfProfilerConfig.experimental",
    "JSSelfProfilerProbe",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "requireDeferred",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("LogJsspStatsFalcoEvent").__setRef("JSSelfProfiler");
    const s = r("justknobx")._("4881");
    const u = (()=>{
        function t(e, n, o) {
            this.$1 = e;
            this.$8 = o ?? r("uuidv4")();
            this.$5 = n;
            this.$4 = false;
            this.$9 = [];
            if (t.defaultTransformerRegistered === false) {
                r("JSSPConfigInit").run();
                t.defaultTransformerRegistered = true;
            }
        }
        t.registerDataCollector = function(n, r, o = false) {
            const e = r ?? n.constructor.name;
            if (!t.traceDataCollectors.has(e) || o) {
                t.traceDataCollectors.set(e, n);
            }
        };
        t.registerTraceTransformer = function(n, r, o = false) {
            const e = r ?? n.constructor.name;
            if (!t.traceTransformers.has(e) || o) {
                t.traceTransformers.set(e, n);
            }
        };
        t.shouldProfile = function(t) {
            if (!s) {
                return false;
            }
            if (r("JSSelfProfilerConfig.experimental").ENABLE_FELAB_INTERACTION_FILTERING && t != null && window.__felab_context) {
                const e = window.__felab_context;
                const n = e.qplMarkerIds || [];
                return Array.isArray(e.qplMarkerIds) && n.includes(t);
            }
            return true;
        };
        t.startRecording = function(n, a, i = null) {
            if (!t.isSupported()) {
                const l = new Error("JS Self Profiling is not supported");
                l.stack;
                throw l;
            }
            if (!t.shouldProfile(i?.triggerInfo?.qpl_marker_id) || t.instanceCount > o("JSSPSetting").maxConcurrentProfilerInstance) {
                return null;
            }
            const s = performance.now();
            const u = r("uuidv4")();
            this.traceDataCollectors.forEach((e)=>e.onProfilerStarts(u, i?.annotations));
            return this.createProfiler(s, n, a, u, i);
        };
        t.createProfiler = function(n, sampleInterval, maxBufferSize, i, l = null) {
            if (!r("JSSelfProfilerProbe").isJSSPNative) {
                return null;
            }
            try {
                const s = new Profiler({
                    sampleInterval,
                    maxBufferSize
                });
                const u = performance.now() - n;
                const c = new t(s, sampleInterval, i);
                c.setStartUpTime(u);
                c.setTriggerInfo(l?.triggerInfo);
                ++t.instanceCount;
                return c;
            } catch (error) {
                const d = r("getErrorSafe")(error);
                r("FBLogger")("JSSelfProfiler").catching(d).warn("Could not initialize profiler");
            }
            return null;
        };
        const t_prototype = t.prototype;
        t_prototype.abort = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                if (!this.$4) {
                    const n = performance.now();
                    yield this.$1.stop();
                    this.$3 = performance.now() - n;
                    this.$6 = null;
                    this.$4 = true;
                    --t.instanceCount;
                    const r = function*(n) {
                        yield yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                            return n.onProfilerAborts(e.$8, e);
                        });
                    };
                    for (const a of t.traceDataCollectors.values()){
                        yield* r(a);
                    }
                    const i = function*(n) {
                        yield yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                            return n.onProfilerAborts(e.$8);
                        });
                    };
                    for (const l of t.traceTransformers.values()){
                        yield* i(l);
                    }
                }
            });
            function r() {
                return e.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.stopRecording = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$4) {
                    const e = new Error("The profiling has stopped before stopRecording() is called");
                    e.stack;
                    throw e;
                }
                --t.instanceCount;
                const n = performance.now();
                const r = yield this.postProcessTrace((yield this.$1.stop()));
                this.$3 = performance.now() - n;
                const o = {
                    trace: r,
                    stats: {
                        timeOrigin: performance.timeOrigin,
                        requestedSampleInterval: this.$5,
                        actualSampleInterval: this.$1.sampleInterval
                    }
                };
                this.$6 = this.getTraceStats(r);
                this.$4 = true;
                return o;
            });
            function r() {
                return e.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.postProcessTrace = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const r = this;
                let a = e;
                if (this.$7?.interaction_id != null) {
                    a.metadata = {
                        interactionId: this.$7?.interaction_id
                    };
                }
                let l = {};
                const s = function*(t) {
                    l = yield yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return t.onProfilerEnds(r.$8, a, l, r);
                    });
                };
                for (const u of t.traceDataCollectors.values()){
                    yield* s(u);
                }
                const c = function*(t) {
                    a = yield yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return t.transform(a, r.$8, l);
                    });
                };
                for (const d of t.traceTransformers.values()){
                    yield* c(d);
                }
                return a;
            });
            function r(t) {
                return e.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.setStartUpTime = function(t) {
            this.$2 = t;
        };
        t_prototype.setTriggerInfo = function(t) {
            this.$7 = t;
        };
        t_prototype.setAnnotations = function(t) {
            this.$9 = Array.from(new Set([].concat(this.$9, t)));
        };
        t_prototype.getAnnotations = function() {
            return [].concat(this.$9);
        };
        t_prototype.getProfilerID = function() {
            return this.$8;
        };
        t_prototype.getTraceStats = function(t) {
            const length = JSON.stringify(t).length;
            const i = o("JSSelfProfilerUtils").getSampleIdToDepthsMap(t);
            return {
                trace_size: length,
                sample_size: t.samples.length ?? 0,
                stack_size: t.stacks.length ?? 0,
                frame_size: t.frames.length ?? 0,
                max_stack_depth: Array.from(i.values()).reduce((acc, item)=>Math.max(acc, item))
            };
        };
        t_prototype.logStats = function() {
            const t = this;
            if (this.$2 == null) {
                r("FBLogger")("JSSelfProfiler").warn("JSSP start up time is null/undefined");
                return;
            }
            if (this.$3 == null) {
                r("FBLogger")("JSSelfProfiler").warn("JSSP shut down time is null/undefined");
                return;
            }
            const app_id = r("CurrentUser").getAppID();
            e.onReady(function(e) {
                e.log(function() {
                    return babelHelpers.extends({
                        app_id,
                        boot_up_time: t.$2,
                        shut_down_time: t.$3,
                        trace_policy: t.$7?.trace_policy,
                        interaction_id: t.$7?.interaction_id,
                        qpl_marker_id: t.$7?.qpl_marker_id
                    }, t.$6);
                });
            });
        };
        t.isSupported = function() {
            return r("JSSelfProfilerProbe").isJSSPAvailable && r("JSSelfProfilerProbe").isLongtaskAvailable && performance.timeOrigin != null;
        };
        t.setIsHeaderSent = function() {
            t.isHeaderSent = true;
        };
        return t;
    })();
    u.isHeaderSent = false;
    u.defaultTransformerRegistered = false;
    u.instanceCount = 0;
    u.traceDataCollectors = new Map;
    u.traceTransformers = new Map;
    l.default = u;
}, 98);