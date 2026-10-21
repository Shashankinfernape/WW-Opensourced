__d("WAWebX509Utils", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATypedArraysEqual",
    "WAWebCertificateString",
    "WAWebCertificateUtils",
    "asyncToGeneratorRuntime",
    "filterNulls",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = "-----BEGIN CERTIFICATE-----";
    const m = "-----END CERTIFICATE-----";
    const p = `(?:${d})((?:.|
)*?)(?:${m})`;
    const _ = "2.5.4.3";
    function f(t) {
        let n = "";
        try {
            n = atob(t);
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[direct-connection] base64 decoding failed with ",
                ""
            ])), r("getErrorSafe")(t).toString());
        }
        return h(n);
    }
    function g(e) {
        return btoa(y(e));
    }
    function h(e) {
        for(var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++){
            n[r] = e.charCodeAt(r);
        }
        return n.buffer;
    }
    function y(e) {
        return String.fromCharCode(...Array.from(new Uint8Array(e)));
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebCertificateUtils").getPkiJs();
            const r = n.CertificateChainValidationEngine;
            return new r({
                trustedCerts: t,
                certs: e
            });
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return e.flat().reduce((e, n)=>{
            if (e.every((e)=>!r("WATypedArraysEqual")(new Uint8Array(e.tbs), new Uint8Array(n.tbs))) && t.includes(n)) {
                return [].concat(e, [
                    n
                ]);
            }
            return e;
        }, []);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWebDirectConnectionCaBundle").__setRef("WAWebX509Utils").load();
            const t = e.CA_BUNDLE;
            return L(t);
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebCertificateUtils").getPkiJs();
            const n = t.Certificate;
            const a = yield o("WAWebCertificateUtils").getAsn1FromBER();
            return r("filterNulls")(Array.from(e.matchAll(new RegExp(p, "gm")), function([t, i]) {
                const l = a(f(i));
                const u = l.result;
                let c;
                try {
                    c = u.error != null && u.error !== "" ? null : new n({
                        schema: u
                    });
                } catch (e) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[direct-connection] cert chain parse failed ",
                        ""
                    ])), r("getErrorSafe")(e).toString());
                }
                return c;
            }));
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return (yield C(e, t)).verify();
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield C(e, t);
            const a = v((yield (c || (c = n("Promise"))).all(e.map((e)=>r.findIssuer(e, r)))), t);
            if (a.length === 0) {
                const i = x(e[0]);
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[direct-connection] no trusted root certs for ",
                    ""
                ])), i);
                return null;
            }
            return a;
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return e.issuer.typesAndValues.find(({ type })=>type === _)?.value.valueBlock.value;
    }
    function $(e) {
        return o("WAWebCertificateString").stringToCertificateString(e.map((e)=>{
            const t = g(e.toSchema(true).toBER(false)).split(/(.{0,64})/g).filter((e)=>e !== "").join("\n");
            return `${d}
${t}
${m}`;
        }).join("\n"));
    }
    function P() {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebCertificateUtils").getPkiJs();
            const t = e.getEngine;
            return t();
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebCertificateUtils").getPkiJs();
            const n = t.getRandomValues;
            return n(e);
        });
        return w.apply(this, arguments);
    }
    function A(e, t) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield e.getPublicKey({
                algorithm: {
                    algorithm: {
                        name: "RSA-OAEP",
                        hash: {
                            name: "SHA-256"
                        }
                    },
                    usages: [
                        "encrypt"
                    ]
                }
            });
            const r = yield P();
            const o = yield r.subtle.encrypt({
                name: "RSA-OAEP"
            }, n, t);
            return g(o);
        });
        return F.apply(this, arguments);
    }
    l.base64ToArrayBuffer = f;
    l.arrayBufferToBase64 = g;
    l.stringToArrayBuffer = h;
    l.arrayBufferToString = y;
    l.fetchFromCABundle = S;
    l.extractCertificates = L;
    l.validateCertificates = k;
    l.genRootIssuers = T;
    l.encodeToString = $;
    l.getEngine = P;
    l.getRandomValues = M;
    l.encryptWithPublicKey = A;
}, 98);