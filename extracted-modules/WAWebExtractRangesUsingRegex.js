__d("WAWebExtractRangesUsingRegex", [
    "WAWebExtractRangeFromMatch"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n = 0, o) {
        const a = [];
        t.lastIndex = 0;
        let i;
        while((i = t.exec(e)) && t.lastIndex > 0){
            if (o) {
                i = o(i, t);
            }
            if (i) {
                a.push(r("WAWebExtractRangeFromMatch")(i, n));
            }
        }
        return a;
    }
    l.default = e;
}, 98);