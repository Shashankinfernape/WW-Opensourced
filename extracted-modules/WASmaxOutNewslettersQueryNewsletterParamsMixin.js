__d("WASmaxOutNewslettersQueryNewsletterParamsMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersQueryNewsletterParams"
], function(t, n, r, o, a, i, l) {
    function e({ queryNewsletterParamsArgs: t }) {
        const n = o("WASmaxOutNewslettersQueryNewsletterParams").mergeQueryNewsletterParams(o("WASmaxJsx").smax("smax$any", null), t);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeQueryNewsletterParamsMixin = s;
}, 98);