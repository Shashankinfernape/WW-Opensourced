__d("WAPubSub", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e() {
            this.$1 = new Set;
        }
        const t = e.prototype;
        t.publish = function(t) {
            this.$1.forEach((e)=>e(t));
        };
        t.subscribe = function(t) {
            const e = this;
            this.$1.add(t);
            return function() {
                e.$1.delete(t);
            };
        };
        return e;
    })();
    const s = (()=>{
        function e() {
            this.$1 = new Map;
        }
        const t = e.prototype;
        t.publish = function(t, n) {
            const e = this.$2(t);
            e.forEach((e)=>e(n));
        };
        t.$2 = function(t) {
            if (!this.$1.has(t) || this.$1.get(t) == null) {
                this.$1.set(t, new Set);
            }
            const e = this.$1.get(t);
            if (e == null) {
                throw r("err")("Key space should not be null");
            }
            return e;
        };
        t.subscribe = function(t, n) {
            const e = this.$2(t);
            e.add(n);
            return function() {
                e.delete(n);
            };
        };
        return e;
    })();
    function u() {
        return new e;
    }
    l.WAPubSub = e;
    l.WAKeyedPubSub = s;
    l.simplePubSub = u;
}, 98);