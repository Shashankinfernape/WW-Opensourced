__d("WAWebSyncdRequestBuilder", [
    "Promise",
    "WAWebGetPendingMutation",
    "WAWebSyncdRequestBuilderBuild",
    "WAWebSyncdRequestBuilderUtils",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return c(e, t);
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = new Map;
            const collectionWithPendingMutationsIds = new Map;
            yield (e || (e = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebGetPendingMutation").getSyncPendingMutationsByCollectionInTransaction(e);
                    const n = r("compactMap")(t, function(e) {
                        return e.id;
                    });
                    collectionWithPendingMutationsIds.set(e, n);
                    const a = o("WAWebSyncdRequestBuilderUtils").compactPatch(t);
                    i.set(e, a);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const s = yield o("WAWebSyncdRequestBuilderBuild").buildSyncIqNode(i, a);
            return {
                syncIqNode: s.syncIqNode,
                collectionWithPendingMutationsIds,
                collectionWithEncryptedMutations: s.collectionWithEncryptedMutations,
                localCollectionVersions: s.localCollectionVersions,
                collectionsToRefetch: s.pendingCollectionsInBootstrap
            };
        });
        return d.apply(this, arguments);
    }
    l.buildAppStateSyncRequest = s;
}, 98);