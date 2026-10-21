__d("WAWebStoreQuotaManager", [
    "WAStorageEstimator",
    "WAWebABProps",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 1073741824;
    const s = new Map([
        [
            "lru-media-store",
            {
                getQuota: function(n) {
                    if (n <= o("WAWebABProps").getABPropConfigValue("web_browser_quota_threshold") * e) {
                        return Math.min(n * 0.2, o("WAWebABProps").getABPropConfigValue("web_browser_min_storage_quota") * e);
                    }
                    return 0.2 * n;
                }
            }
        ]
    ]);
    const u = (()=>{
        function e(e) {
            this.$1 = e;
        }
        const e_prototype = e.prototype;
        e_prototype.getQuotaForStore = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const r = yield o("WAStorageEstimator").estimateStorage();
                if (!r.success) {
                    return 0;
                }
                const quota = r.value.quota;
                return Math.floor(this.$1.get(e)?.getQuota(quota) ?? 0);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    const c = new u(s);
    l.storeQuotaManager = c;
}, 98);