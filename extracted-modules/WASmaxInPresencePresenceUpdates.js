__d("WASmaxInPresencePresenceUpdates", [
    "WAResultOrError",
    "WASmaxInPresenceAvailableMixin",
    "WASmaxInPresenceGroupAvailableMixin",
    "WASmaxInPresenceGroupUnavailableMixin",
    "WASmaxInPresenceLastSeenWithOtherValueMixin",
    "WASmaxInPresenceUserUnavailableMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPresenceGroupAvailableMixin").parseGroupAvailableMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupAvailable",
                value: t.value
            });
        }
        const n = o("WASmaxInPresenceGroupUnavailableMixin").parseGroupUnavailableMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "GroupUnavailable",
                value: n.value
            });
        }
        const r = o("WASmaxInPresenceLastSeenWithOtherValueMixin").parseLastSeenWithOtherValueMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "LastSeenWithOtherValue",
                value: r.value
            });
        }
        const a = o("WASmaxInPresenceUserUnavailableMixin").parseUserUnavailableMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "UserUnavailable",
                value: a.value
            });
        }
        const i = o("WASmaxInPresenceAvailableMixin").parseAvailableMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "Available",
                value: i.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "GroupAvailable",
            "GroupUnavailable",
            "LastSeenWithOtherValue",
            "UserUnavailable",
            "Available"
        ], [
            t,
            n,
            r,
            a,
            i
        ]);
    }
    l.parsePresenceUpdates = e;
}, 98);