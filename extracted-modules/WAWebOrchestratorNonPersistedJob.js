__d("WAWebOrchestratorNonPersistedJob", [
    "WAJobOrchestratorTypes",
    "WAWebJobOrchestrator",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        if (typeof t !== "function") {
            throw r("err")("getNonPersistJob got invalid function param");
        }
        const a = o("WAWebJobOrchestrator").getInstance(n?.priority === o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP);
        return {
            fireAndForget: function() {
                const r = arguments;
                a.enqueue(e, function() {
                    return t.apply(null, r);
                }, n);
            },
            waitUntilCompleted: function() {
                const r = arguments;
                const o = a.enqueue(e, function() {
                    return t.apply(null, r);
                }, n);
                return o;
            }
        };
    }
    l.createNonPersistedJob = e;
}, 98);