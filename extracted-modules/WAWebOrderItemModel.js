__d("WAWebOrderItemModel", [
    "WAWebBaseModel",
    "WAWebOrderCollection",
    "WAWebOrderItemGetters"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.price = o("WAWebBaseModel").prop();
            t.currency = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.quantity = o("WAWebBaseModel").prop();
            t.thumbnailId = o("WAWebBaseModel").prop();
            t.thumbnailUrl = o("WAWebBaseModel").prop();
            t.isCustomItem = o("WAWebBaseModel").prop();
            t.isQuantitySet = o("WAWebBaseModel").prop();
            t.properties = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebOrderCollection").OrderCollection;
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebOrderItemGetters").clearOrderItemGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "order-item";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);