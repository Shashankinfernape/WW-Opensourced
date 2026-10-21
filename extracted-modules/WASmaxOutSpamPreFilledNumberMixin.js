__d("WASmaxOutSpamPreFilledNumberMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("url_number", null));
        return e;
    }
    function s(t) {
        const n = e();
        return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergePreFilledNumberMixin = s;
}, 98);