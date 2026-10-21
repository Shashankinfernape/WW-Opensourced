__d("WAWebFormatLocationMsgText", [
    "fbt",
    "WAWebFormatMsgTextUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg, options }) {
        const options_unformat = options.unformat;
        const a = options_unformat === undefined ? true : options_unformat;
        if (msg.isFromTemplate || msg.isDynamicReplyButtonsMsg) {
            const i = o("WAWebFormatMsgTextUtils").maybeAddFooter(msg.caption, msg);
            if (i != null) {
                if (a) {
                    return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(msg, i, options);
                }
                return i;
            }
            return msg.loc || s._("Location");
        }
        if (msg.isLive) {
            if (msg.comment != null && msg.comment !== "") {
                return msg.comment;
            }
            return s._("Live location");
        }
        return msg.loc || s._("Location");
    }
    l.default = e;
}, 226);