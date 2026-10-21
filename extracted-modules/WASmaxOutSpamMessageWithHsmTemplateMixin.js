__d("WASmaxOutSpamMessageWithHsmTemplateMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ hsmTid }) {
        const n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("hsm", {
            tid: o("WAWap").CUSTOM_STRING(hsmTid)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageWithHsmTemplateMixin = s;
}, 98);