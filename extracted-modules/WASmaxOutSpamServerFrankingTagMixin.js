__d("WASmaxOutSpamServerFrankingTagMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ reportingTagElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("franking", null, o("WASmaxJsx").smax("reporting_tag", null, reportingTagElementValue)));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeServerFrankingTagMixin = s;
}, 98);