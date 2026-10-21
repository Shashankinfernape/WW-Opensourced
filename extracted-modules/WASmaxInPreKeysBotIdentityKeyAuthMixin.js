__d("WASmaxInPreKeysBotIdentityKeyAuthMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "cert");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").flattenedChildWithTag(t, "identity_auth");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "signature");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "certs");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrIntRange(n.value, "version", 1, 100);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").contentBytesRange(r.value, 64, 64);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "cert", 1, 2, e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                identityAuthVersion: i.value,
                identityAuthSignatureElementValue: l.value,
                identityAuthCertsCert: s.value
            });
        }
        return s;
    }
    l.parseBotIdentityKeyAuthIdentityAuthCertsCert = e;
    l.parseBotIdentityKeyAuthMixin = s;
}, 98);