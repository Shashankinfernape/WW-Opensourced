__d("WAInOrderPromiseQueue", [
    "Promise",
    "WAAbortError",
    "WAPromiseRaceAbort"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(){
            this.$1 = (e || (e = n("Promise"))).resolve();
            this.$3 = new AbortController;
            this.$2 = [];
        }
        enqueue(t) {
            const e = this;
            t.catch(()=>{});
            const n = function() {
                return t;
            };
            const signal = this.$3.signal;
            this.$1 = this.$1.then(n, n);
            const i = r("WAPromiseRaceAbort")(this.$1, signal).catch(o("WAAbortError").catchAbort(function(t) {
                throw e.$4 ?? t;
            }));
            this.$2.push(i);
            return i.finally(()=>{
                if (e.$2.length > 0 && e.$2[0] === i) {
                    e.$2 = e.$2.slice(1);
                }
            });
        }
        cancelAll(t) {
            this.$4 = t;
            this.$2 = [];
            this.$3.abort();
            this.$3 = new AbortController;
        }
    }
    l.default = s;
}, 98);