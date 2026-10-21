__d("WASmaxInChatstateFromUserMixin", [
    "WAResultOrError",
    "WASmaxInChatstateEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "chatstate");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrJidEnum(e, "from", o("WASmaxInChatstateEnums").USERJID_USERJID_USERJID_USERJID);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                from: n.value
            });
        }
        return n;
    }
    l.parseFromUserMixin = e;
}, 98);