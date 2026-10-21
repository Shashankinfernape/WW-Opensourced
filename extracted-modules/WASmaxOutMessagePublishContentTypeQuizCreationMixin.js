__d("WASmaxOutMessagePublishContentTypeQuizCreationMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ metaContenttype }) {
        const n = o("WASmaxJsx").smax("message", {
            type: "poll"
        }, o("WASmaxJsx").smax("meta", {
            polltype: "quiz_creation",
            contenttype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, metaContenttype)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeContentTypeQuizCreationMixin = s;
}, 98);