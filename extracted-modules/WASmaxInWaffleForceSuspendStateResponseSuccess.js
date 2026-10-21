__d("WASmaxInWaffleForceSuspendStateResponseSuccess", [
    "WAResultOrError",
    "WASmaxInWaffleEnums",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "npr");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").contentStringEnum(r.value, o("WASmaxInWaffleEnums").ENUM_FALSE_TRUE);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInWaffleIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                nprElementValue: a.value
            }, i.value));
        }
        return i;
    }
    l.parseForceSuspendStateResponseSuccess = e;
}, 98);