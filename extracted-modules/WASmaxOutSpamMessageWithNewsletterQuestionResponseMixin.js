__d("WASmaxOutSpamMessageWithNewsletterQuestionResponseMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ messageServerId, messageResponseServerId }) {
        const r = o("WASmaxJsx").smax("message", {
            server_id: o("WAWap").INT(messageServerId),
            response_server_id: o("WAWap").CUSTOM_STRING(messageResponseServerId)
        });
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeMessageWithNewsletterQuestionResponseMixin = s;
}, 98);