__d("WAWebMediaBase64ImageMimetype", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = "image/jpeg";
    const c = "image/png";
    const d = "/9j/";
    const m = "iVBORw0KGgo";
    function p(e) {
        if (e.startsWith(m)) {
            return c;
        }
        return u;
    }
    function _(e) {
        return e.startsWith(d) || e.startsWith(m);
    }
    function f(t) {
        if (_(t)) {
            return t;
        }
        try {
            const n = atob(t);
            if (_(n)) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[media] preview was double base64 encoded, auto-corrected"
                ]))).sendLogs("media-preview-double-encoded");
                return n;
            }
        } catch (e) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[media] preview was not decodable base64: ",
                ""
            ])), e).sendLogs("media-preview-undecodable", {
                sampling: 0.01
            });
        }
        return t;
    }
    l.JPEG_MIMETYPE = u;
    l.PNG_MIMETYPE = c;
    l.getBase64ImageMimetype = p;
    l.isRecognizedBase64Image = _;
    l.maybeRecoverDoubleEncodedBase64Image = f;
}, 98);