__d("WASmaxInGroupsIdentityTypes", [
    "WAResultOrError",
    "WASmaxInGroupsPhoneNumberAndUsernameAttMixin",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsPhoneNumberAndUsernameAttMixin").parsePhoneNumberAndUsernameAttMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "PhoneNumberAndUsernameAtt",
                value: t.value
            });
        }
        const n = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "PhoneNumber",
                value: n.value
            });
        }
        const r = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "UsernameAtt",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "PhoneNumberAndUsernameAtt",
            "PhoneNumber",
            "UsernameAtt"
        ], [
            t,
            n,
            r
        ]);
    }
    l.parseIdentityTypes = e;
}, 98);