__d("WASmaxInStatusDeliverEncTypeIndividualMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncHideDecryptionPlaceholderMixin",
    "WASmaxInStatusDeliverEncMediaTypeMixin",
    "WASmaxInStatusDeliverEncPayloadMixin",
    "WASmaxInStatusDeliverEncStateOrSessionTypeMixinGroup",
    "WASmaxInStatusDeliverEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "enc");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStringEnum(e, "type", o("WASmaxInStatusDeliverEnums").ENUM_MSG_PKMSG);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInStatusDeliverEncHideDecryptionPlaceholderMixin").parseEncHideDecryptionPlaceholderMixin(e);
        const a = o("WASmaxInStatusDeliverEncMediaTypeMixin").parseEncMediaTypeMixin(e);
        const i = o("WASmaxInStatusDeliverEncPayloadMixin").parseEncPayloadMixin(e);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInStatusDeliverEncStateOrSessionTypeMixinGroup").parseEncStateOrSessionTypeMixinGroup(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({
            type: n.value,
            encHideDecryptionPlaceholderMixin: r.success ? r.value : null,
            encMediaTypeMixin: a.success ? a.value : null
        }, i.value, {
            encStateOrSessionTypeMixinGroup: l.success ? l.value : null
        }));
    }
    l.parseEncTypeIndividualMixin = e;
}, 98);