__d("WAWebExactSearchMatchResult", [
    "WAWebSearchMatchResult"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n) {
            return e.call(this, t, n) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.noMatch = function() {
            return new t(-1, 0);
        };
        return t;
    })(o("WAWebSearchMatchResult").WAWebSearchMatchResult);
    l.WAWebExactSearchMatchResult = e;
}, 98);