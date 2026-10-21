__d("WAWebConversionTupleCollection", [
    "WATimeUtils",
    "WAWebApiParse",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebConversionTupleModel",
    "WAWebUserPrefsKeys"
], function(t, n, r, o, a, i, l) {
    const e = [
        "conversionData"
    ];
    const s = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initializeFromCache = function(n) {
            if (n) {
                const t = o("WATimeUtils").unixTime() - o("WAWebConversionTupleModel").ConversionTupleExpiry;
                const r = n.filter((e)=>e.timestamp - t > 0);
                const a = r.map((t)=>{
                    const t_conversionData = t.conversionData;
                    const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                    if (t_conversionData == null) {
                        return r;
                    }
                    const conversionData = o("WAWebApiParse").parseConversionData(t_conversionData);
                    if (conversionData) {
                        return babelHelpers.extends({}, r, {
                            conversionData
                        });
                    }
                    return r;
                });
                this.add(a);
                this.saveToCache();
            }
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebConversionTupleModel").ConversionTuple;
    s.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.CONVERSION_TUPLE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1000
    };
    const u = new s;
    l.default = u;
}, 98);