__d("WASmaxOutMessagePublishMetaPremiumTypeMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ metaPremiumType }) {
        const n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", {
            premium_type: o("WAWap").CUSTOM_STRING(metaPremiumType)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMetaPremiumTypeMixin = s;
}, 98);