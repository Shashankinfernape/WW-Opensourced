__d("WAWebLogStorageSizeForCrash", [
    "WALogger",
    "WAStorageEstimator",
    "WAWebLogForCrash",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 1073741824;
    const u = 300 * 1000;
    function c() {
        o("WAWebLogForCrash").onLogForCrashReady(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield d();
            self.setInterval(d, u);
        }));
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAStorageEstimator").estimateStorage();
                if (!t.success) {
                    return;
                }
                const n = t.value;
                const { quota, usage, usageDetails } = n;
                const l = usageDetails?.indexedDB;
                o("WAWebLogForCrash").logForCrash("wa:storageEstimate", JSON.stringify({
                    usage: p(usage),
                    quota: p(quota),
                    idb: p(l),
                    pct: quota !== undefined && quota > 0 ? Math.round((usage === undefined ? NaN : usage) / quota * 100) : null
                }));
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage-crash-log] Failed to log storage size: ",
                    ""
                ])), error);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        if (e == null) {
            return null;
        }
        return Number((e / s).toFixed(4));
    }
    l.initStorageSizeCrashLogging = c;
}, 98);