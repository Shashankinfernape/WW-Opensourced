__d("WASmaxInNewslettersMyAddOnsResponseClientError", [
    "WAResultOrError",
    "WASmaxInNewslettersMyAddonsClientErrors",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInNewslettersMyAddonsClientErrors").parseMyAddonsClientErrors(e, t);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                myAddonsClientErrors: r.value
            });
        }
        return r;
    }
    l.parseMyAddOnsResponseClientError = e;
}, 98);