__d("WAWebFormat", [
    "WAWebFormatParse",
    "WAWebFormatSerialize"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
        const l = a?.parseLimit ?? Infinity;
        return r("WAWebFormatSerialize")(n, o("WAWebFormatParse").parse(e, t, l, a?.textLimit), a?.serializerOptions);
    }
    l.default = e;
}, 98);