__d("WAWebOrderModel", [
    "WAWebBaseModel",
    "WAWebOrderCollection",
    "WAWebOrderGetters",
    "WAWebOrderItemCollection",
    "WAWebOrderItemModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.products = o("WAWebBaseModel").prop();
            t.itemCount = o("WAWebBaseModel").prop();
            t.subtotal = o("WAWebBaseModel").prop();
            t.tax = o("WAWebBaseModel").prop();
            t.total = o("WAWebBaseModel").prop();
            t.currency = o("WAWebBaseModel").prop();
            t.createdAt = o("WAWebBaseModel").prop();
            t.sellerJid = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            const t = this;
            e.prototype.initialize.call(this);
            this.orderItemCollection = new (o("WAWebOrderItemCollection")).OrderItemCollection;
            this.listenTo(this, "change:cartItemCollection", function() {
                return t.triggerItemCollectionUpdate();
            });
            this.triggerItemCollectionUpdate();
        };
        t_prototype.triggerItemCollectionUpdate = function() {
            this.orderItemCollection.set(this.products.map((e)=>new (r("WAWebOrderItemModel"))(babelHelpers.extends({}, e))), {
                merge: true
            });
        };
        t_prototype.getCollection = function() {
            return o("WAWebOrderCollection").OrderCollection;
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebOrderGetters").clearOrderGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "order";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);