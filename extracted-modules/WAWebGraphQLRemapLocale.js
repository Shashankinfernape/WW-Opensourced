__d("WAWebGraphQLRemapLocale", [
    "WALogger",
    "isPlainObject"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    function c(e, t) {
        try {
            const n = JSON.parse(t);
            if (r("isPlainObject")(n)) {
                return Object.keys(n).find((t)=>{
                    const r = n[t];
                    if (Array.isArray(r)) {
                        return r.includes(e);
                    }
                    return false;
                }) || e;
            }
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid json locale mapping"
            ])));
            return e;
        } catch (t) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid json locale mapping"
            ])));
            return e;
        }
    }
    l.graphQLRemapLocale = c;
}, 98);