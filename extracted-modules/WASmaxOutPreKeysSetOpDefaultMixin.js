__d("WASmaxOutPreKeysSetOpDefaultMixin", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ coexTokenElementValue }) {
        const n = o("WASmaxJsx").smax("coex_token", null, coexTokenElementValue);
        return n;
    }
    function s({ coexTokenArgs, opReason }) {
        const a = o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("op", {
            mode: "set",
            reason: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, opReason)
        }, o("WASmaxChildren").OPTIONAL_CHILD(e, coexTokenArgs)));
        return a;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeSetOpDefaultOpCoexToken = e;
    l.mergeSetOpDefaultMixin = u;
}, 98);