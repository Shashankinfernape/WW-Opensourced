__d("WAWebLruCacheMap", [
    "WALruCache"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e({ getSize: t, sizeLimit: n }) {
            this.$1 = new (o("WALruCache")).LruCache({
                sizeLimit: n,
                getSize: t ?? function() {
                    return 1;
                }
            });
        }
        const t = e.prototype;
        t.clear = function() {
            this.$1.clear();
        };
        t.delete = function(t) {
            const e = this.has(t);
            if (e) {
                this.$1.delete(t);
                return true;
            }
            return false;
        };
        t.get = function(t) {
            return this.$1.get(t);
        };
        t.has = function(t) {
            return this.$1.has(t);
        };
        t.set = function(t, n) {
            this.$1.put(t, n);
            return this;
        };
        t.iterateOnEach = function(t) {
            this.$1.forEach(t);
        };
        return babelHelpers.createClass(e, [
            {
                key: "size",
                get: function() {
                    return this.$1.getCurrentSize();
                }
            }
        ]);
    })();
    l.LruCacheMap = e;
}, 98);