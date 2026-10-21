__d("WASmaxInGroupsIdentityMixin", [
    "WAResultOrError",
    "WASmaxInGroupsIdentityTypes"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsIdentityTypes").parseIdentityTypes(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                identityTypes: t.value
            });
        }
        return t;
    }
    l.parseIdentityMixin = e;
}, 98);