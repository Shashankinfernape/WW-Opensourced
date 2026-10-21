__d("WAWebFormatImageMsgText", [
    "fbt",
    "WAWebFormatMsgTextUtils",
    "WAWebMsgType",
    "WAWebViewOnceState"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg, options }) {
        const options_unformat = options.unformat;
        const a = msg.safe();
        if (a.type === o("WAWebMsgType").MSG_TYPE.IMAGE && a.isViewOnce) {
            if (o("WAWebViewOnceState").isViewed(a)) {
                return s._("Opened");
            }
            return s._("Photo");
        }
        const i = o("WAWebFormatMsgTextUtils").maybeAddFooter(msg.caption, msg);
        if (i != null && i !== "") {
            if (options_unformat !== true) {
                return i;
            }
            return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(msg, i, options);
        }
        return s._("Photo");
    }
    l.default = e;
}, 226);