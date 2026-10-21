__d("WAWebContactSyncBridge", [
    "WAWebLidAwareContactsDB",
    "WAWebSyncContactJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebLidAwareContactsDB").allPrimaryKeys();
            if (t.length > 0) {
                const n = t.map(o("WAWebWidFactory").createWid).filter((e)=>e.isEligibleForUSync());
                return o("WAWebSyncContactJob").syncContactListInChunksJob(n, e, "full");
            }
        });
        return s.apply(this, arguments);
    }
    l.doFullContactSync = e;
}, 98);