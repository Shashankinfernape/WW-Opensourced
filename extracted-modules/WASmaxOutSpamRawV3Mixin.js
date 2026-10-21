__d("WASmaxOutSpamRawV3Mixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ rawProtocolV }) {
        const n = o("WASmaxJsx").smax("raw", {
            v: o("WAWap").INT(3),
            protocol_v: o("WAWap").INT(rawProtocolV)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRawV3Mixin = s;
}, 98);