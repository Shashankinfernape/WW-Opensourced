__d("WASmaxOutMessagePublishCtwaAttributionMixin", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishClickToWhatsAppAttributionMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxOutMessagePublishClickToWhatsAppAttributionMixin").mergeClickToWhatsAppAttributionMixin(o("WASmaxJsx").smax("ctwa_attribution", null), e);
        return t;
    }
    function s({ ctwaAttributionArgs: n }) {
        const r = o("WASmaxJsx").smax("message", null, o("WASmaxChildren").OPTIONAL_CHILD(e, n));
        return r;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeCtwaAttributionCtwaAttribution = e;
    l.mergeCtwaAttributionMixin = u;
}, 98);