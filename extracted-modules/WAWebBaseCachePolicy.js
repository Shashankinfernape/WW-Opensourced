__d("WAWebBaseCachePolicy", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = {
        LOAD: "LOAD",
        NONE: "NONE"
    };
    const s = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this) || this;
            r.collection = t;
            r.id = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.enableCaching = function() {};
        n.disableCaching = function() {};
        return t;
    })(r("WAWebEventEmitter"));
    s.policy = e.NONE;
    l.CACHE_POLICY = e;
    l.BaseCachePolicy = s;
}, 98);