__d("WASmaxInStatusDeliverIncomingE2eeStatusRequest", [
    "WAResultOrError",
    "WASmaxInStatusDeliverFromBroadcastOrGroupMixinGroup",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStanzaId(e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInStatusDeliverFromBroadcastOrGroupMixinGroup").parseFromBroadcastOrGroupMixinGroup(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                fromBroadcastOrGroupMixinGroup: r.value
            });
        }
        return r;
    }
    l.parseIncomingE2eeStatusRequest = e;
}, 98);