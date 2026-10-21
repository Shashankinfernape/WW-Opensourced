__d("WAWebDecodeJid", [
    "invariant",
    "WALogger",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(e) {
        if (e != null && r("WAWebWid").isWid(e)) {
            return o("WAWebWidFactory").createWid(e);
        }
        return e;
    }
    function c(t, n) {
        const r = u(t);
        if (typeof r === "string") {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " got decoded to a string: ",
                ""
            ])), n, r);
        }
        return r;
    }
    function d(e) {
        if (e != null) {
            if (!r("WAWebWid").isWid(e)) {
                s(0, 64887);
            }
            return o("WAWebWidFactory").createWid(e);
        }
    }
    l.decodeJid = u;
    l.decodeJidAndValidate = c;
    l.strictDecodeJid = d;
}, 98);