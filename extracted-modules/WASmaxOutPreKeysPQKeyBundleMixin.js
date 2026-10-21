__d("WASmaxOutPreKeysPQKeyBundleMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyTypeMixin",
    "WASmaxOutPreKeysPQLastResortKeyMixin",
    "WASmaxOutPreKeysPQPreKeyListMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const e_keyTypeMixinArgs = e.keyTypeMixinArgs;
        const n = o("WASmaxMixins").optionalMerge(o("WASmaxOutPreKeysKeyTypeMixin").mergeKeyTypeMixin, o("WASmaxOutPreKeysPQLastResortKeyMixin").mergePQLastResortKeyMixin(o("WASmaxOutPreKeysPQPreKeyListMixin").mergePQPreKeyListMixin(o("WASmaxJsx").smax("iq", null), e), e), e_keyTypeMixinArgs);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePQKeyBundleMixin = s;
}, 98);