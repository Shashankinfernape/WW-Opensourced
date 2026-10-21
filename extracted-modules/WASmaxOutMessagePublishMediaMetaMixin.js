__d("WASmaxOutMessagePublishMediaMetaMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ metaContenttype }) {
        const n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", {
            contenttype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, metaContenttype)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMediaMetaMixin = s;
}, 98);