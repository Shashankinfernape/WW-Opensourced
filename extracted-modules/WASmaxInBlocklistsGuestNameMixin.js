__d("WASmaxInBlocklistsGuestNameMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "guest_name");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                guestName: t.value
            });
        }
        return t;
    }
    l.parseGuestNameMixin = e;
}, 98);