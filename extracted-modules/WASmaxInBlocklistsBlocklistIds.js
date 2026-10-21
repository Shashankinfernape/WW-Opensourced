__d("WASmaxInBlocklistsBlocklistIds", [
    "WAResultOrError",
    "WASmaxInBlocklistsDisplayNameMixin",
    "WASmaxInBlocklistsGuestNameAndDisplayNameMixin",
    "WASmaxInBlocklistsGuestNameMixin",
    "WASmaxInBlocklistsPnJidMixin",
    "WASmaxInBlocklistsUnknownIdentifierMixin",
    "WASmaxInBlocklistsUsernameMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInBlocklistsUsernameMixin").parseUsernameMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "Username",
                value: t.value
            });
        }
        const n = o("WASmaxInBlocklistsPnJidMixin").parsePnJidMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "PnJid",
                value: n.value
            });
        }
        const r = o("WASmaxInBlocklistsGuestNameAndDisplayNameMixin").parseGuestNameAndDisplayNameMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "GuestNameAndDisplayName",
                value: r.value
            });
        }
        const a = o("WASmaxInBlocklistsDisplayNameMixin").parseDisplayNameMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "DisplayName",
                value: a.value
            });
        }
        const i = o("WASmaxInBlocklistsGuestNameMixin").parseGuestNameMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "GuestName",
                value: i.value
            });
        }
        const l = o("WASmaxInBlocklistsUnknownIdentifierMixin").parseUnknownIdentifierMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "UnknownIdentifier",
                value: l.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "Username",
            "PnJid",
            "GuestNameAndDisplayName",
            "DisplayName",
            "GuestName",
            "UnknownIdentifier"
        ], [
            t,
            n,
            r,
            a,
            i,
            l
        ]);
    }
    l.parseBlocklistIds = e;
}, 98);