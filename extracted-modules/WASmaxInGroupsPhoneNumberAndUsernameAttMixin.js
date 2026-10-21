__d("WASmaxInGroupsPhoneNumberAndUsernameAttMixin", [
    "WAResultOrError",
    "WASmaxInGroupsPhoneNumberMixin",
    "WASmaxInGroupsUsernameAttMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInGroupsPhoneNumberMixin").parsePhoneNumberMixin(e);
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsUsernameAttMixin").parseUsernameAttMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, t.value, n.value));
        }
        return n;
    }
    l.parsePhoneNumberAndUsernameAttMixin = e;
}, 98);