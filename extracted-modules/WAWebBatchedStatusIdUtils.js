__d("WAWebBatchedStatusIdUtils", [], function(t, n, r, o, a, i) {
    const e = "__part__";
    function l(t) {
        const n = t.indexOf(e);
        if (n > 0) {
            return t.slice(0, n);
        }
        return t;
    }
    i.normalizeStatusStanzaId = l;
}, 66);