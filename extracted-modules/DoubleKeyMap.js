__d("DoubleKeyMap", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(){
            this.$1 = new Map;
        }
        set(t, n, r) {
            let e = this.$1.get(t);
            if (!e) {
                this.$1.set(t, e = new Map);
            }
            e.set(n, r);
        }
        get(t, n) {
            return this.$1.get(t)?.get(n);
        }
        delete(t, n) {
            const e = this.$1.get(t);
            if (e) {
                e.delete(n);
                if (e.size === 0) {
                    this.$1.delete(t);
                }
            }
        }
        getAll(t) {
            return this.$1.get(t);
        }
        deleteAll(t) {
            this.$1.delete(t);
        }
    }
    i.DoubleKeyMap = e;
}, 66);