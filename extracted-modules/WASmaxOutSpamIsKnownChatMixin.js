__d("WASmaxOutSpamIsKnownChatMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ spamListIsKnownChat }) {
        const n = o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("spam_list", {
            is_known_chat: o("WAWap").CUSTOM_STRING(spamListIsKnownChat)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeIsKnownChatMixin = s;
}, 98);