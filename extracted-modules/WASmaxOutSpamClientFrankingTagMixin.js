__d("WASmaxOutSpamClientFrankingTagMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ frankingTagElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("franking", null, o("WASmaxJsx").smax("franking_tag", null, frankingTagElementValue)));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeClientFrankingTagMixin = s;
}, 98);