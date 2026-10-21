__d("WAWebStoreNewsletterMessageAddOns", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebNewsletterAddOnsUtils",
    "WAWebNewsletterReactionUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        reactions: function(t) {
            const e = t.map(o("WAWebNewsletterReactionUtils").mapFrontendReactionToBackend);
            return o("WAWebdbCRUDOperationsNewsletterReaction").createOrUpdateNewsletterReactions(e);
        }
    };
    function u(t) {
        const r = o("WAWebNewsletterAddOnsUtils").getAddOnsFromMessages(t);
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("storeNewsletterMessageAddOns", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = Object.entries(r).map(([t])=>{
                const n = s[t];
                const o = r[t];
                return n(o);
            });
            yield (e || (e = n("Promise"))).all(t);
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.storeNewsletterMessageAddOns = u;
}, 98);