__d("WASmaxOutMessagePublishContentTypePollVoteMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ metaContenttype: t }) {
        const n = o("WASmaxJsx").smax("message", {
            type: "poll"
        }, o("WASmaxJsx").smax("meta", {
            polltype: "vote",
            contenttype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeContentTypePollVoteMixin = s;
}, 98);