__d("WAWebGetSyncAction", [
    "WAWebRunInTransaction",
    "WAWebSyncdConst"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.count();
        });
    }
    function s(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.get(e);
        });
    }
    function u(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.getByCollections(e);
        });
    }
    function c(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.getByIndexMacs(e);
        });
    }
    function d(e, t) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.getByCollectionAndIndex(e, t);
        });
    }
    function m(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.getByActionStates(e);
        });
    }
    function p(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.getByModelInfos(e);
        });
    }
    function _() {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.getAll();
        });
    }
    function f(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncActionStore: true
        }, function({ SyncActionStore }) {
            return SyncActionStore.getByActionStates([
                o("WAWebSyncdConst").SyncActionState.Orphan
            ]).then((t)=>t.filter((t)=>t.modelType != null && o("WAWebSyncdConst").SyncModelType.cast(t.modelType) === e));
        });
    }
    l.countSyncActionsInTransaction = e;
    l.getSyncActionInTransaction = s;
    l.getSyncActionsByCollectionsInTransaction = u;
    l.getSyncActionsByIndexMacsInTransaction = c;
    l.getSyncActionsByCollectionAndIndexesInTransaction = d;
    l.getSyncActionsByActionStatesInTransaction = m;
    l.getSyncActionsByModelInfosInTransaction = p;
    l.getAllSyncActions = _;
    l.getOrphanSyncActionsByModelTypeInTransaction = f;
}, 98);