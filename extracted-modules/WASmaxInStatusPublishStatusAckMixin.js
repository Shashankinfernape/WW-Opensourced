__d("WASmaxInStatusPublishStatusAckMixin", [
    "WAResultOrError",
    "WASmaxInStatusPublishStatusAckEditOrRevokeOrAdminRevokeMixinGroup",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "ack");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "class", "status");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", l.value);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").attrIntRange(e, "t", 1577865600, 4102473600);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxInStatusPublishStatusAckEditOrRevokeOrAdminRevokeMixinGroup").parseStatusAckEditOrRevokeOrAdminRevokeMixinGroup(e);
        return o("WAResultOrError").makeResult({
            class: i.value,
            t: u.value,
            statusAckEditOrRevokeOrAdminRevokeMixinGroup: c.success ? c.value : null
        });
    }
    l.parseStatusAckMixin = e;
}, 98);