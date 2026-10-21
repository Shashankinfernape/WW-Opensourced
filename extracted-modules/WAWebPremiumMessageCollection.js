__d("WAWebPremiumMessageCollection", [
    "WAWebBaseCollection",
    "WAWebPremiumMessageModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebPremiumMessageModel").PremiumMessage;
    const s = new e;
    l.PremiumMessageCollection = s;
}, 98);