__d("WAWebCertificateUtils", [
    "JSResourceForInteraction",
    "WAHex",
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        return r("JSResourceForInteraction")("pkijs").__setRef("WAWebCertificateUtils").load();
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("asn1js-2.1.1").__setRef("WAWebCertificateUtils").load();
            return e().fromBER;
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = f(t);
                const a = yield d();
                const i = a(n.buffer);
                const { offset, result } = i;
                if (offset === -1 || result.error != null && result.error !== "") {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[certificate-utils] Failed to parse CRL DER"
                    ]))).sendLogs("certificate-utils-crl-der-parse-error");
                    return null;
                }
                const p = yield c();
                const _ = p.CertificateRevocationList;
                const g = new _({
                    schema: result
                });
                const h = g.revokedCertificates;
                if (h == null || h.length === 0) {
                    return [];
                }
                const y = [];
                for (const C of h){
                    const v = C.userCertificate?.valueBlock?.valueHex;
                    if (v == null) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[certificate-utils] malformed CRL entry, unparseable"
                        ]))).sendLogs("certificate-utils-crl-malformed-entry");
                        return null;
                    }
                    y.push(o("WAHex").toLowerCaseHex(new Uint8Array(v)));
                }
                return y;
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[certificate-utils] Failed to parse CRL binary"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("certificate-utils-crl-parse-error");
                return null;
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        let t = e;
        if (!e.startsWith("-----BEGIN")) {
            t = atob(e);
        }
        if (t.startsWith("-----BEGIN")) {
            const n = t.replace(/-----BEGIN[^-]*-----/g, "").replace(/-----END[^-]*-----/g, "").replace(/\s/g, "");
            for(var r = atob(n), o = new Uint8Array(r.length), a = 0; a < r.length; a++){
                o[a] = r.charCodeAt(a);
            }
            return o;
        }
        const i = new Uint8Array(t.length);
        for(let l = 0; l < t.length; l++){
            i[l] = t.charCodeAt(l);
        }
        return i;
    }
    l.getPkiJs = c;
    l.getAsn1FromBER = d;
    l.parseCrlSerialNumbers = p;
    l.decodePemOrBase64ToDer = f;
}, 98);