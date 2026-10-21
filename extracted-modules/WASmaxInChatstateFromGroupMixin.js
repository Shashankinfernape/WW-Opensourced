__d("WASmaxInChatstateFromGroupMixin", [
    "WAResultOrError",
    "WASmaxInChatstateEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "chatstate");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrGroupJid(e, "from");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").attrJidEnum(e, "participant", o("WASmaxInChatstateEnums").USERJID_USERJID_USERJID);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "participant_pn");
        if (a.success) {
            return o("WAResultOrError").makeResult({
                from: n.value,
                participant: r.value,
                participantPn: a.value
            });
        }
        return a;
    }
    l.parseFromGroupMixin = e;
}, 98);