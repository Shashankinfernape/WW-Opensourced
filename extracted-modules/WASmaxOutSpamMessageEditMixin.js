__d("WASmaxOutSpamMessageEditMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxJsx").smax("message", {
            edit: "1"
        });
        return e;
    }
    function s(t) {
        const n = e();
        return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeMessageEditMixin = s;
}, 98);