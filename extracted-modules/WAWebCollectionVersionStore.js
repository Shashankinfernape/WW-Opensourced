__d("WAWebCollectionVersionStore", [
    "WAWebSchemaCollectionVersion"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e() {}
        const t = e.prototype;
        t.get = function(t) {
            return o("WAWebSchemaCollectionVersion").getCollectionVersionTable().get(t);
        };
        t.bulkGet = function(t) {
            return o("WAWebSchemaCollectionVersion").getCollectionVersionTable().bulkGet(t);
        };
        t.getAll = function() {
            return o("WAWebSchemaCollectionVersion").getCollectionVersionTable().all();
        };
        t.update = function(t, n) {
            return o("WAWebSchemaCollectionVersion").getCollectionVersionTable().createOrMerge(t, babelHelpers.extends({
                collection: t
            }, n));
        };
        t.bulkUpdate = function(t) {
            return o("WAWebSchemaCollectionVersion").getCollectionVersionTable().bulkCreateOrMerge(t);
        };
        t.clear = function() {
            return o("WAWebSchemaCollectionVersion").getCollectionVersionTable().clear();
        };
        return e;
    })();
    e.locks = [
        "collection-version"
    ];
    l.WAWebCollectionVersionStore = e;
}, 98);