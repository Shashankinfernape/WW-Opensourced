__d("WAWebFormatTemplateButtonReplyMsgText", [
    "WAWebFormatMsgTextUtils"
], function(t, n, r, o, a, i, l) {
    function e({ msg, options }) {
        if (options.unformat !== true) {
            return msg.body ?? "";
        }
        return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(msg, msg.body, options);
    }
    l.default = e;
}, 98);