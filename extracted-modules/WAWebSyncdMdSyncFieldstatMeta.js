__d("WAWebSyncdMdSyncFieldstatMeta", [
    "Promise",
    "WAStorageEstimator",
    "WAWebSyncdMdSession",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = -2;
    const u = -1;
    const c = (()=>{
        function t() {
            this.$1 = {
                mdStorageQuotaBytes: -2,
                mdStorageQuotaUsedBytes: -2
            };
            this.$2 = null;
        }
        const r = t.prototype;
        r.getStorageEstimation = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$1.mdStorageQuotaBytes !== s) {
                    return (e || (e = n("Promise"))).resolve(this.$1);
                }
                const t = yield o("WAStorageEstimator").estimateStorage();
                this.$1 = {
                    mdStorageQuotaBytes: t.success ? t.value.quota : u,
                    mdStorageQuotaUsedBytes: t.success ? t.value.usage : u
                };
                return this.$1;
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r.getMdSessionId = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return this.$2 ?? (this.$2 = yield o("WAWebSyncdMdSession").genCurrentSessionId(), this.$2);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    const d = new c;
    l.STORAGE_QUOTA_UNAVAILABLE = u;
    l.MdSyncFieldStatsMeta = d;
}, 98);