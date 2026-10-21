__d("WAWebFuzzySearchMatchResult", [
    "WAWebSearchMatchResult"
], function(t, n, r, o, a, i, l) {
    const e = 10;
    const s = ((t)=>{
        function n(e, n, r) {
            let o;
            o = t.call(this, e, n) || this;
            o.cost = r;
            return o;
        }
        babelHelpers.inheritsLoose(n, t);
        const r = n.prototype;
        r.getSimilarityRating = function() {
            if (this.length === 0) {
                return 0;
            }
            const e = 1 - this.cost / this.length;
            return Math.max(0, Math.min(1, e));
        };
        r.compareTo = function(r) {
            if (r instanceof n && this.cost !== r.cost) {
                return this.cost - r.cost;
            }
            return t.prototype.compareTo.call(this, r);
        };
        n.noMatch = function() {
            return new n(-1, 0, e + 1);
        };
        return n;
    })(o("WAWebSearchMatchResult").WAWebSearchMatchResult);
    l.MAX_ALLOWED_COST = e;
    l.WAWebFuzzySearchMatchResult = s;
}, 98);