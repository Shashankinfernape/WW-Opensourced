__d("CometLruCache", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(e, t){
            this.$1 = e;
            this.$2 = t;
            if (e <= 0) {
                r("FBLogger")("CometLruCache").mustfix("CometLruCache: Unable to create instance of cache with zero or negative capacity.");
            }
            this.$3 = new Map;
        }
        set(t, n) {
            this.$3.delete(t);
            this.$3.set(t, {
                timestamp: Date.now(),
                value: n
            });
            if (this.$3.size > this.$1) {
                const e = this.$3.keys().next();
                if (!e.done) {
                    this.$3.delete(e.value);
                }
            }
        }
        get(t) {
            const e = this.$3.get(t);
            if (e != null) {
                if (Date.now() > e.timestamp + this.$2) {
                    this.$3.delete(t);
                    return null;
                }
                this.$3.delete(t);
                this.$3.set(t, e);
                return e.value;
            }
            return null;
        }
        has(t) {
            return this.$3.has(t);
        }
        delete(t) {
            this.$3.delete(t);
        }
        size() {
            return this.$3.size;
        }
        capacity() {
            return this.$1 - this.$3.size;
        }
        clear() {
            this.$3.clear();
        }
    }
    function s(t, n = Number.MAX_SAFE_INTEGER) {
        return new e(t, n);
    }
    l.create = s;
}, 98);