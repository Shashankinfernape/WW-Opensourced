__d("WASmaxOutPreKeysRegistrationIDMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ registrationElementValue: t }) {
        const n = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("registration", null, t));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeRegistrationIDMixin = s;
}, 98);