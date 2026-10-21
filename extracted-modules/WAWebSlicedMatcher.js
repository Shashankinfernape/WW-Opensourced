__d("WAWebSlicedMatcher", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        if (e.sortResults != null) {
            return e.sortResults(t);
        }
        return t;
    }
    function l(e, t) {
        if (e.isTimedOut()) {
            return true;
        }
        return e.limit != null && t >= e.limit;
    }
    function s(t) {
        const n = [];
        for (const r of t.candidates){
            if (l(t, n.length)) {
                break;
            }
            const o = t.matchOne(r);
            if (o != null) {
                n.push(o);
            }
        }
        return e(t, n);
    }
    i.drainMatcherSync = s;
}, 66);