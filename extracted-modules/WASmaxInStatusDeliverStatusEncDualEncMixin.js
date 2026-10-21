__d("WASmaxInStatusDeliverStatusEncDualEncMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusEncDualEncStatusEncDualEncNonMediaOrStatusEncDualEncMediaMediaMixinGroup",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInStatusDeliverStatusEncDualEncStatusEncDualEncNonMediaOrStatusEncDualEncMediaMediaMixinGroup").parseStatusEncDualEncStatusEncDualEncNonMediaOrStatusEncDualEncMediaMediaMixinGroup(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                statusEncDualEncStatusEncDualEncNonMediaOrStatusEncDualEncMediaMediaMixinGroup: n.value
            });
        }
        return n;
    }
    l.parseStatusEncDualEncMixin = e;
}, 98);