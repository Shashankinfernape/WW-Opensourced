__d("WAWebFormatQuarantinedMsgText", [
    "fbt",
    "WAWebFrontendMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const n = o("WAWebFrontendMsgGetters").getText(msg);
        if (n != null && n !== "") {
            return n;
        }
        return s._("Attachment blocked by Strict account settings");
    }
    l.default = e;
}, 226);