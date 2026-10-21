__d("WASmaxInStatusDeliverEncStateMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStringEnum(e, "state", o("WASmaxInStatusDeliverEnums").ENUM_FALSE_TRUE);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                state: n.value
            });
        }
        return n;
    }
    l.parseEncStateMixin = e;
}, 98);