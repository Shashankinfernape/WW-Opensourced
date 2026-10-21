__d("Promise", [
    "cr:6640"
], function(t, n, r, o, a, i) {
    "use strict";
    const l = n("cr:6640") ?? t.Promise;
    if (!l.allSettled) {
        l.allSettled = function(e) {
            let t;
            if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in e) {
                t = Array.from(e);
            } else {
                return new l(function() {
                    const e = new TypeError("Promise.allSettled must be passed an iterable.");
                    e.stack;
                    throw e;
                });
            }
            const n = Array(t.length);
            const r = ()=>{
                const e = t[o];
                const r = typeof e === "object" && e !== null && typeof e.then === "function";
                n[o] = r ? new l(function(t, n) {
                    e.then((n)=>{
                        t({
                            status: "fulfilled",
                            value: n
                        });
                    }, (reason)=>{
                        t({
                            status: "rejected",
                            reason
                        });
                    });
                }) : l.resolve({
                    status: "fulfilled",
                    value: e
                });
            };
            for(var o = 0, a = t.length; o < a; ++o){
                r();
            }
            return l.all(n);
        };
    }
    if (!l.prototype.finally) {
        l.prototype.finally = function(e) {
            return this.then((t)=>l.resolve(e()).then(()=>t), (t)=>l.resolve(e()).then(()=>{
                    throw t;
                }));
        };
    }
    a.exports = l;
}, null);