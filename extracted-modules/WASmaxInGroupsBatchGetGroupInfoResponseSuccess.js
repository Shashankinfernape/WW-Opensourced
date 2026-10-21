__d("WASmaxInGroupsBatchGetGroupInfoResponseSuccess", [
    "WAResultOrError",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "group");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(e);
        const r = o("WASmaxInGroupsGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup").parseGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                dedupAttrsMixin: n.success ? n.value : null,
                groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup: r.value
            });
        }
        return r;
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "groups");
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
        const d = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "group", 1, 10000, e);
        if (d.success) {
            return o("WAResultOrError").makeResult({
                type: s.value,
                groupsGroup: d.value
            });
        }
        return d;
    }
    l.parseBatchGetGroupInfoResponseSuccessGroupsGroup = e;
    l.parseBatchGetGroupInfoResponseSuccess = s;
}, 98);