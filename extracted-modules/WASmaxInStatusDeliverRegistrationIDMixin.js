__d("WASmaxInStatusDeliverRegistrationIDMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "registration");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytesRange(t.value, 4, 4);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                registrationElementValue: n.value
            });
        }
        return n;
    }
    l.parseRegistrationIDMixin = e;
}, 98);