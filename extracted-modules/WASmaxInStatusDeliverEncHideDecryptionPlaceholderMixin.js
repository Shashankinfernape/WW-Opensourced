__d("WASmaxInStatusDeliverEncHideDecryptionPlaceholderMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "decrypt-fail", "hide");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                decryptFail: n.value
            });
        }
        return n;
    }
    l.parseEncHideDecryptionPlaceholderMixin = e;
}, 98);