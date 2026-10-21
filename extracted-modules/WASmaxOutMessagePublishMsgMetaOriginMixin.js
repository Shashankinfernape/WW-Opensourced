__d("WASmaxOutMessagePublishMsgMetaOriginMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ metaOrigin: t }) {
        const n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", {
            origin: o("WAWap").CUSTOM_STRING(t)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMsgMetaOriginMixin = s;
}, 98);