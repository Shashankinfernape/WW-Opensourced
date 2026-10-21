__d("WASmaxInGroupsPhoneNumberMixin", [
    "WAResultOrError",
    "WASmaxParseJid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseJid").attrUserJid(e, "phone_number");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                phoneNumber: t.value
            });
        }
        return t;
    }
    l.parsePhoneNumberMixin = e;
}, 98);