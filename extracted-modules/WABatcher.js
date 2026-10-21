__d("WABatcher", [
    "Promise",
    "WAResolvable",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s({ delayMs: a, maxSize: i }, o) {
        let l = null;
        function s(e) {
            if (l && l.args === e) {
                l = null;
            }
            return o(e);
        }
        const u = function() {
            if (l == null) {
                return (e || (e = n("Promise"))).resolve();
            }
            const t = l;
            l = null;
            clearTimeout(t.timer);
            t.run();
            return t.batchPromise;
        };
        const c = function(o) {
            if (l) {
                l.args.push(o);
            } else {
                let t = function() {};
                const c = [
                    o
                ];
                const d = new (e || (e = n("Promise")))(function(e) {
                    t = function() {
                        e(c);
                    };
                }).then(s);
                const m = t;
                l = {
                    args: c,
                    batchPromise: d,
                    run: m,
                    timer: setTimeout(m, a)
                };
            }
            if (l == null) {
                throw r("err")("activeBatch should not be null here");
            }
            const p = l;
            const { args: _, batchPromise: f } = p;
            const g = _.length - 1;
            if (i != null && _.length >= i) {
                u();
            }
            return f.then((e)=>e[g]);
        };
        return {
            accept: c,
            runActiveBatch: u
        };
    }
    function u(e, t) {
        const n = s(e, t);
        return function(e) {
            return n.accept(e);
        };
    }
    function c(t) {
        let a = [];
        let i = new (o("WAResolvable")).Resolvable;
        const l = function(l) {
            if (a.length === 0) {
                return (e || (e = n("Promise"))).resolve(new Map);
            }
            const r = a;
            const s = i;
            a = [];
            i = new (o("WAResolvable")).Resolvable;
            return (e || (e = n("Promise"))).resolve(t(r, l)).then((e)=>{
                s.resolve(e);
                return e;
            });
        };
        const s = function(t) {
            a.push(t);
            return i.promise.then((e)=>{
                const n = e.get(t);
                if (n == null) {
                    throw r("err")("This should not happen because we just added it to the batch");
                }
                return n;
            });
        };
        return {
            accept: s,
            runActiveBatch: l
        };
    }
    l.createSimpleBatcher = s;
    l.batch = u;
    l.createBatcher = c;
}, 98);