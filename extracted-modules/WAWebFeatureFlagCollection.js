__d("WAWebFeatureFlagCollection", [
    "WAWebBaseCollection",
    "WAWebFeatureFlagModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initializeFromCache = function(t) {
            this.add(t.map((e)=>babelHelpers.extends({}, e)), {
                merge: true
            });
        };
        t_prototype.replaceWith = function(t) {
            this.set(t, {
                add: true,
                remove: true,
                merge: true
            });
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebFeatureFlagModel").FeatureFlag;
    const s = new e;
    l.FeatureFlagCollection = s;
}, 98);