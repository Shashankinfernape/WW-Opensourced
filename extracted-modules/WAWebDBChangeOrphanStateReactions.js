__d("WAWebDBChangeOrphanStateReactions", [
    "WAWebModelStorageUtils",
    "WAWebSchemaReactions",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "reactions"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = e.map((e)=>[
                        e,
                        1
                    ]);
                const a = yield o("WAWebSchemaReactions").getReactionsTable().anyOf([
                    "parentMsgKey",
                    "orphan"
                ], r);
                a.forEach((e)=>{
                    e.orphan = 0;
                    e.orphanReason = undefined;
                });
                yield n.bulkCreateOrReplace(a);
                return a;
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    l.changeOrphanStateReactions = e;
}, 98);