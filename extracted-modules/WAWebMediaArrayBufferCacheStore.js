__d("WAWebMediaArrayBufferCacheStore", [
    "WAWebKeyValueCacheStore"
], function(t, n, r, o, a, i, l) {
    const matchOptions = {
        ignoreSearch: true,
        ignoreMethod: true,
        ignoreVary: true
    };
    const s = ((t)=>{
        function n(n) {
            let r;
            r = t.call(this, n, u, c, {
                encodeKey,
                matchOptions
            }) || this;
            r.name = "cache_storage";
            return r;
        }
        babelHelpers.inheritsLoose(n, t);
        return n;
    })(r("WAWebKeyValueCacheStore"));
    function u(e) {
        return new Response(e);
    }
    function c(e) {
        return e.arrayBuffer();
    }
    function encodeKey(e, t) {
        const n = encodeURIComponent(e);
        const r = encodeURIComponent(t);
        return `https://_media_cache_v2_.whatsapp.com/${r}_${n}`;
    }
    l.default = s;
}, 98);