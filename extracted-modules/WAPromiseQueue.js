__d("WAPromiseQueue", [
    "Promise",
    "PromiseQueue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t(e = -1) {
            this.$1 = new Map;
            this.$2 = e;
        }
        const r = t.prototype;
        r.waitIfPending = function(t) {
            return this.$1.get(t);
        };
        r.wait = function(r) {
            return this.$1.get(r) || (e || (e = n("Promise"))).resolve();
        };
        r.enqueueHandlers = function(t, n, r, o) {
            const e = this.wait(t).then(()=>n).then(r, o);
            return this.$3(t, e);
        };
        r.enqueue = function(t, n) {
            const e = this.wait(t).then(n);
            return this.$3(t, e);
        };
        r.$3 = function(t, n) {
            const e = this;
            const r = n.then();
            let a;
            const i = function() {
                if (e.$1.get(t) === a) {
                    e.$1.delete(t);
                }
            };
            a = o("PromiseQueue").wrapPromiseInTimeout(n, this.$2).then(i, i);
            this.$1.set(t, a);
            return r;
        };
        return t;
    })();
    l.PromiseQueue = o("PromiseQueue").PromiseQueue;
    l.PromiseQueueMap = s;
}, 98);