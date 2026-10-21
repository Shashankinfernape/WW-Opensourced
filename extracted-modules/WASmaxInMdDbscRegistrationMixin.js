__d("WASmaxInMdDbscRegistrationMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "dbsc_registration");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    l.parseDbscRegistrationMixin = e;
}, 98);