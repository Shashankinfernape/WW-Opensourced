__d("WAWebMutationObserver", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        const r = new MutationObserver(n);
        r.observe(e, t);
        return function() {
            r.disconnect();
        };
    }
    i.observeMutations = e;
}, 66);