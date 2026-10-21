__d("WASmaxInBlocklistsUpdateBlockListResponseMigratedSuccessWithMismatch", [
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
        const n = o("WASmaxParseJid").attrLidUserJid(e, "jid");
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
        const d = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, a.value, "matched", "false");
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseReference").optionalAttrStringFromReference(n, [
            "item",
            "dhash"
        ]);
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, a.value, "c_dhash", m.value);
        if (!p.success) {
            return p;
        }
        const _ = o("WASmaxParseUtils").attrString(a.value, "dhash");
        if (!_.success) {
            return _;
        }
        const f = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, a.value, "addressing_mode", "lid");
        if (!f.success) {
            return f;
        }
        const g = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "item", 0, 64000, e);
        if (g.success) {
            return o("WAResultOrError").makeResult({
                type: s.value,
                listMatched: d.value,
                hasListCDhash: p.value != null,
                listDhash: _.value,
                listAddressingMode: f.value,
                listItem: g.value
            });
        }
        return g;
    }
    l.parseUpdateBlockListResponseMigratedSuccessWithMismatchListItem = e;
    l.parseUpdateBlockListResponseMigratedSuccessWithMismatch = s;
}, 98);