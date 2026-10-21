__d("WAWebFalcoLoggerCache", [
    "FalcoLoggerInternal"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    function s(t) {
        const n = e.get(t);
        if (n != null) {
            return n;
        }
        const r = o("FalcoLoggerInternal").create(t, {
            r: 1
        });
        e.set(t, r);
        return r;
    }
    l.getFalcoLogger = s;
}, 98);