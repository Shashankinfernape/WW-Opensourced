__d("HasteBitMap", [
    "BitMap"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    function s(t, n) {
        if (!e.has(t)) {
            e.set(t, new (r("BitMap")));
        }
        e.get(t)?.set(n);
    }
    function u(t) {
        return e.get(t)?.toCompressedString() ?? "";
    }
    l.add = s;
    l.toCompressedString = u;
}, 98);