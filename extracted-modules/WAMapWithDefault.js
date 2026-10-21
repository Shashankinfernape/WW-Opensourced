__d("WAMapWithDefault", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        function e(e, t) {
            this.$1 = e;
            if (t != null) {
                this.$2 = new Map(t);
            } else {
                this.$2 = new Map;
            }
        }
        const t = e.prototype;
        t.size = function() {
            return this.$2.size;
        };
        t.clear = function() {
            this.$2.clear();
        };
        t.delete = function(t) {
            return this.$2.delete(t);
        };
        t.get = function(t) {
            const e = this.$2.get(t);
            if (e != null) {
                return e;
            }
            const n = this.$1(t);
            this.$2.set(t, n);
            return n;
        };
        t.keys = function() {
            return this.$2.keys();
        };
        t.entries = function() {
            return this.$2.entries();
        };
        t.update = function(n, r) {
            const t = new Map(this.$2).set(n, r(this.get(n)));
            return new e(this.$1, t);
        };
        t.toMap = function() {
            return new Map(this.$2);
        };
        return e;
    })();
    i.MapWithDefault = e;
}, 66);