__d("WASmaxInWaffleStateExistsResponseSuccess", [
    "WAResultOrError",
    "WASmaxInWaffleEnums",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "suspended_state");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, e, "npr", o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                npr: n.value
            });
        }
        return n;
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "wf_state");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalChildWithTag(t, "suspended_state", e);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").contentInt(a.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxInWaffleIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                wfStateElementValue: l.value
            }, s.value, {
                suspendedState: i.value
            }));
        }
        return s;
    }
    l.parseStateExistsResponseSuccessSuspendedState = e;
    l.parseStateExistsResponseSuccess = s;
}, 98);