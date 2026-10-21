__d("MemoryUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        return window.performance && window.performance.memory;
    }
    function l() {
        return window.navigator && window.navigator.deviceMemory;
    }
    function s() {
        const window_performance = window.performance;
        return window.performance && typeof window_performance.measureUserAgentSpecificMemory === "function";
    }
    function u(e) {
        try {
            if (e != null && typeof e === "function") {
                return c(e.toString())?.endsWith("{ [native code] }") ?? false;
            }
            return false;
        } catch (e) {
            return false;
        }
    }
    function c(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return null;
    }
    function d() {
        const e = window;
        if (typeof e.gc !== "function" || typeof e.gc.toString !== "function") {
            return false;
        }
        return c(e.gc.toString()) === "function gc() { [native code] }";
    }
    const m = d() ? window.gc : null;
    function p(t = {
        runGC: true
    }) {
        let deviceMemory = null;
        if (l()) {
            const r = parseFloat(window.navigator.deviceMemory);
            if (!isNaN(r)) {
                deviceMemory = r * 1024 * 1024 * 1024;
            }
        }
        if (e()) {
            if (m != null && t.runGC) {
                m();
            }
            const a = window.performance;
            const i = a?.memory ?? {};
            const { jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = i;
            return {
                usedJSHeapSize,
                jsHeapSizeLimit,
                totalJSHeapSize,
                deviceMemory
            };
        }
        return {
            usedJSHeapSize: null,
            jsHeapSizeLimit: null,
            totalJSHeapSize: null,
            deviceMemory: null
        };
    }
    i.isMemoryAPISupported = e;
    i.isMeasureMemoryOriginTrialSupported = s;
    i.isFunctionNative = u;
    i.isGarbageCollectionAPIAvailable = d;
    i.getCurrentMemory = p;
}, 66);