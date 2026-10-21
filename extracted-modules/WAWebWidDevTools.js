__d("WAWebWidDevTools", [], function(t, n, r, o, a, i) {
    function e(e) {
        if (e == null || !e.isLid()) {
            return false;
        }
        const t = Math.pow(2, 16);
        const n = parseInt(e.user, 10);
        if (isNaN(n)) {
            return false;
        }
        return (n & t) !== 0;
    }
    i.isWidClientAssigned = e;
}, 66);