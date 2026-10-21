__d("WAWebGetPendingMutation", [
    "WAWebRunInTransaction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            PendingMutationStore: true
        }, function({ PendingMutationStore }) {
            return PendingMutationStore.getByCollection(e);
        });
    }
    function s() {
        return o("WAWebRunInTransaction").runInTransaction({
            PendingMutationStore: true
        }, function({ PendingMutationStore }) {
            return PendingMutationStore.getAll();
        });
    }
    function u() {
        return o("WAWebRunInTransaction").runInTransaction({
            PendingMutationStore: true
        }, function({ PendingMutationStore }) {
            return PendingMutationStore.getCollectionsWithPendingMutations();
        });
    }
    function c(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            PendingMutationStore: true
        }, function({ PendingMutationStore }) {
            return PendingMutationStore.bulkCreate(e);
        });
    }
    l.getSyncPendingMutationsByCollectionInTransaction = e;
    l.getAllSyncPendingMutationsInTransaction = s;
    l.getSyncdCollectionsWithPendingMutationsInTransaction = u;
    l.bulkCreateSyncPendingMutationsInTransaction = c;
}, 98);