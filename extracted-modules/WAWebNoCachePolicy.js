__d("WAWebNoCachePolicy", [
    "WAWebBaseCachePolicy"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n) {
            return e.call(this, t, n.id) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCachePolicy").BaseCachePolicy);
    e.policy = o("WAWebBaseCachePolicy").CACHE_POLICY.NONE;
    l.default = e;
}, 98);