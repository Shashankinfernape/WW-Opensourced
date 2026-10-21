__d("WASmaxInStatusDeliverStatusEncSingleEncMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncTypeIndividualOrSenderKeyMixinGroup",
    "WASmaxInStatusDeliverEncVersion",
    "WASmaxInStatusDeliverStatusEncContentTypeMixins",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInStatusDeliverEncVersion").parseEncVersion(n.value);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInStatusDeliverEncTypeIndividualOrSenderKeyMixinGroup").parseEncTypeIndividualOrSenderKeyMixinGroup(n.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInStatusDeliverStatusEncContentTypeMixins").parseStatusEncContentTypeMixins(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                encEncVersion: r.value,
                encEncTypeIndividualOrSenderKeyMixinGroup: a.value,
                statusEncContentTypeMixins: i.value
            });
        }
        return i;
    }
    l.parseStatusEncSingleEncMixin = e;
}, 98);