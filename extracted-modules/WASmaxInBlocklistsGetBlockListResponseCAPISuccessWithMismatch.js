__d("WASmaxInBlocklistsGetBlockListResponseCAPISuccessWithMismatch", [
    "WAResultOrError",
    "WASmaxInBlocklistsBlocklistIdentifierMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "item");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrLidUserJid, e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "active", "true");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInBlocklistsBlocklistIdentifierMixin").parseBlocklistIdentifierMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                jid: n.value,
                active: r.value
            }, a.value));
        }
        return a;
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
        const m = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, a.value, "addressing_mode", "lid");
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
    l.parseGetBlockListResponseCAPISuccessWithMismatchListItem = e;
    l.parseGetBlockListResponseCAPISuccessWithMismatch = s;
}, 98);