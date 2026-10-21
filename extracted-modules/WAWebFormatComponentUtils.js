__d("WAWebFormatComponentUtils", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = typeof e === "string" ? [
            e
        ] : [].concat(e);
        if (typeof t[0] === "string") {
            t[0] = t[0].replace(" ", "");
        }
        return t;
    }
    i.removeFirstLeadingSpace = e;
}, 66);