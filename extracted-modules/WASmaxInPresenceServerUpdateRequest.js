__d("WASmaxInPresenceServerUpdateRequest", [
    "WAResultOrError",
    "WASmaxInPresencePresenceUpdates",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "presence");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInPresencePresenceUpdates").parsePresenceUpdates(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                presenceUpdates: n.value
            });
        }
        return n;
    }
    l.parseServerUpdateRequest = e;
}, 98);