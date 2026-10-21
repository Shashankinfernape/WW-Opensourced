__d("WAResolvable", [
    "Promise"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const l = (()=>{
        function t() {
            const t = this;
            this.$1 = function() {};
            this.$2 = false;
            this.isSettled = false;
            this.promise = new (e || (e = n("Promise")))(function(e) {
                t.$1 = e;
            });
        }
        const r = t.prototype;
        r.resolve = function(t) {
            this.$2 = true;
            this.isSettled = true;
            this.$1(t);
        };
        r.reject = function(r) {
            this.isSettled = true;
            this.resolve((e || (e = n("Promise"))).reject(r));
        };
        r.resolveWasCalled = function() {
            return this.$2;
        };
        return t;
    })();
    i.Resolvable = l;
}, 66);