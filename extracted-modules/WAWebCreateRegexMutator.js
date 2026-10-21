__d("WAWebCreateRegexMutator", [
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator"
], function(t, n, r, o, a, i, l) {
    function e(e, t = 0, n) {
        return ((o)=>{
            function a() {
                return o.apply(this, arguments) || this;
            }
            babelHelpers.inheritsLoose(a, o);
            a.match = function(a) {
                return r("WAWebExtractRangesUsingRegex")(a, e, t, n);
            };
            return a;
        })(r("WAWebFormatMutator"));
    }
    l.default = e;
}, 98);