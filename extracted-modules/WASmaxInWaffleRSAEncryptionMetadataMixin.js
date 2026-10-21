__d("WASmaxInWaffleRSAEncryptionMetadataMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "encrypted_key");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "nonce");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "encrypted_data");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(e, "auth_tag");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "version", "1");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "algorithm", "rsa2048");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").contentBytesRange(t.value, 1, 2048);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 128);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 8192);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").contentBytesRange(a.value, 1, 128);
        if (d.success) {
            return o("WAResultOrError").makeResult({
                version: i.value,
                algorithm: l.value,
                encryptedKeyElementValue: s.value,
                nonceElementValue: u.value,
                encryptedDataElementValue: c.value,
                authTagElementValue: d.value
            });
        }
        return d;
    }
    l.parseRSAEncryptionMetadataMixin = e;
}, 98);