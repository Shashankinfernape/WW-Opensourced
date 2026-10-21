__d("WASmaxInMdPasskeyRequestOptionsMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "passkey_request_options");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytesRange(e, 1, 4096);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    l.parsePasskeyRequestOptionsMixin = e;
}, 98);