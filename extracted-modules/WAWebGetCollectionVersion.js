__d("WAWebGetCollectionVersion", [
    "WACryptoLtHash",
    "WAWebRunInTransaction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            CollectionVersionStore: true
        }, function({ CollectionVersionStore }) {
            return CollectionVersionStore.get(e);
        });
    }
    function s({ CollectionVersionStore }, t) {
        return CollectionVersionStore.get(t).then((e)=>e?.ltHash ?? new ArrayBuffer(o("WACryptoLtHash").KEY_LENGTH_BYTES));
    }
    function u(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            CollectionVersionStore: true
        }, function({ CollectionVersionStore }) {
            return s({
                CollectionVersionStore
            }, e);
        });
    }
    function c(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            CollectionVersionStore: true
        }, function({ CollectionVersionStore }) {
            return CollectionVersionStore.bulkGet(e);
        });
    }
    function d() {
        return o("WAWebRunInTransaction").runInTransaction({
            CollectionVersionStore: true
        }, function({ CollectionVersionStore }) {
            return CollectionVersionStore.getAll();
        });
    }
    function m(e, t, n) {
        return o("WAWebRunInTransaction").runInTransaction({
            CollectionVersionStore: true
        }, function({ CollectionVersionStore }) {
            return CollectionVersionStore.update(e, {
                version: t,
                ltHash: n
            });
        });
    }
    function p(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            CollectionVersionStore: true
        }, function({ CollectionVersionStore }) {
            return CollectionVersionStore.bulkUpdate(e);
        });
    }
    function _(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            CollectionVersionStore: true
        }, function({ CollectionVersionStore }) {
            return CollectionVersionStore.get(e).then((e)=>e?.isCollectionInMacMismatchFatal);
        });
    }
    function f(e) {
        return o("WAWebRunInTransaction").runInTransaction({
            CollectionVersionStore: true
        }, function({ CollectionVersionStore }) {
            return CollectionVersionStore.update(e, {
                isCollectionInMacMismatchFatal: true
            });
        });
    }
    l.getCollectionVersionInTransaction = e;
    l.getCollectionVersionLtHashInTransaction = u;
    l.bulkGetCollectionVersionsInTransaction = c;
    l.getAllCollectionVersionsInTransaction = d;
    l.updateCollectionVersionAndLtHashInTransaction = m;
    l.bulkUpdateCollectionVersionInTransaction = p;
    l.getIsCollectionInMacMismatchFatalInTransaction = _;
    l.updateIsCollectionInMacMismatchFatalInTransaction = f;
}, 98);