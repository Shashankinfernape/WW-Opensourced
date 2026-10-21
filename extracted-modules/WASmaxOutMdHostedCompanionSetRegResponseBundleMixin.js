__d("WASmaxOutMdHostedCompanionSetRegResponseBundleMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ deviceIdentityElementValue: t }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("hosted-pair-set", null, o("WASmaxJsx").smax("device-identity", null, t)));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeHostedCompanionSetRegResponseBundleMixin = s;
}, 98);