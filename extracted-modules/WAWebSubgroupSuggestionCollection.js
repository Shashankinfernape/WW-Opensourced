__d("WAWebSubgroupSuggestionCollection", [
    "WAWebBaseCollection",
    "WAWebSubgroupSuggestionModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebSubgroupSuggestionModel");
    e.comparator = function(e, t) {
        return e.t - t.t;
    };
    l.default = e;
}, 98);