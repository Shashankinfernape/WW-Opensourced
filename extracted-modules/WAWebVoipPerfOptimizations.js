__d("WAWebVoipPerfOptimizations", [
    "$InternalEnum",
    "WAWebABProps",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        ALL_DISABLED: 0,
        ALL_ENABLED: 1,
        PERMISSIONS_API_OPTIMIZATION: 2,
        CAMERA_PREWARM: 3,
        CONVERTER_PREWARM: 4,
        OPERATION_QUEUE_YIELD: 5,
        LOG_RING_BUFFER: 6,
        WORKLET_PRELOAD: 7,
        WEBTRANSPORT_SEND_RING: 9,
        MAX_FLAG: 30
    });
    function s() {
        return o("WAWebABProps").getABPropConfigValue("web_calling_perf_optimizations_bitmask") ?? e.ALL_DISABLED;
    }
    function u(t) {
        const n = t;
        if (n < 2 || n >= e.MAX_FLAG) {
            throw r("err")("Invalid feature flag used");
        }
        const o = s();
        if (o === e.ALL_DISABLED) {
            return false;
        }
        if (o === e.ALL_ENABLED) {
            return true;
        }
        return (o & 1 << n) !== 0;
    }
    l.PerfOptimizationFlag = e;
    l.isPerfOptimizationEnabled = u;
}, 98);