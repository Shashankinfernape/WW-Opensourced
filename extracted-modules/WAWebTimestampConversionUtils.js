__d("WAWebTimestampConversionUtils", [
    "WALogger",
    "WALongInt",
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t) {
        let n = t;
        try {
            if (o("WALongInt").numberOrThrowIfTooLarge(t) / o("WATimeUtils").unixTime() > 10) {
                n = o("WALongInt").numberOrThrowIfTooLarge(t) / 1000;
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] maybeMillisecondsToSeconds: adjusting future ts"
                ])));
            } else {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] maybeMillisecondsToSeconds: no adjustment needed"
                ])));
            }
        } catch (e) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] maybeMillisecondsToSeconds: ts too large ",
                ""
            ])), t);
        }
        return n;
    }
    l.maybeMillisecondsToSeconds = c;
}, 98);