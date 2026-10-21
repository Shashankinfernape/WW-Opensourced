__d("WAWebTimedCache", [
    "WALogger",
    "WATimeUtils",
    "WAWebApiHydrateWidsUtil",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        if (e == null) {
            return null;
        }
        const n = o("WATimeUtils").unixTimeMs();
        const { timestamp, value } = e;
        const i = n - timestamp;
        if (i < t) {
            return value;
        }
        return null;
    }
    function m(e) {
        return {
            timestamp: o("WATimeUtils").unixTimeMs(),
            value: e
        };
    }
    const p = (()=>{
        function t({ getCacheTtlMs, mapLoad, mapStore }) {
            this.$1 = mapLoad;
            this.$2 = mapStore;
            this.$3 = getCacheTtlMs;
        }
        const t_prototype = t.prototype;
        t_prototype.get = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    const r = this.$1();
                    const a = JSON.stringify(t) ?? "";
                    const i = r?.get(a);
                    const l = o("WAWebApiHydrateWidsUtil").hydrateWids(i);
                    return d(l, this.$3());
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to get cache value"
                    ]))).tags("newsletter").sendLogs("[TimedMapCache] Failed to get value from cache");
                    return null;
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.set = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                try {
                    const a = this.$1() ?? new Map;
                    const i = JSON.stringify(e) ?? "";
                    const l = m(t);
                    a?.set(i, l);
                    yield this.$2(a);
                } catch (e) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to set cache value"
                    ]))).tags("newsletter").sendLogs("[TimedMapCache] Failed to set value in cache");
                    return;
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.remove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    const n = this.$1();
                    if (n == null) {
                        return;
                    }
                    const r = JSON.stringify(e) ?? "";
                    n?.delete(r);
                    yield this.$2(n);
                } catch (e) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to remove cache value"
                    ]))).tags("newsletter").sendLogs("[TimedMapCache] Failed to remove value from cache");
                    return;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.pop = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const e = this.$1();
                    if (e == null) {
                        return null;
                    }
                    const t = e.entries().next().value;
                    if (t == null) {
                        return null;
                    }
                    const n = t[0];
                    const r = t[1];
                    e?.delete(n);
                    yield this.$2(e);
                    const a = o("WAWebApiHydrateWidsUtil").hydrateWids(r);
                    return d(a, this.$3());
                } catch (e) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to pop cache value"
                    ]))).tags("newsletter").sendLogs("[TimedMapCache] Failed to pop value from cache");
                    return null;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.size = function() {
            const t = this.$1();
            return t?.size ?? 0;
        };
        return t;
    })();
    const _ = ((e)=>{
        function t({ capacity, getCacheTtlMs, mapLoad, mapStore }) {
            let n;
            n = e.call(this, {
                mapLoad,
                mapStore,
                getCacheTtlMs
            }) || this;
            n.$TimedLRUMapCache$p_1 = capacity;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.get = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield e.prototype.get.call(this, t);
                if (n != null) {
                    yield e.prototype.remove.call(this, t);
                    yield e.prototype.set.call(this, t, n);
                }
                return n;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.set = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                yield e.prototype.remove.call(this, t);
                yield e.prototype.set.call(this, t, n);
                if (this.size() > this.$TimedLRUMapCache$p_1) {
                    yield e.prototype.pop.call(this);
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return t;
    })(p);
    l.getTimedCacheItemValue = d;
    l.createTimedCacheItem = m;
    l.TimedMapCache = p;
    l.TimedLRUMapCache = _;
}, 98);