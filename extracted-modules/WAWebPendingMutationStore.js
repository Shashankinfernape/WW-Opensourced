__d("WAWebPendingMutationStore", [
    "WAWebNoop",
    "WAWebSchemaPendingMutations",
    "WAWebSyncdDb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e() {}
        const t = e.prototype;
        t.getByCollection = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSyncdDb").getPendingMutationsRows([
                    "collection"
                ], e);
                return t.map(o("WAWebSchemaPendingMutations").convertToPendingMutationFromRow);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.getAll = function() {
            return o("WAWebSyncdDb").getAllPendingMutationsRows();
        };
        t.getCollectionsWithPendingMutations = function() {
            return o("WAWebSyncdDb").getCollectionsWithPendingMutations();
        };
        t.bulkCreate = function(t) {
            return o("WAWebSyncdDb").appendPendingMutationsRows(t).then(r("WAWebNoop"));
        };
        t.bulkRemove = function(t) {
            return o("WAWebSyncdDb").bulkRemovePendingMutations(t);
        };
        t.clear = function() {
            return o("WAWebSchemaPendingMutations").getPendingMutationsTable().clear();
        };
        return e;
    })();
    e.locks = [
        "pending-mutations"
    ];
    l.WAWebPendingMutationStore = e;
}, 98);