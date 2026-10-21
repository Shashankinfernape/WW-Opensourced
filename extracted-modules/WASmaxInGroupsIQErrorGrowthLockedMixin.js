__d("WASmaxInGroupsIQErrorGrowthLockedMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "growth_locked");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "invite");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "expiration", 0, void 0);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                type: n.value,
                expiration: r.value
            });
        }
        return r;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "error");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(t, "growth_locked", e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "text", "growth-locked");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, t, "code", 436);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                text: a.value,
                code: i.value,
                growthLocked: r.value
            });
        }
        return i;
    }
    l.parseIQErrorGrowthLockedGrowthLocked = e;
    l.parseIQErrorGrowthLockedMixin = s;
}, 98);