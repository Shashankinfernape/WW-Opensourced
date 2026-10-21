__d("WAWebMmsClientMmsLogError", [
    "WAAbortError",
    "WALogger",
    "WAWebMmsClientErrors"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c({ debug: n, error: r, hasExpectedErrors: i = true, source: l }) {
        if (r instanceof o("WAWebMmsClientErrors").MediaNotFoundError && i) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": expected error"
            ])), l);
        } else if (typeof r === "object" && r?.name === o("WAAbortError").ABORT_ERROR) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": canceled"
            ])), l);
        } else {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": ",
                ""
            ])), l, r);
        }
    }
    l.mmsLogError = c;
}, 98);