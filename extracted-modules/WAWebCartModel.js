__d("WAWebCartModel", [
    "WAWebBaseCollection",
    "WAWebBaseModel",
    "WAWebCartCollection",
    "WAWebCartItemModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebCartItemModel").CartItem;
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.products = o("WAWebBaseModel").prop();
            e.itemCount = o("WAWebBaseModel").prop();
            e.total = o("WAWebBaseModel").prop();
            e.currency = o("WAWebBaseModel").prop();
            e.message = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.countTotals = function() {
            const e = this.cartItemCollection.reduce((acc, item)=>{
                acc.currency.add(item.currency);
                return {
                    itemCount: acc.itemCount + item.quantity,
                    total: acc.total + item.quantity * (item.priceAmount1000 ?? 0),
                    currency: acc.currency
                };
            }, {
                itemCount: 0,
                total: 0,
                currency: new Set
            });
            const t = e.currency.size === 1;
            const n = {
                itemCount: e.itemCount,
                total: t ? e.total : null,
                currency: t ? e.currency.values().next().value : null
            };
            this.set(n);
        };
        n_prototype.initialize = function() {
            const n = this;
            t.prototype.initialize.call(this);
            this.cartItemCollection = new e;
            this.listenTo(this, "change:cartItemCollection", function() {
                return n.countTotals();
            });
        };
        n_prototype.getCollection = function() {
            return o("WAWebCartCollection").CartCollection;
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "cart";
    const u = o("WAWebBaseModel").defineModel(s);
    l.default = u;
}, 98);