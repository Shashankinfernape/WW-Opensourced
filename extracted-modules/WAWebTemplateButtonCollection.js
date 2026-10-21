__d("WAWebTemplateButtonCollection", [
    "WAWebBaseCollection",
    "WAWebTemplateButtonModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebTemplateButtonModel");
    e.comparator = function(e, t) {
        if (e.id < t.id) {
            return -1;
        }
        if (e.id > t.id) {
            return 1;
        }
        return 0;
    };
    l.TemplateButtonCollection = e;
}, 98);