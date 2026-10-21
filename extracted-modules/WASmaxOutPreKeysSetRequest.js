__d("WASmaxOutPreKeysSetRequest", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysIdentityKeyOrPQKeyBundleMixinGroup",
    "WASmaxOutPreKeysSetOpDefaultMixin"
], function(t, n, r, o, a, i, l) {
    function e({ setOpDefaultMixinArgs, identityKeyOrPQKeyBundleMixinGroupArgs }) {
        const r = o("WASmaxOutPreKeysIdentityKeyOrPQKeyBundleMixinGroup").mergeIdentityKeyOrPQKeyBundleMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutPreKeysSetOpDefaultMixin").mergeSetOpDefaultMixin, o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(o("WASmaxJsx").smax("iq", {
            type: "set"
        })), setOpDefaultMixinArgs), identityKeyOrPQKeyBundleMixinGroupArgs);
        return r;
    }
    l.makeSetRequest = e;
}, 98);