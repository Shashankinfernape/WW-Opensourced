__d("JSSelfProfilerUtils", [
    "CurrentUser",
    "FBLogger",
    "JSScheduler",
    "JSSelfProfilerConfig.experimental",
    "Promise",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "renameFunctionWithStaticName_BeCareful"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = ":";
    let c = null;
    function d() {
        if (c == null) {
            c = r("JSSelfProfilerConfig.experimental").PROFILER_CONFIG ?? [];
        }
        return c;
    }
    let m = null;
    function p() {
        if (m == null) {
            m = d().find((e)=>e.app_id === "default") ?? {
                app_id: "default",
                sample_interval: 10,
                max_buffer_size: 3000,
                sample_rate: 0,
                disable_when_has_referrer: false
            };
        }
        return m;
    }
    function _() {
        const t = r("CurrentUser").getAppID();
        const n = d().find((e)=>e.app_id === t) ?? p();
        return {
            sampleInterval: n.sample_interval,
            maxBufferSize: n.max_buffer_size
        };
    }
    function f(marker, t) {
        if (t === "") {
            return marker;
        }
        if (marker == null || marker === "") {
            return t;
        }
        if (t.includes(u)) {
            r("FBLogger")("JSSelfProfiler").warn("addJSSPSampleMarker: marker %s contains %s the marker split character", t, u);
            return marker;
        }
        const n = new Set(marker.split(u));
        n.add(t);
        return Array.from(n).sort().join(u);
    }
    function g(e, t) {
        const n = f(e.marker, t);
        if (n != null) {
            e.marker = n;
        }
    }
    function h(e, t, n) {
        if (e.metadata == null) {
            e.metadata = {};
        }
        const e_metadata = e.metadata;
        e_metadata.jsspAnnotations = e_metadata.jsspAnnotations ?? "{}";
        const a = JSON.parse(e_metadata.jsspAnnotations);
        a[t] = n;
        e_metadata.jsspAnnotations = JSON.stringify(a, null, 0);
    }
    function y(e, t) {
        const n = t.frames[e.frameId];
        return n?.name;
    }
    function C(e) {
        const t = new Map;
        try {
            for(let n = 0; n < e.samples.length; n++){
                for(var o = new Set, a = e.samples[n], i = a.stackId; i != null && !o.has(i);){
                    o.add(i);
                    i = e.stacks[i].parentId;
                }
                t.set(n, o.size);
            }
        } catch (error) {
            const l = r("getErrorSafe")(error);
            r("FBLogger")("JSSelfProfiler").warn("getSampleIdToDepthsMap throws %s", l.message);
        }
        return t;
    }
    function b(e) {
        const t = new Map;
        try {
            for(let n = 0; n < e.samples.length; n++){
                for(let o = new Set, a = e.samples[n], i = a.stackId; i != null && !o.has(i);){
                    o.add(i);
                    t.set(i, n);
                    i = e.stacks[i].parentId;
                }
            }
        } catch (error) {
            const l = r("getErrorSafe")(error);
            r("FBLogger")("JSSelfProfiler").warn("getStackIdToSampleIdMap throws %s", l.message);
        }
        return t;
    }
    function v(e, t) {
        for (const n of t){
            e.add(n);
        }
        return e;
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            return yield new (s || (s = n("Promise")))(function(n) {
                (e || (e = o("JSScheduler"))).scheduleNormalPriCallback(function() {
                    n(t());
                });
            });
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        const n = new Set(e);
        for (const r of t){
            n.add(r);
        }
        return Array.from(n);
    }
    l.renameFunctionWithStaticName_BeCareful = r("renameFunctionWithStaticName_BeCareful");
    l.getProfilerInitConfig = _;
    l.addMarkerToSample = g;
    l.addAnnotationToTrace = h;
    l.getStackFrameName = y;
    l.getSampleIdToDepthsMap = C;
    l.getStackIdToSampleIdMap = b;
    l.mergeSets = v;
    l.nextEventLoop = S;
    l.mergeList = L;
}, 98);