__d("WASmaxOutSpamSMBBroadcastSourceMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ metaBizSource }) {
        const n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", {
            biz_source: o("WAWap").CUSTOM_STRING(metaBizSource)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSMBBroadcastSourceMixin = s;
}, 98);