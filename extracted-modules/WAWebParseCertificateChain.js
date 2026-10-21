__d("WAWebParseCertificateChain", [
    "WAArrayBufferUtils",
    "WABase64",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const n = o("WAArrayBufferUtils").arrayBufferToString(t);
        try {
            const r = JSON.parse(n);
            const { intermediate: a, leaf: i } = r;
            return {
                intermediate: {
                    key: o("WABase64").decodeB64(a.key),
                    notAfter: Number(a.notAfter),
                    notBefore: Number(a.notBefore)
                },
                leaf: {
                    key: o("WABase64").decodeB64(i.key),
                    notAfter: Number(i.notAfter),
                    notBefore: Number(i.notBefore)
                }
            };
        } catch (t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Error parsing certificate chain: ",
                ""
            ])), t);
            return null;
        }
    }
    l.parseCertificateChain = s;
}, 98);