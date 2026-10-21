__d("WASmaxOutSpamMessagePlaceholderMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", {
            placeholder_type: "call"
        }));
        return e;
    }
    function s(t) {
        const n = e();
        return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeMessagePlaceholderMixin = s;
}, 98);