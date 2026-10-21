__d("WAWebSentinel", [
    "WAWebGetPendingMutation",
    "WAWebSentinelMutationSync",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("WAWebSentinelMutationSync").getSentinelMutations();
            yield o("WAWebGetPendingMutation").bulkCreateSyncPendingMutationsInTransaction(e);
            return o("WAWebSyncd").markCollectionsForSync(Array.from(o("WAWebSyncdConst").CollectionName.members()));
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);