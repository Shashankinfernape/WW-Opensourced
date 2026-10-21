__d("WAWebCollectionUtils", [
    "$InternalEnum",
    "WALogger",
    "WAWebSimpleCollection"
], function(t, n, r, o, a, i, l) {
    const s = n("$InternalEnum").Mirrored([
        "Aggregate"
    ]);
    function u(e) {
        if (Array.isArray(e)) {
            return JSON.stringify(e.map(u));
        }
        return String(e);
    }
    const c = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this) || this;
            r.$AggregatedProxyView$p_3 = false;
            r.$AggregatedProxyView$p_2 = t;
            r.$AggregatedProxyView$p_1 = n;
            const o = r;
            Object.defineProperty(r, "_models", {
                get: function() {
                    return o.$AggregatedProxyView$p_5()?._models ?? [];
                }
            });
            Object.defineProperty(r, "_index", {
                get: function() {
                    return o.$AggregatedProxyView$p_5()?._index ?? {};
                }
            });
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.$AggregatedProxyView$p_5 = function() {
            return this.$AggregatedProxyView$p_2.get(this.$AggregatedProxyView$p_1)?.collection;
        };
        n.on = function(n, r, o) {
            e.prototype.on.call(this, n, r, o);
            this.$AggregatedProxyView$p_6();
            return this;
        };
        n.off = function(n, r, o) {
            e.prototype.off.call(this, n, r, o);
            this.$AggregatedProxyView$p_7();
            return this;
        };
        n.$AggregatedProxyView$p_6 = function() {
            const e = this;
            const t = this.$AggregatedProxyView$p_5();
            if (t == null) {
                if (this.$AggregatedProxyView$p_3) {
                    return;
                }
                this.$AggregatedProxyView$p_3 = true;
                this.$AggregatedProxyView$p_2.on("add", this.$AggregatedProxyView$p_6, this);
                this.$AggregatedProxyView$p_4 = function() {
                    e.$AggregatedProxyView$p_2.off("add", e.$AggregatedProxyView$p_6, e);
                };
                return;
            }
            if (this.$AggregatedProxyView$p_3) {
                this.$AggregatedProxyView$p_4?.();
                this.$AggregatedProxyView$p_3 = false;
            }
            t.on("all", this.$AggregatedProxyView$p_8, this);
            this.$AggregatedProxyView$p_2.on("remove", this.$AggregatedProxyView$p_9, this);
            this.$AggregatedProxyView$p_4 = function() {
                t.off("all", e.$AggregatedProxyView$p_8, e);
                e.$AggregatedProxyView$p_2.off("remove", e.$AggregatedProxyView$p_9, e);
            };
        };
        n.$AggregatedProxyView$p_7 = function() {
            let e;
            if (!this.isListening()) {
                if ((e = this.$AggregatedProxyView$p_4) != null) {
                    e.call(this);
                }
                this.$AggregatedProxyView$p_4 = null;
            }
        };
        n.$AggregatedProxyView$p_9 = function(t) {
            if (this.$AggregatedProxyView$p_1 === t.id) {
                this.$AggregatedProxyView$p_4?.();
                this.$AggregatedProxyView$p_4 = null;
                this.$AggregatedProxyView$p_6();
            }
        };
        n.$AggregatedProxyView$p_8 = function(t, ...n) {
            this.trigger(t, ...n);
        };
        return t;
    })(o("WAWebSimpleCollection").SimpleCollection);
    function d(e, t = {}) {
        const n = t;
        const { subscribeToKey: r, subscribeToKeys: a } = n;
        const i = new (o("WAWebSimpleCollection")).SimpleCollection;
        const l = new Map;
        const d = function(t) {
            if (r != null) {
                const e = function() {
                    const n = function() {
                        t.off(`change:${r}`, e);
                    };
                    _(t, n);
                };
                t.on(`change:${r}`, e);
            }
            if (a != null) {
                const n = function() {
                    const e = function() {
                        a.forEach((e)=>{
                            t.off(`change:${e}`, n);
                        });
                    };
                    _(t, e);
                };
                a.forEach((e)=>{
                    t.on(`change:${e}`, n);
                });
            }
        };
        const m = function(t, n) {
            const r = i.get(t)?.collection;
            if (r) {
                r.remove(n);
                if (r.length === 0) {
                    i.remove(t);
                }
            }
            l.delete(n.id);
        };
        const p = function(n) {
            const r = e(n);
            if (r != null) {
                const a = l.get(n.id);
                const s = u(r);
                if (a != null && s !== a) {
                    m(a, n);
                }
                let c = i.get(s)?.collection;
                if (c == null) {
                    c = new (o("WAWebSimpleCollection")).SimpleCollection;
                    i.add({
                        id: s,
                        collection: c
                    });
                }
                c.add(n);
                l.set(n.id, s);
                d(n);
            }
        };
        var _ = function(n, r) {
            const t = l.get(n.id);
            const o = e(n);
            if (o == null) {
                if (t != null) {
                    r();
                    m(t, n);
                }
                return;
            }
            if (t !== u(o)) {
                r();
                return p(n);
            }
        };
        return Object.assign(function(e) {
            return new c(i, u(e));
        }, {
            kind: s.Aggregate,
            add: function(t) {
                t.forEach((e)=>{
                    p(e);
                });
            },
            remove: function(n) {
                n.filter(Boolean).forEach((t)=>{
                    const n = u(e(t));
                    m(n, t);
                });
            },
            reset: function() {
                i.forEach(({ collection: t })=>{
                    t.reset();
                });
                i.reset();
                l.clear();
            }
        });
    }
    l.CollectionMethodKind = s;
    l.AggregatedProxyView = c;
    l.aggregated = d;
}, 98);