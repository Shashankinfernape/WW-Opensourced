__d("WASmaxInBlocklistsPnJidMixin", [
    "WAResultOrError",
    "WASmaxParseJid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseJid").attrUserJid(e, "pn_jid");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                pnJid: t.value
            });
        }
        return t;
    }
    l.parsePnJidMixin = e;
}, 98);