__d("WAWebMediaInMemoryKeyCache", [
    "WALruCache"
], function(t, n, r, o, a, i, l) {
    const e = 10;
    const s = {
        sizeLimit: e,
        getSize: function(t) {
            return 1;
        }
    };
    const u = new (o("WALruCache")).LruCache(s);
    l.MediaKeyCache = u;
}, 98);