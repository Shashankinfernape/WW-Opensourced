__d("WASmaxOutPreKeysPreKeyListMixin", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutPreKeysKeyDataMixin",
    "WASmaxOutPreKeysKeyIDMixin"
], function(t, n, r, o, a, i, l) {
    function e({ keyIDMixinArgs, keyDataMixinArgs }) {
        const r = o("WASmaxJsx").smax("key", null, o("WASmaxOutPreKeysKeyIDMixin").mergeKeyIDMixin(o("WASmaxJsx").smax("id", null), keyIDMixinArgs), o("WASmaxOutPreKeysKeyDataMixin").mergeKeyDataMixin(o("WASmaxJsx").smax("value", null), keyDataMixinArgs));
        return r;
    }
    function s({ keyArgs }) {
        const r = o("WASmaxJsx").smax("smax$any", null, o("WASmaxJsx").smax("list", null, o("WASmaxChildren").REPEATED_CHILD(e, keyArgs, 0, 20000)));
        return r;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makePreKeyListListKey = e;
    l.mergePreKeyListMixin = u;
}, 98);