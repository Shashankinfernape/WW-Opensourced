__d("WASmaxInStatusDeliverStatusEncDualEncMediaMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncMediaTypeMixin",
    "WASmaxInStatusDeliverEncTypeSenderKeyOrIndividualMixinGroup",
    "WASmaxInStatusDeliverEncVersion",
    "WASmaxInStatusDeliverStatusContentTypeMediaMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInStatusDeliverEncMediaTypeMixin").parseEncMediaTypeMixin(e);
        const r = o("WASmaxInStatusDeliverEncVersion").parseEncVersion(e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInStatusDeliverEncTypeSenderKeyOrIndividualMixinGroup").parseEncTypeSenderKeyOrIndividualMixinGroup(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                encMediaTypeMixin: n.success ? n.value : null,
                encVersion: r.value,
                encTypeSenderKeyOrIndividualMixinGroup: a.value
            });
        }
        return a;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "status");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInStatusDeliverStatusContentTypeMediaMixin").parseStatusContentTypeMediaMixin(t);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, {
                enc: a.value
            }));
        }
        return a;
    }
    l.parseStatusEncDualEncMediaEnc = e;
    l.parseStatusEncDualEncMediaMixin = s;
}, 98);