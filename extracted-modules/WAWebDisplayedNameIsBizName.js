__d("WAWebDisplayedNameIsBizName", [
    "WAWebContactCollection"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebContactCollection").ContactCollection.get(e);
        const r = n?.name;
        if (r == null) {
            return true;
        }
        return r === t;
    }
    l.default = e;
}, 98);