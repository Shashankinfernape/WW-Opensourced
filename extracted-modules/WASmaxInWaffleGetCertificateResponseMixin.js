__d("WASmaxInWaffleGetCertificateResponseMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "encryption_pem");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                ttl: n.value,
                elementValue: r.value
            });
        }
        return r;
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "signature_pem");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                ttl: n.value,
                elementValue: r.value
            });
        }
        return r;
    }
    function u(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "password_pem");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "ttl", 1, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "key_id", 0, undefined);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").contentBytesRange(e, 1, 4092);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                ttl: n.value,
                keyId: r.value,
                elementValue: a.value
            });
        }
        return a;
    }
    function c(t) {
        const n = o("WASmaxParseUtils").optionalChildWithTag(t, "encryption_pem", e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(t, "signature_pem", s);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(t, "password_pem", u);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrIntRange(t, "timestamp", 1, undefined);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                timestamp: i.value,
                encryptionPem: n.value,
                signaturePem: r.value,
                passwordPem: a.value
            });
        }
        return i;
    }
    l.parseGetCertificateResponseEncryptionPem = e;
    l.parseGetCertificateResponseSignaturePem = s;
    l.parseGetCertificateResponsePasswordPem = u;
    l.parseGetCertificateResponseMixin = c;
}, 98);