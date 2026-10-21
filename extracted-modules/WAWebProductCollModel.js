__d("WAWebProductCollModel", [
    "WAWebBaseModel",
    "WAWebProductCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.isHidden = o("WAWebBaseModel").prop();
            t.reviewStatus = o("WAWebBaseModel").prop();
            t.commerceUrl = o("WAWebBaseModel").prop();
            t.rejectReason = o("WAWebBaseModel").prop();
            t.totalItemsCount = o("WAWebBaseModel").prop();
            t.afterCursor = o("WAWebBaseModel").prop();
            t.canAppeal = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            this.productCollection = new (o("WAWebProductCollection")).ProductCollection;
            this.afterCursor = undefined;
        };
        t_prototype.addProducts = function(t) {
            this.productCollection.add(t, {
                merge: true
            });
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "productColl";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);