__d("WASmaxOutPreKeysFetchKeyBundlesRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutPreKeysClientRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ userJid: t, userReason: n }) {
        const r = o("WASmaxJsx").smax("user", {
            jid: o("WAWap").JID(t),
            reason: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n)
        });
        return r;
    }
    function s({ userArgs: n, hasKeyPqsupportTrue: r, keyContextJid: a }) {
        const i = o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(o("WASmaxJsx").smax("iq", {
            type: "get"
        }, o("WASmaxJsx").smax("key", {
            pqsupport: o("WASmaxAttrs").OPTIONAL_LITERAL("true", r),
            context_jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, a)
        }, o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 100000))));
        return i;
    }
    l.makeFetchKeyBundlesRequestKeyUser = e;
    l.makeFetchKeyBundlesRequest = s;
}, 98);