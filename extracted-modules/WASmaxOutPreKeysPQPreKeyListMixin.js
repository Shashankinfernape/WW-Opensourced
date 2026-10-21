__d("WASmaxOutPreKeysPQPreKeyListMixin", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyIDMixin",
    "WASmaxOutPreKeysPQKeyDataMixin"
], function(t, n, r, o, a, i, l) {
    function e({ keyIDMixinArgs, pQKeyDataMixinArgs, signatureElementValue }) {
        let t;
        const i = (t = o("WASmaxJsx")).smax("key", null, o("WASmaxOutPreKeysKeyIDMixin").mergeKeyIDMixin(t.smax("id", null), keyIDMixinArgs), o("WASmaxOutPreKeysPQKeyDataMixin").mergePQKeyDataMixin(t.smax("value", null), pQKeyDataMixinArgs), t.smax("signature", null, signatureElementValue));
        return i;
    }
    function s({ keyArgs }) {
        const r = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("pq_list", null, o("WASmaxChildren").REPEATED_CHILD(e, keyArgs, 0, 5000)));
        return r;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makePQPreKeyListPqListKey = e;
    l.mergePQPreKeyListMixin = u;
}, 98);