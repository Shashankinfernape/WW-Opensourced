__d("WASmaxOutMessagePublishMessageAssociationTypeMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ metaMessageAssociationType: t }) {
        const n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", {
            message_association_type: o("WAWap").CUSTOM_STRING(t)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageAssociationTypeMixin = s;
}, 98);