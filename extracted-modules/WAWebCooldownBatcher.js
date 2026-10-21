__d("WAWebCooldownBatcher", [
    "WABatcher",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const r = o("WABatcher").createBatcher(function(e) {
            return t(e).then((t)=>{
                const n = new Map;
                for(let r = 0; r < e.length; r++){
                    n.set(e[r], t[r]);
                }
                return n;
            });
        });
        let a = false;
        let i = 0;
        let l = 0;
        var s = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = Date.now();
                if (!(n - t >= e.maxWindowMs)) {
                    const r = e.windowMs - (n - i);
                    if (!(r <= 0)) {
                        const a = e.maxWindowMs - (n - t);
                        yield o("WAPromiseDelays").delayMs(Math.min(r, a));
                        yield s(t);
                    }
                }
            });
            return function(n) {
                return t.apply(this, arguments);
            };
        })();
        const u = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                a = true;
                yield s(Date.now());
                const t = Date.now() - l;
                if (t < e.cooldownMs) {
                    yield o("WAPromiseDelays").delayMs(e.cooldownMs - t);
                }
                l = Date.now();
                a = false;
                r.runActiveBatch();
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        return function(e) {
            const t = r.accept(e);
            i = Date.now();
            if (!a) {
                u();
            }
            return t;
        };
    }
    l.createCooldownBatcher = e;
}, 98);