__d("WASmaxInGroupsSubjectOwnerIdentityMixin", [
    "WAResultOrError",
    "WASmaxInGroupsSubjectOwnerPhoneNumberMixin",
    "WASmaxInGroupsSubjectOwnerUsernameMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsSubjectOwnerPhoneNumberMixin").parseSubjectOwnerPhoneNumberMixin(e);
        const n = o("WASmaxInGroupsSubjectOwnerUsernameMixin").parseSubjectOwnerUsernameMixin(e);
        return o("WAResultOrError").makeResult({
            subjectOwnerPhoneNumberMixin: t.success ? t.value : null,
            subjectOwnerUsernameMixin: n.success ? n.value : null
        });
    }
    l.parseSubjectOwnerIdentityMixin = e;
}, 98);