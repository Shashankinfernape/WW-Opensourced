__d("WAWebRunInTransaction", [
    "Promise",
    "WAWeb-dexie",
    "WAWebCollectionVersionStore",
    "WAWebMissingKeyStore",
    "WAWebModelStorageUtils",
    "WAWebPendingMutationStore",
    "WAWebSyncActionStore",
    "WAWebSyncKeyStore",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        SyncActionStore: o("WAWebSyncActionStore").WAWebSyncActionStore,
        CollectionVersionStore: o("WAWebCollectionVersionStore").WAWebCollectionVersionStore,
        PendingMutationStore: o("WAWebPendingMutationStore").WAWebPendingMutationStore,
        MissingKeyStore: o("WAWebMissingKeyStore").WAWebMissingKeyStore,
        SyncKeyStore: o("WAWebSyncKeyStore").WAWebSyncKeyStore
    };
    const u = function(a, i) {
        if (r("WAWeb-dexie").currentTransaction != null) {
            return (e || (e = n("Promise"))).reject(r("err")("Calling runInTransaction recursively. This is not allowed."));
        }
        const t = Object.keys(a);
        const l = t.flatMap((e)=>s[e].locks);
        return o("WAWebModelStorageUtils").getStorage().lock(l, function() {
            const e = {};
            for (const n of t){
                e[n] = new s[n];
            }
            return i(e);
        });
    };
    l.runInTransaction = u;
}, 98);