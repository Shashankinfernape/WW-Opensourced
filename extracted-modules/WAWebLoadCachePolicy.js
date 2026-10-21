__d("WAWebLoadCachePolicy", [
    "WAWebBaseCachePolicy",
    "WAWebDebounce"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n) {
            let o;
            o = e.call(this, t, n.id) || this;
            o.saveToCache = function() {
                o.collection.saveToCache();
            };
            o.$LoadCachePolicy$p_2 = n.trigger == null || n.trigger === "" ? "all" : n.trigger;
            o.$LoadCachePolicy$p_1 = n.delay;
            o.$LoadCachePolicy$p_3 = r("WAWebDebounce")(o.saveToCache, o.$LoadCachePolicy$p_1);
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.enableCaching = function() {
            this.listenTo(this.collection, this.$LoadCachePolicy$p_2, this.$LoadCachePolicy$p_3);
        };
        n.disableCaching = function() {
            this.stopListening(this.collection, this.$LoadCachePolicy$p_2, this.$LoadCachePolicy$p_3);
        };
        return t;
    })(o("WAWebBaseCachePolicy").BaseCachePolicy);
    e.policy = o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD;
    l.default = e;
}, 98);