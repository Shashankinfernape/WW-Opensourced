__d("WASmaxInStatusDeliverStatusEncDualEncNonMediaMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncVersion",
    "WASmaxInStatusDeliverStatusContentTypeTextOrReactionMixinGroup",
    "WASmaxInStatusDeliverStatusEncSenderType",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInStatusDeliverEncVersion").parseEncVersion(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInStatusDeliverStatusEncSenderType").parseStatusEncSenderType(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                encVersion: n.value,
                statusEncSenderType: r.value
            });
        }
        return r;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "status");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInStatusDeliverStatusContentTypeTextOrReactionMixinGroup").parseStatusContentTypeTextOrReactionMixinGroup(t);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                statusContentTypeTextOrReactionMixinGroup: r.value,
                enc: a.value
            });
        }
        return a;
    }
    l.parseStatusEncDualEncNonMediaEnc = e;
    l.parseStatusEncDualEncNonMediaMixin = s;
}, 98);