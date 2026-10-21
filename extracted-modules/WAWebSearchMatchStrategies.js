__d("WAWebSearchMatchStrategies", [
    "WAWebL10NRemoveDiacritics",
    "WAWebMatchesAtWordBoundary"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = t.split(/\s+/).filter(Boolean);
        if (n.length === 0) {
            return null;
        }
        const r = [];
        for (const o of n){
            const a = e.indexOf(o);
            if (a === -1) {
                return null;
            }
            r.push({
                startIndex: a,
                length: o.length
            });
        }
        return r;
    }
    function s(e, t) {
        const n = o("WAWebL10NRemoveDiacritics").removeDiacritics(e).toLowerCase();
        const r = t.split(/\s+/).filter(Boolean);
        if (r.length === 0) {
            return null;
        }
        const a = [];
        for (const i of r){
            const l = o("WAWebL10NRemoveDiacritics").removeDiacritics(i).toLowerCase();
            const s = o("WAWebMatchesAtWordBoundary").matchesAtWordBoundary(n, l);
            if (s === -1) {
                return null;
            }
            a.push({
                startIndex: s,
                length: l.length
            });
        }
        return a;
    }
    l.substringMatch = e;
    l.wordBoundaryMatch = s;
}, 98);