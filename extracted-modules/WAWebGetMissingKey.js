__d("WAWebGetMissingKey", [
    "WAWebRunInTransaction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return o("WAWebRunInTransaction").runInTransaction({
            MissingKeyStore: true
        }, function({ MissingKeyStore }) {
            return MissingKeyStore.getAll();
        });
    }
    function s(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            MissingKeyStore: true
        }, function({ MissingKeyStore }) {
            return MissingKeyStore.bulkGet(e);
        });
    }
    function u() {
        return o("WAWebRunInTransaction").runInTransaction({
            MissingKeyStore: true
        }, function({ MissingKeyStore }) {
            return MissingKeyStore.count();
        });
    }
    function c(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            MissingKeyStore: true
        }, function({ MissingKeyStore }) {
            return MissingKeyStore.bulkUpdate(e);
        });
    }
    l.getAllMissingKeysInTransaction = e;
    l.bulkGetMissingKeysInTransaction = s;
    l.getMissingKeyCountTransaction = u;
    l.bulkUpdateMissingKeysInTransaction = c;
}, 98);