__d("WAWebDataSharing3pdLidCollection", [
    "WAWebBaseCollection",
    "WAWebPerCustomerDataSharingModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initializeFromCache = function(t) {
            const e = t.map((e)=>new (o("WAWebPerCustomerDataSharingModel")).PerCustomerDataSharingModel(babelHelpers.extends({
                    id: e.lidRawString
                }, e)));
            this.add(e);
        };
        t_prototype.isDataSharingEnabled = function(t) {
            const e = this.get(t);
            if (e) {
                return e.dataSharing3pdEnabled;
            }
            return true;
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebPerCustomerDataSharingModel").PerCustomerDataSharingModel;
    const s = new e;
    l.DataSharing3pdLidCollection = s;
}, 98);