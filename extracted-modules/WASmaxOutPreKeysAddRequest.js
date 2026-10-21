__d("WASmaxOutPreKeysAddRequest", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysPQPreKeyListMixin",
    "WASmaxOutPreKeysPreKeyListMixin",
    "WASmaxOutPreKeysSetOpAddMixin"
], function(t, n, r, o, a, i, l) {
    function e({ preKeyListMixinArgs, pQPreKeyListMixinArgs }) {
        const r = o("WASmaxOutPreKeysSetOpAddMixin").mergeSetOpAddMixin(o("WASmaxMixins").optionalMerge(o("WASmaxOutPreKeysPQPreKeyListMixin").mergePQPreKeyListMixin, o("WASmaxMixins").optionalMerge(o("WASmaxOutPreKeysPreKeyListMixin").mergePreKeyListMixin, o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(o("WASmaxJsx").smax("iq", {
            type: "set"
        })), preKeyListMixinArgs), pQPreKeyListMixinArgs));
        return r;
    }
    l.makeAddRequest = e;
}, 98);