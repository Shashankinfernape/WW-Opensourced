__d("WAWebToArray", [], function(t, n, r, o, a, i) {
    function e(e) {
        if (e == null) {
            return [];
        }
        if (Array.isArray(e)) {
            return [].concat(e);
        }
        return [
            e
        ];
    }
    i.toArray = e;
}, 66);