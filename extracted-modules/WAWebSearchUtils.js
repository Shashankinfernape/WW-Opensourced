__d("WAWebSearchUtils", [
    "WAWebL10NAccentFold"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebL10NAccentFold").accentFold(e.trim().toLowerCase());
    }
    function s(e, t, n) {
        if (n == null) {
            const results = e.filter(t);
            return {
                results,
                pagination: {
                    page: 0,
                    pageLength: results.length,
                    hasMoreResults: false
                }
            };
        }
        for(var o = [], hasMoreResults = null, i = n.page, page = i === undefined ? 0 : i, s = n.pageLength, pageLength = s === undefined ? e.length : s, c = (page + 1) * pageLength + 1, d = 0; d < e.length && o.length !== c; d++){
            const m = e[d];
            if (t(m)) {
                o.push(m);
            }
        }
        if (o.length === c) {
            hasMoreResults = true;
        } else {
            hasMoreResults = false;
        }
        return {
            results: o.slice(page * pageLength, page * pageLength + pageLength),
            pagination: {
                page,
                pageLength,
                hasMoreResults
            }
        };
    }
    l.normalizeString = e;
    l.filterPaginate = s;
}, 98);