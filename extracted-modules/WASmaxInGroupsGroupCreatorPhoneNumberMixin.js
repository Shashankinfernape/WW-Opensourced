__d("WASmaxInGroupsGroupCreatorPhoneNumberMixin", [
    "WAResultOrError",
    "WASmaxParseJid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseJid").attrUserJid(e, "creator_pn");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                creatorPn: t.value
            });
        }
        return t;
    }
    l.parseGroupCreatorPhoneNumberMixin = e;
}, 98);