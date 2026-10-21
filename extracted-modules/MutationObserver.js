__d("MutationObserver", [], function(t, n, r, o, a, i) {
    class s {
        observe(t, n) {}
        disconnect() {}
        takeRecords() {
            return [];
        }
    }
    const u = t.MutationObserver ?? t.WebKitMutationObserver ?? s;
    i.default = u;
}, 66);