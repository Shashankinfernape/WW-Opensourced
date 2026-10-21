__d("WAWebNewsletterDeleteMessageAddOns", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        function(e) {
            return o("WAWebdbCRUDOperationsNewsletterReaction").bulkRemoveNewsletterReactionsForParentMsg(e.map((e)=>e));
        }
    ];
    function u(t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteNewsletterMessageAddOns", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const r = t.toString();
            const a = yield o("WAWebSchemaMessage").getMessageTable().startsWithAnyOf([
                "internalId"
            ], [
                r
            ]);
            const i = a.map((e)=>e.id);
            yield (e || (e = n("Promise"))).all(s.map((e)=>e(i)));
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.deleteNewsletterMessageAddOns = u;
}, 98);