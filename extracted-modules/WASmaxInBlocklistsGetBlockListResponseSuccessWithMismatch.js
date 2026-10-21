__d("WASmaxInBlocklistsGetBlockListResponseSuccessWithMismatch", [
    "WAResultOrError",
    "WASmaxInBlocklistsDisplayNameMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "item");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrLidUserJid, e, "lid");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInBlocklistsDisplayNameMixin").parseDisplayNameMixin(e);
        return o("WAResultOrError").makeResult({
            jid: n.value,
            lid: r.value,
            displayNameMixin: a.success ? a.value : null
        });
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "list");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(n, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "type", "result");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseReference").attrStringFromReference(n, [
            "id"
        ]);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "id", u.value);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, a.value, "dhash");
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, a.value, "addressing_mode", "pn");
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "item", 0, 64000, e);
        if (p.success) {
            return o("WAResultOrError").makeResult({
                type: s.value,
                listDhash: d.value,
                listAddressingMode: m.value,
                listItem: p.value
            });
        }
        return p;
    }
    l.parseGetBlockListResponseSuccessWithMismatchListItem = e;
    l.parseGetBlockListResponseSuccessWithMismatch = s;
}, 98);