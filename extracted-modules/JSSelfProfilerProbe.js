__d("JSSelfProfilerProbe", [
    "Env"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return "";
    }
    function u() {
        if (typeof Profiler !== "function" || typeof Profiler.toString !== "function") {
            return false;
        }
        return s(Profiler.toString()).endsWith("{ [native code] }");
    }
    function c() {
        if (!u() || (e || (e = r("Env"))).jssp_header_sent !== true) {
            return false;
        }
        try {
            const t = new Profiler({
                sampleInterval: 1000,
                maxBufferSize: 10
            });
            t.stop();
        } catch (e) {
            return false;
        }
        return true;
    }
    function d() {
        const window_PerformanceObserver = window.PerformanceObserver;
        if (window_PerformanceObserver == null) {
            return [];
        }
        const e_supportedEntryTypes = window_PerformanceObserver.supportedEntryTypes;
        return e_supportedEntryTypes ?? [];
    }
    function m() {
        return d().includes("longtask");
    }
    function p() {
        return d().includes("event");
    }
    const _ = {
        isJSSPAvailable: c(),
        isJSSPNative: u(),
        isLongtaskAvailable: m(),
        isINPAvailable: p()
    };
    l.default = _;
}, 98);