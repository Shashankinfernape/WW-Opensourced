__d("WAWebJobOrchestratorHelper", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        if (t instanceof Map || t instanceof Set) {
            return Array.from(t);
        }
        return t;
    }
    function l(t, n) {
        if (t.maxConcurrency !== n.maxConcurrency || t.jobPrioritiesQuota?.size !== n.jobPrioritiesQuota?.size || Object.keys(t.maxConcurrencyPerJob ?? {}).length !== Object.keys(n.maxConcurrencyPerJob ?? {}).length) {
            return true;
        }
        return JSON.stringify(t, e) !== JSON.stringify(n, e);
    }
    i.hasConfigChanged = l;
}, 66);