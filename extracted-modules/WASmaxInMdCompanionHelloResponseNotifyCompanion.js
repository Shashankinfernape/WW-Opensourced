__d("WASmaxInMdCompanionHelloResponseNotifyCompanion", [
    "WAResultOrError",
    "WASmaxInMdIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "link_code_companion_reg");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "link_code_pairing_ref");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "stage", "companion_hello");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").contentBytes(a.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                linkCodeCompanionRegStage: i.value,
                linkCodeCompanionRegLinkCodePairingRefElementValue: l.value
            }, s.value));
        }
        return s;
    }
    l.parseCompanionHelloResponseNotifyCompanion = e;
}, 98);