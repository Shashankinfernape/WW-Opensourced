__d("WASmaxOutSpamReportedPushNameMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageReportedPushName }) {
        const n = o("WASmaxJsx").smax("message", {
            reported_push_name: o("WAWap").CUSTOM_STRING(messageReportedPushName)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeReportedPushNameMixin = s;
}, 98);