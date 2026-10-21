__d("WASmaxInBlocklistsGuestNameAndDisplayNameMixin", [
    "WAResultOrError",
    "WASmaxInBlocklistsDisplayNameMixin",
    "WASmaxInBlocklistsGuestNameMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInBlocklistsDisplayNameMixin").parseDisplayNameMixin(e);
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInBlocklistsGuestNameMixin").parseGuestNameMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, t.value, n.value));
        }
        return n;
    }
    l.parseGuestNameAndDisplayNameMixin = e;
}, 98);