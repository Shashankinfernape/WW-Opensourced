__d("WAWebRestOperations", [
    "WAWebJobsMigrationGating",
    "WAWebScheduledOperations"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebJobsMigrationGating").isRestOperationsEnabled();
    }
    function s(t, n, r) {
        if (e()) {
            return o("WAWebScheduledOperations").scheduleOperation(t, n);
        }
        return r();
    }
    l.isRestOperationGateEnabled = e;
    l.runRestOperation = s;
}, 98);