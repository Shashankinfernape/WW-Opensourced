__d("PromiseQueue", [
    "Promise",
    "emptyFunction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t(t = -1) {
            this.$1 = (e || (e = n("Promise"))).resolve();
            this.$3 = 0;
            this.$2 = t;
        }
        const r = t.prototype;
        r.wait = function() {
            return this.$1;
        };
        r.enqueueHandlers = function(t, n, r) {
            const e = this;
            this.$3++;
            const o = this.$1.then(()=>t).then(n, r);
            const a = o.then();
            this.$1 = u(o, this.$2).finally(()=>{
                e.$3--;
            });
            return a;
        };
        r.enqueue = function(t) {
            const e = this;
            this.$3++;
            const n = this.$1.then(t);
            const r = n.then();
            this.$1 = u(n, this.$2).finally(()=>{
                e.$3--;
            });
            return r;
        };
        r.size = function() {
            return this.$3;
        };
        return t;
    })();
    function u(t, o) {
        if (o >= 0) {
            return new (e || (e = n("Promise")))(function(e) {
                const n = function() {
                    e();
                };
                t.then(n, n);
                globalThis.setTimeout(n, o);
            });
        }
        return t.then(r("emptyFunction"), r("emptyFunction"));
    }
    l.PromiseQueue = s;
    l.wrapPromiseInTimeout = u;
}, 98);