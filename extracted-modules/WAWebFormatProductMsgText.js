__d("WAWebFormatProductMsgText", [
    "fbt",
    "WAWebFormatMsgTextUtils",
    "WAWebFrontendMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg, options }) {
        const r = [
            o("WAWebFrontendMsgGetters").getText(msg),
            msg.caption,
            msg.footer
        ].filter(Boolean).join(" ");
        if (r.length) {
            if (options.unformat !== true) {
                return r;
            }
            return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(msg, r, options);
        }
        return s._("Product");
    }
    l.default = e;
}, 226);