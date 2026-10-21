__d("WAWebEventsWaitForMain", [
    "WAResolvable"
], function(t, n, r, o, a, i, l) {
    const e = new (o("WAResolvable")).Resolvable;
    function s() {
        return e.promise;
    }
    function u() {
        e.resolve();
    }
    l.waitForMain = s;
    l.resolveMainLoaded = u;
}, 98);