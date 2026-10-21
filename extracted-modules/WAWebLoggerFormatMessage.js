__d("WAWebLoggerFormatMessage", [
    "WAArrayInterleave"
], function(t, n, r, o, a, i, l) {
    const e = 4000;
    function s(t, n, o, a = String) {
        let i = r("WAArrayInterleave")(t, n.map(a)).join("");
        const l = o ? e : Number.POSITIVE_INFINITY;
        if (i.length > l) {
            i = i.slice(0, l / 2) + `

[${i.length - l} truncated]

` + i.slice(-l / 2);
        }
        return i;
    }
    l.default = s;
}, 98);