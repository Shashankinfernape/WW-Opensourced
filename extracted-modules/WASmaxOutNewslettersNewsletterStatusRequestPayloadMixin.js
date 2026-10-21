__d("WASmaxOutNewslettersNewsletterStatusRequestPayloadMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersStatusDirections",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ statusesCount, statusDirectionsArgs }) {
        const r = o("WASmaxMixins").optionalMerge(o("WASmaxOutNewslettersStatusDirections").mergeStatusDirections, o("WASmaxJsx").smax("statuses", {
            count: o("WAWap").INT(statusesCount)
        }), statusDirectionsArgs);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterStatusRequestPayloadMixin = s;
}, 98);