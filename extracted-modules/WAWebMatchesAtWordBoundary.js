__d("WAWebMatchesAtWordBoundary", [
    "WAWebL10NIsWordSeparator"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        let n = 0;
        let r;
        do {
            r = e.indexOf(t, n);
            if (r !== -1 && (r === 0 || o("WAWebL10NIsWordSeparator").isWordSeparator(e[r - 1]))) {
                return r;
            }
            n = r + 1;
        }while (r !== -1)
        return -1;
    }
    l.matchesAtWordBoundary = e;
}, 98);