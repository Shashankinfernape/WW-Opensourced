__d("WASmaxInGroupsSubjectOwnerPhoneNumberMixin", [
    "WAResultOrError",
    "WASmaxParseJid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseJid").attrUserJid(e, "s_o_pn");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                sOPn: t.value
            });
        }
        return t;
    }
    l.parseSubjectOwnerPhoneNumberMixin = e;
}, 98);