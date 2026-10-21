__d("WAWebGetSyncKey", [
    "WAWebRunInTransaction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncKeyStore: true
        }, function({ SyncKeyStore }) {
            return SyncKeyStore.get(e);
        });
    }
    function s() {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncKeyStore: true
        }, function({ SyncKeyStore }) {
            return SyncKeyStore.getAll();
        });
    }
    function u(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncKeyStore: true
        }, function({ SyncKeyStore }) {
            return SyncKeyStore.set(e);
        });
    }
    function c(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            SyncKeyStore: true
        }, function({ SyncKeyStore }) {
            return SyncKeyStore.expire(e);
        });
    }
    l.getSyncKeyInTransaction_DO_NOT_USE = e;
    l.getAllSyncKeysInTransaction = s;
    l.setSyncKeyInTransaction = u;
    l.expireSyncKeyInTransaction = c;
}, 98);