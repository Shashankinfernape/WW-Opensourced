__d("WAGenericStateManager", [
    "Promise",
    "WAPubSub"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t(e) {
            this.$2 = o("WAPubSub").simplePubSub();
            this.$1 = e;
        }
        const r = t.prototype;
        r.onSet = function(t) {
            return this.$2.subscribe(t);
        };
        r.set = function(t) {
            this.$1 = t;
            this.$2.publish(t);
            return this.$1;
        };
        r.get = function() {
            return this.$1;
        };
        r.waitForValue = function(r) {
            const t = this;
            if (this.$1 === r) {
                return (e || (e = n("Promise"))).resolve();
            }
            return new (e || (e = n("Promise")))(function(e) {
                var n = t.onSet(function(t) {
                    if (t === r) {
                        n();
                        e();
                    }
                });
            });
        };
        return t;
    })();
    l.WAGenericStateManager = s;
}, 98);