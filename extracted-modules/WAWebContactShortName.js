__d("WAWebContactShortName", [
    "WALogger",
    "WAWebAlphaRegex",
    "WAWebNonEmptyString"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        if (t == null) {
            return null;
        }
        const n = t.split(/\s/);
        const a = n[0];
        if (r("WAWebAlphaRegex").exec(a)) {
            return o("WAWebNonEmptyString").asMaybeNonEmptyString(a);
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[short-name] unable to get short name for contact"
        ])));
        return null;
    }
    l.getShortName = s;
}, 98);