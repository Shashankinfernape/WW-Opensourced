__d("WAWebGalaxyFlowsIdentityFetcher", [
    "Promise",
    "WAWebGetIdentityKeysJob",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 30000;
    const u = 3;
    const c = 10000;
    const d = (()=>{
        function t() {
            const e = this;
            this.$2 = new Map;
            this.$3 = null;
            this.$1 = new Map;
            this.$3 = window.setInterval(function() {
                e.$4();
            }, 2 * s);
        }
        const t_prototype = t.prototype;
        t_prototype.fetchIdentitiesFor = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = e.map((e)=>e.toString()).sort().join(",");
                const r = this.$1.get(n);
                if (r == null) {
                    this.$1.set(n, [
                        t
                    ]);
                    this.$2.set(n, Date.now());
                    try {
                        yield this.$5(e);
                    } catch (error) {
                        throw error;
                    } finally{
                        const o = this.$1.get(n);
                        this.$1.delete(n);
                        this.$2.delete(n);
                        if (o != null) {
                            o.forEach((e)=>e.onComplete());
                        }
                    }
                } else {
                    r.push(t);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$5 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r = 0) {
                try {
                    yield this.$6(t);
                } catch (error) {
                    if (r < u) {
                        const o = Math.min(1000 * 2 ** r, c);
                        yield new (e || (e = n("Promise")))(function(e) {
                            return window.setTimeout(e, o);
                        });
                        return this.$5(t, r + 1);
                    }
                    throw error;
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.$6 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                let a = 0;
                const i = new (e || (e = n("Promise")))(function(e, t) {
                    a = window.setTimeout(function() {
                        return t(r("err")("Timeout"));
                    }, s);
                });
                const l = o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(Array.from(t));
                try {
                    yield (e || (e = n("Promise"))).race([
                        l,
                        i
                    ]);
                } finally{
                    window.clearTimeout(a);
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.$4 = function() {
            const e = this;
            const t = Date.now();
            const n = [];
            for (const [o, a] of this.$2.entries()){
                if (t - a > s * 2) {
                    n.push(o);
                }
            }
            n.forEach((t)=>{
                e.$1.delete(t);
                e.$2.delete(t);
            });
        };
        return t;
    })();
    const m = new d;
    l.GalaxyFlowsIdentityFetcher = m;
}, 98);