__d("WASmaxInMdSetToCompanionRequest", [
    "WAResultOrError",
    "WASmaxInMdBaseIQSetRequestMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ref");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t, "pair-device");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, t, "from", "s.whatsapp.net");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "xmlns", "md");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInMdBaseIQSetRequestMixin").parseBaseIQSetRequestMixin(t);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "ref", 6, 6, e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: a.value,
                xmlns: i.value
            }, l.value, {
                pairDeviceRef: s.value
            }));
        }
        return s;
    }
    l.parseSetToCompanionRequestPairDeviceRef = e;
    l.parseSetToCompanionRequest = s;
}, 98);