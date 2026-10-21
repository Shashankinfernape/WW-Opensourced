__d("WAWebHandleOfflineAbProps", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = JSON.parse(o("WAWebABProps").getABPropConfigValue("web_offline_dynamic_batch_config"));
        const t = parseFloat(e.multiplier);
        const version = e.version || "default";
        return {
            multiplier: Number.isNaN(t) ? 0.2 : t,
            version
        };
    }
    l.getOfflineDynamicBatchConfig = e;
}, 98);