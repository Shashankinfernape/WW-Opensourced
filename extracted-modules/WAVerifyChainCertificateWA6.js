__d("WAVerifyChainCertificateWA6", [
    "WACert.pb",
    "WACryptoUtils",
    "WAHex",
    "WALogger",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSignatures",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    const R = "142375574d0a587166aae71ebe516437c4a28b73e3695c6ce1f7f9545da8ee6b";
    const L = {
        SERIAL: 0,
        ISSUER: "WhatsAppLongTerm1",
        PUBLIC_KEY: o("WASignalKeys").serializeIdentity(new Uint8Array(o("WAHex").parseHex(R)))
    };
    function E(t, n) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "verifyChainCertificateWA6: extract leaf and intermediate certificate"
        ])));
        const r = o("decodeProtobuf").decodeProtobuf(o("WACert.pb").CertChainSpec, t);
        const { intermediate: a, leaf: i } = r;
        if (a == null || i == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: missing leaf and/or intermediate certificate"
            ])));
            return o("WAResultOrError").makeError("missing-certificate");
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "verifying intermediate certificate"
        ])));
        const l = k(a);
        if (!l.success) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: invalid intermediate certificate"
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        if (l.value.issuerSerial !== L.SERIAL) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6 intermediate certificate was not issued by RootCA"
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        if (!I(l.value, L.PUBLIC_KEY)) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: intermediate certificate is poorly signed"
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            "verifying leaf certificate"
        ])));
        const y = k(i);
        if (!y.success) {
            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6: invalid leaf certificate"
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        if (y.value.issuerSerial !== l.value.serial) {
            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6 leaf certificate was not issued by RootCA"
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        const C = o("WASignalKeys").serializeIdentity(new Uint8Array(l.value.key));
        if (I(y.value, C)) {
            if (o("WACryptoUtils").arrayBuffersEqual(y.value.key, n)) {
                return o("WAResultOrError").makeResult({
                    leaf: y.value,
                    intermediate: l.value
                });
            }
            o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "verifyChainCertificateWA6 leafCert.key does not match handshake server.hello.static"
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
            "verifyChainCertificateWA6: leaf certificate is poorly signed"
        ])));
        return o("WAResultOrError").makeError("invalid-certificate");
    }
    function k({ details: t, signature: n }) {
        if (!t) {
            o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "details"'
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        if (!n) {
            o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "signature"'
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        const r = o("decodeProtobuf").decodeProtobuf(o("WACert.pb").CertChain$NoiseCertificate$DetailsSpec, t);
        const { issuerSerial: a, key: i, notAfter: l, notBefore: s, serial: u } = r;
        if (a == null) {
            o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "issuer_serial"'
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        if (u == null) {
            o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "serial"'
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        if (i == null) {
            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                'parseCertificateWA6 certificate is missing "key"'
            ])));
            return o("WAResultOrError").makeError("invalid-certificate");
        }
        const c = o("WASignalOther").ensureSize(new Uint8Array(n), 64);
        return o("WAResultOrError").makeResult({
            serial: u,
            issuerSerial: a,
            key: i,
            notBefore: s,
            notAfter: l,
            details: t,
            signature: c
        });
    }
    function I(e, t) {
        return o("WASignalSignatures").verifyMsgSignalVariant(t, new Uint8Array(e.details), e.signature);
    }
    l.verifyChainCertificateWA6 = E;
    l.parseCertificateWA6 = k;
}, 98);