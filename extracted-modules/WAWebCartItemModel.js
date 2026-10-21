__d("WAWebCartItemModel", [
    "WAWebBaseModel",
    "WAWebCartCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.priceAmount1000 = o("WAWebBaseModel").prop();
            t.currency = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.quantity = o("WAWebBaseModel").prop();
            t.imageHash = o("WAWebBaseModel").prop();
            t.imageCdnUrl = o("WAWebBaseModel").prop();
            t.maxAvailable = o("WAWebBaseModel").prop();
            t.variantProperties = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebCartCollection").CartCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "cart-item";
    const s = o("WAWebBaseModel").defineModel(e);
    l.CartItem = s;
}, 98);