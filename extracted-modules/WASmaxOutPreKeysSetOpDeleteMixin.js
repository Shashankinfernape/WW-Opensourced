__d("WASmaxOutPreKeysSetOpDeleteMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("op", {
            mode: "delete"
        }));
        return e;
    }
    function s(t) {
        const n = e();
        return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeSetOpDeleteMixin = s;
}, 98);