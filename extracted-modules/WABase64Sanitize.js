__d("WABase64Sanitize", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        if (t == null) {
            return null;
        }
        const n = t.replace(/\s+$/, "");
        if (t !== n && Math.random() < 0.00001) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "base64 sanitized due to extra whitespace"
            ]))).sendLogs("media-key-sanitize");
        }
        return n;
    }
    l.default = s;
}, 98);